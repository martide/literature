defmodule Literature.Uploaders.Processor do
  @moduledoc false

  alias Literature.Config
  alias Waffle.Transformations.Convert

  def process(definition, version, {file, scope}) do
    transform = definition.transform(version, {file, scope})
    apply_transformation(file, transform)
  end

  defp apply_transformation(_, :skip), do: [{:ok, nil}]
  defp apply_transformation(file, :noaction), do: [{:ok, file}]

  defp apply_transformation(file, {cmd, conversion}) do
    file
    |> generates_image_sizes(conversion)
    |> Enum.map(&Convert.apply(cmd, file, &1))
  end

  defp apply_transformation(file, {cmd, conversion, extension}) do
    file
    |> generates_image_sizes(conversion)
    |> Enum.map(&Convert.apply(cmd, file, &1, extension))
  end

  # To generate image sizes from 100px until the image height
  defp generates_image_sizes(%{path: path}, conversion) do
    %{height: height} =
      path
      |> Mogrify.open()
      |> Mogrify.verbose()

    Range.new(100, height, Config.waffle_width_step())
    |> Enum.map(&"-resize #{&1}x#{&1}^ #{conversion}")
  end
end
