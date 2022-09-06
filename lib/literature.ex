defmodule Literature do
  @moduledoc false

  alias Ecto.Changeset

  @doc false
  def insert(%Changeset{} = changeset, opts) do
    insert(__MODULE__, changeset, opts)
  end

  @doc false
  def insert!(%Changeset{} = changeset, opts) do
    insert!(__MODULE__, changeset, opts)
  end

  @doc """
  Similar to `insert/3`, but raises an `Ecto.InvalidChangesetError` if the job can't be inserted.
  """
  def insert!(name \\ __MODULE__, %Changeset{} = changeset, opts \\ []) do
    case insert(name, changeset, opts) do
      {:ok, job} ->
        job

      {:error, %Changeset{} = changeset} ->
        raise Ecto.InvalidChangesetError, action: :insert, changeset: changeset

      {:error, reason} ->
        raise RuntimeError, inspect(reason)
    end
  end
end
