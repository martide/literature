defmodule Literature.Application do
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    Supervisor.start_link([{Phoenix.PubSub, name: Literature.PubSub}],
      strategy: :one_for_one,
      name: Literature.Supervisor
    )
  end
end
