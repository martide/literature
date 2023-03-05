defmodule Literature.Application do
  @moduledoc false

  use Application

  defp poolboy_config do
    [
      name: {:local, :worker},
      worker_module: Literature.Workers.DownloadWorker,
      size: 5,
      max_overflow: 2
    ]
  end

  @impl true
  def start(_type, _args) do
    children = [
      :poolboy.child_spec(:worker, poolboy_config()),
      {Phoenix.PubSub, name: Literature.PubSub}
    ]

    opts = [strategy: :one_for_one, name: Literature.Supervisor]
    Supervisor.start_link(children, opts)
  end
end
