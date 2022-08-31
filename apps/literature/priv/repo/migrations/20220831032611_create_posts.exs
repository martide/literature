defmodule Literature.Repo.Migrations.CreatePosts do
  use Ecto.Migration

  def change do
    create table(:posts) do
      add :slug, :string
      add :title, :string
      add :html, :text
      add :feature_image, :string
      add :feature_image_alt, :string
      add :feature_image_caption, :string
      add :featured, :boolean, default: false, null: false
      add :meta_title, :string
      add :meta_description, :string

      timestamps()
    end

    create unique_index(:posts, [:slug])
  end
end
