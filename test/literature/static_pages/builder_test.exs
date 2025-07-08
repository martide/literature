defmodule Literature.StaticPages.BuilderTest do
  use Literature.ConnCase

  import Literature.Test.Fixtures

  alias Literature.Test.StaticPageBuilder

  test "generate creates static pages" do
    _publication = publication_fixture(name: "Blog", slug: "blog")

    StaticPageBuilder.generate()
  end
end
