defmodule Literature.ReadingTimeHelpersTest do
  use ExUnit.Case

  alias Literature.ReadingTimeHelpers

  @sample_html [
    ~s"""
    <picture>
      <source srcset=\"/path/to/image-w100.jpg 100w, /path/to/image-w200.jpg 200w, /path/to/image-w300.jpg 300w\"/>
      <source srcset=\"/path/to/image-w100.webp 100w, /path/to/image-w200.webp 200w, /path/to/image-w300.webp 300w\"/>
      <img src=\"/path/to/image-w300x453.jpg\" alt=\"An image's test\" width=\"300\" height=\"453\" loading=\"lazy\" />
      <figcaption style="font-style: italic;";></figcaption>
    </picture>
    """,
    ~s"""
      <img src=\"/path/to/image-w300x453.jpg\" alt=\"An image's test\" caption=\"An image's test\" />
    """
  ]

  @words_per_minute 150

  test "removes tags and counts words to estimate reading time with less than 1 minute" do
    assert ReadingTimeHelpers.reading_time(@sample_html) == "1 min read"

    additional_html =
      for i <- 1..div(@words_per_minute, 5) do
        # 5 words per paragraph
        # Create paragraphs with 5 words each to fill out 1 minute
        ~s"""
          <p>Paragraph with five words #{i} </p>
          <p></p>
        """
      end

    assert ReadingTimeHelpers.reading_time(@sample_html ++ additional_html) == "1 min read"
  end

  test "removes tags and counts words to estimate reading time with greater than 1 minute" do
    # should be 400 words and 3 minute read
    additional_html =
      for i <- 1..80 do
        # 5 words per paragraph
        # Create paragraphs with 5 words each to fill out 1 minute
        ~s"""
          <p> Paragraph with five words #{i} </p>
          <p></p>
        """
      end

    assert ReadingTimeHelpers.reading_time(@sample_html ++ additional_html) == "3 mins read"

    additional_html =
      for i <- 1..(div(@words_per_minute, 5) * 5) do
        ~s"""
          <p> Paragraph with five words #{i} </p>
          <p></p>
        """
      end

    assert ReadingTimeHelpers.reading_time(@sample_html ++ additional_html) == "5 mins read"
  end
end
