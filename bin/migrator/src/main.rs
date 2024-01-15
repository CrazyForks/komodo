#![allow(unused)]
#[macro_use]
extern crate tracing;

use crate::state::State;

mod legacy;
mod migrate;
mod state;

#[tokio::main]
async fn main() -> anyhow::Result<()> {
  logger::init(tracing::Level::INFO);

  info!("starting migrator");

  let state = State::load().await?;

  state.migrate_all().await?;

  Ok(())
}
