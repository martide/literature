defmodule Literature.RouterTest do
  use Literature.ConnCase

  import Literature.Test.Fixtures

  alias Literature.Test.DynamicPathRouter.Helpers, as: DynamicPathRoutes

  test "literature_assets/0 generates helper for literature assets with default path", %{
    conn: conn
  } do
    assert Routes.literature_asset_path(conn, :asset, ["css", "app.css"]) ==
             "/blog/assets/css/app.css"

    assert Routes.literature_asset_path(conn, :asset, ["js", "app.js"]) ==
             "/blog/assets/js/app.js"
  end

  test "literature_assets/1 generates helper for literature assets with dynamic path", %{
    conn: conn
  } do
    assert DynamicPathRoutes.literature_asset_path(conn, :asset, ["css", "app.css"]) ==
             "/foo/bar/assets/css/app.css"

    assert DynamicPathRoutes.literature_asset_path(conn, :asset, ["js", "app.js"]) ==
             "/foo/bar/assets/js/app.js"
  end

  describe "literature_path/2 for default path" do
    test "generates helper for blog pages", %{conn: conn} do
      assert Routes.literature_path(conn, :index) == "/blog"
      assert Routes.literature_path(conn, :authors) == "/blog/authors"
      assert Routes.literature_path(conn, :tags) == "/blog/tags"

      assert Routes.literature_path(conn, :show, "author_or_tag_or_post") ==
               "/blog/author_or_tag_or_post"

      assert Routes.literature_path(conn, :rss) == "/blog/rss.xml"
    end
  end

  describe "literature_path/2 for dynamic path" do
    test "generates helper for blog pages", %{conn: conn} do
      assert DynamicPathRoutes.literature_path(conn, :index) == "/foo/bar/blog"
      assert DynamicPathRoutes.literature_path(conn, :authors) == "/foo/bar/blog/authors"
      assert DynamicPathRoutes.literature_path(conn, :tags) == "/foo/bar/blog/tags"

      assert DynamicPathRoutes.literature_path(conn, :show, "author_or_tag_or_post") ==
               "/foo/bar/blog/author_or_tag_or_post"

      assert DynamicPathRoutes.literature_path(conn, :rss) == "/foo/bar/blog/rss.xml"
    end
  end

  describe "literature_dashboard_path/2 for default path" do
    setup do
      %{publication: publication_fixture()}
    end

    test "generates helper for publications", %{conn: conn} do
      assert Routes.literature_dashboard_path(conn, :list_publications) ==
               "/literature/publications"

      assert Routes.literature_dashboard_path(conn, :new_publication) ==
               "/literature/publications/new"

      assert Routes.literature_dashboard_path(conn, :edit_publication, "123") ==
               "/literature/publications/123/edit"
    end

    test "generates helper for posts", %{conn: conn, publication: publication} do
      assert Routes.literature_dashboard_path(conn, :list_posts, publication.slug) ==
               "/literature/#{publication.slug}/posts/page/1"

      assert Routes.literature_dashboard_path(conn, :new_post, publication.slug) ==
               "/literature/#{publication.slug}/posts/new"

      assert Routes.literature_dashboard_path(conn, :edit_post, publication.slug, "123") ==
               "/literature/#{publication.slug}/posts/123/edit"

      assert Routes.literature_dashboard_path(conn, :upload_image, publication.slug, "123", [
               "upload-file"
             ]) ==
               "/literature/#{publication.slug}/posts/123/upload-file"
    end

    test "generates helper for tags", %{conn: conn, publication: publication} do
      assert Routes.literature_dashboard_path(conn, :list_tags, publication.slug) ==
               "/literature/#{publication.slug}/tags/page/1"

      assert Routes.literature_dashboard_path(conn, :new_tag, publication.slug) ==
               "/literature/#{publication.slug}/tags/new"

      assert Routes.literature_dashboard_path(conn, :edit_tag, publication.slug, "123") ==
               "/literature/#{publication.slug}/tags/123/edit"
    end

    test "generates helper for authors", %{conn: conn, publication: publication} do
      assert Routes.literature_dashboard_path(conn, :list_authors, publication.slug) ==
               "/literature/#{publication.slug}/authors/page/1"

      assert Routes.literature_dashboard_path(conn, :new_author, publication.slug) ==
               "/literature/#{publication.slug}/authors/new"

      assert Routes.literature_dashboard_path(conn, :edit_author, publication.slug, "123") ==
               "/literature/#{publication.slug}/authors/123/edit"
    end
  end

  describe "literature_dashboard_path/2 for dynamic path" do
    setup do
      %{publication: publication_fixture()}
    end

    test "generates helper for publications", %{conn: conn} do
      assert DynamicPathRoutes.literature_dashboard_path(conn, :list_publications) ==
               "/foo/bar/publications"

      assert DynamicPathRoutes.literature_dashboard_path(conn, :new_publication) ==
               "/foo/bar/publications/new"

      assert DynamicPathRoutes.literature_dashboard_path(conn, :edit_publication, "123") ==
               "/foo/bar/publications/123/edit"
    end

    test "generates helper for posts", %{conn: conn, publication: publication} do
      assert DynamicPathRoutes.literature_dashboard_path(conn, :list_posts, publication.slug) ==
               "/foo/bar/#{publication.slug}/posts/page/1"

      assert DynamicPathRoutes.literature_dashboard_path(conn, :new_post, publication.slug) ==
               "/foo/bar/#{publication.slug}/posts/new"

      assert DynamicPathRoutes.literature_dashboard_path(
               conn,
               :edit_post,
               publication.slug,
               "123"
             ) ==
               "/foo/bar/#{publication.slug}/posts/123/edit"

      assert DynamicPathRoutes.literature_dashboard_path(
               conn,
               :upload_image,
               publication.slug,
               "123",
               ["upload-file"]
             ) ==
               "/foo/bar/#{publication.slug}/posts/123/upload-file"
    end

    test "generates helper for tags", %{conn: conn, publication: publication} do
      assert DynamicPathRoutes.literature_dashboard_path(conn, :list_tags, publication.slug) ==
               "/foo/bar/#{publication.slug}/tags/page/1"

      assert DynamicPathRoutes.literature_dashboard_path(conn, :new_tag, publication.slug) ==
               "/foo/bar/#{publication.slug}/tags/new"

      assert DynamicPathRoutes.literature_dashboard_path(conn, :edit_tag, publication.slug, "123") ==
               "/foo/bar/#{publication.slug}/tags/123/edit"
    end

    test "generates helper for authors", %{conn: conn, publication: publication} do
      assert DynamicPathRoutes.literature_dashboard_path(conn, :list_authors, publication.slug) ==
               "/foo/bar/#{publication.slug}/authors/page/1"

      assert DynamicPathRoutes.literature_dashboard_path(conn, :new_author, publication.slug) ==
               "/foo/bar/#{publication.slug}/authors/new"

      assert DynamicPathRoutes.literature_dashboard_path(
               conn,
               :edit_author,
               publication.slug,
               "123"
             ) ==
               "/foo/bar/#{publication.slug}/authors/123/edit"
    end
  end
end
