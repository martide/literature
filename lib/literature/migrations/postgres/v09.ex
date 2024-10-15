defmodule Literature.Migrations.Postgres.V09 do
  @moduledoc """
    Adds more indexes
  """
  use Ecto.Migration
  @disable_ddl_transaction true
  @disable_migration_lock true

  def up(_opts) do
    create_if_not_exists(unique_index("literature_tags_posts", [:tag_id, :post_id]))
  end

  def down(_opts) do
    drop_if_exists(index("literature_tags_posts", [:tag_id, :post_id]))
  end
end
