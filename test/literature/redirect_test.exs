defmodule Literature.RedirectTest do
  use Literature.DataCase

  alias Literature.Redirect

  describe "fields" do
    has_fields(
      Redirect,
      ~w(id from to publication_id type)a ++ timestamps()
    )

    has_timestamp_type(Redirect, :utc_datetime)
  end

  describe "associations" do
    assocs = ~w(publication)a
    has_associations(Redirect, assocs)

    belongs_to?(Redirect, :publication, via: Literature.Publication)
  end
end
