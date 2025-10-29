# Astro Microfrontends

Microfrontend architecture using Astro as the shell orchestrator with React, Vue, and Solid.js apps. Demonstrates client-side composition using ESM and HTTP imports.

## Quick Start

```bash
# Install dependencies
pnpm install

# Development mode
pnpm dev

# Visit http://localhost:4321
```

## Apps

| App | Framework | Port | Route |
|-----|-----------|------|-------|
| **shell** | Astro | 4321 | `/` |
| **app-react-1** | React | 7100 | `/users` |
| **app-react-2** | React | 7200 | `/analytics` |
| **app-vue** | Vue 3 | 7400 | `/products` |
| **app-solid** | Solid.js | 7300 | `/settings` |

## Scripts

```bash
# Development
pnpm dev                    # Start all apps
pnpm dev:shell              # Start shell only
pnpm dev:app-react-1        # Start specific app

# Production
pnpm start                  # Build and serve all
pnpm build:all              # Build all apps
pnpm preview:all            # Serve production build

# Utilities
pnpm clean                  # Remove node_modules and dist
```

## Architecture

Microfrontends are built as ESM bundles and loaded via HTTP imports. Shared dependencies (React, Vue, Solid) are distributed via Import Maps from esm.sh CDN.

```
Shell (Astro) → HTTP Import → Microfrontend Bundle
```
