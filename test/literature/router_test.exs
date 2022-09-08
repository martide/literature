defmodule Literature.RouterTest do
  use ExUnit.Case, async: true

  import Phoenix.ConnTest, only: [build_conn: 0]

  alias Literature.Test.Router.Helpers, as: Routes
  alias Literature.Test.DynamicPathRouter.Helpers, as: DynamicPathRoutes

  test "literature_assets/0 generates helper for literature assets with default path" do
    assert Routes.literature_asset_path(build_conn(), :asset, ["css", "app.css"]) ==
             "/literature/assets/css/app.css"

    assert Routes.literature_asset_path(build_conn(), :asset, ["js", "app.js"]) ==
             "/literature/assets/js/app.js"
  end

  test "literature_assets/1 generates helper for literature assets with dynamic path" do
    assert DynamicPathRoutes.literature_asset_path(build_conn(), :asset, ["css", "app.css"]) ==
             "/path/to/assets/css/app.css"

    assert DynamicPathRoutes.literature_asset_path(build_conn(), :asset, ["js", "app.js"]) ==
             "/path/to/assets/js/app.js"
  end

  describe "literature_dashboard_path/2 for default path" do
    test "generates helper for dashboard" do
      assert Routes.literature_dashboard_path(build_conn(), :root) == "/"
    end

    test "generates helper for posts" do
      assert Routes.literature_dashboard_path(build_conn(), :list_posts) == "/posts"
      assert Routes.literature_dashboard_path(build_conn(), :new_post) == "/posts/new"

      assert Routes.literature_dashboard_path(build_conn(), :edit_post, "123") ==
               "/posts/123/edit"
    end

    test "generates helper for tags" do
      assert Routes.literature_dashboard_path(build_conn(), :list_tags) == "/tags"
      assert Routes.literature_dashboard_path(build_conn(), :new_tag) == "/tags/new"
      assert Routes.literature_dashboard_path(build_conn(), :edit_tag, "123") == "/tags/123/edit"
    end

    test "generates helper for authors" do
      assert Routes.literature_dashboard_path(build_conn(), :list_authors) == "/authors"
      assert Routes.literature_dashboard_path(build_conn(), :new_author) == "/authors/new"

      assert Routes.literature_dashboard_path(build_conn(), :edit_author, "123") ==
               "/authors/123/edit"
    end
  end

  describe "literature_dashboard_path/2 for dynamic path" do
    test "generates helper for dashboard" do
      assert DynamicPathRoutes.literature_dashboard_path(build_conn(), :root) == "/literature"
    end

    test "generates helper for posts" do
      assert DynamicPathRoutes.literature_dashboard_path(build_conn(), :list_posts) ==
               "/literature/posts"

      assert DynamicPathRoutes.literature_dashboard_path(build_conn(), :new_post) ==
               "/literature/posts/new"

      assert DynamicPathRoutes.literature_dashboard_path(build_conn(), :edit_post, "123") ==
               "/literature/posts/123/edit"
    end

    test "generates helper for tags" do
      assert DynamicPathRoutes.literature_dashboard_path(build_conn(), :list_tags) ==
               "/literature/tags"

      assert DynamicPathRoutes.literature_dashboard_path(build_conn(), :new_tag) ==
               "/literature/tags/new"

      assert DynamicPathRoutes.literature_dashboard_path(build_conn(), :edit_tag, "123") ==
               "/literature/tags/123/edit"
    end

    test "generates helper for authors" do
      assert DynamicPathRoutes.literature_dashboard_path(build_conn(), :list_authors) ==
               "/literature/authors"

      assert DynamicPathRoutes.literature_dashboard_path(build_conn(), :new_author) ==
               "/literature/authors/new"

      assert DynamicPathRoutes.literature_dashboard_path(build_conn(), :edit_author, "123") ==
               "/literature/authors/123/edit"
    end
  end
end
