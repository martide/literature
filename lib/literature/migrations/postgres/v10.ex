defmodule Literature.Migrations.Postgres.V10 do
  @moduledoc """
    Adds more indexes
  """
  use Ecto.Migration
  @disable_ddl_transaction true
  @disable_migration_lock true

  def up(_opts) do
    create_if_not_exists(index("literature_posts", [:published_at]))
    create_if_not_exists(index("literature_posts", [:publication_id]))
  end

  def down(_opts) do
    drop_if_exists(index("literature_posts", [:published_at]))
    drop_if_exists(index("literature_posts", [:publication_id]))
  end
end
