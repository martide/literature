defmodule Literature.PostTest do
  use Literature.DataCase

  alias Literature.Post

  describe "fields" do
    has_fields(
      Post,
      ~w(
        id slug title publication_id
        feature_image feature_image_alt feature_image_caption featured published_at
        is_published excerpt editor_json html meta_title meta_description meta_keywords
        og_image og_title og_description twitter_image twitter_title twitter_description
        notes locales
      )a ++ timestamps()
    )
  end

  describe "associations" do
    assocs = ~w(publication authors tags)a
    has_associations(Post, assocs)

    belongs_to?(Post, :publication, via: Literature.Publication)
    many_to_many?(Post, :tags, join_through: "literature_tags_posts")
    many_to_many?(Post, :authors, join_through: "literature_authors_posts")
  end
end
