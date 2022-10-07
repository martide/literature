defmodule Literature.CardComponent do
  @moduledoc false
  use Phoenix.Component

  def card_container(assigns) do
    ~H"""
    <div class="grid grid-cols-3 gap-5">
      <%= render_slot(@inner_block) %>
    </div>
    """
  end

  def card(assigns) do
    ~H"""
    <div class="border-2 border-gray-100 shadow-sm hover:border-primary-500 hover:-translate-y-1 hover:shadow-lg rounded-lg p-5 space-y-3 bg-white transition duration-300 ease-in-out flex flex-col">
      <%= live_redirect to: @show_path do %>
        <h2 class="text-primary-700 font-bold text-4xl"><%= @item.name %></h2>
        <dl class="grid grid-cols-3 gap-8 p-4 text-gray-900">
          <div class="flex flex-col justify-center items-center">
            <dt class="mb-2 text-3xl font-extrabold"><%= length(@item.posts) %></dt>
            <dd class="font-light text-gray-500">Posts</dd>
          </div>
          <div class="flex flex-col justify-center items-center">
            <dt class="mb-2 text-3xl font-extrabold"><%= length(@item.tags) %></dt>
            <dd class="font-light text-gray-500">Tags</dd>
          </div>
          <div class="flex flex-col justify-center items-center">
            <dt class="mb-2 text-3xl font-extrabold"><%= length(@item.authors) %></dt>
            <dd class="font-light text-gray-500">Authors</dd>
          </div>
        </dl>
        <p class="text-gray-500 flex-1"><%= @item.description %></p>
      <% end %>
      <div class="flex items-center justify-end">
        <%= live_patch to: @edit_path, id: "edit-#{@item.id}", class: "text-gray-500 bg-white focus:outline-none hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5" do %>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        <% end %>
        <%= live_redirect "Create new post", to: @create_post_path, class: "text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" %>
      </div>
    </div>
    """
  end
end
