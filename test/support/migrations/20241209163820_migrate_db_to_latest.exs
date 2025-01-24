defmodule Literature.Test.Repo.Migrations.MigrateDbToLatest do
  use Ecto.Migration

  # Always migrate to the latest version for tests
  def up, do: Literature.Migrations.up([])
  def down, do: Literature.Migrations.down([])
end
