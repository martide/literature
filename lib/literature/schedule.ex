defmodule Literature.Schedule do
  @moduledoc false
  use Oban.Worker, unique: [fields: [:args, :worker], states: [:scheduled]]

  import Ecto.Changeset, only: [change: 1, put_change: 3]

  alias Literature.Repo

  @impl Oban.Worker
  def perform(%Oban.Job{args: %{"id" => id}}) do
    datetime = DateTime.utc_now() |> DateTime.truncate(:second)

    id
    |> Literature.get_post!()
    |> change()
    |> put_change(:published_at, datetime)
    |> Repo.update()
    |> case do
      {:ok, _} -> :ok
      error -> error
    end
  end
end
