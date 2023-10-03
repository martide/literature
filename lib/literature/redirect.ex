defmodule Literature.Redirect do
  @moduledoc """
  Literature Redirect Model
  """
  use Literature.Web, :model

  @available_types [
    301,
    302
  ]

  schema "literature_redirects" do
    field(:from, :string)
    field(:to, :string)
    field(:type, :integer)

    belongs_to(:publication, Publication)

    timestamps()
  end

  @required ~w(
    from
    to
    publication_id
    type
  )a

  def changeset(redirect, params \\ %{}) do
    redirect
    |> maybe_generate_id()
    |> cast(params, @required)
    |> validate_inclusion(:type, @available_types)
    |> maybe_put_initial_slash(:from)
    |> maybe_put_initial_slash(:to)
    |> validate_required(@required, message: "This field is required")
    |> check_constraint(:from,
      name: :from_must_not_be_equal_to_to,
      message: "From and To must not be equal"
    )
    |> unique_constraint(:from, name: :literature_redirects_publication_id_from_to_index)
  end

  def available_types, do: @available_types

  defp maybe_put_initial_slash(changeset, field) do
    case get_change(changeset, field) do
      nil ->
        changeset

      "/" <> _value ->
        changeset

      value ->
        put_change(changeset, field, "/" <> value)
    end
  end
end
