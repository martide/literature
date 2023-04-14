defmodule Literature.Migrations.TagPost do
  @moduledoc false
  use Ecto.Migration
  @disable_ddl_transaction true
  @disable_migration_lock true

  def up do
    create_if_not_exists table(:literature_tags_posts, primary_key: false) do
      add(:tag_id, references(:literature_tags, on_delete: :delete_all, type: :binary_id))
      add(:post_id, references(:literature_posts, on_delete: :delete_all, type: :binary_id))
    end

    create(
      unique_index("literature_tags_posts", [:post_id, :tag_id], concurrently: true)
    )
  end

  def down do
    drop_if_exists(table(:literature_tags_posts))

    drop_if_exists(
      index("literature_tags_posts", [:post_id, :tag_id], concurrently: true)
    )
  end
end
