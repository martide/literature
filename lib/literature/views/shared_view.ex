defmodule Literature.SharedView do
  use Literature.Web, :view

  defp render_tab(name, path, opts) do
    base_classes = "block py-2 pr-4 pl-3 rounded md:p-0 transition duration-300 ease-in-out"

    if String.contains?(opts[:path], opts[:slug]) do
      live_redirect(name,
        to: path,
        class: "#{base_classes} text-white bg-primary-700 md:bg-transparent md:text-primary-700"
      )
    else
      live_redirect(name,
        to: path,
        class:
          "#{base_classes} text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-700"
      )
    end
  end
end
