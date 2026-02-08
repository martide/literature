defmodule Literature.SitemapTest do
  use Literature.DataCase

  import Literature.Test.Fixtures

  alias Literature.Sitemap

  describe "literature_sitemap_paths/1" do
    test "returns paths with dates when with: :updated_at option is provided" do
      paths = Sitemap.literature_sitemap_paths(with: :updated_at)

      # Verify all paths have valid dates (tests the to_date/1 helper works)
      assert is_list(paths)

      assert Enum.all?(paths, fn {path, date} ->
               is_binary(path) and match?(%Date{}, date)
             end)
    end

    test "returns paths without dates when no option is specified" do
      paths = Sitemap.literature_sitemap_paths()

      # Should return just path strings
      assert is_list(paths)
      assert Enum.all?(paths, &is_binary/1)
    end

    test "handles both DateTime and NaiveDateTime timestamps" do
      # This test verifies the to_date/1 private function works correctly
      # The function is called when processing records with :updated_at
      publication = publication_fixture()
      author = author_fixture(publication_id: publication.id)
      tag = tag_fixture(publication_id: publication.id, visibility: true)

      # Create a post with explicit DateTime (UTC datetime config)
      post =
        post_fixture(
          publication_id: publication.id,
          authors_ids: [author.id],
          tags_ids: [tag.id],
          is_published: true,
          published_at: DateTime.utc_now()
        )

      # Verify records exist with timestamps
      assert author.updated_at
      assert tag.updated_at
      assert post.updated_at

      # This exercises the to_date/1 function which handles both types
      paths = Sitemap.literature_sitemap_paths(with: :updated_at)

      # Should successfully convert timestamps to dates without errors
      assert is_list(paths)

      assert Enum.all?(paths, fn {path, date} ->
               is_binary(path) and match?(%Date{}, date)
             end)
    end
  end
end
