defmodule Literature.Uploaders.Helpers do
  @moduledoc false
  alias Literature.Uploaders
  alias Literature.Uploaders.DifferentSizes

  @doc """
  Get the width and height of an image from its filename or url.
  Filename should be in the format "filename-w{width}x{height}.ext" to properly
  extract the width and height. `nil` is returned if dimension cannot be extracted.
  """
  @spec get_dimension(String.t()) :: {integer(), integer()} | nil
  def get_dimension(url_or_filename_with_ext) do
    regex = ~r/-w(\d+)x(\d+)\.\w+$/

    case Regex.run(regex, url_or_filename_with_ext) do
      [_, width, height] -> {String.to_integer(width), String.to_integer(height)}
      _ -> nil
    end
  end

  @doc """
  Appends or update the width in the filename then slugify it.
  """
  @spec append_width(String.t(), integer()) :: String.t()
  def append_width(file_name, width) do
    file_name = Path.basename(file_name, Path.extname(file_name))
    size_rgx = ~r/-w\d+.*$/

    if String.match?(file_name, size_rgx) do
      file_name
      |> String.replace(size_rgx, "-w#{width}")
      |> Slugy.slugify()
    else
      (file_name <> " w#{width}")
      |> Slugy.slugify()
    end
  end

  @doc """
  Asynchronously upload different sizes of a given file
  """
  @spec async_upload_different_sizes(map(), any()) :: {:ok, pid()}
  def async_upload_different_sizes(file, scope) do
    Task.start(fn ->
      url = Uploaders.url({file.file_name, scope})
      DifferentSizes.store_different_sizes({url, scope})
    end)
  end

  @doc """
  Get the base file name without extension.
  """
  @spec get_base_file_name(String.t()) :: String.t()
  def get_base_file_name(file_name_with_ext) do
    Path.basename(file_name_with_ext, Path.extname(file_name_with_ext))
  end

  @spec transform_image_to_version(atom(), map()) :: {:ok, map()}
  def transform_image_to_version(version, original_file) do
    ext = "." <> Atom.to_string(version)
    base_file_name = get_base_file_name(original_file.file_name)
    new_file_name = base_file_name <> ext

    with {:ok, new_image} <- original_file.path |> Image.open(),
         tmp_path = Waffle.File.generate_temporary_path(new_file_name),
         {:ok, _new_image} <- Image.write(new_image, tmp_path, suffix: ext) do
      {
        :ok,
        %Waffle.File{original_file | path: tmp_path, file_name: new_file_name, is_tempfile?: true}
      }
    end
  end

  @spec resize_image(String.t(), integer()) :: {:ok, Vix.Vips.Image.t()}
  def resize_image(path, width) do
    with {:ok, image} <- Image.open(path) do
      Image.thumbnail(image, "#{width}x")
    end
  end
end
