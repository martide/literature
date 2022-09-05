defmodule Literature.LayoutView do
  @moduledoc false
  use Literature.Web, :view

  alias Literature.AssetHelpers

  @env Application.compile_env(:literature, :env)

  defp asset_path(conn_or_socket, path) do
    assets_path = assets_path(conn_or_socket)
    Path.join(assets_path, asset_file_name(path, @env))
  end

  defp assets_path(s = %Phoenix.LiveView.Socket{}), do: s.assigns.__assigns__.assets_path
  defp assets_path(conn = %Plug.Conn{}), do: conn.private.assets_path

  @manifest_path Path.expand("static/cache_manifest.json", :code.priv_dir(:literature))
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
