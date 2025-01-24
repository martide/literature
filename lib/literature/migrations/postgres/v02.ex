defmodule Literature.Migrations.Postgres.V02 do
  @moduledoc """
    Adds more indexes
  """
  use Ecto.Migration

  def up(_opts) do
    create_if_not_exists(unique_index("literature_authors_posts", [:post_id, :author_id]))

    create_if_not_exists(unique_index("literature_tags_posts", [:post_id, :tag_id]))
  end

  def down(_opts) do
    drop_if_exists(index("literature_authors_posts", [:post_id, :author_id]))

    drop_if_exists(index("literature_tags_posts", [:post_id, :tag_id]))
  end
end
