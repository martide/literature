defmodule Literature.Migrations.Postgres.V04 do
  @moduledoc """
  Add language to publications and posts
  """
  use Ecto.Migration

  def up(_opts) do
    alter table(:literature_publications) do
      add_if_not_exists(:locale, :string)
      add_if_not_exists(:ex_default_locale, :string)
    end

    alter table(:literature_posts) do
      add_if_not_exists(:locales, {:array, :map}, default: [])
    end
  end

  def down(_opts) do
    alter table(:literature_publications) do
      remove_if_exists(:locale, :string)
      remove_if_exists(:ex_default_locale, :string)
    end

    alter table(:literature_posts) do
      remove_if_exists(:locales, {:array, :map})
    end
  end
end
