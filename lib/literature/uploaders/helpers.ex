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
end
