defmodule Literature.AuthorLiveTest do
  use Literature.ConnCase

  import Phoenix.LiveViewTest
  import Literature.Test.Fixtures

  @create_attrs %{name: "some new name", slug: "some-new-name"}
  @update_attrs %{name: "some updated name", slug: "some-updated-name"}
  @invalid_attrs %{name: nil, slug: nil}

  defp create_author(_) do
    author = author_fixture()
    %{author: author}
  end

  describe "Index" do
    setup [:create_author]

    test "lists all authors", %{conn: conn, author: author} do
      {:ok, _index_live, html} = live(conn, Routes.literature_dashboard_path(conn, :list_authors))

      assert html =~ "List Authors"
      assert html =~ author.name
    end

    test "saves new author", %{conn: conn} do
      {:ok, index_live, _html} = live(conn, Routes.literature_dashboard_path(conn, :new_author))

      assert index_live |> element("a", "Create Author") |> render_click() =~
               "New Author"

      assert_patch(index_live, Routes.literature_dashboard_path(conn, :new_author))

      {:ok, _, html} =
        index_live
        |> form("#author-form", author: @create_attrs)
        |> render_submit()
        |> follow_redirect(conn, Routes.literature_dashboard_path(conn, :list_authors))

      assert html =~ "some name"
    end

    test "updates author in listing", %{conn: conn, author: author} do
      {:ok, index_live, _html} = live(conn, Routes.literature_dashboard_path(conn, :list_authors))

      assert index_live |> element("#edit-#{author.id}") |> render_click() =~
               "Edit Author"

      assert_patch(index_live, Routes.literature_dashboard_path(conn, :edit_author, author))

      assert index_live
             |> form("#author-form", author: @invalid_attrs)
             |> render_change() =~ "This field is required"

      {:ok, _, html} =
        index_live
        |> form("#author-form", author: @update_attrs)
        |> render_submit()
        |> follow_redirect(conn, Routes.literature_dashboard_path(conn, :list_authors))

      assert html =~ "some updated name"
    end

    test "deletes author in listing", %{conn: conn, author: author} do
      {:ok, index_live, _html} = live(conn, Routes.literature_dashboard_path(conn, :list_authors))

      assert index_live |> element("#delete-#{author.id}") |> render_click()
      assert index_live |> element("#delete-modal a", "Yes, I'm sure") |> render_click()
      refute has_element?(index_live, "#delete-#{author.id}")
    end
  end
end
