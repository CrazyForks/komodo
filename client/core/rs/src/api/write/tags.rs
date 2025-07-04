use derive_empty_traits::EmptyTraits;
use resolver_api::Resolve;
use serde::{Deserialize, Serialize};
use typeshare::typeshare;

use crate::entities::tag::{Tag, TagColor};

use super::KomodoWriteRequest;

//

/// Create a tag. Response: [Tag].
#[typeshare]
#[derive(
  Serialize, Deserialize, Debug, Clone, Resolve, EmptyTraits,
)]
#[empty_traits(KomodoWriteRequest)]
#[response(Tag)]
#[error(serror::Error)]
pub struct CreateTag {
  /// The name of the tag.
  pub name: String,
}

//

/// Delete a tag, and return the deleted tag. Response: [Tag].
///
/// Note. Will also remove this tag from all attached resources.
#[typeshare]
#[derive(
  Serialize, Deserialize, Debug, Clone, Resolve, EmptyTraits,
)]
#[empty_traits(KomodoWriteRequest)]
#[response(Tag)]
#[error(serror::Error)]
pub struct DeleteTag {
  /// The id of the tag to delete.
  pub id: String,
}

//

/// Rename a tag at id. Response: [Tag].
#[typeshare]
#[derive(
  Serialize, Deserialize, Debug, Clone, Resolve, EmptyTraits,
)]
#[empty_traits(KomodoWriteRequest)]
#[response(Tag)]
#[error(serror::Error)]
pub struct RenameTag {
  /// The id of the tag to rename.
  pub id: String,
  /// The new name of the tag.
  pub name: String,
}

/// Update color for tag. Response: [Tag].
#[typeshare]
#[derive(
  Serialize, Deserialize, Debug, Clone, Resolve, EmptyTraits,
)]
#[empty_traits(KomodoWriteRequest)]
#[response(Tag)]
#[error(serror::Error)]
pub struct UpdateTagColor {
  /// The name or id of the tag to update.
  pub tag: String,
  /// The new color for the tag.
  pub color: TagColor,
}
