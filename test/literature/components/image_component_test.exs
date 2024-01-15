defmodule Literature.ImageComponentTest do
  use ExUnit.Case
  alias Literature.ImageComponent

  test "it converts image tags with size attributes to picture tags" do
    tag = "<img src=\"/path/to/image-w300x453.jpg\" alt=\"An image\"> caption=\"An image\">"

    expected = ~s"""
    <picture>
      <source srcset=\"/path/to/image-w100.jpg 100w, /path/to/image-w200.jpg 200w, /path/to/image-w300.jpg 300w\"/>
      <source srcset=\"/path/to/image-w100.webp 100w, /path/to/image-w200.webp 200w, /path/to/image-w300.webp 300w\"/>
      <img src=\"/path/to/image-w300x453.jpg\" alt=\"An image\" width=\"300\" height=\"453\" loading=\"lazy\" />
      <figcaption style="font-style: italic;";>An image</figcaption>
    </picture>
    """

    assert ImageComponent.parse_image_tag(tag) == expected
  end

  test "it does not convert image tags missing size attributes on file name" do
    tag = "<img src=/path/to/image.jpg alt='An image' />"

    assert ImageComponent.parse_image_tag(tag) == tag
  end

  test "it does not convert image tags based on integergers set in the file name" do
    tag =
      "<img src=https://images.martide.com/en-employers/2022/07/aframax-tanker-1.jpg alt='Image' />"

    assert ImageComponent.parse_image_tag(tag) == tag
  end

  test "it does not convert image tags if only part of the string matches" do
    tag =
      "<img src=https://images.martide.com/en-employers/2022/07/aframax-tanker-x1-200.jpg alt='Image' />"

    assert ImageComponent.parse_image_tag(tag) == tag
  end
end
