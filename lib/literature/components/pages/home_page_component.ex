defmodule Literature.HomePageComponent do
  use Phoenix.Component

  import Literature.Helpers
  import Phoenix.HTML.Link
  import Phoenix.HTML.Tag

  def home_page(assigns) do
    ~H"""
    <section>
      <div class="my-10">
        <div class="text-center space-y-3 max-w-2xl mx-auto">
          <h2 class="text-4xl font-bold">Our Martide Blog</h2>
          <p class="text-gray-500 text-xl font-light tracking-wide">
            We use an agile approach to test assumptions and connect with the needs of your audience early and often.
          </p>
        </div> 
        <div class="space-y-8 my-20 max-w-5xl px-6 mx-auto">
          <%= for post <- @posts do %>
            <article class="group">
              <div class="h-[30rem] overflow-hidden relative">
                <%= img_tag literature_image_url(post, :feature_image), alt: post.feature_image_alt, class: "object-cover object-center absolute w-full" %>
              </div>
              <div class="max-w-3xl mx-auto py-8">
                <%= link to: literature_path(@socket, :show, post.slug) do %>
                  <h2 class="mb-3 font-extrabold text-3xl group-hover:text-primary-700 transition duration-300 ease-in-out">
                    <%= post.title %>
                  </h2>
                  <div class="flex items-center text-xs font-bold text-gray-400 uppercase tracking-wider space-x-1 mb-8">
                    <span>Aug 15, 2022</span>
                    <span>·</span>
                    <span>5 min read</span>
                    <span>·</span>
                    <%= if post.primary_tag do %>     
                      <span class="text-primary-500">
                        <%= post.primary_tag.name %>
                      </span>
                    <% end %>
                  </div>
                  <p class="font-light tracking-wide text-gray-700">
                    <%= post.custom_excerpt %>  
                  </p>
                <% end %>
                <div class="flex items-center justify-between font-semibold text-xs border-t border-gray-300 mt-10 py-5">
                  <div class="uppercase flex items-center space-x-5 font-bold">
                    <%= link to: "#", class: "text-primary-500 flex items-center space-x-1" do %>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-3 h-3">
                        <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
                      </svg>
                      <span>Read Now</span>
                    <% end %>
                    <%= link to: "#", class: "text-gray-900 flex items-center space-x-1" do %>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-3 h-3">
                        <path fill-rule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clip-rule="evenodd" />
                      </svg>
                      <span>Read Later</span>
                    <% end %>
                  </div>
                  <div class="flex items-center">
                    <%= if post.primary_author do %>
                      <%= img_tag literature_image_url(post.primary_author, :profile_image), class: "rounded-full h-7 w-7 mr-2", alt: post.primary_author.name %>
                      <span class="mr-1 text-gray-400">By: </span>
                      <span class="text-gray-900">
                        <%= post.primary_author.name %>
                      </span>
                    <% end %>
                  </div>
                </div>
              </div>
            </article>
          <% end %>
        </div>  
      </div>
    </section>
    """
  end
end
