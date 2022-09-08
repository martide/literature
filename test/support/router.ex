defmodule Literature.Test.Router do
  use Phoenix.Router
  import Literature.Router

  literature_assets()
  literature_dashboard("/")
end

defmodule Literature.Test.DynamicPathRouter do
  use Phoenix.Router
  import Literature.Router

  literature_assets("/path/to/assets")
  literature_dashboard("/literature")
end
