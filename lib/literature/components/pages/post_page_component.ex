defmodule Literature.PostPageComponent do
  use Phoenix.Component

  import Literature.Helpers
  import Phoenix.HTML
  import Phoenix.HTML.Tag

  def post_page(assigns) do
    ~H"""
    <section>
      <div class="my-10">
        <div class="text-center max-w-5xl mx-auto">
          <h2 class="text-3xl font-extrabold mb-5"><%= @title %></h2>
          <div class="flex items-center justify-center text-xs font-bold text-gray-400 uppercase tracking-wider space-x-1 mb-8">
            <span>Aug 15, 2022</span>
            <span>·</span>
            <span>5 min read</span>
            <span>·</span>
            <%= if @primary_tag do %>     
              <span class="text-primary-500">
                <%= @primary_tag.name %>
              </span>
            <% end %>
          </div>
          <%= img_tag @feature_image, alt: @feature_image_alt, class: "object-cover object-center w-full h-[32rem] my-14" %>
        </div>
        <div class="max-w-5xl mx-auto prose prose-sm sm:prose">
          <%= raw @excerpt %>
        </div>
      </div>
    </section>
    """
  end
end
