defmodule Literature.TestHelpers do
  @moduledoc false

  import Phoenix.LiveViewTest

  def form_has_error?(view, field, expected_error) do
    view
    |> element(".invalid-feedback[phx-feedback-for='#{field}']", expected_error)
    |> has_element?()
  end

  def file_upload_image(filename \\ "image") do
    %Plug.Upload{
      content_type: "image/png",
      filename: "#{filename}.png",
      path: "test/support/fixtures/image.png"
    }
  end
end
