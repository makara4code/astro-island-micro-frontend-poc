# Vue Microfrontend - Product Management

A Vue 3 + TypeScript microfrontend for managing products, orders, and inventory.

## Features

- **Product Catalog**: Browse and manage product inventory
- **Order Management**: Track and manage customer orders
- **Inventory Management**: Monitor stock levels and warehouse status
- Built with Vue 3 Composition API and TypeScript
- Vue Router for client-side navigation
- Styled with scoped CSS

## Development

Install dependencies:
```bash
pnpm install
```

Run the development server:
```bash
pnpm dev
```

Build for production:
```bash
pnpm build
```

Preview production build:
```bash
pnpm preview
```

The app will run on **port 7400** by default.

## Microfrontend Server

The production build is served via an Express server located in `./server`.

To start the server:
```bash
cd server
npm install
npm start
```

The server:
- Runs on port 7400
- Enables CORS for http://localhost:4321 (Astro shell)
- Serves the built bundle from `../dist`

## Integration with Shell

This microfrontend is loaded by the Astro shell application via ESM imports:

```typescript
import MicroFrontendVue from "http://localhost:7400/bundle.js";

const { App, router } = MicroFrontendVue();
const app = createApp(App);
app.use(router);
app.mount("#app-vue-root");
```

## Routes

- `/products` - Product catalog
- `/orders` - Order management
- `/inventory` - Inventory tracking

All routes use `/products` as the base path in the shell application.
