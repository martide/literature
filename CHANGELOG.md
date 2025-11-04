# Changelog

All notable changes to Literature will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- build(deps): bump phoenix_html from 4.2.1 to 4.3.0
- build(deps): bump phoenix_live_view from 1.1.3 to 1.1.16
- build(deps): bump image from 0.62.0 to 0.62.1
- build(deps-dev): bump ex_doc from 0.38.4 to 0.39.1
- build(deps): bump actions/setup-node from 5 to 6
- build(deps-dev): bump @tailwindcss/cli from 4.1.13 to 4.1.15 in /assets
- build(deps-dev): bump eslint and @eslint/js in /assets
- build(deps-dev): bump esbuild from 0.25.11 to 0.25.12 in /assets
- build(deps-dev): bump globals from 16.4.0 to 16.5.0 in /assets

## [v0.4.21] - 2025-08-27

### Changed

- build(deps-dev): bump postgrex from 0.20.0 to 0.21.1
- build(deps): bump image from 0.61.1 to 0.62.0
- build(deps-dev): bump dialyxir from 1.4.5 to 1.4.6
- build(deps-dev): bump @milkdown/crepe from 7.15.3 to 7.15.5 in /assets
- build(deps-dev): bump eslint from 9.33.0 to 9.34.0 in /assets
- build(deps-dev): bump @eslint/js from 9.33.0 to 9.34.0 in /assets
- Run `npm dedupe`

## [v0.4.20] - 2025-08-22

Minor release with dependency updates.

## [v0.4.19] - 2025-08-22

### Added

- Milkdown markdown editor (WEB-10591, WEB-10593)

### Changed

- Swap Imagemagick to Image library
- build(deps): bump actions/checkout from 4 to 5
- build(deps-dev): bump ex_doc from 0.38.2 to 0.38.3
- build(deps-dev): bump @tailwindcss/cli from 4.1.11 to 4.1.12 in /assets
- build(deps-dev): bump esbuild from 0.25.8 to 0.25.9 in /assets

## [v0.4.18] - 2025-08-18

### Changed

- build(deps): bump phoenix_live_view from 1.0.17 to 1.1.3

## [v0.4.17] - 2025-08-18

Minor release with dependency updates.

## [v0.4.16] - 2025-08-11

### Added

- Static pages generator (WEB-10569)

### Changed

- Multiple dependency updates including:
  - prettier from 3.5.3 to 3.6.2
  - eslint and related packages
  - tailwindcss from 3.4.17 to 4.1.11
  - phoenix_ecto from 4.6.4 to 4.6.5
  - ecto_sql from 3.13.0 to 3.13.2
  - floki from 0.37.1 to 0.38.0
  - sitemapper from 0.9.0 to 0.10.0

## [v0.4.15] - 2025-06-19

### Added

- Add capability to not use preload

### Changed

- build(deps): bump ecto_sql from 3.12.1 to 3.13.0

## [v0.4.14] - 2025-06-18

### Fixed

- Only accept xml for RSS feed

### Changed

- Multiple dependency updates including:
  - flop from 0.26.1 to 0.26.3
  - phoenix_live_view from 1.0.12 to 1.0.17
  - tailwindcss upgraded to v4
  - timex from 3.7.11 to 3.7.13

## [v0.4.13] - 2025-06-18

### Fixed

- Do not preload all posts in show post

## [v0.4.12] - 2025-06-18

### Fixed

- Render not found if page is not an integer

### Changed

- Multiple dependency updates including:
  - phoenix from 1.7.20 to 1.7.21
  - phoenix_live_view from 1.0.5 to 1.0.12
  - floki from 0.37.0 to 0.37.1
  - httpoison from 2.2.2 to 2.2.3

## [v0.4.11] - 2025-04-24

### Fixed

- Increase timeout for rendering markdown

### Changed

- Multiple dependency updates

## [v0.4.10] - 2025-04-18

### Fixed

- Generate correct relative sitemap URLs
- Fix sorting of posts on index page

### Changed

- Multiple dependency updates

## [v0.4.9] - 2025-04-09

### Changed

- Use redirect helper
- Multiple dependency updates

## [v0.4.8] - 2025-04-03

### Fixed

- Fix redirect infinite loop

### Changed

- Multiple dependency updates

## [v0.4.7] - 2025-03-18

### Changed

- Multiple dependency updates

## [v0.4.6] - 2025-03-15

### Fixed

- Author page redirections with unknown locales issue

### Changed

- Multiple dependency updates

## [v0.4.5] - 2025-03-12

### Fixed

- Post page redirections with locale

## [v0.4.4] - 2025-03-11

### Fixed

- Error when redirecting posts

### Changed

- Multiple dependency updates

## [v0.4.3] - 2025-03-01

### Changed

- Multiple dependency updates

## [v0.4.2] - 2025-02-26

### Changed

- Multiple dependency updates

## [v0.4.1] - 2025-02-18

### Changed

- Multiple dependency updates

## [v0.4.0] - 2025-02-10

### Added

- Option to use pagination with elixir

### Changed

- Phoenix 1.7 update
- Multiple dependency updates
