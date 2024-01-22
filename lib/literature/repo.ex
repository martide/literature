defmodule Literature.Repo do
  @moduledoc """
  Wrappers around `Ecto.Repo` callbacks.

  These functions should be used when working with an Ecto repo. These functions
  will resolve the correct repo instance, and set the schema prefix and the log level, according
  to the Literature configuration.
  """

  alias Literature.Config

  @doc "Wraps `c:Ecto.Repo.paginate/2`."
  def paginate(queryable, opts \\ []) do
    Config.repo().paginate(queryable, opts)
  end

  @doc "Wraps `c:Ecto.Repo.all/2`."
  def all(queryable, opts \\ []) do
    Config.repo().all(queryable, opts)
  end

  @doc "Wraps `c:Ecto.Repo.get/2`."
  def get(struct, opts \\ []) do
    Config.repo().get(struct, opts)
  end

  @doc "Wraps `c:Ecto.Repo.get_by/2`."
  def get_by(struct, opts \\ []) do
    Config.repo().get_by(struct, opts)
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

  @doc "Wraps `c:Ecto.Repo.preload/2`."
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
end
