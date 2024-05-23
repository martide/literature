defmodule Literature.Migrations.Postgres.V08 do
  @moduledoc """
  Add rss fields to publication
  """
  use Ecto.Migration

  def up(_opts) do
    alter table(:literature_publications) do
      add_if_not_exists(:rss_url, :string)
      add_if_not_exists(:rss_author, :string)
      add_if_not_exists(:rss_email, :string)
      add_if_not_exists(:rss_is_excerpt_only, :boolean)
    end
  end

  def down(_opts) do
    alter table(:literature_publications) do
      remove_if_exists(:rss_url, :string)
      remove_if_exists(:rss_author, :string)
      remove_if_exists(:rss_email, :string)
      remove_if_exists(:rss_is_excerpt_only, :boolean)
    end
  end
end
