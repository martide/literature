defmodule Literature.PublicationLiveTest do
  use Literature.ConnCase

  import Phoenix.LiveViewTest
  import Literature.Test.Fixtures

  @create_attrs %{name: "some new name"}
  @update_attrs %{name: "some updated name"}
  @invalid_attrs %{name: nil}

  defp create_publication(_) do
    publication = publication_fixture()
    %{publication: publication}
  end

  describe "Index" do
    setup [:create_publication]

    test "lists all publications", %{conn: conn, publication: publication} do
      {:ok, _view, html} = live(conn, Routes.literature_dashboard_path(conn, :list_publications))

      assert html =~ "Dashboard"
      assert html =~ publication.name
    end

    test "saves new publication", %{conn: conn} do
      {:ok, index_live, html} =
        live(conn, Routes.literature_dashboard_path(conn, :list_publications))

      assert html =~ "Dashboard"

      {:ok, new_live, html} =
        index_live
        |> element("a", "New publication")
        |> render_click()
        |> follow_redirect(conn, Routes.literature_dashboard_path(conn, :new_publication))

      assert html =~ "New Publication"

      result =
        new_live
        |> form("#publication-form", publication: @create_attrs)
        |> render_submit()

      {path, flash} = assert_redirect(new_live)
      assert path == Routes.literature_dashboard_path(conn, :list_publications)
      assert flash["success"] == "Publication created successfully"

      {:ok, _, html} = follow_redirect(result, conn, path)
      assert html =~ @create_attrs.name
    end

    test "updates publication in listing", %{conn: conn, publication: publication} do
      {:ok, view, html} = live(conn, Routes.literature_dashboard_path(conn, :list_publications))
      assert html =~ "Dashboard"

      assert view |> element("#edit-#{publication.id}") |> render_click() =~ "Edit Publication"

      assert_patch(
        view,
        Routes.literature_dashboard_path(conn, :edit_publication, publication.slug)
      )

      assert view
             |> form("#publication-form", publication: @invalid_attrs)
             |> render_change() =~ "This field is required"

      result =
        view
        |> form("#publication-form", publication: @update_attrs)
        |> render_submit()

      {path, flash} = assert_redirect(view)
      assert path == Routes.literature_dashboard_path(conn, :list_publications)
      assert flash["success"] == "Publication updated successfully"

      {:ok, _, html} = follow_redirect(result, conn, path)
      assert html =~ @update_attrs.name
    end
  end
end
