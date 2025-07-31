defmodule Literature.Uploaders.DifferentSizesTest do
  use Literature.DataCase

  alias Literature.Uploaders.DifferentSizes

  @storage_path "/tmp/literature"

  test "stores different versions and sizes of image" do
    scope = %{id: Ecto.UUID.generate()}
    path = "test/support/fixtures/image.png"
    DifferentSizes.store_different_sizes({path, scope})

    image_width = Image.open!(path) |> Image.width()

    widths =
      Range.new(100, image_width, 100)
      |> Enum.into([])

    for width <- widths do
      jpg_path = "#{@storage_path}/literature/#{scope.id}/image-w#{width}.jpg"
      webp_path = "#{@storage_path}/literature/#{scope.id}/image-w#{width}.webp"

      assert File.exists?(jpg_path)
      assert Image.open!(jpg_path) |> Image.width() == width

      assert File.exists?(webp_path)
      assert Image.open!(webp_path) |> Image.width() == width
    end
  end
end
