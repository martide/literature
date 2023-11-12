defmodule Literature.Migrations.Postgres.V05 do
  @moduledoc """
  Add position to literature_tags_posts
  """
  use Ecto.Migration

  def up(_opts) do
    alter table(:literature_tags_posts) do
      # Add column to linking table since posts can have multiple tags
      # Posts can have their custom order per tag
      add_if_not_exists(:position, :integer)
    end

    alter table(:literature_tags) do
      add_if_not_exists(:enable_posts_custom_order, :boolean, default: false)
    end
  end

  def down(_opts) do
    alter table(:literature_tags_posts) do
      remove_if_exists(:position, :integer)
    end

    alter table(:literature_tags) do
      remove_if_exists(:enable_posts_custom_order, :boolean)
    end
  end
end
