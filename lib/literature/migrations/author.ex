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
      add(:meta_keywords, :string)

      add(
        :publication_id,
        references(:literature_publications, on_delete: :nilify_all, type: :binary_id)
      )

      timestamps()
    end

    create_if_not_exists(unique_index(:literature_authors, [:publication_id, :slug]))
  end

  def down do
    drop_if_exists(table(:literature_authors))
  end
end
