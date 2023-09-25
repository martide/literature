defmodule Literature.Test.Migrations.AddLiterature do
  use Ecto.Migration

  def up, do: Literature.Migrations.up(version: 1)

  def down, do: Literature.Migrations.down(version: 1)
end
