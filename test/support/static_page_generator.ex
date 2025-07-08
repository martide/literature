defmodule Literature.Test.StaticPageGenerator do
  use Literature.StaticPages.Generator,
    publication_slug: "blog",
    path: "/en",
    only: [:index, :index_page]
end
