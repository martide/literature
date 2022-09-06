defmodule Literature.Test.Migrations do
  use Ecto.Migration

  defdelegate up, to: Literature.Migrations
  defdelegate down, to: Literature.Migrations
end
