defmodule Literature.PaginationComponent do
  @moduledoc false
  use Phoenix.Component

  @doc """
  In the `path` param you should specify :page (or %3Apage) as the place your page number will appear.
  e.g "/posts/:page" => "/posts/1".
  """
  attr :class, :string, default: ""
  attr :current_page, :integer, default: 1
  attr :sibling_count, :integer, default: 1
  attr :boundary_count, :integer, default: 1
  attr :path, :string, default: "/:page"
  attr :page_number, :integer, default: 1
  attr :page_size, :integer, default: 10
  attr :total_entries, :integer, default: nil
  attr :total_pages, :integer, required: true

  def pagination(assigns) do
    ~H"""
    <div class="flex flex-col items-center gap-2 px-6 py-6 sm:py-0 md:grid md:grid-cols-3">
      <.pagination_info
        page_number={@page_number}
        page_size={@page_size}
        total_entries={@total_entries}
        total_pages={@total_pages}
      />

      <nav aria-label="pagination" class={"#{@class} pagination mx-auto flex"}>
        <%= for item <- get_pagination_items(@total_pages, @current_page, @sibling_count, @boundary_count) do %>
          <%= if item.type == "prev" and item.enabled? do %>
            <.link
              patch={get_path(@path, item.number, @current_page)}
              class="ml-0 block rounded-l-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <span class="sr-only">Previous</span>
              <.chevron_left />
            </.link>
          <% end %>

          <%= if item.type == "page" do %>
            <%= if item.current? do %>
              <span class={get_box_class(item)}><%= item.number %></span>
            <% else %>
              <.link patch={get_path(@path, item.number, @current_page)} class={get_box_class(item)}>
                <%= item.number %>
              </.link>
            <% end %>
          <% end %>

          <%= if item.type == "..." do %>
            <a class="inline-flex items-center justify-center border border-gray-200 bg-white px-3.5 py-2 leading-5 text-gray-400">
              ...
            </a>
          <% end %>

          <%= if item.type == "next" and item.enabled? do %>
            <.link
              patch={get_path(@path, item.number, @current_page)}
              class="block rounded-r-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <span class="sr-only">Next</span>
              <.chevron_right />
            </.link>
          <% end %>
        <% end %>
      </nav>
    </div>
    """
  end

  defp get_box_class(item) do
    # Top & bottom padding adjusted from flowbite to compromise font-family
    base_classes = "px-3 leading-tight border "

    active_classes =
      if item.current?,
        do:
          "flex items-center z-10 text-blue-600 bg-blue-50 border-blue-300 hover:bg-blue-100 hover:text-blue-700",
        else: "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700"

    base_classes <> active_classes
  end

  defp get_path(path, "previous", current_page) do
    path |> encode_page(Integer.to_string(current_page - 1))
  end

  defp get_path(path, "next", current_page) do
    path |> encode_page(Integer.to_string(current_page + 1))
  end

  defp get_path(path, page_number, _current_page) do
    path |> encode_page(Integer.to_string(page_number))
  end

  def pagination_info(assigns) do
    ~H"""
    <div class="flex flex-col">
      <span class="text-sm text-gray-700">
        <span class="text-gray-500">Show</span>
        <span class="font-semibold text-gray-900">
          <%= entry_start(@page_number, @page_size) %>
        </span>
        -
        <span class="font-semibold text-gray-900">
          <%= entry_end(@page_number, @page_size, @total_entries) %>
        </span>
        <span class="text-gray-500">of</span>
        <span class="font-semibold text-gray-900"><%= @total_entries %></span>
      </span>
    </div>
    """
  end

  defp entry_start(page_number, page_size) do
    (page_number - 1) * page_size + 1
  end

  defp entry_end(page_number, page_size, total_entries) do
    min(page_size * page_number, total_entries)
  end

  defp encode_page(path, page) do
    path
    |> String.replace(":page", "#{page}")
    |> String.replace("page=%3Apage", "page=#{page}")
  end

  # credo:disable-for-next-line Credo.Check.Refactor.CyclomaticComplexity
  defp get_pagination_items(total_pages, current_page, sibling_count, boundary_count) do
    total_pages = max(1, total_pages)
    current_page = max(1, min(current_page, total_pages))
    boundary_count = max(0, min(boundary_count, total_pages))
    sibling_count = max(0, sibling_count)

    siblings_size = 1 + 2 * sibling_count

    start_siblings =
      max(1, min(current_page - sibling_count, total_pages - siblings_size - boundary_count + 1))

    end_siblings =
      min(max(current_page + sibling_count, siblings_size + boundary_count), total_pages)

    boundary_start =
      if boundary_count > 0 do
        1..min(boundary_count, start_siblings) |> Enum.to_list()
      else
        [start_siblings]
      end

    siblings = start_siblings..end_siblings |> Enum.to_list()

    boundary_end =
      if boundary_count > 0 do
        max(total_pages - boundary_count + 1, end_siblings)..total_pages |> Enum.to_list()
      else
        [end_siblings]
      end

    pages =
      [boundary_start, siblings, boundary_end]
      |> Enum.concat()
      |> Enum.sort()
      |> Enum.dedup()
      |> Enum.to_list()

    first_page = List.first(pages)
    last_page = List.last(pages)

    pages_next =
      pages
      |> Enum.drop(1)
      |> Enum.concat([List.last(pages) + 1])
      |> Enum.to_list()

    pages
    |> Enum.zip(pages_next)
    |> Enum.flat_map(fn t ->
      case t do
        {page, next} when next - page == 1 ->
          [%{type: "page", number: page}]

        {page, next} when next - page > 1 ->
          [%{type: "page", number: page}, %{type: "..."}]

        _ ->
          []
      end
    end)
    |> Enum.map(fn item ->
      case item do
        %{type: "page"} ->
          item
          |> Map.put(:first?, item.number == first_page)
          |> Map.put(:current?, item.number == current_page)
          |> Map.put(:last?, item.number == last_page)

        _ ->
          item
      end
    end)
    |> Enum.flat_map(fn item ->
      case item do
        %{first?: true, current?: true, last?: true} when total_pages > 1 ->
          [
            get_prev_item(current_page, total_pages),
            item,
            get_next_item(current_page, total_pages)
          ]

        %{first?: true, last?: false} when total_pages > 1 ->
          [
            get_prev_item(current_page, total_pages),
            item
          ]

        %{first?: false, last?: true} when total_pages > 1 ->
          [
            item,
            get_next_item(current_page, total_pages)
          ]

        _ ->
          [item]
      end
    end)
  end

  defp get_prev_item(current_page, _total_pages) do
    %{
      type: "prev",
      number: max(1, current_page - 1),
      enabled?: current_page > 1
    }
  end

  defp get_next_item(current_page, total_pages) do
    %{
      type: "next",
      number: min(current_page + 1, total_pages),
      enabled?: current_page < total_pages
    }
  end

  def chevron_left(assigns) do
    ~H"""
    <svg
      class="h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
    """
  end

  def chevron_right(assigns) do
    ~H"""
    <svg
      class="h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
    </svg>
    """
  end
end
