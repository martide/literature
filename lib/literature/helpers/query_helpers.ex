defmodule Literature.QueryHelpers do
  @moduledoc false
  import Ecto.Query, warn: false

  def select_options(list) when is_list(list) do
    Enum.map(list, &{&1.name, &1.id})
  end

  def where_preload(query, attrs) do
    case Keyword.get(attrs, :preload, []) do
      nil -> query
      preloads -> preload(query, ^preloads)
    end
  end
end
