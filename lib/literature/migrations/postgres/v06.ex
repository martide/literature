defmodule Literature.Migrations.Postgres.V06 do
  @moduledoc """
  Add is_published to literature_posts
  """
  use Ecto.Migration

  import Ecto.Query

  def up(_opts) do
    alter table(:literature_posts) do
      add_if_not_exists(:is_published, :boolean)
    end

    flush()

    now = DateTime.utc_now()

    # Set all posts to published
    "literature_posts"
    |> where([q], is_nil(q.is_published))
    |> update([q],
      set: [
        is_published:
          fragment(
            "CASE WHEN ? THEN true ELSE false END",
            q.published_at <= ^now
          )
      ]
    )
    |> repo().update_all([], [])
  end

  def down(_opts) do
    alter table(:literature_posts) do
      remove_if_exists(:is_published, :boolean)
    end
  end
end
