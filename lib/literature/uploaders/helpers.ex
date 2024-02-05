defmodule Literature.Uploaders.Helpers do
  @moduledoc false

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
end
