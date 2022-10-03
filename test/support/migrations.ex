defmodule Literature.Test.Migrations do
  @moduledoc false
  use Ecto.Migration

  defdelegate up, to: Literature.Migrations
  defdelegate down, to: Literature.Migrations
end
