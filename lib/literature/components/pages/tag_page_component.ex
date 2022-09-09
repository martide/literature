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
        <div class="grid grid-cols-3 gap-8 divide-x divide-gray-200 my-20">
          <article>
            <%= link to: "#" do %>
              <%= img_tag "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/google-hq.png", alt: "Blog Image", class: "rounded-lg mb-5" %>
            <% end %>
            <h2 class="font-bold text-2xl mb-2">
              <%= link "SEO Basics: Beginner's Guide to SEO Success", to: "#" %>
            </h2>
            <p class="font-light text-gray-500 tracking-wide mb-4">
              Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.
            </p>
            <%= link to: "#", class: "text-primary-600 flex items-center space-x-2 font-medium" do %>
              <span>Read more</span>
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            <% end %>
          </article> 
          <div class="px-8 space-y-8">
            <article>
              <h2 class="font-bold text-2xl mb-2">
                <%= link "How to quickly deploy a static website", to: "#" %>
              </h2>
              <p class="font-light text-gray-500 tracking-wide mb-4">
                Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.
              </p>
              <%= link to: "#", class: "text-primary-600 flex items-center space-x-2 font-medium" do %>
                <span>Read more</span>
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              <% end %>
            </article> 
            <article>
              <h2 class="font-bold text-2xl mb-2">
                <%= link "What is SEO? Search Engine Optimization Explained", to: "#" %>
              </h2>
              <p class="font-light text-gray-500 tracking-wide mb-4">
                Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.
              </p>
              <%= link to: "#", class: "text-primary-600 flex items-center space-x-2 font-medium" do %>
                <span>Read more</span>
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              <% end %>
            </article> 
            <article>
              <h2 class="font-bold text-2xl mb-2">
                <%= link "Spotify's Car Thing available to all premium users", to: "#" %>
              </h2>
              <p class="font-light text-gray-500 tracking-wide mb-4">
                Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.
              </p>
              <%= link to: "#", class: "text-primary-600 flex items-center space-x-2 font-medium" do %>
                <span>Read more</span>
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              <% end %>
            </article> 
          </div>
          <div class="px-8 space-y-8">
            <article>
              <h2 class="font-bold text-2xl mb-2">
                <%= link "How to quickly deploy a static website", to: "#" %>
              </h2>
              <p class="font-light text-gray-500 tracking-wide mb-4">
                Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.
              </p>
              <%= link to: "#", class: "text-primary-600 flex items-center space-x-2 font-medium" do %>
                <span>Read more</span>
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              <% end %>
            </article> 
            <article>
              <h2 class="font-bold text-2xl mb-2">
                <%= link "What is SEO? Search Engine Optimization Explained", to: "#" %>
              </h2>
              <p class="font-light text-gray-500 tracking-wide mb-4">
                Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.
              </p>
              <%= link to: "#", class: "text-primary-600 flex items-center space-x-2 font-medium" do %>
                <span>Read more</span>
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              <% end %>
            </article> 
            <article>
              <h2 class="font-bold text-2xl mb-2">
                <%= link "Spotify's Car Thing available to all premium users", to: "#" %>
              </h2>
              <p class="font-light text-gray-500 tracking-wide mb-4">
                Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.
              </p>
              <%= link to: "#", class: "text-primary-600 flex items-center space-x-2 font-medium" do %>
                <span>Read more</span>
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              <% end %>
            </article> 
          </div>
        </div>
      </div>
    </section>
    """
  end
end
