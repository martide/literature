defmodule Literature.AuthorLiveTest do
  use Literature.ConnCase

  import Phoenix.LiveViewTest
  import Literature.Test.Fixtures

  @create_attrs %{name: "some new name", bio: "some bio", website: "https://example.com"}
  @update_attrs %{name: "some updated name"}
  @invalid_attrs %{name: nil}

  defp create_author(_) do
    publication = publication_fixture()

    author =
      author_fixture(
        publication_id: publication.id,
        bio: "some bio",
        website: "https://example.com"
      )

    %{publication: publication, author: author}
  end

  describe "Index" do
    setup [:create_author]

    test "lists all authors", %{conn: conn, publication: publication, author: author} do
      {:ok, _view, html} =
        live(conn, Routes.literature_dashboard_path(conn, :list_authors, publication.slug))

      assert html =~ "Authors"
      assert html =~ author.name
    end

    test "have author post count", %{conn: conn, publication: publication, author: author} do
      tag = tag_fixture(publication_id: publication.id)

      post_fixture(
        publication_id: publication.id,
        authors_ids: [author.id],
        tags_ids: [tag.id]
      )

      {:ok, view, html} =
        live(conn, Routes.literature_dashboard_path(conn, :list_authors, publication.slug))

      assert html =~ "Posts"

      assert view
             |> element("span[class='text-xs font-semibold mr-2 px-2.5 py-1 rounded-lg']", "1")
             |> has_element?()

      post_fixture(
        title: "second post",
        publication_id: publication.id,
        authors_ids: [author.id],
        tags_ids: [tag.id]
      )

      {:ok, view, _html} =
        live(conn, Routes.literature_dashboard_path(conn, :list_authors, publication.slug))

      assert view
             |> element("span[class='text-xs font-semibold mr-2 px-2.5 py-1 rounded-lg']", "2")
             |> has_element?()
    end

    test "saves new author", %{conn: conn, publication: publication} do
      {:ok, index_live, html} =
        live(conn, Routes.literature_dashboard_path(conn, :list_authors, publication.slug))

      assert html =~ "Authors"

      {:ok, new_live, html} =
        index_live
        |> element("a", "Create new")
        |> render_click()
        |> follow_redirect(
          conn,
          Routes.literature_dashboard_path(conn, :new_author, publication.slug)
        )

      assert html =~ "New Author"

      result =
        new_live
        |> form("#author-form", author: @create_attrs)
        |> render_submit()

      {path, flash} = assert_redirect(new_live)
      assert path == Routes.literature_dashboard_path(conn, :list_authors, publication.slug)
      assert flash["success"] == "Author created successfully"

      {:ok, _, html} = follow_redirect(result, conn, path)
      assert html =~ @create_attrs.name

      assert author = Literature.get_author!(name: @create_attrs.name)
      assert author.publication_id == publication.id
      assert author.bio == @create_attrs.bio
      assert author.website == @create_attrs.website
    end

    test "updates author in listing", %{conn: conn, publication: publication, author: author} do
      {:ok, view, html} =
        live(conn, Routes.literature_dashboard_path(conn, :list_authors, publication.slug))

      assert html =~ "Authors"

      assert view |> element("#edit-#{author.id}") |> render_click() =~ "Edit Author"

      assert_patch(
        view,
        Routes.literature_dashboard_path(conn, :edit_author, publication.slug, author.slug)
      )

      html = render(view)

      assert html =~ "Edit Author"
      assert html =~ author.name
      assert html =~ author.bio
      assert html =~ author.website

      assert view
             |> form("#author-form", author: @invalid_attrs)
             |> render_change() =~ "This field is required"

      result =
        view
        |> form("#author-form", author: @update_attrs)
        |> render_submit()

      {path, flash} = assert_redirect(view)
      assert path == Routes.literature_dashboard_path(conn, :list_authors, publication.slug)
      assert flash["success"] == "Author updated successfully"

      {:ok, _, html} = follow_redirect(result, conn, path)
      assert html =~ @update_attrs.name
      assert author = Literature.get_author!(name: @update_attrs.name)
      assert author.publication_id == publication.id
      assert author.bio == "some bio"
      assert author.website == "https://example.com"
    end

    test "deletes author in listing", %{conn: conn, publication: publication, author: author} do
      {:ok, index_live, _html} =
        live(conn, Routes.literature_dashboard_path(conn, :list_authors, publication.slug))

      assert index_live |> element("#delete-#{author.id}") |> render_click()
      assert index_live |> element("#delete-modal a", "Yes, I'm sure") |> render_click()
      refute has_element?(index_live, "#delete-#{author.id}")
    end
  end
end
