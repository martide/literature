defmodule Literature.TagLiveTest do
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

    post_fixture(
      publication_id: publication.id,
      authors_ids: [author.id],
      tags_ids: [tag.id]
    )

    {:ok, _view, html} =
      live(
        conn,
        Routes.literature_dashboard_path(conn, :sort_tag_posts, publication.slug, tag.slug)
      )

    assert html =~ "Sort Posts"
  end
end
