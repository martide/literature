defmodule Literature.Test.Repo.Migrations.AlterTagsPostsAddTagPostsPosition do
  use Ecto.Migration

  def up, do: Literature.Migrations.up(version: 5)

  def down, do: Literature.Migrations.down(version: 5)
end
