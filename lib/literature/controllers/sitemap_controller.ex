defmodule Literature.SitemapController do
  use Literature.Web, :controller

  alias Literature.Config

  def sitemap(conn, _params) do
    publication_slug = conn.path_info |> Enum.at(-2)

    with sitemap_path <- Path.join(Config.sitemap_path(), "sitemap-#{publication_slug}.xml"),
         {:ok, sitemap_xml} <- File.read(sitemap_path) do
      conn
      |> put_resp_content_type("text/xml")
      |> send_resp(200, sitemap_xml)
    end
  end

  def sitemap_1(conn, _params) do
    publication_slug = conn.path_info |> Enum.at(-2)

    with sitemap_path <-
           Path.join(Config.sitemap_path(), "sitemap-#{publication_slug}-00001.xml"),
         {:ok, sitemap_xml} <- File.read(sitemap_path) do
      conn
      |> put_resp_content_type("text/xml")
      |> send_resp(200, sitemap_xml)
    end
  end
end
