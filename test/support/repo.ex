defmodule Literature.Test.Repo do
  @moduledoc false

  use Ecto.Repo,
    otp_app: :literature,
    adapter: Ecto.Adapters.Postgres
end
