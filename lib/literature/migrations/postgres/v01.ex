defmodule Literature.Migrations.Postgres.V01 do
  @moduledoc """
    Beginning tables for Literature
  """
  use Ecto.Migration

  def up(_opts) do
    # create literature_publications
    create_if_not_exists table(:literature_publications, primary_key: false) do
      add(:id, :binary_id, primary_key: true)
      add(:slug, :string, null: false)
      add(:name, :string, null: false)
      add(:description, :text)
      add(:meta_title, :string)
      add(:meta_description, :string)
      add(:meta_keywords, :string)
      add(:og_image, :string)
      add(:og_title, :string)
      add(:og_description, :string)
      add(:twitter_image, :string)
      add(:twitter_title, :string)
      add(:twitter_description, :string)

      timestamps()
    end

    create_if_not_exists table(:literature_tags, primary_key: false) do
      add(:id, :binary_id, primary_key: true)
      add(:slug, :string, null: false)
      add(:name, :string, null: false)
      add(:description, :text)
      add(:feature_image, :string)
      add(:visibility, :boolean)
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

    # literature_posts
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

    create_if_not_exists table(:literature_tags_posts, primary_key: false) do
      add(:tag_id, references(:literature_tags, on_delete: :delete_all, type: :binary_id))
      add(:post_id, references(:literature_posts, on_delete: :delete_all, type: :binary_id))
    end

    # create literature_authors
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

    # create literature_authors_posts
    create_if_not_exists table(:literature_authors_posts, primary_key: false) do
      add(:author_id, references(:literature_authors, on_delete: :delete_all, type: :binary_id))
      add(:post_id, references(:literature_posts, on_delete: :delete_all, type: :binary_id))
    end

    create_if_not_exists(unique_index(:literature_tags, [:publication_id, :slug]))
    create_if_not_exists(unique_index(:literature_publications, [:slug]))
    create_if_not_exists(unique_index(:literature_posts, [:publication_id, :slug]))
  end

  def down(_opts) do
    drop_if_exists(table(:literature_authors_posts))
    drop_if_exists(table(:literature_authors))
    drop_if_exists(table(:literature_tags_posts))
    drop_if_exists(table(:literature_posts))
    drop_if_exists(table(:literature_tags))
    drop_if_exists(table(:literature_publications))
  end
end
