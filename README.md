# Astro Microfrontends

Microfrontend architecture using Astro as the shell orchestrator with React, Vue, and Solid.js apps. Demonstrates client-side composition using ESM and HTTP imports.

## Quick Start

```bash
# Install dependencies
pnpm install

# Start all apps
pnpm start

# Visit http://localhost:4321

# To kill ports
pnpm reset:ports
```

## Apps

| App | Framework | Port | Route |
|-----|-----------|------|-------|
| **shell** | Astro | 4321 | `/` |
| **app-react-1** | React | 7100 | `/users` |
| **app-react-2** | React | 7200 | `/analytics` |
| **app-vue** | Vue 3 | 7400 | `/products` |
| **app-solid** | Solid.js | 7300 | `/settings` |
