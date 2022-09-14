defmodule Literature.Uploader do
  use Waffle.Definition
  use Waffle.Ecto.Definition

  @versions ~w(original thumb)a
  @extension_whitelist ~w(.jpg .jpeg .png)

  # Whitelist file extensions:
  def validate({file, _}) do
    Enum.member?(
      @extension_whitelist,
      file.file_name
      |> IO.inspect()
      |> Path.extname()
      |> String.downcase()
    )
  end

  # Define a thumbnail transformation:
  def transform(:thumb, _) do
    {:convert, "-strip -thumbnail 250x250^ -gravity center -extent 250x250 -format png", :png}
  end

  # To retain the original filename:
  def filename(_, {file, _}),
    do: Path.basename(file.file_name, Path.extname(file.file_name))

  def bucket,
    do: Application.fetch_env!(:literature, :bucket)

  def __storage,
    do: Application.fetch_env!(:literature, :storage)
end
