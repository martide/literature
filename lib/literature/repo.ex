defmodule Literature.Repo do
  @moduledoc """
  Wrappers around `Ecto.Repo` callbacks.
  
  These functions should be used when working with an Ecto repo. These functions
  will resolve the correct repo instance, and set the schema prefix and the log level, according
  to the Literature configuration.
  """

  @repo Application.compile_env(:literature, :repo)

  @doc "Wraps `c:Ecto.Repo.all/2`."
  def all(queryable, opts \\ []) do
    @repo.all(queryable, opts)
  end

  @doc "Wraps `c:Ecto.Repo.get/2`."
  def get(struct, opts \\ []) do
    @repo.get(struct, opts)
  end

  @doc "Wraps `c:Ecto.Repo.insert/2`."
  def insert(struct_or_changeset, opts \\ []) do
    @repo.insert(struct_or_changeset, opts)
  end

  @doc "Wraps `c:Ecto.Repo.update/2`."
  def update(changeset, opts \\ []) do
    @repo.update(changeset, opts)
  end

  @doc "Wraps `c:Ecto.Repo.delete/2`."
  def delete(struct_or_changeset, opts \\ []) do
    @repo.delete(struct_or_changeset, opts)
  end
end
