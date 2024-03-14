defmodule Literature.Uploaders.ProfileImage do
  @moduledoc """
  Literature Profile Image Uploader
  """
  use Waffle.Definition
  use Waffle.Ecto.Definition

  alias Literature.Config
  alias Literature.Uploaders.Helpers

  @extension_whitelist ~w(.jpg .jpeg .png)
  # imagemagick 7 is required for avif conversions
  @versions ~w(jpg png webp)a

  def asset_host, do: Config.waffle_asset_host()
  def bucket, do: Config.waffle_bucket()
  def __storage, do: Config.waffle_storage()

  # Whitelist file extensions:
  def validate({file, _}) do
    Enum.member?(
      @extension_whitelist,
      file.file_name
      |> Path.extname()
      |> String.downcase()
    )
  end

  def transform(:jpg, _) do
    {:convert, "-resize 160x -format jpg", :jpg}
  end

  def transform(:png, _) do
    {:convert, "-resize 160x -format png", :png}
  end

  def transform(:webp, _) do
    {:convert, "-resize 160x -format webp", :webp}
  end

  def storage_dir(_, {_, scope}),
    do: "literature/#{scope.id}"

  # Original filename has width and height so we append just the width to the filename,
  # otherwise, no changes to the filename will be made
  def filename(_version, {%{file_name: file_name_with_ext}, _}) do
    base_file_name = Path.basename(file_name_with_ext, Path.extname(file_name_with_ext))

    case Helpers.get_dimension(file_name_with_ext) do
      {width, _height} ->
        suffix = String.split(base_file_name, "w") |> List.last()
        Slugy.slugify(String.replace_suffix(base_file_name, suffix, to_string(width)))

      _ ->
        Slugy.slugify(base_file_name)
    end
  end

  def s3_object_headers(_version, _) do
    [cache_control: "public, max-age=31536000"]
  end
end
