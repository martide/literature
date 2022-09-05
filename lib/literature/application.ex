defmodule Literature.Application do
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      Literature.Repo,
      {Phoenix.PubSub, name: Literature.PubSub}
    ]

    Supervisor.start_link(children, strategy: :one_for_one, name: Literature.Supervisor)
  end
end
