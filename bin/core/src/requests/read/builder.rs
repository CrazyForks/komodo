use anyhow::Context;
use async_trait::async_trait;
use monitor_types::{
    entities::{builder::Builder, PermissionLevel},
    requests::read::*,
};
use mungos::mongodb::bson::doc;
use resolver_api::Resolve;

use crate::{auth::RequestUser, resource::Resource, state::State};

#[async_trait]
impl Resolve<GetBuilder, RequestUser> for State {
    async fn resolve(
        &self,
        GetBuilder { id }: GetBuilder,
        user: RequestUser,
    ) -> anyhow::Result<Builder> {
        self.get_resource_check_permissions(&id, &user, PermissionLevel::Read)
            .await
    }
}

#[async_trait]
impl Resolve<ListBuilders, RequestUser> for State {
    async fn resolve(
        &self,
        ListBuilders { query }: ListBuilders,
        user: RequestUser,
    ) -> anyhow::Result<Vec<Builder>> {
        self.list_resources_for_user(&user, query).await
    }
}

#[async_trait]
impl Resolve<GetBuildersSummary, RequestUser> for State {
    async fn resolve(
        &self,
        GetBuildersSummary {}: GetBuildersSummary,
        user: RequestUser,
    ) -> anyhow::Result<GetBuildersSummaryResponse> {
        let query = if user.is_admin {
            None
        } else {
            let query = doc! {
                format!("permissions.{}", user.id): { "$in": ["read", "execute", "update"] }
            };
            Some(query)
        };
        let total = self
            .db
            .builders
            .collection
            .count_documents(query, None)
            .await
            .context("failed to count all builder documents")?;
        let res = GetBuildersSummaryResponse {
            total: total as u32,
        };
        Ok(res)
    }
}
