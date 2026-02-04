defmodule Literature.PublicationTest do
  use Literature.DataCase

  alias Literature.Publication

  describe "fields" do
    has_fields(
      Publication,
      ~w(
        id slug name description meta_title meta_description meta_keywords og_image
        og_title og_description twitter_image twitter_title twitter_description locale
        ex_default_locale rss_url rss_author rss_email rss_is_excerpt_only update_url
      )a ++ timestamps()
    )

    has_timestamp_type(Publication, :utc_datetime)
  end

  describe "associations" do
    assocs = ~w(posts authors tags public_tags published_posts redirects)a
    has_associations(Publication, assocs)

    has_many?(Publication, :posts, via: Literature.Post)
    has_many?(Publication, :published_posts, via: Literature.Post)
    has_many?(Publication, :authors, via: Literature.Author)
    has_many?(Publication, :tags, via: Literature.Tag)
    has_many?(Publication, :public_tags, via: Literature.Tag)
    has_many?(Publication, :redirects, via: Literature.Redirect)
  end
end
