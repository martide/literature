defmodule Literature.SortTagPostsLiveTest do
  use Literature.ConnCase

  import Phoenix.LiveViewTest
  import Literature.Test.Fixtures

  setup(_) do
    publication = publication_fixture()
    tag = tag_fixture(publication_id: publication.id)
    {:ok, publication: publication, tag: tag}
  end

  test "Can list and sort tag posts", %{conn: conn, publication: publication, tag: tag} do
    author = author_fixture(publication_id: publication.id)

    post_1 =
      post_fixture(
        title: "Post 1",
        publication_id: publication.id,
        authors_ids: [author.id],
        tags_ids: [tag.id]
      )

    post_2 =
      post_fixture(
        title: "Post 2",
        publication_id: publication.id,
        authors_ids: [author.id],
        tags_ids: [tag.id]
      )

    post_3 =
      post_fixture(
        title: "Post 3",
        publication_id: publication.id,
        authors_ids: [author.id],
        tags_ids: [tag.id]
      )

    {:ok, view, html} =
      live(
        conn,
        Routes.literature_dashboard_path(conn, :sort_tag_posts, publication.slug, tag.slug)
      )

    assert html =~ "Sort Posts"

    view
    |> element("#save-order-btn")
    |> render_hook(:update_order, %{
      data: [post_3.id, post_1.id, post_2.id]
    })

    assert has_element?(view, "div", "Posts order updated successfully")

    [row_1, row_2, row_3] = render_table_rows(view, "#tag-posts-drag-n-drop")

    assert row_1 =~ post_3.id
    assert row_2 =~ post_1.id
    assert row_3 =~ post_2.id

    view
    |> element("#save-order-btn")
    |> render_hook(:update_order, %{
      data: [post_2.id, post_3.id, post_1.id]
    })

    assert has_element?(view, "div", "Posts order updated successfully")

    [row_1, row_2, row_3] = render_table_rows(view, "#tag-posts-drag-n-drop")

    assert row_1 =~ post_2.id
    assert row_2 =~ post_3.id
    assert row_3 =~ post_1.id
  end

  def render_table_rows(view, selector) do
    view
    |> element(selector)
    |> render()
    |> Floki.parse_fragment!()
    |> Floki.find("tr")
    |> Enum.map(&Floki.raw_html/1)
  end
end
