defmodule Literature.Migrations.Postgres.V12 do
  @moduledoc """
  Add markdown field to posts
  """
  use Ecto.Migration

  def up(_opts) do
    alter table(:literature_posts) do
      add_if_not_exists(:markdown, :text)
      remove_if_exists(:editor_json, :json)
    end
  end

  def down(_opts) do
    alter table(:literature_posts) do
      add_if_not_exists(:editor_json, :json)
      remove_if_exists(:markdown, :text)
    end
  end
end
