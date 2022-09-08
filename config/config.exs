import Config

config :phoenix, :json_library, Jason

if config_env() == :test do
  import_config "#{config_env()}.exs"
end
