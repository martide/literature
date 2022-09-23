defmodule Literature.Migrations.AuthorPost do
  @moduledoc false
  use Ecto.Migration

  def up do
    create_if_not_exists table(:literature_authors_posts, primary_key: false) do
      add(:author_id, references(:literature_authors, on_delete: :delete_all, type: :binary_id))
      add(:post_id, references(:literature_posts, on_delete: :delete_all, type: :binary_id))
    end
  end

  def down do
    drop_if_exists(table(:literature_authors_posts))
  end
end
