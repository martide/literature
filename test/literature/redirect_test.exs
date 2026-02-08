defmodule Literature.RedirectTest do
  use Literature.DataCase

  alias Literature.Redirect

  describe "fields" do
    has_fields(
      Redirect,
      ~w(id from to publication_id type)a ++ timestamps()
    )

    # Default to :naive_datetime for backwards compatibility
    # Parent apps can configure: config :literature, timestamps_opts: [type: :utc_datetime]
    has_timestamp_type(Redirect, :naive_datetime)
  end

  describe "associations" do
    assocs = ~w(publication)a
    has_associations(Redirect, assocs)

    belongs_to?(Redirect, :publication, via: Literature.Publication)
  end
end
