defmodule Literature.TableComponent do
  @moduledoc false
  use Literature.Web, :live_component

  import Literature.PaginationComponent

  alias Plug.Conn.Query

  @impl Phoenix.LiveComponent
  def update(assigns, socket) do
    socket
    |> assign(assigns)
    |> assign_new(:params, fn -> Map.new() end)
    |> assign_new(:actions_modal?, fn -> false end)
    |> then(&{:ok, &1})
  end

  @impl Phoenix.LiveComponent
  def render(assigns) do
    ~H"""
    <div class="col-span-4 relative sm:rounded-lg w-full">
      <div class="flex items-center justify-between mb-5">
        <div class="w-1/2 space-y-3">
          <.form
            :let={f}
            for={%{}}
            as={:search}
            phx-target={@myself}
            phx-change="search"
            class="flex items-center border-gray-300 border rounded-lg text-gray-900 pl-2.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                clip-rule="evenodd"
              />
            </svg>
            <input
              type="search"
              name={f[:q].name}
              value={@params["q"]}
              class="text-sm rounded-lg focus:outline-hidden block w-full p-2.5"
              placeholder="Find"
              autofocus={true}
              phx-debounce={300}
            />
          </.form>
          {filter_status(Enum.into(@columns, %{}), assigns)}
        </div>
        <%= if @actions_modal? do %>
          <button
            phx-click="open_create_modal"
            class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-hidden focus:ring-primary-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-3 md:mr-0 flex items-center"
          >
            <.create_icon />
            <span class="flex-1 ml-2 whitespace-nowrap">Create new</span>
          </button>
        <% else %>
          <.link
            navigate={@new_path}
            class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-hidden focus:ring-primary-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-3 md:mr-0 flex items-center"
          >
            <.create_icon />
            <span class="flex-1 ml-2 whitespace-nowrap">Create new</span>
          </.link>
        <% end %>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <%= for column <- @columns do %>
                <th scope="col" class="py-3 px-6">
                  <.table_sort base_path={@base_path} params={@params} column={column} />
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
                <tr class="bg-white border-gray-200 border-b hover:bg-gray-50">
                  <%= for {field, _} <- @columns do %>
                    <td scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                      <.item item={item} field={field} base_path={@base_path} />
                    </td>
                  <% end %>
                  <td class="py-4 px-6">
                    <.actions item={item} base_path={@base_path} actions_modal?={@actions_modal?} />
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
      </div>
      <div class="mt-10 text-center">
        <.pagination
          :if={!Enum.empty?(@page.entries)}
          class="self-center"
          path={literature_dashboard_path(@socket, @live_action, @slug, %{page: ":page"})}
          current_page={@page.page_number}
          page_number={@page.page_number}
          page_size={@page.page_size}
          total_entries={@page.total_entries}
          total_pages={@page.total_pages}
        />
      </div>
    </div>
    """
  end

  @impl Phoenix.LiveComponent
  def handle_event(
        "search",
        %{"search" => search},
        %{assigns: %{params: params, live_action: live_action, slug: slug}} = socket
      ) do
    params
    |> Map.delete("page")
    |> Map.merge(search)
    |> then(&push_patch(socket, to: literature_dashboard_path(socket, live_action, slug, &1)))
    |> then(&{:noreply, &1})
  end

  @impl Phoenix.LiveComponent
  def handle_event(
        "filter",
        %{"filter" => filter},
        %{assigns: %{params: params, live_action: live_action, slug: slug}} = socket
      ) do
    params
    |> Map.delete("page")
    |> Map.merge(filter)
    |> then(&push_patch(socket, to: literature_dashboard_path(socket, live_action, slug, &1)))
    |> then(&{:noreply, &1})
  end

  defp actions(assigns) do
    assigns =
      Map.put(assigns, :base_path, String.replace_suffix(assigns.base_path, "?page=1", ""))

    ~H"""
    <div class="flex items-center space-x-2">
      <%= if(@actions_modal?) do %>
        <div
          id={"edit-#{@item.id}"}
          phx-click="open_edit_modal"
          phx-value-id={@item.id}
          class="hover:text-primary-600 transition duration-300 ease-in-out"
        >
          <.edit_icon />
        </div>
      <% else %>
        <.link
          id={"edit-#{@item.id}"}
          patch={"#{@base_path}/#{@item.slug}/edit"}
          class="hover:text-primary-600 transition duration-300 ease-in-out"
        >
          <.edit_icon />
        </.link>
      <% end %>
      <.link
        href="#"
        phx-click="open_delete_modal"
        phx-value-id={@item.id}
        id={"delete-#{@item.id}"}
        class="hover:text-red-600 transition duration-300 ease-in-out"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </.link>
    </div>
    """
  end

  defp create_icon(assigns) do
    ~H"""
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
      <path
        fill-rule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
        clip-rule="evenodd"
      />
    </svg>
    """
  end

  defp edit_icon(assigns) do
    ~H"""
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
      />
    </svg>
    """
  end

  defp item(%{field: :status, item: item} = assigns) do
    class =
      case Map.get(item, :status) do
        "scheduled" -> "bg-yellow-100 text-yellow-800"
        "published" -> "bg-primary-100 text-primary-800"
        _ -> "bg-gray-100 text-gray-800"
      end

    assigns =
      assign(assigns, :class, class)

    ~H"""
    <span class={"capitalize text-xs font-semibold mr-2 px-2.5 py-1 rounded-lg #{@class}"}>
      {Map.get(@item, :status)}
    </span>
    """
  end

  defp item(%{field: :published_at} = assigns) do
    ~H"""
    {Map.get(@item, :published_at)
    |> case do
      nil -> ""
      datetime -> Timex.format!(datetime, "%d %b %Y at %I:%M %p", :strftime)
    end}
    """
  end

  defp item(%{field: :visibility, item: item} = assigns) do
    visible? = Map.get(item, :visibility)
    label = (visible? && "Public") || "Private"
    class = (visible? && "bg-green-100 text-green-800") || "bg-red-100 text-red-800"

    assigns =
      assign(assigns, label: label, class: class)

    ~H"""
    <span class={"text-xs font-semibold mr-2 px-2.5 py-1 rounded-lg #{@class}"}>
      {@label}
    </span>
    """
  end

  defp item(%{field: :posts} = assigns) do
    ~H"""
    <span class="text-xs font-semibold mr-2 px-2.5 py-1 rounded-lg">
      {@item |> Map.get(:posts) |> length()}
    </span>
    """
  end

  defp item(%{field: :enable_posts_custom_order} = assigns) do
    ~H"""
    <%= if Map.get(@item, :enable_posts_custom_order) do %>
      <.link
        patch={"#{@base_path}/#{@item.slug}/sort-posts"}
        class="hover:text-primary-600 transition duration-300 ease-in-out"
      >
        Custom
      </.link>
    <% else %>
      Date
    <% end %>
    """
  end

  defp item(assigns) do
    ~H"""
    {Map.get(@item, @field)}
    """
  end

  defp filter_status(%{published_at: _}, %{params: params} = assigns) do
    params = Map.put_new(params, "status", "all")
    assigns = Map.put(assigns, :params, params)

    ~H"""
    <form phx-target={@myself} phx-change="filter">
      <ul class="flex items-center text-gray-600 text-sm font-semibold">
        <.radio_button label="All" value="all" status={@params["status"]} />
        <.radio_button label="Drafts" value="drafts" status={@params["status"]} />
        <.radio_button label="Scheduled" value="scheduled" status={@params["status"]} />
        <.radio_button label="Published" value="published" status={@params["status"]} />
      </ul>
    </form>
    """
  end

  defp filter_status(%{visibility: _}, %{params: params} = assigns) do
    params = Map.put_new(params, "status", "all")
    assigns = Map.put(assigns, :params, params)

    ~H"""
    <form phx-target={@myself} phx-change="filter">
      <ul class="flex items-center text-gray-600 text-sm font-semibold">
        <.radio_button label="All" value="all" status={@params["status"]} />
        <.radio_button label="Public" value="public" status={@params["status"]} />
        <.radio_button label="Private" value="private" status={@params["status"]} />
      </ul>
    </form>
    """
  end

  defp filter_status(_, _), do: nil

  defp radio_button(assigns) do
    ~H"""
    <li class="hover:bg-gray-100 w-full rounded-sm transition duration-300 ease-in-out">
      <label class="flex items-center cursor-pointer p-3">
        <input
          type="radio"
          name="filter[status]"
          value={@value}
          class="w-4 h-4 border-gray-300 text-primary-700 bg-primary-700"
          checked={@status == @value}
        />
        <span class="px-2">{@label}</span>
      </label>
    </li>
    """
  end

  defp table_sort(%{column: {:posts, _text}} = assigns) do
    ~H"""
    <% {:posts, text} = @column %>
    {text}
    """
  end

  defp table_sort(%{params: params, column: {field, text}} = assigns) do
    direction = params["sort_direction"]

    sort_direction =
      if params["sort_field"] == to_string(field), do: reverse(direction), else: "desc"

    opts = %{
      sort_field: field,
      sort_direction: sort_direction
    }

    assigns =
      assign(assigns, opts: opts, text: text)

    ~H"""
    <.link patch={"#{@base_path}?#{query_string(@params, @opts)}"}>
      {@text}
    </.link>
    """
  end

  defp query_string(params, opts) do
    params = params |> Query.encode() |> URI.decode_query()

    opts = %{
      "page" => opts[:page] || params["page"] || nil,
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
