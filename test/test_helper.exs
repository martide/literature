if function_exported?(Code, :put_compiler_option, 2) do
  Code.put_compiler_option(:warnings_as_errors, true)
end

Logger.configure(level: :warn)

ExUnit.start()

Literature.Test.Repo.start_link()

defmodule Literature.Case do
  @moduledoc false

  use ExUnit.CaseTemplate

  alias Literature.{Author, Post, Tag}
  alias Literature.Test.Repo

  using do
    quote do
      use ExUnitProperties

      import Literature.Case

      alias Literature.{Author, Post, Tag}
      alias Repo
    end
  end

  @delete_query """
  DO $$BEGIN
  DELETE FROM literature_posts;
  DELETE FROM literature_authors;
  DELETE FROM literature_tags;
  END$$
  """

  setup tags do
    # We are intentionally avoiding Sandbox mode for testing. Within Sandbox mode everything
    # happens in a transaction, which prevents the use of LISTEN/NOTIFY messages.
    if tags[:integration] do
      Repo.query!(@delete_query, [])

      on_exit(fn -> Repo.query!(@delete_query, []) end)
    end

    {:ok, %{}}
  end

  def insert!(args, opts \\ []) do
    args
    |> build(opts)
    |> Repo.insert!()
  end

  def insert!(literature, args, opts) do
    changeset = build(args, opts)

    Literature.insert!(literature, changeset)
  end
end
