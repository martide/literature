defmodule Literature.BlogView do
  use Literature.Web, :view

  import Literature.LayoutView, only: [asset_path: 2]

  def favicon_path(conn), do: asset_path(conn, "favicon/favicon.ico")
  def css_path(conn), do: asset_path(conn, "css/app.css")
  def js_path(conn), do: asset_path(conn, "js/app.js")

  defp logo,
    do: Application.fetch_env!(:literature, :image)

  defp title,
    do: Application.fetch_env!(:literature, :title)
end
