defmodule Literature.QueryHelpers do
  @moduledoc false
  import Ecto.Query, warn: false

  def select_options(list) when is_list(list) do
    Enum.map(list, &{&1.name, &1.id})
  end

  def where_preload(query, %{preload: preload}),
    do: preload(query, ^preload)

  def where_preload(query, _), do: query
end
