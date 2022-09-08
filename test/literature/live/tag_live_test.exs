defmodule Literature.TagLiveTest do
  use Literature.ConnCase

  import Phoenix.LiveViewTest
  import Literature.Fixtures

  @create_attrs %{name: "some new name", slug: "some-new-name"}
  @update_attrs %{name: "some updated name", slug: "some-updated-name"}
  @invalid_attrs %{name: nil, slug: nil}

  defp create_tag(_) do
    tag = tag_fixture()
    %{tag: tag}
  end

  describe "Index" do
    setup [:create_tag]

    test "lists all tags", %{conn: conn, tag: tag} do
      {:ok, _index_live, html} = live(conn, Routes.literature_dashboard_path(conn, :list_tags))

      assert html =~ "List Tags"
      assert html =~ tag.name
    end

    test "saves new tag", %{conn: conn} do
      {:ok, index_live, _html} = live(conn, Routes.literature_dashboard_path(conn, :new_tag))

      assert index_live |> element("a", "Create Tag") |> render_click() =~
               "New Tag"

      assert_patch(index_live, Routes.literature_dashboard_path(conn, :new_tag))

      {:ok, _, html} =
        index_live
        |> form("#tag-form", tag: @create_attrs)
        |> render_submit()
        |> follow_redirect(conn, Routes.literature_dashboard_path(conn, :list_tags))

      assert html =~ "some name"
    end

    test "updates tag in listing", %{conn: conn, tag: tag} do
      {:ok, index_live, _html} = live(conn, Routes.literature_dashboard_path(conn, :list_tags))

      assert index_live |> element("#edit-#{tag.id}") |> render_click() =~
               "Edit Tag"

      assert_patch(index_live, Routes.literature_dashboard_path(conn, :edit_tag, tag))

      assert index_live
             |> form("#tag-form", tag: @invalid_attrs)
             |> render_change() =~ "This field is required"

      {:ok, _, html} =
        index_live
        |> form("#tag-form", tag: @update_attrs)
        |> render_submit()
        |> follow_redirect(conn, Routes.literature_dashboard_path(conn, :list_tags))

      assert html =~ "some updated name"
    end

    test "deletes tag in listing", %{conn: conn, tag: tag} do
      {:ok, index_live, _html} = live(conn, Routes.literature_dashboard_path(conn, :list_tags))

      assert index_live |> element("#delete-#{tag.id}") |> render_click()
      assert index_live |> element("#delete-modal a", "Yes, I'm sure") |> render_click()
      refute has_element?(index_live, "#delete-#{tag.id}")
    end
  end
end
