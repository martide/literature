defmodule Literature.Uploaders do
  @moduledoc """
    Literature Uploaders
  """
  use Waffle.Definition.Storage
  use Waffle.Actions.Delete
  use Literature.Uploaders.Actions.Store
  use Literature.Uploaders.Actions.Url
  use Literature.Uploaders.Versioning
  use Waffle.Ecto.Definition

  alias Literature.Config

  @extension_whitelist ~w(.jpg .jpeg .png)
  # imagemagick 7 is required for avif conversions
  @versions ~w(original jpg webp)a

  # Set to async false to prevent `Erlang error: :emfile`
  # caused by too many open files when calling `Mogrify.verbose/1`
  @async false

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
    {:convert, "-format jpg", :jpg}
  end

  def transform(:webp, _) do
    {:convert, "-format webp", :webp}
  end

  def transform(:avif, _) do
    {:convert, "-format avif", :avif}
  end

  def storage_dir(_, {_, scope}),
    do: "literature/#{scope.id}"

  def filename(:original, {file, _}, _) do
    file_name = Path.basename(file.file_name, Path.extname(file.file_name))
    Slugy.slugify(file_name)
  end

  def filename(_version, {file, _}, size) do
    file_name = Path.basename(file.file_name, Path.extname(file.file_name))
    suffix = String.split(file_name, "w") |> List.last()
    Slugy.slugify(String.replace_suffix(file_name, suffix, to_string(size)))
  end

  def s3_object_headers(_version, _) do
    [cache_control: "public, max-age=31536000"]
  end
end
