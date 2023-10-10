defmodule Literature.LayoutView do
  @moduledoc false
  use Literature.Web, :view
  use Phoenix.Component

  import Literature.LayoutComponent
  import Literature.MetaTagHelpers

  alias Literature.AssetHelpers
  alias Literature.Config

  defp application_favicon_path(conn_or_socket, view_module) do
    if function_exported?(view_module, :favicon_path, 1) do
      view_module.favicon_path(conn_or_socket)
    else
      asset_path(conn_or_socket, "favicon/favicon.ico")
    end
  end

  defp application_rss_path(conn_or_socket, view_module) do
    if function_exported?(view_module, :rss_path, 1) do
      view_module.rss_path(conn_or_socket)
    else
      literature_path(conn_or_socket, :rss)
    end
  end

  defp application_css_path(conn_or_socket, view_module) do
    if function_exported?(view_module, :css_path, 1) do
      view_module.css_path(conn_or_socket)
    else
      asset_path(conn_or_socket, "css/app.css")
    end
  end

  defp application_js_path(conn_or_socket, view_module) do
    if function_exported?(view_module, :js_path, 1) do
      view_module.js_path(conn_or_socket)
    else
      asset_path(conn_or_socket, "js/app.js")
    end
  end

  defp canonical_path(conn) do
    conn
    |> current_url
    |> String.split("?")
    |> hd()
  end

  def asset_path(conn_or_socket, asset) when asset in [:css, :js] do
    hash = Literature.Assets.current_hash(asset)

    literature_dashboard_path(conn_or_socket, asset, hash)
  end

  def asset_path(conn_or_socket, path) do
    literature_path(conn_or_socket, :index) <> "/assets/" <> asset_file_name(path, Config.env())
  end

  @manifest_path Path.expand("static/cache_manifest.json", :code.priv_dir(:literature))
  @external_resource @manifest_path
  @manifest AssetHelpers.parse_manifest(@manifest_path, Config.env())
  defp asset_file_name(asset, :prod) do
    if String.ends_with?(asset, [".js", ".css"]) do
      @manifest |> AssetHelpers.asset_file_name(asset, :prod)
    else
      asset
    end
  end

  defp asset_file_name(path, _env), do: path
end
