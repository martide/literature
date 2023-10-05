defmodule Literature.Assets do
  @moduledoc false
  use Literature.Web, :controller

  css_path = Application.app_dir(:literature, ["priv", "static", "css", "app.css"])
  @external_resource css_path
  @css File.read!(css_path)

  js_path = Application.app_dir(:literature, ["priv", "static", "js", "app.js"])
  @external_resource js_path
  @js File.read!(js_path)

  @hashes %{
    :css => Base.encode16(:crypto.hash(:md5, @css), case: :lower),
    :js => Base.encode16(:crypto.hash(:md5, @js), case: :lower)
  }

  def init(asset) when asset in [:css, :js], do: asset

  def call(conn, asset) do
    {contents, content_type} = contents_and_type(asset)

    conn
    |> put_resp_header("content-type", content_type)
    |> put_resp_header("cache-control", "public, max-age=31536000")
    |> put_private(:plug_skip_csrf_protection, true)
    |> send_resp(200, contents)
    |> halt()
  end

  defp contents_and_type(:css), do: {@css, "text/css"}
  defp contents_and_type(:js), do: {@js, "text/javascript"}

  @doc """
  Returns the current hash for the given `asset`.
  """
  def current_hash(:css), do: @hashes.css
  def current_hash(:js), do: @hashes.js
end
