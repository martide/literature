Logger.configure(level: :warning)

ExUnit.start()

Literature.Test.Repo.start_link()
Literature.Test.Endpoint.start_link()
