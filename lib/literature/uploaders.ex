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
  @versions ~w(original jpg webp)a

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

  def storage_dir(:original, {_, scope}),
    do: "literature/#{scope.id}"

  def storage_dir(version, {_, scope}),
    do: "literature/#{scope.id}/#{version}"

  def filename(version, {file, _}, size) do
    file_name = Path.basename(file.file_name, Path.extname(file.file_name))

    if String.ends_with?(file_name, to_string(version)) || version == :original,
      do: file_name,
      else: Slugy.slugify("#{file_name} #{size}w")
  end
end
