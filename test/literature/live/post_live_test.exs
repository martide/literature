defmodule Literature.PostLiveTest do
  use Literature.ConnCase

  import Phoenix.LiveViewTest
  import Literature.Test.Fixtures
  import Literature.TestHelpers

  @create_attrs %{
    title: "some new title",
    authors_ids: [],
    tags_ids: [],
    locales: %{},
    notes: "Some notes"
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
        tags_ids: [tag.id],
        locales: [
          %{locale: "en", url: "http://example.com/en"},
          %{locale: "de", url: "http://example.com/de"}
        ]
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

      # Add language
      new_live
      |> form("#post-form",
        post: %{"locales_order" => [""]}
      )
      |> render_change()

      new_live
      |> form("#post-form",
        post: %{"locales_order" => [""]}
      )
      |> render_change()

      new_live
      |> form("#post-form",
        post: %{
          @create_attrs
          | authors_ids: [author.id],
            tags_ids: [tag.id],
            locales: %{
              0 => %{locale: "en", url: "https://example.com/en"},
              1 => %{locale: "de", url: "https://example.com/de"}
            },
            notes: "Some blog post notes"
        }
      )
      |> render_submit()

      {path, flash} = assert_redirect(new_live)

      assert path == Routes.literature_dashboard_path(conn, :list_posts, publication.slug)
      assert flash["success"] == "Post created successfully"

      assert post = Literature.get_post!(title: @create_attrs.title)
      assert post.notes == "Some blog post notes"
      assert Enum.find(post.locales, &(&1.locale == "en"))
      assert Enum.find(post.locales, &(&1.locale == "de"))
    end

    test "renders errors", %{conn: conn, publication: publication} do
      {:ok, view, _html} =
        live(conn, Routes.literature_dashboard_path(conn, :new_post, publication.slug))

      view
      |> form("#post-form",
        post: %{}
      )
      |> render_submit()

      assert form_has_error?(view, "post[title]", "This field is required")
      assert form_has_error?(view, "post[slug]", "This field is required")
      assert form_has_error?(view, "post[authors_ids]", "Required at least one author")
      assert form_has_error?(view, "post[tags_ids]", "Required at least one tag")
      refute form_has_error?(view, "post[published_at]", "This field is required")

      # Require published_at if set to published
      view
      |> form("#post-form",
        post: %{is_published: true}
      )
      |> render_submit()

      assert form_has_error?(view, "post[published_at]", "This field is required")
    end

    test "saves new post with html", %{
      conn: conn,
      publication: publication,
      author: author,
      tag: tag
    } do
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

      html = "<p>some html</p>"

      new_live
      |> form("#post-form",
        post: %{@create_attrs | authors_ids: [author.id], tags_ids: [tag.id]}
      )
      |> render_submit(%{post: %{"html" => html}})

      {path, flash} = assert_redirect(new_live)

      assert path == Routes.literature_dashboard_path(conn, :list_posts, publication.slug)
      assert flash["success"] == "Post created successfully"

      {:ok, _view, html} = live(conn, path)
      assert html =~ @create_attrs.title
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

      # Delete locales
      view
      |> form("#post-form",
        post: %{"locales_delete" => ["0"]}
      )
      |> render_change()

      view
      |> form("#post-form",
        post: %{"locales_delete" => ["0"]}
      )
      |> render_change()

      view
      |> form("#post-form", post: Map.merge(@update_attrs, %{notes: "Some updated notes"}))
      |> render_submit()

      {path, flash} = assert_redirect(view)
      assert path == Routes.literature_dashboard_path(conn, :list_posts, publication.slug)
      assert flash["success"] == "Post updated successfully"

      # Will not be able to follow redirect since redirect happens after async result

      assert post = Literature.get_post!(title: @update_attrs.title)
      assert post.notes == "Some updated notes"

      refute Enum.find(post.locales, &(&1.locale == "de"))
      refute Enum.find(post.locales, &(&1.locale == "en"))
    end

    test "updates post in listing with html", %{
      conn: conn,
      publication: publication,
      post: post
    } do
      {:ok, view, html} =
        live(conn, Routes.literature_dashboard_path(conn, :list_posts, publication.slug))

      assert html =~ "Posts"

      assert view |> element("#edit-#{post.id}") |> render_click() =~ "Post Settings"

      assert_patch(
        view,
        Routes.literature_dashboard_path(conn, :edit_post, publication.slug, post.slug)
      )

      html = "<p>some html</p>"

      view
      |> form("#post-form", post: @update_attrs)
      |> render_submit(%{post: %{"html" => html}})

      {path, flash} = assert_redirect(view)

      assert path == Routes.literature_dashboard_path(conn, :list_posts, publication.slug)
      assert flash["success"] == "Post updated successfully"

      assert Literature.get_post!(post.id).html == [html]

      # Will not be able to follow redirect since redirect happens after async result
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
