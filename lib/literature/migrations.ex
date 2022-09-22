defmodule Literature.Migrations do
  @moduledoc """
  Migrations create the database tables Literature needs.

  ## Usage
  To use migrations in your application you'll need to generate an `Ecto.Migration` that wraps
  calls to `Literature.Migrations`:

  ```bash
  mix ecto.gen.migration add_literature
  ```

  Open the generated migration in your editor and call the `up` and `down` functions on
  `Literature.Migrations`:

  ```elixir
  defmodule MyApp.Repo.Migrations.AddLiterature do
    use Ecto.Migration
    
    def up, do: Literature.Migrations.up()
    
    def down, do: Literature.Migrations.down()
  end
  ```

  This will run the migrations for your database.

  Now, run the migration to create the table:

  ```bash
  mix ecto.migrate
  ```
  """
  use Ecto.Migration

  @doc """
  Run the `up` changes for all migrations

  ## Example

  Run all migrations up:
    
    Literature.Migrations.up()
  """
  def up, do: change(:up, ~w(publication author tag post))

  @doc """
  Run the `down` changes for all migrations

  ## Example

  Run all migrations down:
    
    Literature.Migrations.down()
  """
  def down, do: change(:down, ~w(post author tag publication))

  defp change(direction, tables) do
    for name <- tables do
      table_name = String.capitalize(name)

      [__MODULE__, table_name]
      |> Module.concat()
      |> apply(direction, [])

      # credo:disable-for-previous-line
    end
  end
end
