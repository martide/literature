defmodule Literature.BlogView do
  use Literature.Web, :view

  defp logo,
    do: Application.fetch_env!(:literature, :image)

  defp title,
    do: Application.fetch_env!(:literature, :title)
end
