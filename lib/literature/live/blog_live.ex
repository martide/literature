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
                <%= link "How to quickly deploy a static website", to: literature_path(@socket, :show, tag.slug) %>
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
  def render(assigns) do
    ~H"""
    <div>sdf</div>
    """
  end
end
