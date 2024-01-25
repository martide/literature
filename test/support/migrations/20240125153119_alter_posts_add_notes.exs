defmodule Literature.Test.Repo.Migrations.AlterPostsAddNotes do
  use Ecto.Migration

  def up, do: Literature.Migrations.up(version: 7)
  def down, do: Literature.Migrations.down(version: 7)
end
