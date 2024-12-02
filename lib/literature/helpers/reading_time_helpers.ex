defmodule Literature.ReadingTimeHelpers do
  @moduledoc false

  @doc """
  Removes tags in an html string then counts the words to estimate reading time.
  """
  def reading_time(nil), do: nil

  def reading_time(html, words_per_minute \\ 150) do
    # Should exclude picture and source tags generated by the ImageComponent
    html
    |> Enum.join("")
    |> String.replace(~r/<.*?>/, "")
    |> String.split(" ")
    |> Enum.reject(&(String.trim(&1) == ""))
    |> Enum.count()
    |> estimate(words_per_minute)
    |> output()
  end

  defp estimate(words, words_per_minute),
    do: Float.ceil(words / words_per_minute) |> trunc

  defp output(reading_time) do
    cond do
      reading_time <= 1 ->
        "1 min read"

      reading_time > 1 ->
        "#{reading_time} mins read"
    end
  end
end
