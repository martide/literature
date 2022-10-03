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

  @tables ~w(Publication Author Tag Post AuthorPost TagPost)

  @doc """
  Run the `up` changes for all migrations

  ## Example

  Run all migrations up:
    
    Literature.Migrations.up()
  """
  def up, do: change(:up, @tables)

  @doc """
  Run the `down` changes for all migrations

  ## Example

  Run all migrations down:
    
    Literature.Migrations.down()
  """
  def down, do: change(:down, Enum.reverse(@tables))

  defp change(direction, tables) do
    for table_name <- tables do
      [__MODULE__, table_name]
      |> Module.concat()
      # credo:disable-for-next-line
      |> apply(direction, [])
    end
  end
end
