defmodule LiveCrud.Repo.Migrations.AddLiterature do
  use Ecto.Migration

  def up, do: Literature.Migrations.up()

  def down, do: Literature.Migrations.down()
end
