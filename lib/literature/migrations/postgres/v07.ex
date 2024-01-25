defmodule Literature.Migrations.Postgres.V07 do
  @moduledoc """
  Add notes to posts
  """
  use Ecto.Migration

  def up(_opts) do
    alter table(:literature_posts) do
      add_if_not_exists(:notes, :string)
    end
  end

  def down(_opts) do
    alter table(:literature_posts) do
      remove_if_exists(:notes, :string)
    end
  end
end
