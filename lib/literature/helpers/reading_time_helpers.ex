defmodule Literature.ReadingTimeHelpers do
  @moduledoc false

  @doc """
  Count the words of a setence
  """
  def reading_time(nil), do: nil

  def reading_time(html, words_per_minute \\ 150) do
    html
    |> Enum.join("")
    |> String.split(~r/[\s_&!?:@$%^,\.]+/)
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
