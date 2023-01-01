use axum::{
    body::Body, extract::Path, http::Request, middleware, routing::get, Extension, Json, Router,
};
use helpers::handle_anyhow_error;
use mungos::Deserialize;
use types::User;

use crate::{
    auth::{auth_request, JwtExtension},
    state::StateExtension,
};

pub mod build;
pub mod deployment;
pub mod group;
pub mod permissions;
pub mod procedure;
pub mod secret;
pub mod server;
pub mod update;

pub fn router() -> Router {
    Router::new()
        .route(
            "/user",
            get(|jwt, req| async { get_user(jwt, req).await.map_err(handle_anyhow_error) }),
        )
        .nest(
            "/",
            Router::new()
                .route(
                    "/username/:id",
                    get(|state, user_id| async {
                        get_username(state, user_id)
                            .await
                            .map_err(handle_anyhow_error)
                    }),
                )
                .nest("/build", build::router())
                .nest("/deployment", deployment::router())
                .nest("/server", server::router())
                .nest("/procedure", procedure::router())
                .nest("/group", group::router())
                .nest("/update", update::router())
                .nest("/permissions", permissions::router())
                .nest("/secret", secret::router())
                .layer(middleware::from_fn(auth_request)),
        )
}

async fn get_user(Extension(jwt): JwtExtension, req: Request<Body>) -> anyhow::Result<Json<User>> {
    let mut user = jwt.authenticate(&req).await?;
    user.password = None;
    for secret in &mut user.secrets {
        secret.hash = String::new();
    }
    Ok(Json(user))
}

#[derive(Deserialize)]
struct UserId {
    id: String,
}

async fn get_username(
    state: StateExtension,
    Path(UserId { id }): Path<UserId>,
) -> anyhow::Result<String> {
    let user = state.db.get_user(&id).await?;
    Ok(user.username)
}
