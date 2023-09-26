defmodule Literature.Redirect do
  @moduledoc """
  Literature Redirect Model
  """
  use Literature.Web, :model

  @available_types [
    :"301",
    :"302"
  ]

  schema "literature_redirects" do
    field(:from, :string)
    field(:to, :string)
    field(:type, Ecto.Enum, values: @available_types)

    belongs_to(:publication, Publication)

    timestamps()
  end

  @required ~w(
    from
    to
    publication_id
    type
  )a

  def changeset(redirect, params) do
    redirect
    |> maybe_generate_id()
    |> cast(params, @required)
    |> validate_required(@required, message: "This field is required")
  end
end
