use derive_empty_traits::EmptyTraits;
use resolver_api::derive::Request;
use serde::{Deserialize, Serialize};
use typeshare::typeshare;

use crate::entities::{NoData, ResourceTarget};

use super::KomodoWriteRequest;

/// Update a resources description.
/// Response: [NoData].
#[typeshare]
#[derive(
  Serialize, Deserialize, Debug, Clone, Request, EmptyTraits,
)]
#[empty_traits(KomodoWriteRequest)]
#[response(UpdateDescriptionResponse)]
pub struct UpdateDescription {
  /// The target resource to set description for.
  pub target: ResourceTarget,
  /// The new description.
  pub description: String,
}

#[typeshare]
pub type UpdateDescriptionResponse = NoData;