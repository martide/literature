defmodule Literature.Migrations.Publication do
  @moduledoc false
  use Ecto.Migration

  def up do
    create_if_not_exists table(:literature_publications, primary_key: false) do
      add(:id, :binary_id, primary_key: true)
      add(:slug, :string, null: false)
      add(:name, :string, null: false)
      add(:description, :text)
      add(:meta_title, :string)
      add(:meta_description, :string)
      add(:og_image, :string)
      add(:og_title, :string)
      add(:og_description, :string)
      add(:twitter_image, :string)
      add(:twitter_title, :string)
      add(:twitter_description, :string)

      timestamps()
    end

    create_if_not_exists(unique_index(:literature_publications, [:slug]))
  end

  def down do
    drop_if_exists(table(:literature_publications))
  end
end
