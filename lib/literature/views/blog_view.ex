defmodule Literature.BlogView do
  use Literature.Web, :view

  import Literature.LayoutView, only: [asset_path: 2]
  alias Literature.Config

  def favicon_path(conn), do: asset_path(conn, "favicon/favicon.ico")
  def css_path(conn), do: asset_path(conn, "css/app.css")
  def js_path(conn), do: asset_path(conn, "js/app.js")

  defp logo, do: Config.logo()

  defp title, do: Config.title()
end
