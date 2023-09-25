defmodule Literature.Migrations.Postgres.V03 do
  @moduledoc """
  Add literature_redirects table
  """
  use Ecto.Migration

  def up(_opts) do
    create_if_not_exists table(:literature_redirects, primary_key: false) do
      add(:id, :binary_id, primary_key: true)
      add(:from, :string, null: false)
      add(:to, :string, null: false)
      add(:type, :integer, null: false)

      add(
        :publication_id,
        references(:literature_publications, on_delete: :nilify_all, type: :binary_id)
      )

      timestamps()
    end
  end

  def down(_opts) do
    drop_if_exists(table(:literature_redirects))
  end
end
