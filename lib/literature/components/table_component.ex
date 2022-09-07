defmodule Literature.TableComponent do
  use Literature.Web, :live_component

  @impl Phoenix.LiveComponent
  def table(assigns) do
    ~H"""
    <div class="col-span-4 overflow-x-auto relative shadow-md sm:rounded-lg w-full">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <%= for {_, column} <- @columns do %>
              <th scope="col" class="py-3 px-6">
                <%= column %>
              </th>
            <% end %>
            <th scope="col" class="py-3 px-6">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <%= for item <- @items do %>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <%= for {column, _} <- @columns do %>
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <%= Map.get(item, column) %>
                </th>
              <% end %>
              <td class="py-4 px-6">
                <%= live_patch "Edit", to: "#{literature_dashboard_path(@socket, :list_authors)}/#{item.id}/edit", class: "font-medium text-primary-600 dark:text-primary-500 hover:underline" %>
              </td>
            </tr>
          <% end %>
        </tbody>
      </table>
    </div>
    """
  end
end
