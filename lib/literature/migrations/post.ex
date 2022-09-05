defmodule Literature.Migrations.Post do
  @moduledoc false
  use Ecto.Migration

  def up do
    create_if_not_exists table(:literature_posts, primary_key: false) do
      add(:id, :binary_id, primary_key: true)
      add(:slug, :string, null: false)
      add(:title, :string, null: false)
      add(:html, :text)
      add(:feature_image, :string)
      add(:feature_image_alt, :string)
      add(:feature_image_caption, :string)
      add(:featured, :boolean, default: false)
      add(:published_at, :utc_datetime)
      add(:meta_title, :string)
      add(:meta_description, :string)
      add(:custom_excerpt, :text)
      add(:og_image, :string)
      add(:og_title, :string)
      add(:og_description, :string)
      add(:twitter_image, :string)
      add(:twitter_title, :string)
      add(:twitter_description, :string)
      add(:url, :string)
      add(:excerpt, :text)

      add(
        :primary_author_id,
        references(:literature_authors, on_delete: :nilify_all, type: :binary_id)
      )

      add(:primary_tag_id, references(:literature_tags, on_delete: :nilify_all, type: :binary_id))

      timestamps()
    end

    create_if_not_exists(unique_index(:literature_posts, [:slug]))
  end

  def down do
    drop_if_exists(table(:literature_posts))
  end
end
