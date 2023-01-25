defmodule Literature.Test.Router do
  use Phoenix.Router
  use Literature.Router

  @view_module Literature.BlogView

  literature_assets("/blog")
  literature("/", publication_slug: "blog", view_module: @view_module)
  literature_api("/api")
  literature_dashboard("/literature")
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
