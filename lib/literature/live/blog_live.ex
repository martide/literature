defmodule Literature.BlogLive do
  use Literature.Web, :live_view

  @impl Phoenix.LiveView
  def mount(_params, _session, socket) do
    socket =
      socket
      |> assign(:tags, Literature.list_tags())

    {:ok, socket, layout: {Literature.LayoutView, "live.html"}}
  end

  @impl Phoenix.LiveView
  def render(%{live_action: :index} = assigns) do
    ~H"""
    <section>
      <div class="my-10">
        <div class="text-center space-y-3 max-w-2xl mx-auto">
          <h2 class="text-4xl font-bold">Our Martide Blog</h2>
          <p class="text-gray-500 text-xl font-light tracking-wide">
            We use an agile approach to test assumptions and connect with the needs of your audience early and often.
          </p>
        </div> 
        <div class="grid grid-cols-3 gap-8 my-20">
          <article class="border border-gray-200 rounded-lg shadow-lg p-5">
            <a href="#">
              <img class="rounded-lg mb-5" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops.png" alt="office laptop working">
            </a>
            <span class="bg-primary-100 text-primary-900 font-medium px-2 py-0.5 text-xs rounded-md">Article</span>
            <h2 class="my-2 font-bold text-2xl">
              <a href="#">Our first office</a>
            </h2>
            <p class="font-light tracking-wide text-gray-500">
              Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.
            </p>
            <div class="flex items-center space-x-5 mt-5">
              <img class="rounded-full h-10 w-10" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" />
              <div class="font-medium">
                <div>Jese Leos</div>
                <div class="text-gray-400 text-sm">Aug 15, 2021 · 16 min read</div>
              </div>
            </div>
          </article>
          <article class="border border-gray-200 rounded-lg shadow-lg p-5">
            <a href="#">
              <img class="rounded-lg mb-5" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/google-hq.png" alt="office laptop working">
            </a>
            <span class="bg-primary-100 text-primary-900 font-medium px-2 py-0.5 text-xs rounded-md">Article</span>
            <h2 class="my-2 font-bold text-2xl">
              <a href="#">Our first office</a>
            </h2>
            <p class="font-light tracking-wide text-gray-500">
              Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.
            </p>
            <div class="flex items-center space-x-5 mt-5">
              <img class="rounded-full h-10 w-10" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="Jese Leos avatar" />
              <div class="font-medium">
                <div>Jese Leos</div>
                <div class="text-gray-400 text-sm">Aug 15, 2021 · 16 min read</div>
              </div>
            </div>
          </article>
          <article class="border border-gray-200 rounded-lg shadow-lg p-5">
            <a href="#">
              <img class="rounded-lg mb-5" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops-2.png" alt="office laptop working">
            </a>
            <span class="bg-primary-100 text-primary-900 font-medium px-2 py-0.5 text-xs rounded-md">Article</span>
            <h2 class="my-2 font-bold text-2xl">
              <a href="#">Our first office</a>
            </h2>
            <p class="font-light tracking-wide text-gray-500">
              Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.
            </p>
            <div class="flex items-center space-x-5 mt-5">
              <img class="rounded-full h-10 w-10" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" alt="Jese Leos avatar" />
              <div class="font-medium">
                <div>Jese Leos</div>
                <div class="text-gray-400 text-sm">Aug 15, 2021 · 16 min read</div>
              </div>
            </div>
          </article>
        </div>  
      </div>
    </section>
    """
  end

  @impl Phoenix.LiveView
  def render(%{live_action: :tags} = assigns) do
    ~H"""
    <section class="my-10">
      <div class="max-w-6xl mx-auto">
        <div class="text-center space-y-3 max-w-2xl mx-auto">
          <h2 class="text-4xl font-bold">Martide Tags</h2>
          <p class="text-gray-500 text-xl font-light tracking-wide">
            We use an agile approach to test assumptions and connect with the needs of your audience early and often.
          </p>
        </div>
        <div class="text-center max-w-lg mx-auto space-y-8 my-20">
          <%= for tag <- @tags do %>
            <div class="space-y-2">
              <h2 class="text-2xl font-bold hover:text-primary-500 transition duration-300 ease-in-out">
                <%= link "How to quickly deploy a static website", to: literature_path(@socket, :tag, tag) %>
              </h2>
              <p class="text-gray-500 text-lg font-light tracking-wide">
                We use an agile approach to test assumptions and connect with the needs of your audience early and often.
              </p>
              <div class="">
                <span>20 posts</span>
              </div>
            </div> 
          <% end %>
        </div>
      </div>
    </section>
    """
  end

  @impl Phoenix.LiveView
  def render(%{live_action: :tag} = assigns) do
    ~H"""
    <section>
      <div class="my-10">
        <div class="text-center space-y-3 max-w-2xl mx-auto">
          <h2 class="text-4xl font-bold">Page for Single Tag</h2>
          <p class="text-gray-500 text-xl font-light tracking-wide">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
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

  @impl Phoenix.LiveView
  def render(assigns) do
    ~H"""
    <div>sdf</div>
    """
  end
end
