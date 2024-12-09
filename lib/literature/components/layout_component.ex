defmodule Literature.LayoutComponent do
  @moduledoc false
  use Literature.Web, :html

  def h1(assigns) do
    ~H"""
    <h1 class="font-extrabold text-3xl text-primary-700 mb-5">
      {render_slot(@inner_block)}
    </h1>
    """
  end

  def container(assigns) do
    ~H"""
    <div class="mt-4 p-10 rounded-lg bg-white shadow-md">
      {render_slot(@inner_block)}
    </div>
    """
  end

  def delete_modal(assigns) do
    assigns = assign_new(assigns, :on_close, fn -> "close_delete_modal" end)

    ~H"""
    <.modal id="delete-modal" on_close={@on_close}>
      <div class="text-center">
        <svg
          aria-hidden="true"
          class="mx-auto mb-4 w-14 h-14 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          >
          </path>
        </svg>
        <h3 class="text-lg font-normal text-gray-500">
          Are you sure you want to delete <span class="font-medium text-red-500"><%= @label %></span>?
        </h3>
      </div>
      <:footer>
        <div class="text-center">
          <.link
            href="#"
            phx-click="delete"
            phx-value-id={@item.id}
            class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
          >
            Yes, I'm sure
          </.link>
          <.link
            href="#"
            phx-click={@on_close}
            phx-value-id={@item.id}
            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
          >
            No, cancel
          </.link>
        </div>
      </:footer>
    </.modal>
    """
  end

  def modal(assigns) do
    ~H"""
    <div
      id={@id}
      tabindex="-1"
      class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full flex justify-center items-center bg-black bg-opacity-50"
      aria-hidden="true"
    >
      <div class="relative p-4 w-full max-w-md h-full md:h-auto">
        <div class="relative bg-white rounded-lg shadow">
          <.link
            navigate="#"
            phx-lick={@on_close}
            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              >
              </path>
            </svg>
            <span class="sr-only">Close modal</span>
          </.link>
          <div class="p-6">
            <div>
              {render_slot(@inner_block)}
            </div>
            <div class="mt-5">
              {render_slot(@footer, %{on_close: @on_close})}
            </div>
          </div>
        </div>
      </div>
    </div>
    """
  end

  def success_alert(assigns) do
    ~H"""
    <%= if Phoenix.Flash.get(@flash, :success) do %>
      <div class="flex p-4 mb-4 bg-primary-100 rounded-lg" role="alert">
        <svg
          aria-hidden="true"
          class="flex-shrink-0 w-5 h-5 text-primary-700"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd"
          >
          </path>
        </svg>
        <span class="sr-only">Success</span>
        <div class="ml-3 text-sm font-medium text-primary-700">
          {Phoenix.Flash.get(@flash, :success)}
        </div>
        <button
          type="button"
          phx-click="lv:clear-flash"
          phx-value-key="success"
          class="ml-auto -mx-1.5 -my-1.5 bg-primary-100 text-primary-500 rounded-lg focus:ring-2 focus:ring-primary-400 p-1.5 hover:bg-primary-200 inline-flex h-8 w-8"
          aria-label="Close"
        >
          <span class="sr-only">Close</span>
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            >
            </path>
          </svg>
        </button>
      </div>
    <% end %>
    """
  end

  def error_alert(assigns) do
    ~H"""
    <%= if Phoenix.Flash.get(@flash, :error) do %>
      <div class="flex p-4 mb-4 bg-red-100 rounded-lg" role="alert">
        <svg
          aria-hidden="true"
          class="flex-shrink-0 w-5 h-5 text-red-700"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd"
          >
          </path>
        </svg>
        <span class="sr-only">Success</span>
        <div class="ml-3 text-sm font-medium text-red-700">
          {Phoenix.Flash.get(@flash, :error)}
        </div>
        <button
          type="button"
          phx-click="lv:clear-flash"
          phx-value-key="error"
          class="ml-auto -mx-1.5 -my-1.5 bg-red-100 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8"
          aria-label="Close"
        >
          <span class="sr-only">Close</span>
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            >
            </path>
          </svg>
        </button>
      </div>
    <% end %>
    """
  end

  def loading_page(assigns) do
    ~H"""
    <div class="px-3 py-4 space-x-3 animate-pulse">
      <div class="bg-slate-200 h-12 w-40 rounded-lg inline-block"></div>
      <div class="bg-slate-200 h-12 w-40 rounded-lg inline-block"></div>
      <div class="bg-slate-200 h-12 w-40 rounded-lg inline-block"></div>
    </div>
    <div class="col-span-4 bg-white shadow-md rounded-lg p-10">
      <div class="animate-pulse">
        <div class="bg-slate-200 h-8 w-40 rounded-lg mb-5"></div>
        <div class="w-1/2">
          <div class="bg-slate-200 h-10 w-full rounded-lg"></div>
          <div class="flex items-center my-5 space-x-5">
            <div class="bg-slate-200 h-2 w-full rounded-lg"></div>
            <div class="bg-slate-200 h-2 w-full rounded-lg"></div>
            <div class="bg-slate-200 h-2 w-full rounded-lg"></div>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-5">
          <div class="col-span-3 bg-slate-200 h-10 w-full rounded-lg"></div>
          <div class="bg-slate-200 h-3 w-full rounded-lg"></div>
          <div class="col-span-3 bg-slate-200 h-3 w-full rounded-lg"></div>
          <div class="bg-slate-200 h-3 w-full rounded-lg"></div>
          <div class="bg-slate-200 h-3 w-full rounded-lg"></div>
          <div class="col-span-3 bg-slate-200 h-3 w-full rounded-lg"></div>
          <div class="bg-slate-200 h-3 w-full rounded-lg"></div>
          <div class="bg-slate-200 h-3 w-full rounded-lg"></div>
          <div class="bg-slate-200 h-3 w-full rounded-lg"></div>
          <div class="col-span-3 bg-slate-200 h-3 w-full rounded-lg"></div>
          <div class="bg-slate-200 h-3 w-full rounded-lg"></div>
          <div class="bg-slate-200 h-3 w-full rounded-lg"></div>
          <div class="col-span-3 bg-slate-200 h-3 w-full rounded-lg"></div>
          <div class="bg-slate-200 h-3 w-full rounded-lg"></div>
          <div class="col-span-3 bg-slate-200 h-2 w-full rounded-lg"></div>
        </div>
      </div>
    </div>
    """
  end
end
