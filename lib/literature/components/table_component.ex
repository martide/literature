defmodule Literature.TableComponent do
  use Literature.Web, :live_component

  import Scrivener.PhoenixView

  @impl Phoenix.LiveComponent
  def update(assigns, socket) do
    socket
    |> assign(assigns)
    |> assign_new(:params, fn -> Map.new() end)
    |> then(&{:ok, &1})
  end

  @impl Phoenix.LiveComponent
  def render(assigns) do
    ~H"""
    <div class="col-span-4 overflow-x-auto relative sm:rounded-lg w-full">
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <%= for column <- @columns do %>
              <th scope="col" class="py-3 px-6">
                <%= table_sort(@base_path, @params, column) %>
              </th>
            <% end %>
            <th scope="col" class="py-3 px-6">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <%= if Enum.any?(@items) do %>
            <%= for item <- @items do %>
              <tr class="bg-white border-b hover:bg-gray-50">
                <%= for {field, _} <- @columns do %>
                  <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                    <%= Map.get(item, field) %>
                  </th>
                <% end %>
                <td class="py-4 px-6">
                  <.actions item={item} base_path={@base_path} />
                </td>
              </tr>
            <% end %>
          <% else %>
            <tr>
              <td colspan={Enum.count(@columns) + 1}>
                <p class="py-5 text-center font-medium">No data found. Create a new one!</p>
              </td>
            </tr>
          <% end %>
        </tbody>
      </table>
      <%= paginate @socket, @page, fn socket, [page: page] -> literature_dashboard_path(socket, @live_action, page, @params) end %>
    </div>
    """
  end

  defp actions(assigns) do
    assigns =
      Map.put(assigns, :base_path, String.replace_suffix(assigns.base_path, "/page/1", ""))

    ~H"""
    <div class="flex items-center space-x-2">
      <%= live_patch to: "#{@base_path}/#{@item.id}/edit", id: "edit-#{@item.id}", class: "hover:text-primary-600 transition duration-300 ease-in-out" do %>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
        </svg>
      <% end %>
      <%= link to: "#", phx_click: "open_delete_modal", phx_value_id: @item.id, id: "delete-#{@item.id}", class: "hover:text-red-600 transition duration-300 ease-in-out" do %>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>
      <% end %>
    </div>
    """
  end

  defp table_sort(base_path, params, {field, text}) do
    base_path = String.replace_suffix(base_path, "/page/1", "/page/#{params["page"] || 1}")
    direction = params["sort_direction"]

    sort_direction =
      if params["sort_field"] == to_string(field), do: reverse(direction), else: "desc"

    opts = %{
      sort_field: field,
      sort_direction: sort_direction
    }

    live_patch(text, to: "#{base_path}?#{query_string(params, opts)}")
  end

  defp query_string(params, opts) do
    params = params |> Plug.Conn.Query.encode() |> URI.decode_query()

    opts = %{
      "sort_field" => opts[:sort_field] || params["sort_field"] || nil,
      "sort_direction" => opts[:sort_direction] || params["sort_direction"] || nil
    }

    params
    |> Map.delete("page")
    |> Map.merge(opts)
    |> Enum.filter(fn {_, v} -> v != nil end)
    |> Enum.into(%{})
    |> URI.encode_query()
  end

  defp reverse("desc"), do: "asc"
  defp reverse(_), do: "desc"
end
