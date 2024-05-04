use std::str::FromStr;

use anyhow::{anyhow, Context};
use async_trait::async_trait;
use monitor_client::{
  api::write::*,
  entities::{
    build::Build,
    builder::Builder,
    monitor_timestamp,
    permission::PermissionLevel,
    to_monitor_name,
    update::{Log, UpdateStatus},
    user::User,
    Operation,
  },
};
use mungos::{
  by_id::update_one_by_id,
  mongodb::bson::{doc, oid::ObjectId, to_document},
};
use resolver_api::Resolve;

use crate::{
  helpers::{
    create_permission, empty_or_only_spaces,
    remove_from_recently_viewed,
    resource::{delete_all_permissions_on_resource, StateResource},
    update::{add_update, make_update, update_update},
  },
  state::{action_states, db_client, State},
};

#[async_trait]
impl Resolve<CreateBuild, User> for State {
  #[instrument(name = "CreateBuild", skip(self, user))]
  async fn resolve(
    &self,
    CreateBuild { name, mut config }: CreateBuild,
    user: User,
  ) -> anyhow::Result<Build> {
    if !user.admin && !user.create_build_permissions {
      return Err(anyhow!(
        "User does not have create build permissions."
      ));
    }
    let name = to_monitor_name(&name);
    if ObjectId::from_str(&name).is_ok() {
      return Err(anyhow!("valid ObjectIds cannot be used as names"));
    }
    if let Some(builder_id) = &config.builder_id {
      let builder = Builder::get_resource_check_permissions(builder_id, &user, PermissionLevel::Read)
        .await
        .context("cannot create build using this builder. user must have at least read permissions on the builder.")?;
      config.builder_id = Some(builder.id)
    }
    let start_ts = monitor_timestamp();
    let build = Build {
      id: Default::default(),
      name,
      updated_at: start_ts,
      description: Default::default(),
      tags: Default::default(),
      config: config.into(),
      info: Default::default(),
    };
    let build_id = db_client()
      .await
      .builds
      .insert_one(build, None)
      .await
      .context("failed to add build to db")?
      .inserted_id
      .as_object_id()
      .context("inserted_id is not ObjectId")?
      .to_string();
    let build = Build::get_resource(&build_id).await?;

    create_permission(&user, &build, PermissionLevel::Write).await;

    let mut update =
      make_update(&build, Operation::CreateBuild, &user);

    update.push_simple_log(
      "create build",
      format!(
        "created build\nid: {}\nname: {}",
        build.id, build.name
      ),
    );

    update.push_simple_log("config", format!("{:#?}", build.config));

    update.finalize();

    add_update(update).await?;

    Ok(build)
  }
}

#[async_trait]
impl Resolve<CopyBuild, User> for State {
  #[instrument(name = "CopyBuild", skip(self, user))]
  async fn resolve(
    &self,
    CopyBuild { name, id }: CopyBuild,
    user: User,
  ) -> anyhow::Result<Build> {
    if !user.admin && !user.create_build_permissions {
      return Err(anyhow!(
        "User does not have create build permissions."
      ));
    }
    let name = to_monitor_name(&name);
    let Build {
      config,
      description,
      tags,
      ..
    } = Build::get_resource_check_permissions(
      &id,
      &user,
      PermissionLevel::Write,
    )
    .await?;
    Builder::get_resource_check_permissions(&config.builder_id, &user, PermissionLevel::Read)
      .await
      .context("cannot create build using this builder. user must have at least read permissions on the builder.")?;
    let start_ts = monitor_timestamp();
    let build = Build {
      id: Default::default(),
      name,
      updated_at: start_ts,
      description,
      tags,
      config,
      info: Default::default(),
    };
    let build_id = db_client()
      .await
      .builds
      .insert_one(build, None)
      .await
      .context("failed to add build to db")?
      .inserted_id
      .as_object_id()
      .context("inserted_id is not ObjectId")?
      .to_string();
    let build = Build::get_resource(&build_id).await?;

    create_permission(&user, &build, PermissionLevel::Write).await;

    let mut update =
      make_update(&build, Operation::CreateBuild, &user);

    update.push_simple_log(
      "create build",
      format!(
        "created build\nid: {}\nname: {}",
        build.id, build.name
      ),
    );
    update.push_simple_log(
      "config",
      serde_json::to_string_pretty(&build)?,
    );

    update.finalize();

    add_update(update).await?;

    Ok(build)
  }
}

#[async_trait]
impl Resolve<DeleteBuild, User> for State {
  #[instrument(name = "DeleteBuild", skip(self, user))]
  async fn resolve(
    &self,
    DeleteBuild { id }: DeleteBuild,
    user: User,
  ) -> anyhow::Result<Build> {
    if action_states()
      .build
      .get(&id)
      .await
      .unwrap_or_default()
      .busy()?
    {
      return Err(anyhow!("build busy"));
    }

    let build = Build::get_resource_check_permissions(
      &id,
      &user,
      PermissionLevel::Write,
    )
    .await?;

    let mut update =
      make_update(&build, Operation::DeleteBuild, &user);
    update.status = UpdateStatus::InProgress;
    update.id = add_update(update.clone()).await?;

    let res = db_client()
      .await
      .builds
      .delete_one(doc! { "_id": ObjectId::from_str(&id)? }, None)
      .await
      .context("failed to delete build from database");

    delete_all_permissions_on_resource(&build).await;

    let log = match res {
      Ok(_) => Log::simple(
        "delete build",
        format!("deleted build {}", build.name),
      ),
      Err(e) => Log::error(
        "delete build",
        format!("failed to delete build\n{e:#?}"),
      ),
    };

    update.logs.push(log);
    update.finalize();
    update_update(update).await?;

    remove_from_recently_viewed(&build).await?;

    Ok(build)
  }
}

#[async_trait]
impl Resolve<UpdateBuild, User> for State {
  #[instrument(name = "UpdateBuild", skip(self, user))]
  async fn resolve(
    &self,
    UpdateBuild { id, mut config }: UpdateBuild,
    user: User,
  ) -> anyhow::Result<Build> {
    if action_states()
      .build
      .get(&id)
      .await
      .unwrap_or_default()
      .busy()?
    {
      return Err(anyhow!("build busy"));
    }

    let build = Build::get_resource_check_permissions(
      &id,
      &user,
      PermissionLevel::Write,
    )
    .await?;

    if let Some(builder_id) = &config.builder_id {
      let builder = Builder::get_resource_check_permissions(builder_id, &user, PermissionLevel::Read)
        .await
        .context("cannot create build using this builder. user must have at least read permissions on the builder.")?;
      config.builder_id = Some(builder.id)
    }

    if let Some(build_args) = &mut config.build_args {
      build_args.retain(|v| {
        !empty_or_only_spaces(&v.variable)
          && !empty_or_only_spaces(&v.value)
      })
    }
    if let Some(extra_args) = &mut config.extra_args {
      extra_args.retain(|v| !empty_or_only_spaces(v))
    }

    let config_doc = to_document(&config)
      .context("failed to serialize config to bson document")?;

    update_one_by_id(
      &db_client().await.builds,
      &build.id,
      mungos::update::Update::FlattenSet(
        doc! { "config": config_doc },
      ),
      None,
    )
    .await
    .context("failed to update build on database")?;

    let mut update =
      make_update(&build, Operation::UpdateBuild, &user);

    update.push_simple_log(
      "build update",
      serde_json::to_string_pretty(&config)
        .context("failed to serialize config to json")?,
    );

    update.finalize();

    add_update(update).await?;

    let build = Build::get_resource(&build.id).await?;
    Ok(build)
  }
}