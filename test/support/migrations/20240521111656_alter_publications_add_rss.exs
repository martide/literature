defmodule Literature.Test.Repo.Migrations.AlterPublicationsAddRss do
  use Ecto.Migration

  def up, do: Literature.Migrations.up(version: 8)
  def down, do: Literature.Migrations.down(version: 8)
end
