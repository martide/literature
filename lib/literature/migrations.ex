defmodule Literature.Migrations do
  @moduledoc """
  Database Migrations for the Literature tables.
  """

  defdelegate up(opts \\ []), to: Literature.Migration
  defdelegate down(opts \\ []), to: Literature.Migration
end

defmodule Literature.Migration do
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

    def up, do: Literature.Migrations.up(version: 1)

    def down, do: Literature.Migrations.down(version: 1)
  end
  ```

  This will run the migrations for your database.

  Now, run the migration to create the table:

  ```bash
  mix ecto.migrate
  ```
  """
  use Ecto.Migration

  @callback up(Keyword.t()) :: :ok
  @callback down(Keyword.t()) :: :ok
  @callback migrated_version(Keyword.t()) :: non_neg_integer()

  def up(opts \\ []) when is_list(opts) do
    migrator().up(opts)
  end

  def down(opts \\ []) when is_list(opts) do
    migrator().down(opts)
  end

  def migrated_version(opts \\ []) when is_list(opts) do
    migrator().migrated_version(opts)
  end

  defp migrator do
    Literature.Migrations.Postgres
  end
end
