defmodule Literature.BlogLiveTest do
  use Literature.ConnCase

  import Floki, only: [parse_document!: 1, find: 2]
  import Literature.Test.Fixtures
  import Phoenix.LiveViewTest

  defp create_blog(_) do
    publication =
      publication_fixture(
        name: "Blog",
        description: "Blog description",
        locale: "en",
        ex_default_locale: "en"
      )

    author =
      author_fixture(publication_id: publication.id, name: "Author", bio: "Author description")

    tag = tag_fixture(publication_id: publication.id, name: "Tag", description: "Tag description")

    post =
      post_fixture(
        publication_id: publication.id,
        authors_ids: [author.id],
        tags_ids: [tag.id],
        html: ["<p>content</p>"],
        locales: [
          %{locale: "en", url: "http://example.com/en"},
          %{locale: "de", url: "http://example.com/de"}
        ]
      )

    %{publication: publication, author: author, tag: tag, post: post}
  end

  describe "Index" do
    setup [:create_blog]

    test "redirects to / when path is /page/1", %{conn: conn} do
      assert {_, {:live_redirect, %{to: to}}} =
               live(conn, Routes.literature_path(conn, :index, 1))

      assert to == "/blog"
    end

    test "lists all blog posts", %{conn: conn, publication: publication, post: post} do
      {:ok, _view, html} = live(conn, Routes.literature_path(conn, :index))

      assert html =~ publication.name
      assert html =~ publication.description
      assert html =~ post.title
    end

    test "lists blog posts page 2", %{
      conn: conn,
      publication: publication,
      tag: tag,
      author: author
    } do
      for i <- 1..20 do
        post_fixture(
          title: "Post #{i}",
          publication_id: publication.id,
          authors_ids: [author.id],
          tags_ids: [tag.id]
        )
      end

      assert {:ok, _view, html} = live(conn, Routes.literature_path(conn, :index, 2))

      prev_url = @endpoint.url() <> Routes.literature_path(conn, :index)
      next_url = @endpoint.url() <> Routes.literature_path(conn, :index, 3)

      assert get_element(
               html,
               "link[href='#{prev_url}'][rel='prev']"
             )

      assert get_element(
               html,
               "link[href='#{next_url}'][rel='next']"
             )
    end

    test "returns 404 error when exceeds total pages", %{conn: conn} do
      assert_raise Literature.PageNotFound, fn ->
        get(conn, Routes.literature_path(conn, :index, 2))
      end
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

    test "publication language tags", %{conn: conn} do
      {:ok, _view, html} = live(conn, Routes.literature_path(conn, :index))

      current_url = @endpoint.url() <> Routes.literature_path(conn, :index)

      assert get_element(
               html,
               "link[href='#{current_url}'][hreflang='en'][rel='alternate']"
             )

      assert get_element(
               html,
               "link[href='#{current_url}'][hreflang='x-default'][rel='alternate']"
             )
    end

    test "post language tags", %{conn: conn, post: post} do
      {:ok, _view, html} = live(conn, Routes.literature_path(conn, :show, post.slug))

      current_url = @endpoint.url() <> Routes.literature_path(conn, :show, post.slug)

      assert get_element(
               html,
               "link[href='#{current_url}'][hreflang='en'][rel='alternate']"
             )

      assert get_element(
               html,
               "link[href='#{current_url}'][hreflang='x-default'][rel='alternate']"
             )

      for locale <- post.locales do
        assert get_element(
                 html,
                 "[href='#{locale.url}'][hreflang='#{locale.locale}'][rel='alternate']"
               )
      end
    end

    test "post language tags only renders equal to x-default", %{
      conn: conn,
      publication: publication,
      post: post
    } do
      # Update x-default to 'de' and then 'en' tag should not be shown
      Literature.update_publication(publication, %{ex_default_locale: "de"})

      path = Routes.literature_path(conn, :show, post.slug)
      {:ok, _view, html} = live(conn, path)

      current_url = @endpoint.url() <> path

      assert get_element(
               html,
               "link[href='#{current_url}'][hreflang='en'][rel='alternate']"
             )

      assert get_element(
               html,
               "link[href='#{current_url}'][hreflang='x-default'][rel='alternate']"
             )

      assert get_element(
               html,
               "link[href='http://example.com/de'][hreflang='de'][rel='alternate']"
             )

      refute get_element(
               html,
               "link[href='http://example.com/en'][hreflang='en'][rel='alternate']"
             )
    end
  end

  describe "On root routes" do
    setup do
      publication =
        publication_fixture(
          name: "On root",
          description: "On root description"
        )

      author =
        author_fixture(publication_id: publication.id, name: "Author", bio: "Author description")

      tag =
        tag_fixture(publication_id: publication.id, name: "Tag", description: "Tag description")

      post =
        post_fixture(
          publication_id: publication.id,
          authors_ids: [author.id],
          tags_ids: [tag.id],
          html: ["<p>content</p>"],
          locales: [
            %{locale: "en", url: "http://example.com/en"},
            %{locale: "de", url: "http://example.com/de"}
          ]
        )

      %{publication: publication, author: author, tag: tag, post: post}
    end

    test "redirects on root routes", %{conn: conn, publication: publication} do
      redirect =
        redirect_fixture(publication_id: publication.id, from: "/some-post", to: "/", type: 302)

      conn = get(conn, Routes.on_root_path(conn, :show, "some-post"))
      assert redirected_to(conn, redirect.type) == "/"
    end

    test "lists blog posts page 2", %{
      conn: conn,
      publication: publication,
      tag: tag,
      author: author
    } do
      for i <- 1..20 do
        post_fixture(
          title: "Post #{i}",
          publication_id: publication.id,
          authors_ids: [author.id],
          tags_ids: [tag.id]
        )
      end

      assert {:ok, _view, html} = live(conn, Routes.on_root_path(conn, :index, 2))

      prev_url = @endpoint.url()
      next_url = @endpoint.url() <> Routes.on_root_path(conn, :index, 3)

      assert get_element(
               html,
               "link[href='#{prev_url}'][rel='prev']"
             )

      assert get_element(
               html,
               "link[href='#{next_url}'][rel='next']"
             )
    end
  end

  describe "Error view" do
    test "Display 404 page when page not found", %{conn: conn} do
      {:ok, view, _html} = live(conn, Routes.error_view_path(conn, :show, "page-not-exists"))
      html = render(view)

      assert html =~ "Page not found"
      assert html =~ "Sorry, we could not find the page you are looking for."
    end
  end

  defp get_element(html, selector) do
    html
    |> parse_document!()
    |> find(selector)
    |> Enum.at(0)
  end
end
