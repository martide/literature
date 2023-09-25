defmodule Literature.SidebarComponent do
  @moduledoc false
  use Phoenix.Component

  alias Literature.Helpers

  def sidebar(assigns) do
    ~H"""
    <aside aria-label="Sidebar">
      <div class="overflow-y-auto py-4 px-3 rounded">
        <ul class="flex items-center space-x-2">
          <%= for tab <- @tab do %>
            <li>
              <.render_tab
                title={tab.title}
                path={tab.path}
                classes={tab_classes(@live_action in tab.actions)}
              >
                <div class="flex-shrink-0 transition duration-75 group-hover:text-gray-900">
                  <.render_icon icon={tab.icon} solid={@live_action in tab.actions} />
                </div>
              </.render_tab>
            </li>
          <% end %>
        </ul>
      </div>
    </aside>
    """
  end

  def sidebar_default(assigns) do
    ~H"""
    <.sidebar id={@id} live_action={@live_action}>
      <:tab
        title="Posts"
        path={Helpers.literature_dashboard_path(@socket, :list_posts, @slug)}
        icon="pencil"
        actions={~w(list_posts new_post edit_post)a}
      />
      <:tab
        title="Tags"
        path={Helpers.literature_dashboard_path(@socket, :list_tags, @slug)}
        icon="tag"
        actions={~w(list_tags new_tag edit_tag)a}
      />
      <:tab
        title="Authors"
        path={Helpers.literature_dashboard_path(@socket, :list_authors, @slug)}
        icon="users"
        actions={~w(list_authors new_author edit_author)a}
      />
      <:tab
        title="Redirects"
        path={Helpers.literature_dashboard_path(@socket, :list_redirects, @slug)}
        icon="users"
        actions={~w(list_redirects)a}
      />
    </.sidebar>
    """
  end

  defp render_tab(assigns) do
    ~H"""
    <%= live_redirect to: @path, class: @classes do %>
      <%= render_slot(@inner_block) %>
      <span class="flex-1 ml-3 whitespace-nowrap"><%= @title %></span>
    <% end %>
    """
  end

  defp tab_classes(is_active) do
    base_classes = "flex items-center px-5 py-3 text-base rounded-lg"

    if is_active,
      do: "#{base_classes} bg-primary-600 text-white drop-shadow font-medium",
      else: "#{base_classes} text-gray-600"
  end

  defp render_icon(%{icon: "pencil", solid: true} = assigns) do
    ~H"""
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class={icon_size()}
    >
      <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
    </svg>
    """
  end

  defp render_icon(%{icon: "pencil"} = assigns) do
    ~H"""
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class={icon_size()}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
      />
    </svg>
    """
  end

  defp render_icon(%{icon: "tag", solid: true} = assigns) do
    ~H"""
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class={icon_size()}
    >
      <path
        fill-rule="evenodd"
        d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 005.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 00-2.122-.879H5.25zM6.375 7.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
        clip-rule="evenodd"
      />
    </svg>
    """
  end

  defp render_icon(%{icon: "tag"} = assigns) do
    ~H"""
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class={icon_size()}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
      />
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
    </svg>
    """
  end

  defp render_icon(%{icon: "users", solid: true} = assigns) do
    ~H"""
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class={icon_size()}
    >
      <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
    </svg>
    """
  end

  defp render_icon(%{icon: "users"} = assigns) do
    ~H"""
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class={icon_size()}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
      />
    </svg>
    """
  end

  defp icon_size, do: "w-7 h-7"
end
