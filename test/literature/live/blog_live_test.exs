defmodule Literature.BlogLiveTest do
  use Literature.ConnCase

  import Phoenix.LiveViewTest
  import Literature.Test.Fixtures

  defp create_blog(_) do
    publication = publication_fixture(name: "Blog", description: "Blog description")

    author =
      author_fixture(publication_id: publication.id, name: "Author", bio: "Author description")

    tag = tag_fixture(publication_id: publication.id, name: "Tag", description: "Tag description")

    post =
      post_fixture(
        publication_id: publication.id,
        authors_ids: [author.id],
        tags_ids: [tag.id]
      )

    %{publication: publication, author: author, tag: tag, post: post}
  end

  describe "Index" do
    setup [:create_blog]

    test "lists all blog posts", %{conn: conn, publication: publication, post: post} do
      {:ok, _view, html} = live(conn, Routes.literature_path(conn, :index))

      assert html =~ publication.name
      assert html =~ publication.description
      assert html =~ post.title
    end

    test "lists all blog tags", %{conn: conn, tag: tag} do
      {:ok, _view, html} = live(conn, Routes.literature_path(conn, :tags))

      assert html =~ tag.name
      assert html =~ tag.description
      assert html =~ "1 post"
    end

    test "lists all blog authors", %{conn: conn, author: author} do
      {:ok, _view, html} = live(conn, Routes.literature_path(conn, :authors))

      assert html =~ author.name
      assert html =~ author.bio
      assert html =~ "1 post"
    end

    test "render single tag page", %{conn: conn, tag: tag, post: post} do
      {:ok, _view, html} = live(conn, Routes.literature_path(conn, :show, tag.slug))

      assert html =~ tag.name
      assert html =~ tag.description
      assert html =~ post.title
    end

    test "render single author page", %{conn: conn, author: author, post: post} do
      {:ok, _view, html} = live(conn, Routes.literature_path(conn, :show, author.slug))

      assert html =~ author.name
      assert html =~ author.bio
      assert html =~ post.title
    end

    test "render single post page", %{conn: conn, author: author, tag: tag, post: post} do
      {:ok, _view, html} = live(conn, Routes.literature_path(conn, :show, author.slug))

      assert html =~ post.title
      assert html =~ author.name
      assert html =~ tag.name
    end
  end
end
