defmodule Literature.RSSController do
  use Literature.Web, :controller

  alias Literature.Repo
  alias Literature.RssHelpers

  @default_path "/feed"

  def rss(conn, _params) do
    publication_slug = conn.private[:publication_slug]

    publication =
      Literature.get_publication!(slug: publication_slug) |> Repo.preload(:public_tags)

    base_path = String.replace(current_path(conn), @default_path, "")
    base_url = publication.rss_url <> base_path
    view_module = conn.private.view_module

    favicon_path =
      if function_exported?(view_module, :favicon_path, 1) do
        base_url <> view_module.favicon_path(conn)
      else
        nil
      end

    conn
    |> put_resp_content_type("text/xml")
    |> send_resp(200, RssHelpers.render_feed(base_url, favicon_path, publication))
  end
end
