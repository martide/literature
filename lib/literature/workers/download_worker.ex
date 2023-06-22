defmodule Literature.Workers.DownloadWorker do
  @moduledoc """
  pool boy worker that handles image proccessing and stores it in temp file
  """
  use GenServer

  require Logger

  def start_link(otps \\ []) do
    GenServer.start_link(__MODULE__, [], otps)
  end

  def init(_) do
    {:ok, %{}}
  end

  def handle_call({:download, url, file_pid, path, timeout}, _from, state) do
    case :httpc.request(:get, {url, []}, [{:timeout, timeout}], []) do
      {:ok, {{_req, 200, ~c"OK"}, header, body}} ->
        header
        |> List.keyfind(~c"content-type", 0)
        |> content_is_image?()
        |> case do
          true ->
            :file.write(file_pid, body)
            :file.close(file_pid)
            {:reply, {:ok, path}, state}

          _false ->
            :file.close(file_pid)
            :file.delete(path)
            {:reply, {:error, :invalid_file}, state}
        end

      _reason ->
        :file.delete(path)
        :file.close(file_pid)
        {:reply, {:error, :download_failed}, state}
    end
  end

  defp content_is_image?({~c"content-type", content_type}) do
    content_type
    |> List.to_string()
    |> String.match?(~r/image/)
  end

  defp content_is_image?(_content_type), do: false
end
