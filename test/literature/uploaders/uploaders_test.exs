defmodule Literature.UploadersTest do
  use Literature.DataCase, async: true

  alias Literature.Uploaders

  @storage_path "/tmp/literature"

  test "stores different versions of image" do
    scope = %{id: Ecto.UUID.generate()}

    file = %{
      path: "test/support/fixtures/image.png",
      filename: "image-w227x95.png"
    }

    assert {:ok, _} = Uploaders.store({file, scope})

    png_path = "#{@storage_path}/literature/#{scope.id}/image-w227x95.png"
    jpg_path = "#{@storage_path}/literature/#{scope.id}/image-w227.jpg"
    webp_path = "#{@storage_path}/literature/#{scope.id}/image-w227.webp"

    assert File.exists?(png_path)
    assert File.exists?(jpg_path)
    assert File.exists?(webp_path)

    assert Image.open!(png_path) |> Image.width() == 227
    assert Image.open!(jpg_path) |> Image.width() == 227
    assert Image.open!(webp_path) |> Image.width() == 227
  end
end
