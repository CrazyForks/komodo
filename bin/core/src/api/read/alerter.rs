use anyhow::Context;
use komodo_client::{
  api::read::*,
  entities::{
    alerter::{Alerter, AlerterListItem},
    permission::PermissionLevel,
    user::User,
  },
};
use mongo_indexed::Document;
use mungos::mongodb::bson::doc;
use resolver_api::Resolve;

use crate::{
  helpers::query::get_all_tags,
  resource,
  state::{db_client, State},
};

impl Resolve<GetAlerter, User> for State {
  async fn resolve(
    &self,
    GetAlerter { alerter }: GetAlerter,
    user: User,
  ) -> anyhow::Result<Alerter> {
    resource::get_check_permissions::<Alerter>(
      &alerter,
      &user,
      PermissionLevel::Read,
    )
    .await
  }
}

impl Resolve<ListAlerters, User> for State {
  async fn resolve(
    &self,
    ListAlerters { query }: ListAlerters,
    user: User,
  ) -> anyhow::Result<Vec<AlerterListItem>> {
    let all_tags = if query.tags.is_empty() {
      vec![]
    } else {
      get_all_tags(None).await?
    };
    resource::list_for_user::<Alerter>(query, &user, &all_tags).await
  }
}

impl Resolve<ListFullAlerters, User> for State {
  async fn resolve(
    &self,
    ListFullAlerters { query }: ListFullAlerters,
    user: User,
  ) -> anyhow::Result<ListFullAlertersResponse> {
    let all_tags = if query.tags.is_empty() {
      vec![]
    } else {
      get_all_tags(None).await?
    };
    resource::list_full_for_user::<Alerter>(query, &user, &all_tags)
      .await
  }
}

impl Resolve<GetAlertersSummary, User> for State {
  async fn resolve(
    &self,
    GetAlertersSummary {}: GetAlertersSummary,
    user: User,
  ) -> anyhow::Result<GetAlertersSummaryResponse> {
    let query = match resource::get_resource_object_ids_for_user::<
      Alerter,
    >(&user)
    .await?
    {
      Some(ids) => doc! {
        "_id": { "$in": ids }
      },
      None => Document::new(),
    };
    let total = db_client()
      .alerters
      .count_documents(query)
      .await
      .context("failed to count all alerter documents")?;
    let res = GetAlertersSummaryResponse {
      total: total as u32,
    };
    Ok(res)
  }
}
