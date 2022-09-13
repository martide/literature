defmodule Literature.TagsPageComponent do
  use Phoenix.Component

  import Literature.Helpers
  import Phoenix.HTML.Link

  def tags_page(assigns) do
    ~H"""
    <section class="my-10">
      <div class="max-w-6xl mx-auto">
        <div class="text-center space-y-3 max-w-3xl mx-auto">
          <h2 class="text-4xl font-bold">Martide Tags</h2>
          <p class="text-gray-500 text-xl font-light tracking-wide">
            We use an agile approach to test assumptions and connect with the needs of your audience early and often.
          </p>
        </div>
        <div class="text-center max-w-2xl mx-auto space-y-8 my-20">
          <%= for tag <- @tags do %>
            <div class="space-y-2">
              <h2 class="text-2xl font-bold hover:text-primary-500 transition duration-300 ease-in-out">
                <%= link tag.name, to: literature_path(@socket, :show, tag.slug) %>
              </h2>
              <p class="text-gray-500 text-lg font-light tracking-wide leading-relaxed">
                <%= tag.description %>
              </p>
              <div class="font-medium text-primary-700">
                <span><%= "#{length(tag.posts)} posts" %></span>
              </div>
            </div> 
          <% end %>
        </div>
      </div>
    </section>
    """
  end
end
