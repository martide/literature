defmodule Literature.TagLiveTest do
  use Literature.ConnCase

  import Phoenix.LiveViewTest
  import Literature.Test.Fixtures

  @create_attrs %{name: "some new name", visibility: true}
  @update_attrs %{name: "some updated name"}
  @invalid_attrs %{name: nil}

  defp create_tag(_) do
    publication = publication_fixture()
    tag = tag_fixture(publication_id: publication.id)
    %{publication: publication, tag: tag}
  end

  describe "Index" do
    setup [:create_tag]

    test "lists all tags", %{conn: conn, publication: publication, tag: tag} do
      {:ok, _view, html} =
        live(conn, Routes.literature_dashboard_path(conn, :list_tags, publication.slug))

      assert html =~ "Tags"
      assert html =~ tag.name
    end

    test "have tags count", %{conn: conn, publication: publication, tag: tag} do
      {:ok, _view, html} =
        live(conn, Routes.literature_dashboard_path(conn, :list_tags, publication.slug))

      assert html =~ "Tags"

      assert html =~
               ~s"<span class=\"text-xs font-semibold mr-2 px-2.5 py-1 rounded-lg\">0</span>"

      author = author_fixture(publication_id: publication.id)

      post =
        post_fixture(
          publication_id: publication.id,
          authors_ids: [author.id],
          tags_ids: [tag.id]
        )

      {:ok, _view, html} =
        live(conn, Routes.literature_dashboard_path(conn, :list_tags, publication.slug))

      assert html =~ "Tags"

      assert html =~
               ~s"<span class=\"text-xs font-semibold mr-2 px-2.5 py-1 rounded-lg\">1</span>"
    end

    test "saves new tag", %{conn: conn, publication: publication} do
      {:ok, index_live, html} =
        live(conn, Routes.literature_dashboard_path(conn, :list_tags, publication.slug))

      assert html =~ "Tags"

      {:ok, new_live, html} =
        index_live
        |> element("a", "Create new")
        |> render_click()
        |> follow_redirect(
          conn,
          Routes.literature_dashboard_path(conn, :new_tag, publication.slug)
        )

      assert html =~ "New Tag"

      result =
        new_live
        |> form("#tag-form", tag: @create_attrs)
        |> render_submit()

      {path, flash} = assert_redirect(new_live)
      assert path == Routes.literature_dashboard_path(conn, :list_tags, publication.slug)
      assert flash["success"] == "Tag created successfully"

      {:ok, _, html} = follow_redirect(result, conn, path)
      assert html =~ @create_attrs.name
    end

    test "updates tag in listing", %{conn: conn, publication: publication, tag: tag} do
      {:ok, view, html} =
        live(conn, Routes.literature_dashboard_path(conn, :list_tags, publication.slug))

      assert html =~ "Tags"

      assert view |> element("#edit-#{tag.id}") |> render_click() =~ "Edit Tag"

      assert_patch(
        view,
        Routes.literature_dashboard_path(conn, :edit_tag, publication.slug, tag.slug)
      )

      assert view
             |> form("#tag-form", tag: @invalid_attrs)
             |> render_change() =~ "This field is required"

      result =
        view
        |> form("#tag-form", tag: @update_attrs)
        |> render_submit()

      {path, flash} = assert_redirect(view)
      assert path == Routes.literature_dashboard_path(conn, :list_tags, publication.slug)
      assert flash["success"] == "Tag updated successfully"

      {:ok, _, html} = follow_redirect(result, conn, path)
      assert html =~ @update_attrs.name
    end

    test "deletes tag in listing", %{conn: conn, publication: publication, tag: tag} do
      {:ok, index_live, _html} =
        live(conn, Routes.literature_dashboard_path(conn, :list_tags, publication.slug))

      assert index_live |> element("#delete-#{tag.id}") |> render_click()
      assert index_live |> element("#delete-modal a", "Yes, I'm sure") |> render_click()
      refute has_element?(index_live, "#delete-#{tag.id}")
    end
  end
end
