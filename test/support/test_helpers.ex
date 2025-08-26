defmodule Literature.TestHelpers do
  @moduledoc false
  use Literature.ConnCase

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

  def assert_upload_file(
        view,
        form_selector,
        sample_filename,
        upload_name \\ :attachment
      ) do
    assert view
           |> file_input(form_selector, upload_name, [
             %{name: sample_filename, content: File.read!("test/support/fixtures/image.png")}
           ])
           |> render_upload(sample_filename)
  end

  def random_string(length) do
    length
    |> :crypto.strong_rand_bytes()
    |> Base.url_encode64()
    |> binary_part(0, length)
  end
end
