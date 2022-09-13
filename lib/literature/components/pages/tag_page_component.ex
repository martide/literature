defmodule Literature.TagPageComponent do
  use Phoenix.Component

  import Literature.Helpers
  import Phoenix.HTML.Link
  import Phoenix.HTML.Tag

  def tag_page(assigns) do
    ~H"""
    <section>
      <div class="my-10">
        <div class="text-center space-y-3 max-w-2xl mx-auto">
          <h2 class="text-4xl font-bold"><%= @name %></h2>
          <p class="text-gray-500 text-xl font-light tracking-wide"><%= @description %></p>
        </div> 
        <div class="grid grid-cols-3 grid-rows-3 grid-flow-row gap-x-8 divide-x divide-gray-200 my-20 overflow-hidden">
          <%= for {post, i} <- Enum.with_index(@posts) do %>
            <article class={"#{if i == 0, do: "row-span-3", else: "px-8 pb-10"} group"}>
              <%= if i == 0 do %>
                <%= link to: literature_path(@socket, :show, post.slug) do %>
                  <%= img_tag "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/google-hq.png", alt: "Blog Image", class: "rounded-lg mb-5" %>
                <% end %>
              <% end %>
              <h2 class="font-bold text-2xl mb-2 group-hover:text-primary-500 transition duration-300 ease-in-out">
                <%= link post.title, to: literature_path(@socket, :show, post.slug) %>
              </h2>
              <p class="font-light text-gray-500 tracking-wide mb-4">
                <%= post.custom_excerpt %>
              </p>
              <%= link to: literature_path(@socket, :show, post.slug), class: "text-primary-600 flex items-center space-x-2 font-medium" do %>
                <span>Read more</span>
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              <% end %>
            </article> 
          <% end %>
        </div>
      </div>
    </section>
    """
  end
end
