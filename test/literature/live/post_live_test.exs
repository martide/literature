defmodule Literature.PostLiveTest do
  use Literature.ConnCase

  import Phoenix.LiveViewTest
  import Literature.Test.Fixtures

  @create_attrs %{title: "some new title", slug: "some-new-title"}
  @update_attrs %{title: "some updated title", slug: "some-updated-title"}
  @invalid_attrs %{title: nil, slug: nil}

  defp create_post(_) do
    post = post_fixture()
    %{post: post}
  end

  describe "Index" do
    setup [:create_post]

    test "lists all posts", %{conn: conn, post: post} do
      {:ok, _index_live, html} = live(conn, Routes.literature_dashboard_path(conn, :list_posts))

      assert html =~ "List Posts"
      assert html =~ post.title
    end

    test "saves new post", %{conn: conn} do
      {:ok, index_live, _html} = live(conn, Routes.literature_dashboard_path(conn, :new_post))

      assert index_live |> element("a", "Create Post") |> render_click() =~
               "New Post"

      assert_patch(index_live, Routes.literature_dashboard_path(conn, :new_post))

      {:ok, _, html} =
        index_live
        |> form("#post-form", post: @create_attrs)
        |> render_submit()
        |> follow_redirect(conn, Routes.literature_dashboard_path(conn, :list_posts))

      assert html =~ "some title"
    end

    test "updates post in listing", %{conn: conn, post: post} do
      {:ok, index_live, _html} = live(conn, Routes.literature_dashboard_path(conn, :list_posts))

      assert index_live |> element("#edit-#{post.id}") |> render_click() =~
               "Edit Post"

      assert_patch(index_live, Routes.literature_dashboard_path(conn, :edit_post, post))

      assert index_live
             |> form("#post-form", post: @invalid_attrs)
             |> render_change() =~ "This field is required"

      {:ok, _, html} =
        index_live
        |> form("#post-form", post: @update_attrs)
        |> render_submit()
        |> follow_redirect(conn, Routes.literature_dashboard_path(conn, :list_posts))

      assert html =~ "some updated title"
    end

    test "deletes post in listing", %{conn: conn, post: post} do
      {:ok, index_live, _html} = live(conn, Routes.literature_dashboard_path(conn, :list_posts))

      assert index_live |> element("#delete-#{post.id}") |> render_click()
      assert index_live |> element("#delete-modal a", "Yes, I'm sure") |> render_click()
      refute has_element?(index_live, "#delete-#{post.id}")
    end
  end
end
