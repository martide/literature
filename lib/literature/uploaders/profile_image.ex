defmodule Literature.Uploaders.ProfileImage do
  @moduledoc """
  Literature Profile Image Uploader
  """
  use Waffle.Definition
  use Waffle.Ecto.Definition

  alias Literature.Config
  alias Literature.Uploaders.Helpers

  @thumbnail_width 160
  @extension_whitelist ~w(.jpg .jpeg .png)
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

  def transform(version, _) when version in @versions do
    &transform_image/2
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

  defp transform_image(version, original_file) do
    ext = "." <> Atom.to_string(version)
    base_file_name = Helpers.get_base_file_name(original_file.file_name)
    new_file_name = base_file_name <> ext

    with {:ok, new_image} <-
           original_file.path |> Image.open!() |> Image.thumbnail("#{@thumbnail_width}x"),
         tmp_path = Waffle.File.generate_temporary_path(new_file_name),
         {:ok, _new_image} <- Image.write(new_image, tmp_path, suffix: ext) do
      {
        :ok,
        %Waffle.File{original_file | path: tmp_path, file_name: new_file_name, is_tempfile?: true}
      }
    end
  end
end
