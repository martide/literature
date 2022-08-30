alias Beacon.Components
alias Beacon.Pages
alias Beacon.Layouts
alias Beacon.Stylesheets

Stylesheets.create_stylesheet!(%{
  site: "my_site",
  name: "sample_stylesheet",
  content: "body {cursor: zoom-in;}"
})

Components.create_component!(%{
  site: "my_site",
  name: "sample_component",
  body: """
  <li>
    <%= @val %>
  </li>
  """
})

%{id: layout_id} =
  Layouts.create_layout!(%{
    site: "my_site",
    title: "Sample Home Page",
    meta_tags: %{"foo" => "bar"},
    stylesheet_urls: [],
    body: """
    <header>
      Header
    </header>
    <%= @inner_content %>

    <footer>
      Page Footer
    </footer>
    """
  })

Pages.create_page!(%{
  path: "home",
  site: "my_site",
  layout_id: layout_id,
  template: """
  <main>
    <h2>Some Values:</h2>
    <ul>
      <%= for val <- @beacon_live_data[:vals] do %>
        <%= my_component("sample_component", val: val) %>
      <% end %>
    </ul>
  </main>
  """
})

Pages.create_page!(%{
  path: "blog/:blog_slug",
  site: "my_site",
  layout_id: layout_id,
  template: """
  <main>
    <h2>A blog</h2>
    <ul>
      <li>Path Params Blog Slug: <%= @beacon_path_params.blog_slug %></li>
      <li>Live Data blog_slug_uppercase: <%= @beacon_live_data.blog_slug_uppercase %></li>
    </ul>
  </main>
  """
})
