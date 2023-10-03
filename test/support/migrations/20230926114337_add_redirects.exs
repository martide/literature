defmodule Literature.Test.Repo.Migrations.AddRedirects do
  use Ecto.Migration

  def up, do: Literature.Migrations.up(version: 3)

  def down, do: Literature.Migrations.down(version: 3)
end
