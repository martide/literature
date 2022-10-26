defmodule Literature.Test.Router do
  use Phoenix.Router
  import Literature.Router

  @view_module Literature.BlogView

  literature_assets("/blog")
  literature("/", publication_slug: "blog", view_module: @view_module)
  literature("/foo/bar", publication_slug: "some-name", view_module: @view_module, as: :liete)
  literature_dashboard("/literature")
end

defmodule Literature.Test.DynamicPathRouter do
  use Phoenix.Router
  import Literature.Router

  @view_module Literature.BlogView

  literature_assets("/foo/bar")
  literature("/foo/bar", publication_slug: "blog", view_module: @view_module)
  literature_dashboard("/foo/bar")
end
