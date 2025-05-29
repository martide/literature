defmodule Literature.RouterTest do
  use Literature.ConnCase

  import Literature.Test.Fixtures

  alias Literature.Test.DynamicPathRouter
  alias Literature.Test.DynamicPathRouter.Helpers, as: DynamicPathRoutes
  alias Literature.Test.Router

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
      paths =
        Router.__routes__()
        |> Enum.filter(&(&1.helper == "literature"))
        |> Enum.map(& &1.path)

      assert Enum.sort(paths) ==
               Enum.sort([
                 "/blog",
                 "/blog/:slug",
                 "/blog/authors",
                 "/blog/tags",
                 "/blog/page/:page",
                 "/blog/feed",
                 "/literature",
                 "/blog/search",
                 "/blog/search/page/:page"
               ])

      assert Routes.literature_path(conn, :index) == "/blog"
      assert Routes.literature_path(conn, :index, 2) == "/blog/page/2"
      assert Routes.literature_path(conn, :authors) == "/blog/authors"
      assert Routes.literature_path(conn, :tags) == "/blog/tags"

      assert Routes.literature_path(conn, :show, "author_or_tag_or_post") ==
               "/blog/author_or_tag_or_post"

      assert Routes.literature_path(conn, :rss) == "/blog/feed"
    end
  end

  test "generates helper only for specified routes", %{conn: conn} do
    paths =
      Router.__routes__()
      |> Enum.filter(&(&1.helper == "with_only"))
      |> Enum.map(& &1.path)

    assert Enum.sort(paths) ==
             Enum.sort([
               "/with-only",
               "/with-only/:slug",
               "/with-only/feed",
               "/with-only/search",
               "/with-only/search/page/:page"
             ])

    assert Routes.with_only_path(conn, :index) == "/with-only"

    assert Routes.with_only_path(conn, :show, "author-or-tag-or-post") ==
             "/with-only/author-or-tag-or-post"

    assert Routes.with_only_path(conn, :rss) == "/with-only/feed"
  end

  test "generates helpers on root", %{conn: conn} do
    paths =
      Router.__routes__()
      |> Enum.filter(&(&1.helper == "on_root"))
      |> Enum.map(& &1.path)

    assert Enum.sort(paths) ==
             Enum.sort([
               "/",
               "/:slug",
               "/authors",
               "/tags",
               "/page/:page",
               "/feed",
               "/search",
               "/search/page/:page"
             ])

    assert Routes.on_root_path(conn, :index) == "/"
    assert Routes.on_root_path(conn, :index, 2) == "/page/2"
    assert Routes.on_root_path(conn, :authors) == "/authors"
    assert Routes.on_root_path(conn, :tags) == "/tags"

    assert Routes.on_root_path(conn, :show, "author_or_tag_or_post") ==
             "/author_or_tag_or_post"

    assert Routes.on_root_path(conn, :rss) == "/feed"
  end

  test "generates helpers with custom_routes for show_tag and show_author", %{conn: conn} do
    paths =
      Router.__routes__()
      |> Enum.filter(&(&1.helper == "custom_routes"))
      |> Enum.map(& &1.path)

    assert Enum.sort(paths) ==
             Enum.sort([
               "/custom-routes",
               "/custom-routes/:slug",
               "/custom-routes/authors",
               "/custom-routes/authors/:author_slug",
               "/custom-routes/authors/:author_slug/page/:page",
               "/custom-routes/tags",
               "/custom-routes/tags/:tag_slug",
               "/custom-routes/tags/:tag_slug/page/:page",
               "/custom-routes/page/:page",
               "/custom-routes/feed",
               "/custom-routes/search",
               "/custom-routes/search/page/:page"
             ])

    assert Routes.custom_routes_path(conn, :tags) == "/custom-routes/tags"

    assert Routes.custom_routes_path(conn, :show_tag, "test") ==
             "/custom-routes/tags/test"

    assert Routes.custom_routes_path(conn, :show_tag, "test", 1) ==
             "/custom-routes/tags/test/page/1"

    assert Routes.custom_routes_path(conn, :authors) == "/custom-routes/authors"

    assert Routes.custom_routes_path(conn, :show_author, "test") ==
             "/custom-routes/authors/test"

    assert Routes.custom_routes_path(conn, :show, "test") ==
             "/custom-routes/test"
  end

  describe "literature_path/2 for dynamic path" do
    test "generates helper for blog pages", %{conn: conn} do
      assert DynamicPathRoutes.literature_path(conn, :index) == "/foo/bar/blog"
      assert DynamicPathRoutes.literature_path(conn, :index, 2) == "/foo/bar/blog/page/2"
      assert DynamicPathRoutes.literature_path(conn, :authors) == "/foo/bar/blog/authors"
      assert DynamicPathRoutes.literature_path(conn, :tags) == "/foo/bar/blog/tags"

      assert DynamicPathRoutes.literature_path(conn, :show, "author_or_tag_or_post") ==
               "/foo/bar/blog/author_or_tag_or_post"

      assert DynamicPathRoutes.literature_path(conn, :rss) == "/foo/bar/blog/feed"
    end
  end

  test "generates helpers on root with dynamic path", %{conn: conn} do
    paths =
      DynamicPathRouter.__routes__()
      |> Enum.filter(&(&1.helper == "on_root"))
      |> Enum.map(& &1.path)

    assert Enum.sort(paths) ==
             Enum.sort([
               "/dynamic-on-root",
               "/dynamic-on-root/:slug",
               "/dynamic-on-root/authors",
               "/dynamic-on-root/tags",
               "/dynamic-on-root/page/:page",
               "/dynamic-on-root/feed",
               "/dynamic-on-root/search",
               "/dynamic-on-root/search/page/:page"
             ])

    assert DynamicPathRoutes.on_root_path(conn, :index) == "/dynamic-on-root"
    assert DynamicPathRoutes.on_root_path(conn, :index, 2) == "/dynamic-on-root/page/2"
    assert DynamicPathRoutes.on_root_path(conn, :authors) == "/dynamic-on-root/authors"
    assert DynamicPathRoutes.on_root_path(conn, :tags) == "/dynamic-on-root/tags"

    assert DynamicPathRoutes.on_root_path(conn, :show, "author_or_tag_or_post") ==
             "/dynamic-on-root/author_or_tag_or_post"

    assert DynamicPathRoutes.on_root_path(conn, :rss) == "/dynamic-on-root/feed"
  end

  describe "literature_api_path/2 for default path" do
    test "generates helper for api routes", %{conn: conn} do
      assert Routes.literature_api_path(conn, :author) == "/api/author"
      assert Routes.literature_api_path(conn, :post) == "/api/post"
      assert Routes.literature_api_path(conn, :tag) == "/api/tag"
    end
  end

  describe "literature_api_path/2 for dynamic path" do
    test "generates helper for api routes", %{conn: conn} do
      assert DynamicPathRoutes.literature_api_path(conn, :author) == "/foo/bar/author"
      assert DynamicPathRoutes.literature_api_path(conn, :post) == "/foo/bar/post"
      assert DynamicPathRoutes.literature_api_path(conn, :tag) == "/foo/bar/tag"
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
               "/literature/#{publication.slug}/posts"

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
               "/literature/#{publication.slug}/tags"

      assert Routes.literature_dashboard_path(conn, :new_tag, publication.slug) ==
               "/literature/#{publication.slug}/tags/new"

      assert Routes.literature_dashboard_path(conn, :edit_tag, publication.slug, "123") ==
               "/literature/#{publication.slug}/tags/123/edit"
    end

    test "generates helper for authors", %{conn: conn, publication: publication} do
      assert Routes.literature_dashboard_path(conn, :list_authors, publication.slug) ==
               "/literature/#{publication.slug}/authors"

      assert Routes.literature_dashboard_path(conn, :new_author, publication.slug) ==
               "/literature/#{publication.slug}/authors/new"

      assert Routes.literature_dashboard_path(conn, :edit_author, publication.slug, "123") ==
               "/literature/#{publication.slug}/authors/123/edit"
    end

    test "generates helper for js/css assets", %{conn: conn} do
      for asset <- [:js, :css] do
        hash = Literature.Assets.current_hash(asset)

        assert Routes.literature_dashboard_path(conn, asset, hash) ==
                 "/literature/#{asset}-#{hash}"
      end
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
               "/foo/bar/#{publication.slug}/posts"

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
               "/foo/bar/#{publication.slug}/tags"

      assert DynamicPathRoutes.literature_dashboard_path(conn, :new_tag, publication.slug) ==
               "/foo/bar/#{publication.slug}/tags/new"

      assert DynamicPathRoutes.literature_dashboard_path(conn, :edit_tag, publication.slug, "123") ==
               "/foo/bar/#{publication.slug}/tags/123/edit"
    end

    test "generates helper for authors", %{conn: conn, publication: publication} do
      assert DynamicPathRoutes.literature_dashboard_path(conn, :list_authors, publication.slug) ==
               "/foo/bar/#{publication.slug}/authors"

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

    test "generates helper for js/css assets", %{conn: conn} do
      for asset <- [:js, :css] do
        hash = Literature.Assets.current_hash(asset)

        assert DynamicPathRoutes.literature_dashboard_path(conn, asset, hash) ==
                 "/foo/bar/#{asset}-#{hash}"
      end
    end
  end
end
