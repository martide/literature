defmodule Literature.TagTest do
  use Literature.DataCase

  alias Literature.Tag

  describe "fields" do
    has_fields(
      Tag,
      ~w(
        id slug name publication_id description feature_image visibility enable_posts_custom_order
        meta_title meta_description meta_keywords og_image og_title og_description twitter_image twitter_title
        twitter_description
      )a ++ timestamps()
    )

    # Default to :naive_datetime for backwards compatibility
    # Parent apps can configure: config :literature, timestamps_opts: [type: :utc_datetime]
    has_timestamp_type(Tag, :naive_datetime)
  end

  describe "associations" do
    assocs = ~w(publication posts published_posts)a
    has_associations(Tag, assocs)

    belongs_to?(Tag, :publication, via: Literature.Publication)
    many_to_many?(Tag, :posts, join_through: "literature_tags_posts")
    many_to_many?(Tag, :published_posts, join_through: "literature_tags_posts")
  end
end
