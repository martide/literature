defmodule Literature.Test.Router do
  use Phoenix.Router
  use Literature.Router

  @view_module Literature.BlogView

  literature_assets("/blog")

  literature("/",
    publication_slug: "blog",
    view_module: @view_module
  )

  literature_api("/api")
  literature_dashboard("/literature")

  literature("/",
    publication_slug: "error-view",
    view_module: @view_module,
    error_view_module: Literature.Test.ErrorView,
    as: :error_view
  )

  literature("/",
    publication_slug: "with-only",
    only: [:index, :show],
    view_module: @view_module,
    as: :with_only
  )
end

defmodule Literature.Test.DynamicPathRouter do
  use Phoenix.Router
  use Literature.Router

  @view_module Literature.BlogView

  literature_assets("/foo/bar")
  literature("/foo/bar", publication_slug: "blog", view_module: @view_module)
  literature_api("/foo/bar")
  literature_dashboard("/foo/bar")
end

defmodule Literature.Test.ErrorView do
  use Literature.Web, :view
  use Phoenix.Component

  def render("404.html", assigns) do
    ~H"""
    "Page not found. Sorry, we could not find the page you are looking for."
    """
  end
end
