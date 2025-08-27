defmodule Literature.Repo do
  @moduledoc """
  Wrappers around `Ecto.Repo` callbacks.

  These functions should be used when working with an Ecto repo. These functions
  will resolve the correct repo instance, and set the schema prefix and the log level, according
  to the Literature configuration.
  """

  alias Literature.Config

  @doc "Wraps paginate function of the set `repo` in the config."
  def paginate(queryable, opts \\ []) do
    Config.repo().paginate(queryable, opts)
  end

  @doc "Wraps `c:Ecto.Repo.all/2`."
  def all(queryable, opts \\ []) do
    Config.repo().all(queryable, opts)
  end

  @doc "Wraps `c:Ecto.Repo.get/3`."
  def get(struct, id, opts \\ []) do
    Config.repo().get(struct, id, opts)
  end

  @doc "Wraps `c:Ecto.Repo.get_by/3`."
  def get_by(struct, clauses, opts \\ []) do
    Config.repo().get_by(struct, clauses, opts)
  end

  @doc "Wraps `c:Ecto.Repo.insert/2`."
  def insert(struct_or_changeset, opts \\ []) do
    Config.repo().insert(struct_or_changeset, opts)
  end

  @doc "Wraps `c:Ecto.Repo.update/2`."
  def update(changeset, opts \\ []) do
    Config.repo().update(changeset, opts)
  end

  @doc "Wraps `c:Ecto.Repo.delete/2`."
  def delete(struct_or_changeset, opts \\ []) do
    Config.repo().delete(struct_or_changeset, opts)
  end

  @doc "Wraps `c:Ecto.Repo.preload/3`."
  def preload(struct_or_changeset, preloads, opts \\ []) do
    Config.repo().preload(struct_or_changeset, preloads, opts)
  end

  @doc "Wraps `c:Ecto.Repo.insert_all/3`."
  def insert_all(schema_or_source, entries_or_query, opts) do
    Config.repo().insert_all(schema_or_source, entries_or_query, opts)
  end

  @doc "Wraps `c:Ecto.Repo.update_all/3`."
  def update_all(queryable, updates, opts) do
    Config.repo().update_all(queryable, updates, opts)
  end

  @doc "Wraps `c:Ecto.Repo.stream/2`."
  def stream(queryable, opts \\ []) do
    Config.repo().stream(queryable, opts)
  end

  @doc "Wraps `c:Ecto.Repo.transaction/2`."
  def transaction(queryable, opts \\ []) do
    Config.repo().transaction(queryable, opts)
  end
end
