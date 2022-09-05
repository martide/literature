defmodule Literature.Migrations.Post do
  @moduledoc false
  use Ecto.Migration

  def up do
    create_if_not_exists table(:literature_posts, primary_key: false) do
      add(:id, :binary_id, primary_key: true)
      add(:slug, :string, null: false)
      add(:title, :string)
      add(:html, :text)
      add(:feature_image, :string)
      add(:feature_image_alt, :string)
      add(:feature_image_caption, :string)
      add(:featured, :boolean, default: false, null: false)
      add(:meta_title, :string)
      add(:meta_description, :string)

      timestamps()
    end

    create(unique_index(:literature_posts, [:slug]))
  end

  def down do
    drop(table(:literature_posts))
  end
end
