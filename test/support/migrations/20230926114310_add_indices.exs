defmodule Literature.Test.Repo.Migrations.AddIndices do
  use Ecto.Migration

  @disable_ddl_transaction true
  @disable_migration_lock true

  def up, do: Literature.Migrations.up(version: 2)

  def down, do: Literature.Migrations.down(version: 2)
end
