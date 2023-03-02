defmodule Literature.DownloadHelpers do
  require Logger

  @moduledoc """

  Returns:

    * `{:ok, stored_file_absolute_path}` if everything were ok.
    * `{:error, :file_size_is_too_big}` if file size exceeds `max_file_size`
    * `{:error, :download_failure}` if host isn't reachable
    * `{:error, :eexist}` if file exists already

  Options:
    
    * `max_file_size` - max available file size for downloading (in bytes). Default is `1024 * 1024 * 1000` (1GB)
    * `path` - absolute file path for the saved file. Default is `pwd <> requested file name`

  ## Examples

      iex> Literature.DownloadHelpers.download_image("http://speedtest.ftp.otenet.gr/files/test100k.db")
      {:ok, "/absolute/path/to/test_100k.db"}

      iex> Literature.DownloadHelpers.download_image("http://speedtest.ftp.otenet.gr/files/test100k.db", [max_file_size: 99 * 1000])
      {:error, :file_size_is_too_big}

      iex> Literature.DownloadHelpers.download_image("http://speedtest.ftp.otenet.gr/files/test100k.db", [path: "/custom/absolute/file/path.db"])
      {:ok, "/custom/absolute/file/path.db"}
  """

  def download_image(url, opts \\ []) do
    file_name = url |> String.split("/") |> List.last()
    path = Keyword.get(opts, :path, get_default_download_path(file_name))
    receive_timeout = Application.get_env(:waffle, :receive_timeout) || 15_000

    with {:ok, file} <- create_file(path),
         {:ok, path} <- start_download(url, file, path, receive_timeout) do
      {:ok, List.to_string(path)}
    end
  end

  defp get_default_download_path(file_name) do
    Path.join(System.tmp_dir!(), Path.basename(file_name)) |> String.to_charlist()
  end

  defp create_file(path) do
    case :file.open(path, [:write, :exclusive]) do
      {:error, :eexist} ->
        :file.delete(path)
        create_file(path)

      path ->
        path
    end
  end

  defp start_download(url, file, path, timeout) do
    task =
      Task.async(fn ->
        :poolboy.transaction(
          :worker,
          fn pid ->
            try do
              GenServer.call(pid, {:download, url, file, path, timeout}, timeout)
            catch
              e, r ->
                Logger.error("poolboy transaction caught error: #{inspect(e)}, #{inspect(r)}")
                :ok
            end
          end,
          timeout
        )
      end)

    Task.await(task, timeout)
  end
end
