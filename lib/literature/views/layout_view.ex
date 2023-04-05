defmodule Literature.LayoutView do
  @moduledoc false
  use Literature.Web, :view

  import Literature.LayoutComponent
  import Literature.MetaTagHelpers

  alias Literature.AssetHelpers
  alias Literature.Config

  defp application_favicon_path(conn_or_socket, view_module),
    do: view_module.favicon_path(conn_or_socket)

  defp application_rss_path(conn_or_socket, view_module),
    do: view_module.rss_path(conn_or_socket)

  defp csp_nonce(conn, type) when type in [:script, :style, :img] do
    csp_nonce_assign_key = conn.private.csp_nonce_assign_key[type]
    conn.assigns[csp_nonce_assign_key]
  end

  defp canonical_path(conn) do
    conn
    |> current_url
    |> String.split("?")
    |> hd()
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
