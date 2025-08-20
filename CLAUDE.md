# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Literature is an Elixir/Phoenix CMS and blog engine (v0.4.15) that provides rich content management capabilities with a modern tech stack. The project is structured as a reusable library package that can be integrated into Phoenix applications.

## Development Commands

### Initial Setup

```bash
mix setup                           # Install deps and setup database
npm install --prefix assets         # Install frontend dependencies
```

### Testing

```bash
mix test                           # Run tests with database setup
mix test.ci                        # Full CI pipeline: format, deps, credo, test, dialyzer
mix test test/path/to/file.exs     # Run specific test file
```

### Code Quality

```bash
mix format                         # Format Elixir code
mix credo --strict                 # Static analysis
mix dialyzer                       # Type checking
mix sobelow                        # Security analysis
```

### Frontend Development

```bash
npm run watch --prefix assets      # Watch mode for CSS/JS development
npm run build --prefix assets      # Build production assets
npm run eslint --prefix assets     # Lint JavaScript
npm run prettier --prefix assets   # Check JavaScript formatting
```

### Asset Management

```bash
mix assets.watch                   # Watch assets during development
mix assets.build                   # Build and digest assets for production
```

## Architecture Overview

### Core Domain Models

- **Publication**: Multi-tenant publication system with customizable settings
- **Post**: Blog posts with rich Editor.js content, SEO metadata, and publication status
- **Author**: Author management with profiles and multi-publication support
- **Tag**: Hierarchical tagging system for content categorization
- **Redirect**: URL redirect management for SEO and content migration

### Key Components

#### Content Management

- **Rich Editor**: Editor.js integration with custom image handling, headers, lists, and tables
- **Image Processing**: Waffle + Mogrify for upload handling and automatic size generation
- **SEO**: Comprehensive meta tags, OpenGraph, Twitter cards, and sitemap generation
- **RSS**: Automated RSS feed generation per publication

#### Technical Architecture

- **Multi-tenant**: Publication-based data isolation and customization
- **LiveView**: Real-time UI components for admin interfaces
- **Pagination**: Flop-based pagination with configurable limits
- **Internationalization**: Multi-language support with ex_cldr

#### Database Strategy

- **Ecto**: Primary ORM with comprehensive schema definitions
- **PostgreSQL**: Production database with full-text search capabilities
- **Migrations**: Database versioning in `priv/repo/migrations/`

### Directory Structure

```
lib/literature/
├── components/          # Reusable LiveView components
├── controllers/         # Phoenix controllers for web endpoints
├── live/               # LiveView modules for interactive features
├── templates/          # HTML templates
├── uploaders/          # Waffle uploaders for file management
└── [domain]/           # Domain-specific modules (posts, authors, etc.)

assets/
├── css/               # TailwindCSS styles
├── js/                # JavaScript with Editor.js integration
└── package.json       # Frontend dependencies

test/
├── support/           # Test helpers and fixtures
└── literature/        # Test files mirroring lib structure
```

## Development Patterns

### Testing Strategy

- **ConnCase**: Use `Literature.Test.ConnCase` for controller tests
- **DataCase**: Use `Literature.Test.DataCase` for database-related tests
- **LiveViewTest**: Use `Phoenix.LiveViewTest` for LiveView component testing
- **Database Isolation**: Tests use `Ecto.Adapters.SQL.Sandbox` for transaction isolation

### Code Organization

- Domain modules follow Phoenix conventions with contexts
- LiveView components are modular and reusable
- Database schemas include comprehensive validations and associations
- Upload handling uses Waffle with configurable storage backends

### Configuration

- Environment-specific configs in `config/`
- Test configuration uses local storage and test database
- Production configuration supports various storage backends (local, S3, etc.)

## Testing Notes

### Database Setup

Tests automatically create and migrate the test database. The test repo is configured as `Literature.Test.Repo` with PostgreSQL sandbox mode.

### Frontend Testing

JavaScript testing uses standard Node.js tooling with ESLint and Prettier for code quality.

### Coverage

Code coverage is tracked with ExCoveralls and can be generated with:

```bash
mix coveralls.html      # Generate HTML coverage report
```

## Integration Notes

### As a Library

Literature is designed as a reusable Phoenix library that can be integrated into existing applications. Host applications need to:

- Add Literature routes to their router
- Configure the database repo
- Set up asset compilation
- Configure storage backends for uploads

### Required Dependencies

- Elixir 1.13+
- PostgreSQL for database
- Node.js for frontend asset compilation

## CI/CD Pipeline

The project uses GitHub Actions with comprehensive testing across multiple Elixir/OTP versions (1.14-1.18, OTP 24-27). The pipeline includes:

- Format checking
- Dependency auditing
- Static analysis (Credo, Dialyzer, Sobelow)
- Test execution with coverage reporting
- Frontend linting and formatting checks
