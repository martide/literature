defmodule Literature.RedirectLiveTest do
  use Literature.ConnCase

  import Phoenix.LiveViewTest
  import Literature.Test.Fixtures

  @create_attrs %{from: "/from-new", to: "/to", type: 301}
  @update_attrs %{from: "/from-update"}
  @invalid_attrs %{from: nil}

  defp create_redirect(_) do
    publication = publication_fixture()

    redirect =
      @create_attrs
      |> Map.put(:publication_id, publication.id)
      |> Enum.into([])
      |> redirect_fixture()

    %{publication: publication, redirect: redirect}
  end

  describe "Index" do
    setup [:create_redirect]

    test "lists all redirects", %{conn: conn, publication: publication, redirect: redirect} do
      {:ok, _view, html} =
        live(conn, Routes.literature_dashboard_path(conn, :list_redirects, publication.slug))

      assert html =~ "Redirects"
      assert html =~ redirect.from
    end

    test "saves new redirect", %{conn: conn, publication: publication} do
      {:ok, view, html} =
        live(conn, Routes.literature_dashboard_path(conn, :list_redirects, publication.slug))

      assert html =~ "Redirects"

      view
      |> element("button", "Create new")
      |> render_click()

      view
      |> form("#redirect-form", redirect: @create_attrs)
      |> render_submit()

      assert has_element?(view, "td", @create_attrs.from)
      assert has_element?(view, "td", @create_attrs.to)
    end

    test "updates redirect in listing", %{
      conn: conn,
      publication: publication,
      redirect: redirect
    } do
      {:ok, view, html} =
        live(conn, Routes.literature_dashboard_path(conn, :list_redirects, publication.slug))

      assert html =~ "Redirects"

      assert view |> element("#edit-#{redirect.id}") |> render_click() =~ "Edit Redirect"

      assert view
             |> form("#redirect-form", redirect: @invalid_attrs)
             |> render_submit() =~ "This field is required"

      view
      |> form("#redirect-form", redirect: @update_attrs)
      |> render_submit()

      assert has_element?(view, "td", @update_attrs.from)
      refute has_element?(view, "td", redirect.from)
    end

    test "deletes redirect in listing", %{
      conn: conn,
      publication: publication,
      redirect: redirect
    } do
      {:ok, index_live, _html} =
        live(conn, Routes.literature_dashboard_path(conn, :list_redirects, publication.slug))

      assert index_live |> element("#delete-#{redirect.id}") |> render_click()
      assert index_live |> element("#delete-modal a", "Yes, I'm sure") |> render_click()
      refute has_element?(index_live, "#delete-#{redirect.id}")
    end
  end
end
