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
        tags_ids: [tag.id],
        html: ["<p>content</p>"]
      )

    %{publication: publication, author: author, tag: tag, post: post}
  end

  describe "Index" do
    setup [:create_blog]

    test "redirects to / when path is ?page=1", %{conn: conn} do
      conn = get(conn, Routes.literature_path(conn, :index, page: 1))
      assert conn.assigns.path_info == ["blog"]
    end

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

    test "renders single tag page", %{conn: conn, tag: tag, post: post} do
      {:ok, _view, html} = live(conn, Routes.literature_path(conn, :show, tag.slug))

      assert html =~ tag.name
      assert html =~ tag.description
      assert html =~ post.title
    end

    test "renders single author page", %{conn: conn, author: author, post: post} do
      {:ok, _view, html} = live(conn, Routes.literature_path(conn, :show, author.slug))

      assert html =~ author.name
      assert html =~ author.bio
      assert html =~ post.title
    end

    test "renders single post page", %{conn: conn, author: author, tag: tag, post: post} do
      {:ok, _view, html} = live(conn, Routes.literature_path(conn, :show, post.slug))

      assert html =~ post.title
      assert html =~ author.name
      assert html =~ tag.name
    end

    test "returns 404 error when page not found", %{conn: conn} do
      assert_raise Literature.PageNotFound, fn ->
        get(conn, Routes.literature_path(conn, :show, "page-not-exists"))
      end
    end

    test "redirects", %{conn: conn, publication: publication} do
      redirect = redirect_fixture(publication_id: publication.id, from: "/", to: "/tags")

      conn = get(conn, Routes.literature_path(conn, :index))
      assert redirected_to(conn, redirect.type) == Routes.literature_path(conn, :tags)

      redirect =
        redirect_fixture(publication_id: publication.id, from: "/some-post", to: "/", type: 302)

      conn = get(conn, Routes.literature_path(conn, :show, "some-post"))
      assert redirected_to(conn, redirect.type) == "/blog/"
    end
  end

  describe "Error view" do
    setup do
      publication = publication_fixture(name: "Error View", description: "Blog description")

      %{publication: publication}
    end

    test "Display 404 page when page not found", %{conn: conn} do
      {:ok, view, _html} = live(conn, Routes.error_view_path(conn, :show, "page-not-exists"))
      html = render(view)

      assert html =~ "Page not found"
      assert html =~ "Sorry, we could not find the page you are looking for."
    end
  end
end
