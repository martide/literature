defmodule Literature.RSSControllerTest do
  use Literature.ConnCase

  import Literature.Test.Fixtures

  test "build default rss feed xml", %{conn: conn} do
    publication = publication_fixture(name: "Blog")
    rss_path = Routes.literature_path(conn, :rss)
    conn = get(conn, rss_path)

    assert response(conn, 200) =~ ~s(<?xml version="1.0" encoding="UTF-8"?>)
    assert response(conn, 200) =~ publication.name
    assert response(conn, 200) =~ publication.rss_author
    assert response(conn, 200) =~ publication.rss_email
    assert response(conn, 200) =~ rss_path
  end

  test "build rss feed xml with existing data", %{conn: conn} do
    publication = publication_fixture(name: "Blog")
    author = author_fixture(publication_id: publication.id)
    tag = tag_fixture(publication_id: publication.id)

    content = "<p>Content</p>"

    published_post =
      post_fixture(
        publication_id: publication.id,
        authors_ids: [author.id],
        tags_ids: [tag.id],
        title: "Published Post",
        excerpt: "Excerpt",
        html: [content]
      )

    published_post_path = Routes.literature_path(conn, :show, published_post.slug)

    draft_post =
      post_fixture(
        publication_id: publication.id,
        authors_ids: [author.id],
        tags_ids: [tag.id],
        title: "Draft Post",
        published_at: nil,
        is_published: false
      )

    draft_post_path = Routes.literature_path(conn, :show, draft_post.slug)

    rss_path = Routes.literature_path(conn, :rss)
    conn = get(conn, rss_path)

    assert response(conn, 200) =~ ~s(<?xml version="1.0" encoding="UTF-8"?>)
    assert response(conn, 200) =~ publication.name
    assert response(conn, 200) =~ publication.rss_author
    assert response(conn, 200) =~ publication.rss_email
    assert response(conn, 200) =~ rss_path
    assert response(conn, 200) =~ author.name

    assert response(conn, 200) =~ published_post_path
    assert response(conn, 200) =~ published_post.title
    assert response(conn, 200) =~ published_post.excerpt
    refute response(conn, 200) =~ content

    refute response(conn, 200) =~ draft_post_path
    refute response(conn, 200) =~ draft_post.title

    # Feed should include full content when rss_is_excerpt_only is false
    Literature.update_publication(publication, %{rss_is_excerpt_only: false})

    conn = get(conn, rss_path)

    assert response(conn, 200) =~ content
  end
end
