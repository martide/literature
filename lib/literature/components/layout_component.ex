defmodule Literature.LayoutComponent do
  use Literature.Web, :live_component

  @impl Phoenix.LiveComponent
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
                <%= live_patch "Authors", to: literature_dashboard_path(@socket, :list_authors), class: "block py-2 pr-46 pl-3 text-white bg-primary-700 rounded md:bg-transparent md:text-primary-700 md:p-0", "aria-current": "page" %>
              </li>
              <li>
                <%= live_patch "Tags", to: literature_dashboard_path(@socket, :list_tags), class: "block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-700 md:p-0" %>
              </li>
              <li>
                <%= live_patch "Posts", to: literature_dashboard_path(@socket, :list_posts), class: "block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-700 md:p-0" %>
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
end
