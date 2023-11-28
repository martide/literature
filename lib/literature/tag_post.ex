defmodule Literature.TagPost do
  @moduledoc """
  Literature TagPost Model
  """
  use Literature.Web, :model

  @primary_key false

  schema "literature_tags_posts" do
    field(:position, :integer)

    belongs_to(:tag, Tag, primary_key: true)
    belongs_to(:post, Post, primary_key: true)
  end
end
