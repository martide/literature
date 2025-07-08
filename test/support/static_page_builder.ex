defmodule Literature.Test.StaticPageBuilder do
  alias Literature.Test.Endpoint

  use Literature.StaticPages.Builder,
    only: ~w(index tags authors show)a,
    publication_slug: "blog",
    path: "/en",
    endpoint: Endpoint
end
