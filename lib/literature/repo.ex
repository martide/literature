defmodule Literature.Repo do
  use Ecto.Repo,
    otp_app: :literature,
    adapter: Ecto.Adapters.Postgres
end
