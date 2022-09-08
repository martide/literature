defmodule Literature.QueryHelpers do
  @moduledoc false

  def select_options(list) when is_list(list) do
    Enum.map(list, &{&1.name, &1.id})
  end
end
