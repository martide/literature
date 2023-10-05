defmodule Literature.Test.Repo.Migrations.AddPublicationLocale do
  use Ecto.Migration

  def up, do: Literature.Migrations.up(version: 4)

  def down, do: Literature.Migrations.down(version: 4)
end
