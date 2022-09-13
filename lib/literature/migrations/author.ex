defmodule Literature.Migrations.Author do
  @moduledoc false
  use Ecto.Migration

  def up do
    create_if_not_exists table(:literature_authors, primary_key: false) do
      add(:id, :binary_id, primary_key: true)
      add(:slug, :string, null: false)
      add(:name, :string, null: false)
      add(:profile_image, :string)
      add(:cover_image, :string)
      add(:bio, :text)
      add(:website, :string)
      add(:location, :string)
      add(:facebook, :string)
      add(:twitter, :string)
      add(:meta_title, :string)
      add(:meta_description, :string)

      timestamps()
    end

    create_if_not_exists(unique_index(:literature_authors, [:slug]))
  end

  def down do
    drop_if_exists(table(:literature_authors))
  end
end
