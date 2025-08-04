defmodule Literature.Migrations.Postgres.V11 do
  @moduledoc """
  Add update URL for static pages
  """
  use Ecto.Migration

  def up(_opts) do
    alter table(:literature_publications) do
      add_if_not_exists(:update_url, :string)
    end
  end

  def down(_opts) do
    alter table(:literature_publications) do
      remove_if_exists(:update_url, :string)
    end
  end
end
