defmodule Literature.PostLiveTest do
  use Literature.ConnCase

  import Phoenix.LiveViewTest
  import Literature.Test.Fixtures

  @create_attrs %{
    title: "some new title",
    authors_ids: [],
    tags_ids: []
  }

  @update_attrs %{title: "some updated title"}

  defp create_post(_) do
    publication = publication_fixture()
    author = author_fixture(publication_id: publication.id)
    tag = tag_fixture(publication_id: publication.id)

    post =
      post_fixture(
        publication_id: publication.id,
        authors_ids: [author.id],
        tags_ids: [tag.id]
      )

    %{publication: publication, author: author, tag: tag, post: post}
  end

  describe "Index" do
    setup [:create_post]

    test "lists all posts", %{conn: conn, publication: publication, post: post} do
      {:ok, _view, html} =
        live(conn, Routes.literature_dashboard_path(conn, :list_posts, publication.slug))

      assert html =~ "Posts"
      assert html =~ post.title
    end

    test "saves new post", %{conn: conn, publication: publication, author: author, tag: tag} do
      {:ok, index_live, html} =
        live(conn, Routes.literature_dashboard_path(conn, :list_posts, publication.slug))

      assert html =~ "Posts"

      {:ok, new_live, html} =
        index_live
        |> element("a", "Create new")
        |> render_click()
        |> follow_redirect(
          conn,
          Routes.literature_dashboard_path(conn, :new_post, publication.slug)
        )

      assert html =~ "New Post"

      new_live
      |> form("#post-form",
        post: %{@create_attrs | authors_ids: [author.id], tags_ids: [tag.id]}
      )
      |> render_submit()

      {path, flash} = assert_redirect(new_live)

      assert path == Routes.literature_dashboard_path(conn, :list_posts, publication.slug)
      assert flash["success"] == "Post created successfully"
    end

    test "updates post in listing", %{conn: conn, publication: publication, post: post} do
      {:ok, view, html} =
        live(conn, Routes.literature_dashboard_path(conn, :list_posts, publication.slug))

      assert html =~ "Posts"

      assert view |> element("#edit-#{post.id}") |> render_click() =~ "Post Settings"

      assert_patch(
        view,
        Routes.literature_dashboard_path(conn, :edit_post, publication.slug, post.slug)
      )

      result =
        view
        |> form("#post-form", post: @update_attrs)
        |> render_submit()

      {path, flash} = assert_redirect(view)
      assert path == Routes.literature_dashboard_path(conn, :list_posts, publication.slug)
      assert flash["success"] == "Post updated successfully"

      {:ok, _, html} = follow_redirect(result, conn, path)
      assert html =~ @update_attrs.title
    end

    test "deletes post in listing", %{conn: conn, publication: publication, post: post} do
      {:ok, index_live, _html} =
        live(conn, Routes.literature_dashboard_path(conn, :list_posts, publication.slug))

      assert index_live |> element("#delete-#{post.id}") |> render_click()
      assert index_live |> element("#delete-modal a", "Yes, I'm sure") |> render_click()
      refute has_element?(index_live, "#delete-#{post.id}")
    end
  end
end
