defmodule Literature.Uploaders.DifferentSizes do
  @moduledoc """
  Literature Uploaders
  """
  use Waffle.Definition
  use Waffle.Ecto.Definition

  alias Literature.Config
  alias Literature.Uploaders.Helpers

  @extension_whitelist ~w(.jpg .jpeg .png)
  @versions ~w(jpg webp)a

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
    &Helpers.transform_image_to_version/2
  end

  def storage_dir(_, {_, scope}),
    do: "literature/#{scope.id}"

  def filename({_ext, width}, {file, _scope}) do
    Helpers.append_width(file.file_name, width)
  end

  # Sets the filename when storing the file.
  # Appends the width in "-w{width}" format to the filename if none exists or
  # replaces the existing width with the new width
  def filename(_version, {%Waffle.File{path: path, file_name: file_name}, _scope}) do
    width = path |> Image.open!() |> Image.width()
    Helpers.append_width(file_name, width)
  end

  # Sets the filename when retrieving the URL.
  def filename(_version, {file, _}) do
    file_name = Path.basename(file.file_name, Path.extname(file.file_name))
    Slugy.slugify(file_name)
  end

  def s3_object_headers(_version, _) do
    [cache_control: "public, max-age=31536000"]
  end

  def store_different_sizes({url, scope}, width_step \\ Config.waffle_width_step()) do
    %{path: path} = file = Waffle.File.new(url, __MODULE__)
    width = path |> Image.open!() |> Image.width()

    if width < 100 do
      []
    else
      Range.new(100, width, width_step)
      |> Enum.into([])
      |> case do
        [_ | _] = widths ->
          widths
          |> Enum.map(&store_custom_size({file, scope}, &1))
          |> handle_responses()

        _ ->
          {file, scope}
          |> store_custom_size(100)
          |> List.wrap()
          |> handle_responses()
      end
    end
  end

  defp store_custom_size({file, scope}, width) do
    file
    |> resize_image(width)
    |> store_saved_file(scope)
  end

  defp resize_image(file, width) do
    with {:ok, image} <- Image.open(file.path),
         {:ok, new_image} <- Image.thumbnail(image, "#{width}x"),
         tmp_path = Waffle.File.generate_temporary_path(file),
         {:ok, _new_image} <- Image.write(new_image, tmp_path) do
      {
        :ok,
        %Waffle.File{file | path: tmp_path, is_tempfile?: true}
      }
    end
  end

  defp store_saved_file({:ok, file}, scope) do
    store({%{filename: file.file_name, path: file.path}, scope})
  end

  defp store_saved_file(err, _), do: err

  defp handle_responses(responses) do
    errors =
      responses
      |> Enum.filter(fn resp -> elem(resp, 0) == :error end)
      |> Enum.map(fn err -> elem(err, 1) end)

    if Enum.empty?(errors), do: :ok, else: {:error, errors}
  end
end
