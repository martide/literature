defmodule Literature.Test.Repo.Migrations.AlterPostsAddIsPublished do
  use Ecto.Migration

  def up, do: Literature.Migrations.up(version: 6)

  def down, do: Literature.Migrations.down(version: 6)
end
