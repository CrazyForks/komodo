use anyhow::Context;
use monitor_types::{Build, SystemStats, Update};
use serde::Serialize;
use serde_json::{json, Value};

use crate::MonitorClient;

impl MonitorClient {
    pub async fn list_builds(&self, query: impl Into<Option<Value>>) -> anyhow::Result<Vec<Build>> {
        self.get("/api/build/list", query.into())
            .await
            .context("failed at list builds")
    }

    pub async fn get_build(&self, build_id: &str) -> anyhow::Result<Build> {
        self.get(&format!("/api/build/{build_id}"), Option::<()>::None)
            .await
    }

    pub async fn create_build(&self, name: &str, server_id: &str) -> anyhow::Result<Build> {
        self.post(
            "/api/build/create",
            json!({ "name": name, "server_id": server_id }),
        )
        .await
        .context(format!(
            "failed at creating build with name {name} on server id {server_id}"
        ))
    }

    pub async fn delete_build(&self, id: &str) -> anyhow::Result<Build> {
        self.delete::<(), _>(&format!("/api/build/{id}/delete"), None)
            .await
            .context(format!("failed at deleting build {id}"))
    }

    pub async fn update_build(&self, build: Build) -> anyhow::Result<Build> {
        self.patch("/api/build/update", build)
            .await
            .context("failed at updating build")
    }

    pub async fn build(&self, build_id: &str) -> anyhow::Result<Update> {
        self.post::<(), _>(&format!("/api/build/{build_id}/build"), None)
            .await
            .context(format!("failed at building build {build_id}"))
    }

    pub async fn reclone_build(&self, id: &str) -> anyhow::Result<Update> {
        self.post::<(), _>(&format!("/api/build/{id}/reclone"), None)
            .await
            .context(format!("failed at recloning build {id}"))
    }
}
