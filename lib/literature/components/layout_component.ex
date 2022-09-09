defmodule Literature.LayoutComponent do
  use Phoenix.Component

  import Literature.Helpers
  import Phoenix.HTML.Link

  def header(assigns) do
    ~H"""
    <header>
      <nav class="bg-white px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-gray-200 shadow shadow-slate-900/50">
        <div class="max-w-screen-xl flex flex-wrap items-center mx-auto">
          <%= live_patch to: literature_dashboard_path(@socket, :root), class: "flex items-center space-x-2 text-primary-700 w-64" do %>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            <span class="self-center text-xl font-semibold whitespace-nowrap">Literature</span>
          <% end %>
          <div class="flex md:order-2">
            <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
          <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-12 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
              <li>
                <%= render_tab "Posts", literature_dashboard_path(@socket, :list_posts), @live_action, ~w(list_posts new_post edit_post)a %>
              </li>
              <li>
                <%= render_tab "Tags", literature_dashboard_path(@socket, :list_tags), @live_action, ~w(list_tags new_tag edit_tag)a %>
              </li>
              <li>
                <%= render_tab "Authors", literature_dashboard_path(@socket, :list_authors), @live_action, ~w(list_authors new_author edit_author)a %>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    """
  end

  def footer(assigns) do
    ~H"""
    <footer class="pb-4 rounded-lg md:pb-6">
      <hr class="mb-6 border-gray-200 sm:mx-auto" />
      <span class="block text-sm text-gray-500 sm:text-center">
        &copy; <%= Date.utc_today().year %> <a href="https://martide.com/" class="hover:underline">Literature</a>. All Rights Reserved.
      </span>
    </footer>
    """
  end

  def h1(assigns) do
    ~H"""
    <h1 class="font-extrabold text-3xl text-primary-700 mb-5">
      <%= render_slot(@inner_block) %>
    </h1>
    """
  end

  def container(assigns) do
    ~H"""
    <div class="col-span-4 px-10 py-10 rounded-lg bg-white shadow-md">
      <%= render_slot(@inner_block) %>
    </div>
    """
  end

  def delete_modal(assigns) do
    ~H"""
    <div id="delete-modal" tabindex="-1" class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full flex justify-center items-center bg-black bg-opacity-50" aria-hidden="true">
      <div class="relative p-4 w-full max-w-md h-full md:h-auto">
        <div class="relative bg-white rounded-lg shadow">
          <%= link to: "#", phx_click: "close_delete_modal", class: "absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" do %>
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
            <span class="sr-only">Close modal</span>
          <% end %>
          <div class="p-6 text-center">
            <svg aria-hidden="true" class="mx-auto mb-4 w-14 h-14 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 class="mb-5 text-lg font-normal text-gray-500">
              Are you sure you want to delete <span class="font-medium text-red-500"><%= @label %></span>?
            </h3>
            <%= link "Yes, I'm sure", to: "#", phx_click: "delete", phx_value_id: @item.id, class: "text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2" %>
            <%= link "No, cancel", to: "#", phx_click: "close_delete_modal", class: "text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10" %>
          </div>
        </div>
      </div>
    </div>
    """
  end

  def success_alert(assigns) do
    ~H"""
    <%= if live_flash(@flash, :success) do %>
      <div class="flex p-4 mb-4 bg-primary-100 rounded-lg" role="alert">
        <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-primary-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
        </svg>
        <span class="sr-only">Success</span>
        <div class="ml-3 text-sm font-medium text-primary-700">
          <%= live_flash(@flash, :success) %>
        </div>
        <button type="button" phx-click="lv:clear-flash" phx-value-key="success" class="ml-auto -mx-1.5 -my-1.5 bg-primary-100 text-primary-500 rounded-lg focus:ring-2 focus:ring-primary-400 p-1.5 hover:bg-primary-200 inline-flex h-8 w-8" aria-label="Close">
          <span class="sr-only">Close</span>
          <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
    <% end %>
    """
  end

  def error_alert(assigns) do
    ~H"""
    <%= if live_flash(@flash, :error) do %>
      <div class="flex p-4 mb-4 bg-red-100 rounded-lg" role="alert">
        <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-red-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
        </svg>
        <span class="sr-only">Success</span>
        <div class="ml-3 text-sm font-medium text-red-700">
          <%= live_flash(@flash, :error) %>
        </div>
        <button type="button" phx-click="lv:clear-flash" phx-value-key="error" class="ml-auto -mx-1.5 -my-1.5 bg-red-100 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8" aria-label="Close">
          <span class="sr-only">Close</span>
          <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
    <% end %>
    """
  end

  defp render_tab(name, path, live_action, actions) do
    base_classes = "block py-2 pr-4 pl-3 rounded md:p-0"

    if live_action in actions do
      live_patch(name,
        to: path,
        class: "#{base_classes} text-white bg-primary-700 md:bg-transparent md:text-primary-700",
        "aria-current": "page"
      )
    else
      live_patch(name,
        to: path,
        class:
          "#{base_classes} text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-700"
      )
    end
  end
end
