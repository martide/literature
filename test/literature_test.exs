defmodule LiteratureTest do
  use ExUnit.Case
  doctest Literature

  test "greets the world" do
    assert Literature.hello() == :world
  end
end
