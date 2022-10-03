Logger.configure(level: :warn)

ExUnit.start()

Literature.Test.Repo.start_link()
Literature.Test.Endpoint.start_link()
