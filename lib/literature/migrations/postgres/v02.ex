defmodule Literature.Migrations.Postgres.V02 do
  @moduledoc """
    Adds more indexes
  """
  use Ecto.Migration
  @disable_ddl_transaction true
  @disable_migration_lock true

  def up(_opts) do
    create_if_not_exists(
      unique_index("literature_authors_posts", [:post_id, :author_id], concurrently: true)
    )

    create_if_not_exists(
      unique_index("literature_tags_posts", [:post_id, :tag_id], concurrently: true)
    )
  end

  def down(_opts) do
    drop_if_exists(index("literature_authors_posts", [:post_id, :author_id], concurrently: true))

    drop_if_exists(index("literature_tags_posts", [:post_id, :tag_id], concurrently: true))
  end
end
