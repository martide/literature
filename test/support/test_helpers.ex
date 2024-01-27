defmodule Literature.TestHelpers do
  @moduledoc false

  import Phoenix.LiveViewTest

  def form_has_error?(view, field, expected_error) do
    view
    |> element(".invalid-feedback[phx-feedback-for='#{field}']", expected_error)
    |> has_element?()
  end
end
