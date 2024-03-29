defmodule Literature.Helpers do
  @moduledoc false

  import Phoenix.LiveView, only: [uploaded_entries: 2, consume_uploaded_entries: 3]
  alias Phoenix.LiveView.UploadConfig

  # Routing Helpers

  @doc """
  Construct a path to the blog page.
  """
  def literature_path(conn_or_socket, action, params \\ %{})

  def literature_path(%Plug.Conn{} = conn, action, params) do
    routes(conn).literature_path(conn, action, params)
  end

  def literature_path(%Phoenix.LiveView.Socket{} = socket, action, params) do
    routes(socket).literature_path(socket, action, params)
  end

  def literature_path(%Phoenix.LiveView.Socket{} = socket, action, params, opts) do
    routes(socket).literature_path(socket, action, params, opts)
  end

  @doc """
  Construct a path to a dashboard page.
  """
  def literature_dashboard_path(conn_or_socket, action, params \\ %{})

  def literature_dashboard_path(%Plug.Conn{} = conn, action, params) do
    routes(conn).literature_dashboard_path(conn, action, params)
  end

  def literature_dashboard_path(%Phoenix.LiveView.Socket{} = socket, action, params) do
    routes(socket).literature_dashboard_path(socket, action, params)
  end

  def literature_dashboard_path(conn_or_socket, action, params) when action in [:js, :css] do
    routes(conn_or_socket).literature_dashboard_path(conn_or_socket, action, params)
  end

  def literature_dashboard_path(%Plug.Conn{} = conn, action, params, opts) do
    routes(conn).literature_dashboard_path(conn, action, params, opts)
  end

  def literature_dashboard_path(%Phoenix.LiveView.Socket{} = socket, action, params, opts) do
    routes(socket).literature_dashboard_path(socket, action, params, opts)
  end

  def literature_dashboard_path(%Phoenix.LiveView.Socket{} = socket, action, slug, params, opts) do
    routes(socket).literature_dashboard_path(socket, action, slug, params, opts)
  end

  def routes(%Plug.Conn{} = conn) do
    conn.private.phoenix_router.__helpers__()
  end

  def routes(%Phoenix.LiveView.Socket{} = socket) do
    socket.router.__helpers__()
  end

  # Image Routing Helpers
  def literature_image_url(schema, field, version \\ :original) do
    case Literature.Uploaders.url({Map.get(schema, field), schema}, version) do
      url when is_binary(url) ->
        url
        |> String.split("?")
        |> hd()

      url ->
        url
    end
  end

  # Uploaded Entries Helpers
  def build_uploaded_entries(socket, fields) do
    fields
    |> Enum.map(fn field ->
      case uploaded_entries(socket, field) do
        {[entry], _in_progress} ->
          upload_config = socket.assigns.uploads[field]
          pid = UploadConfig.entry_pid(upload_config, entry)

          {:ok, %{path: path}} = GenServer.call(pid, :consume_start, :infinity)

          file = %Plug.Upload{
            path: path,
            content_type: entry.client_type,
            filename: entry.client_name
          }

          {Atom.to_string(field), file}

        _ ->
          []
      end
    end)
    |> List.flatten()
    |> Enum.into(%{})
  end

  @doc """
  Convert a map atom to map string.
  """
  def atomize_keys_to_string(list) do
    list
    |> Enum.map(fn {key, val} -> {Atom.to_string(key), val} end)
    |> Enum.into(%{})
  end

  def date_format(datetime, format \\ "%b %d, %Y"),
    do: Timex.format!(datetime, format, :strftime)

  def consume_all_uploaded_entries(
        %{assigns: %{uploads: %{__phoenix_refs_to_names__: ref_name_map}}} = socket
      ) do
    Enum.each(ref_name_map, fn {_ref, upload_name} ->
      consume_uploaded_entries(socket, upload_name, fn _, _ ->
        {:ok, upload_name}
      end)
    end)

    socket
  end
end
