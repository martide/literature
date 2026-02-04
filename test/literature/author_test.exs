defmodule Literature.AuthorTest do
  use Literature.DataCase

  alias Literature.Author

  describe "fields" do
    has_fields(
      Author,
      ~w(
        id slug name publication_id profile_image cover_image bio website location
        facebook twitter meta_title meta_description meta_keywords
      )a ++ timestamps()
    )

    has_timestamp_type(Author, :utc_datetime)
  end

  describe "associations" do
    assocs = ~w(publication posts published_posts)a
    has_associations(Author, assocs)

    belongs_to?(Author, :publication, via: Literature.Publication)
    many_to_many?(Author, :posts, join_through: "literature_authors_posts")
    many_to_many?(Author, :published_posts, join_through: "literature_authors_posts")
  end
end
