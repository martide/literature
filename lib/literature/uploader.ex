defmodule Literature.Uploader do
  use Waffle.Definition
  use Waffle.Ecto.Definition

  alias Literature.Config

  @acl :public_read
  @extension_whitelist ~w(.jpg .jpeg .png)
  @versions ~w(w100 w200 w300 w400 w500 w600 w700 w800 w900 original)a

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

  # Define a thumbnail transformation:
  def transform(:w100, _) do
    {:convert, "-resize 10% -format webp", :webp}
  end

  # Define a thumbnail transformation:
  def transform(:w200, _) do
    {:convert, "-resize 20% -format webp", :webp}
  end

  # Define a thumbnail transformation:
  def transform(:w300, _) do
    {:convert, "-resize 30% -format webp", :webp}
  end

  # Define a thumbnail transformation:
  def transform(:w400, _) do
    {:convert, "-resize 40% -format webp", :webp}
  end

  # Define a thumbnail transformation:
  def transform(:w500, _) do
    {:convert, "-resize 50% -format webp", :webp}
  end

  # Define a thumbnail transformation:
  def transform(:w600, _) do
    {:convert, "-resize 60% -format webp", :webp}
  end

  # Define a thumbnail transformation:
  def transform(:w700, _) do
    {:convert, "-resize 70% -format webp", :webp}
  end

  # Define a thumbnail transformation:
  def transform(:w800, _) do
    {:convert, "-resize 80% -format webp", :webp}
  end

  # Define a thumbnail transformation:
  def transform(:w900, _) do
    {:convert, "-resize 90% -format webp", :webp}
  end

  # To retain the original filename
  def filename(version, {file, _}) do
    file_name = Path.basename(file.file_name, Path.extname(file.file_name))

    if String.ends_with?(file_name, to_string(version)) || version == :original,
      do: file_name,
      else: Slugy.slugify("#{file_name} #{version}")
  end
end
