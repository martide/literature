defmodule Literature.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      # Start the Ecto repository
      Literature.Repo,
      # Start the PubSub system
      {Phoenix.PubSub, name: Literature.PubSub}
      # Start a worker by calling: Literature.Worker.start_link(arg)
      # {Literature.Worker, arg}
    ]

    Supervisor.start_link(children, strategy: :one_for_one, name: Literature.Supervisor)
  end
end
