defmodule Literature.Test.StaticPageGenerator do
  alias Literature.Test.Endpoint

  use Literature.StaticPages.Generator,
    publication_slug: "blog",
    path: "/en"
end
