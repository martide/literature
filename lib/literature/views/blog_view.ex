defmodule Literature.BlogView do
  use Literature.Web, :view

  import Literature.ImageComponent
  import Literature.LayoutView, only: [asset_path: 2]

  alias Literature.Config

  def favicon_path(conn), do: asset_path(conn, "favicon/favicon.ico")
  def rss_path(conn), do: literature_path(conn, :rss)
  def css_path(conn), do: asset_path(conn, "css/app.css")
  def js_path(conn), do: asset_path(conn, "js/app.js")

  def meta_tags(:authors, publication), do: %{title: publication.name <> " Authors"}
  def meta_tags(:tags, publication), do: %{title: publication.name <> " Tags"}

  defp logo, do: Config.logo()
  defp title, do: Config.title()
end
