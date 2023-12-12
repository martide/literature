defmodule Literature.Plugs.RedirectTest do
  use Literature.ConnCase

  import Literature.Test.Fixtures

  alias Literature.Plugs.Redirect
  alias Literature.Test.DynamicPathRouter.Helpers, as: DynamicPathRoutes

  describe "call when there is a redirect" do
    test "redirects authors to tags", %{
      conn: conn
    } do
      publication = publication_fixture(name: "Blog", slug: "blog")

      # Redirect authors to tags
      redirect = redirect_fixture(publication_id: publication.id, from: "authors", to: "tags")

      req_path = Routes.literature_path(conn, :authors)

      conn =
        Plug.Test.conn(:get, req_path, %{})
        |> put_private(:publication_slug, publication.slug)
        |> put_private(:root_path, "/blog")
        |> Redirect.call([])

      assert conn.halted

      assert redirected_to(conn, redirect.type) ==
               "#{conn.private.root_path}#{redirect.to}"
    end

    test "redirects authors to tags with dynamic path", %{
      conn: conn
    } do
      publication = publication_fixture(name: "Blog", slug: "blog")

      redirect =
        redirect_fixture(publication_id: publication.id, from: "authors", to: "tags", type: 302)

      req_path = DynamicPathRoutes.literature_path(conn, :authors)

      conn =
        Plug.Test.conn(:get, req_path, %{})
        |> put_private(:publication_slug, publication.slug)
        |> put_private(:root_path, "/foo/bar/blog")
        |> Redirect.call([])

      assert conn.halted
      assert redirected_to(conn, redirect.type) == "/foo/bar/#{publication.slug}#{redirect.to}"
    end
  end

  describe "call when there is no redirect" do
    test "doesnt redirect", %{conn: conn} do
      publication = publication_fixture(name: "Blog", slug: "blog")

      req_path = Routes.literature_path(conn, :authors)

      conn =
        Plug.Test.conn(:get, req_path, %{})
        |> put_private(:publication_slug, publication.slug)
        |> Redirect.call([])

      refute conn.halted
    end
  end
end
