defmodule Literature.LayoutView do
  @moduledoc false
  use Literature.Web, :view

  alias Literature.AssetHelpers

  @env Application.compile_env(:literature, :env)

  defp asset_path(conn_or_socket, path) do
    literature_dashboard_path(conn_or_socket, :root) <> "/assets/" <> asset_file_name(path, @env)
  end

  @manifest_path Path.expand("static/cache_manifest.json", :code.priv_dir(:literature))
  @external_resource @manifest_path
  @manifest AssetHelpers.parse_manifest(@manifest_path, @env)
  defp asset_file_name(asset, :prod) do
    if String.ends_with?(asset, [".js", ".css"]) do
      @manifest |> AssetHelpers.asset_file_name(asset, :prod)
    else
      asset
    end
  end

  defp asset_file_name(path, _env), do: path
end
