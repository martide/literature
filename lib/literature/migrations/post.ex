defmodule Literature.Migrations.Post do
  @moduledoc false
  use Ecto.Migration
  @disable_ddl_transaction true
  @disable_migration_lock true

  def up do
    create_if_not_exists table(:literature_posts, primary_key: false) do
      add(:id, :binary_id, primary_key: true)
      add(:slug, :string, null: false)
      add(:title, :string, null: false)
      add(:feature_image, :string)
      add(:feature_image_alt, :string)
      add(:feature_image_caption, :string)
      add(:featured, :boolean, default: false)
      add(:published_at, :utc_datetime)
      add(:excerpt, :text)
      add(:editor_json, :json)
      add(:html, {:array, :text})
      add(:meta_title, :string)
      add(:meta_description, :string)
      add(:meta_keywords, :string)
      add(:og_image, :string)
      add(:og_title, :string)
      add(:og_description, :string)
      add(:twitter_image, :string)
      add(:twitter_title, :string)
      add(:twitter_description, :string)

      add(
        :publication_id,
        references(:literature_publications, on_delete: :nilify_all, type: :binary_id)
      )

      timestamps()
    end

    create_if_not_exists(unique_index(:literature_posts, [:publication_id, :slug]))

    create(
      unique_index("literature_posts", [:publication_id, :published_at], concurrently: true)
    )
  end

  def down do
    drop_if_exists(table(:literature_posts))

    drop_if_exists(
      index("literature_posts", [:publication_id, :published_at], concurrently: true)
    )
  end
end
