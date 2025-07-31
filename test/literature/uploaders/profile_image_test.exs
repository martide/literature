defmodule Literature.Uploaders.ProfileImageTest do
  use Literature.DataCase, async: true

  alias Literature.Uploaders.ProfileImage

  @storage_path "/tmp/literature"
  @thumbnail_width 160

  test "stores different versions of the profile image" do
    scope = %{id: Ecto.UUID.generate()}

    file = %{
      path: "test/support/fixtures/image.png",
      filename: "image.png"
    }

    assert {:ok, _} = ProfileImage.store({file, scope})

    assert File.exists?("#{@storage_path}/literature/#{scope.id}/image.png")
    assert File.exists?("#{@storage_path}/literature/#{scope.id}/image.webp")
    assert File.exists?("#{@storage_path}/literature/#{scope.id}/image.jpg")

    assert Image.open!("#{@storage_path}/literature/#{scope.id}/image.png")
           |> Image.width() == @thumbnail_width

    assert Image.open!("#{@storage_path}/literature/#{scope.id}/image.webp")
           |> Image.width() == @thumbnail_width

    assert Image.open!("#{@storage_path}/literature/#{scope.id}/image.jpg")
           |> Image.width() == @thumbnail_width
  end
end
