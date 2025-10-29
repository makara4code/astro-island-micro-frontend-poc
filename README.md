# Astro Microfrontends

A modern microfrontend architecture demonstration using Astro as the shell orchestrator with multiple framework-specific microfrontends. This project showcases client-side composition using ESM (EcmaScript Modules) and URL imports, allowing independent teams to work with their preferred frameworks while maintaining a cohesive user experience.

## 🌟 Features

- ✨ **Client-side composition** - Microfrontends loaded dynamically via HTTP imports
- 🎨 **Multi-framework support** - React, Vue 3, and Solid.js working together seamlessly
- 🎭 **Dynamic theming** - Header colors change based on active module
- 🚀 **SSG/SSR support** - Powered by Astro's flexible rendering
- 🔧 **Monorepo structure** - Managed with pnpm workspaces
- ⚡ **Parallel execution** - Fast builds and concurrent server startup
- 📦 **Shared dependencies** - Efficient code sharing via import maps
- 🔄 **Hot reload** - Development mode with HMR for all apps
- 🎯 **Independent deployment** - Each microfrontend can be deployed separately

## 📱 Microfrontend Apps

| App | Framework | Port | Route | Theme Color | Description |
|-----|-----------|------|-------|-------------|-------------|
| **app-react-1** | React 19 | 7100 | `/users` | 🔵 Blue | User Management with profiles and permissions |
| **app-react-2** | React 19 | 7200 | `/analytics` | 🟣 Purple | Analytics Dashboard with reports |
| **app-vue** | Vue 3 + TypeScript | 7400 | `/products` | 🟢 Green | Product, Orders & Inventory Management |
| **app-solid** | Solid.js | 7300 | `/settings` | 💚 Emerald | Settings & Integrations configuration |
| **shell** | Astro | 4321 | `/` | 🎨 Dynamic | Shell Orchestrator (SSR/SSG) |

## 🚀 Quick Start

### Prerequisites

- **Node.js** >= 18.0.0
- **pnpm** >= 8.0.0 (recommended) or npm

Install pnpm if you haven't:
```bash
npm install -g pnpm
```

### Step 1: Clone and Install

```bash
# Clone the repository
git clone <repository-url>
cd astro-microfrontends

# Install all dependencies (for all workspaces)
pnpm install
```

This will install dependencies for:

- Shell application
- All 4 microfrontends
- All 4 Express servers

### Step 2: Development Mode

Start all apps in development mode with hot reload:

```bash
pnpm dev
```

This command:

- ✅ Starts all 4 microfrontends (ports 7100, 7200, 7300, 7400)
- ✅ Starts the Astro shell (port 4321)
- ✅ Enables hot module replacement (HMR)
- ✅ Runs everything in parallel using pnpm's `--parallel` flag

**Visit**: <http://localhost:4321>

You should see:

- Navigation header with links to all modules
- Homepage with cards for each microfrontend
- Dynamic header colors when navigating between modules

### Step 3: Production Preview (Optional)

Build and serve all apps in production mode:

```bash
pnpm start
```

This will:

1. **Build Phase** (`pnpm build:all`)
   - Builds all 4 microfrontends in parallel → `dist/bundle.js`
   - Builds the Astro shell → `dist/` folder

2. **Serve Phase** (`pnpm preview:all`)
   - Starts Express servers for each microfrontend (CORS enabled)
   - Starts Astro preview server for the shell
   - All run concurrently via pnpm's `--parallel` flag

**Visit**: <http://localhost:4321> (production build)

## Available Scripts

### Development
- `pnpm dev` - Start all apps in development mode
- `pnpm dev:app-react-1` - Start React 1 app only
- `pnpm dev:app-react-2` - Start React 2 app only
- `pnpm dev:app-vue` - Start Vue app only
- `pnpm dev:app-solid` - Start Solid app only
- `pnpm dev:shell` - Start shell only

### Build
- `pnpm build:all` - Build all apps (microfrontends + shell)
- `pnpm build:mfes` - Build all microfrontends only
- `pnpm build:shell` - Build shell only

### Production Serve
- `pnpm start` - Build and serve all apps
- `pnpm preview:all` - Serve all apps (requires build first)
- `pnpm serve:mfes` - Serve microfrontends only via Express servers
- `pnpm serve:app-react-1` - Serve React 1 app via Express
- `pnpm serve:app-react-2` - Serve React 2 app via Express
- `pnpm serve:app-vue` - Serve Vue app via Express
- `pnpm serve:app-solid` - Serve Solid app via Express
- `pnpm preview:shell` - Serve Astro shell

### Utilities

- `pnpm clean` - Remove all node_modules and dist folders

## 📁 Project Structure

```plaintext
astro-microfrontends/
├── 📦 app-react-1/                 # React microfrontend (Users)
│   ├── src/
│   │   ├── MicroFrontend.jsx       # Entry point for shell integration
│   │   ├── App.jsx                 # Main React app component
│   │   ├── pages/                  # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Users.jsx
│   │   │   └── UserDetail.jsx
│   │   └── styles/
│   │       └── pages.css
│   ├── server/                     # Express server (port 7100)
│   │   ├── server.js               # CORS-enabled server
│   │   └── package.json
│   ├── dist/
│   │   └── bundle.js               # Built ESM bundle
│   ├── vite.config.js              # Vite build config
│   └── package.json
│
├── 📦 app-react-2/                 # React microfrontend (Analytics)
│   ├── src/
│   │   ├── MicroFrontend.jsx
│   │   ├── App.jsx
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Analytics.jsx
│   │   │   └── Reports.jsx
│   │   └── styles/
│   │       └── analytics.css
│   ├── server/                     # Express server (port 7200)
│   │   ├── server.js
│   │   └── package.json
│   ├── dist/
│   │   └── bundle.js
│   ├── vite.config.js
│   └── package.json
│
├── 📦 app-vue/                     # Vue 3 + TypeScript microfrontend (Products)
│   ├── src/
│   │   ├── MicroFrontend.ts        # Entry point with TypeScript
│   │   ├── App.vue                 # Main Vue app component
│   │   ├── router.ts               # Vue Router configuration
│   │   ├── pages/
│   │   │   ├── Products.vue        # Product catalog
│   │   │   ├── Orders.vue          # Order management
│   │   │   └── Inventory.vue       # Inventory tracking
│   │   └── styles/
│   │       └── products.css
│   ├── server/                     # Express server (port 7400)
│   │   ├── server.js
│   │   └── package.json
│   ├── dist/
│   │   └── bundle.js
│   ├── vite.config.js
│   ├── tsconfig.json
│   └── package.json
│
├── 📦 app-solid/                   # Solid.js microfrontend (Settings)
│   ├── src/
│   │   ├── App.jsx                 # Main Solid app
│   │   ├── pages/
│   │   │   ├── Settings.jsx
│   │   │   └── Integrations.jsx
│   │   └── styles/
│   │       └── settings.css
│   ├── server/                     # Express server (port 7300)
│   │   ├── server.js
│   │   └── package.json
│   ├── dist/
│   │   └── bundle.js
│   ├── vite.config.js
│   └── package.json
│
├── 🏠 shell/                       # Astro shell orchestrator
│   ├── src/
│   │   ├── layouts/
│   │   │   └── Layout.astro        # Main layout with dynamic theming
│   │   ├── pages/
│   │   │   ├── index.astro         # Homepage
│   │   │   ├── users/
│   │   │   │   ├── index.astro     # Loads app-react-1
│   │   │   │   └── [...slug].astro # Catch-all for React Router
│   │   │   ├── analytics/
│   │   │   │   ├── index.astro     # Loads app-react-2
│   │   │   │   └── [...slug].astro
│   │   │   ├── products/
│   │   │   │   ├── index.astro     # Loads app-vue
│   │   │   │   └── [...slug].astro # Catch-all for Vue Router
│   │   │   └── settings/
│   │   │       └── index.astro     # Loads app-solid
│   │   └── components/
│   │       ├── ReactComponent.jsx
│   │       └── SolidComponent.jsx
│   ├── dist/                       # Built Astro site
│   ├── astro.config.mjs            # Astro + Vue + React + Solid config
│   └── package.json
│
├── 📄 Configuration Files
│   ├── pnpm-workspace.yaml         # pnpm workspace configuration
│   ├── package.json                # Root package.json with scripts
│   └── pnpm-lock.yaml              # Lockfile for all workspaces
│
└── 📚 Documentation
    ├── README.md                   # This file
    ├── SCRIPTS.md                  # Detailed script documentation
    ├── PARALLEL-SCRIPTS.md         # Parallel execution guide
    ├── THEMING.md                  # Dynamic theming documentation
    ├── app-vue/ROUTING.md          # Vue routing configuration
    └── RECOMMENDATIONS.md          # Best practices
```

### Key Directories Explained

#### Microfrontend Apps (`app-*`)

Each microfrontend follows the same structure:

- **`src/`** - Source code
  - **`MicroFrontend.(jsx|ts)`** - Entry point that exports the app for shell integration
  - **`App.(jsx|vue)`** - Main app component with routing
  - **`pages/`** - Individual page components
  - **`styles/`** - CSS modules and styles

- **`server/`** - Express server for production
  - Serves built `bundle.js` from `../dist`
  - CORS enabled for `http://localhost:4321`
  - Each runs on unique port (7100, 7200, 7300, 7400)

- **`dist/bundle.js`** - Single ESM bundle output
  - All CSS injected into JS
  - React/Vue/Solid externalized (loaded via import map)
  - Loaded by shell via HTTP import

- **`vite.config.js`** - Build configuration
  - Externalizes framework dependencies
  - Outputs single `bundle.js` in ESM format
  - CSS injection plugin

#### Shell (`shell/`)

The Astro-based orchestrator:

- **`src/layouts/Layout.astro`** - Main layout
  - Navigation header with dynamic theming
  - Import map for shared dependencies (React, Vue, Solid)
  - Global styles

- **`src/pages/`** - Route structure
  - Each microfrontend gets a folder (`users/`, `analytics/`, `products/`, `settings/`)
  - `index.astro` - Main entry point for the module
  - `[...slug].astro` - Catch-all route for client-side routing

- **`astro.config.mjs`** - Astro configuration
  - Integrations: `@astrojs/react`, `@astrojs/vue`, `@astrojs/solid-js`
  - Output: `server` mode with Node adapter
  - Custom plugin to externalize framework dependencies

## 🏗️ Architecture

### Client-Side Composition

```plaintext
┌─────────────────────────────────────────────────────────────┐
│                     Shell (Astro)                           │
│                   http://localhost:4321                     │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐ │
│  │         Import Map (esm.sh CDN)                      │ │
│  │  - react@19.2.0                                      │ │
│  │  - react-dom@19.2.0                                  │ │
│  │  - vue@3.5.13                                        │ │
│  │  - solid-js@1.9.10                                   │ │
│  └──────────────────────────────────────────────────────┘ │
│                                                             │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐       │
│  │  /users     │  │ /analytics  │  │  /products  │       │
│  │  (React)    │  │  (React)    │  │   (Vue)     │       │
│  └─────────────┘  └─────────────┘  └─────────────┘       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
         ↓                 ↓                 ↓
    HTTP Import       HTTP Import       HTTP Import
         ↓                 ↓                 ↓
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│  Express     │  │  Express     │  │  Express     │
│  :7100       │  │  :7200       │  │  :7400       │
│              │  │              │  │              │
│ bundle.js    │  │ bundle.js    │  │ bundle.js    │
│ (React App)  │  │ (React App)  │  │ (Vue App)    │
└──────────────┘  └──────────────┘  └──────────────┘
```

### How It Works

1. **Shell loads** - Astro renders the page at `http://localhost:4321`
2. **Import map loads** - Shared dependencies (React, Vue, Solid) from esm.sh CDN
3. **Navigate to module** - Click on "Users", "Analytics", "Products", or "Settings"
4. **Shell routes** - Astro's routing matches the URL
5. **HTTP import** - Page loads microfrontend via `import MFE from "http://localhost:7100/bundle.js"`
6. **Render** - Microfrontend mounts to DOM using its framework (React/Vue/Solid)
7. **Client routing** - Internal navigation handled by framework router (React Router/Vue Router)

### Benefits

- ✅ **Independent deployment** - Each microfrontend can be deployed separately
- ✅ **Framework agnostic** - Mix React, Vue, Solid (or any framework) seamlessly
- ✅ **Code sharing** - Shared dependencies via import maps reduce bundle size
- ✅ **Isolated development** - Teams work independently on their microfrontend
- ✅ **Performance** - Only load what you need, when you need it
- ✅ **Scalable** - Easy to add new microfrontends

## 🔧 Technical Details

### Import Maps

The shell defines an import map in `Layout.astro` for shared dependencies:

```html
<script type="importmap">
{
  "imports": {
    "react": "https://esm.sh/react@19.2.0",
    "react-dom": "https://esm.sh/react-dom@19.2.0",
    "vue": "https://esm.sh/vue@3.5.13",
    "solid-js": "https://esm.sh/solid-js@1.9.10"
  }
}
</script>
```

This allows all microfrontends to share the same dependency versions without bundling them.

### CORS Configuration

Each Express server enables CORS for the shell:

```javascript
// server/server.js
server.use(cors({ origin: "http://localhost:4321" }))
```

This allows the shell to load bundles via HTTP imports.

### Build Output

Each microfrontend builds to a single `bundle.js`:

```javascript
// vite.config.js
export default {
  build: {
    rollupOptions: {
      external: ['react', 'react-dom', 'vue', 'solid-js'],
      output: {
        entryFileNames: 'bundle.js',
        format: 'esm',
      },
    },
  },
}
```

### Dynamic Theming

The shell changes header colors based on the active module:

- Users → Blue `#3b82f6`
- Analytics → Purple `#8b5cf6`
- Products → Green `#42b883`
- Settings → Emerald `#10b981`

See [THEMING.md](THEMING.md) for details.

## Shared dependencies

Dependencies such as react and react-dom are shared across applications. They are fetched from [esm.sh](https://esm.sh/) and gets cached in the browser, reducing the bundle size. Each app can share other dependencies as well through url imports.

## 🐛 Troubleshooting

### Port Already in Use

If you see errors about ports being in use:

```bash
# Windows - Kill all node processes
taskkill /F /IM node.exe

# Or kill specific port
netstat -ano | findstr :7400
taskkill /F /PID <PID>

# Linux/Mac
lsof -ti:7400 | xargs kill -9
```

### Microfrontend Not Loading

**Symptoms**: Blank page or error in browser console

**Solutions**:

1. **Check all servers are running**:

   ```bash
   # Make sure you see all ports running
   # 4321 (shell), 7100, 7200, 7300, 7400 (microfrontends)
   ```

2. **Verify CORS is enabled**:
   - Check `server/server.js` has `cors({ origin: "http://localhost:4321" })`

3. **Check browser console** for errors:
   - Network errors → Server not running
   - CORS errors → CORS not configured
   - Import errors → Check import map in Layout.astro

4. **Clear browser cache** and reload

### Build Errors

```bash
# Clean everything and reinstall
pnpm clean
pnpm install
pnpm build:all
```

### Module Not Found Errors

```bash
# Reinstall dependencies
pnpm install

# Or for specific workspace
pnpm install --filter ./app-vue
```

### Hot Reload Not Working

1. Make sure you're running in dev mode: `pnpm dev`
2. Check that Vite dev server is running (not Express server)
3. Restart the dev server

## 📚 Additional Documentation

- **[SCRIPTS.md](SCRIPTS.md)** - Comprehensive script reference with examples
- **[PARALLEL-SCRIPTS.md](PARALLEL-SCRIPTS.md)** - How parallel execution works and performance benefits
- **[THEMING.md](THEMING.md)** - Dynamic header theming guide
- **[app-vue/ROUTING.md](app-vue/ROUTING.md)** - Vue Router configuration explained
- **[RECOMMENDATIONS.md](RECOMMENDATIONS.md)** - Best practices and recommendations

## 🎯 Common Tasks

### Adding a New Microfrontend

1. Create new directory: `app-new-frontend/`
2. Copy structure from existing app (e.g., `app-react-1/`)
3. Update `pnpm-workspace.yaml` to include new app
4. Create Express server in `app-new-frontend/server/`
5. Choose unique port (e.g., 7500)
6. Add integration to `shell/astro.config.mjs`
7. Create pages in `shell/src/pages/new-route/`
8. Update import map if using new framework

### Running Individual Apps

```bash
# Terminal 1 - Start specific microfrontend
pnpm dev:app-vue

# Terminal 2 - Start shell
pnpm dev:shell

# Now visit http://localhost:4321/products
```

### Building for Production

```bash
# Build everything
pnpm build:all

# Or build separately
pnpm build:mfes   # Just microfrontends
pnpm build:shell  # Just shell

# Then serve
pnpm preview:all
```

### Changing Framework Versions

1. Update version in `shell/src/layouts/Layout.astro` import map
2. Update version in microfrontend `package.json`
3. Reinstall: `pnpm install`
4. Test thoroughly

## 🌐 Deployment

### Development Environment

Already configured! Just run:

```bash
pnpm dev
```

### Production Environment

Each component can be deployed independently:

1. **Microfrontends** (app-*)
   - Build: `pnpm build`
   - Deploy `dist/bundle.js` to CDN or static host
   - Ensure CORS is configured

2. **Servers** (app-*/server)
   - Deploy Express servers to your hosting platform
   - Configure environment variables for CORS origin
   - Ensure correct port mapping

3. **Shell** (shell/)
   - Build: `pnpm build`
   - Deploy `dist/` to hosting platform (Vercel, Netlify, etc.)
   - Update import URLs to production microfrontend URLs

### Environment Variables

Create `.env` files for production URLs:

```env
# shell/.env
VITE_APP_REACT_1_URL=https://app-react-1.your-cdn.com
VITE_APP_REACT_2_URL=https://app-react-2.your-cdn.com
VITE_APP_VUE_URL=https://app-vue.your-cdn.com
VITE_APP_SOLID_URL=https://app-solid.your-cdn.com
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Test thoroughly: `pnpm dev`
5. Build: `pnpm build:all`
6. Commit: `git commit -m 'Add amazing feature'`
7. Push: `git push origin feature/amazing-feature`
8. Open a Pull Request

## 📖 Learning Resources

### Microfrontend Architecture

- [Micro Frontends](https://micro-frontends.org/) - Comprehensive guide
- [Martin Fowler on Micro Frontends](https://martinfowler.com/articles/micro-frontends.html)

### Framework Documentation

- [Astro](https://docs.astro.build/)
- [React](https://react.dev/)
- [Vue 3](https://vuejs.org/)
- [Solid.js](https://www.solidjs.com/)

### Related Articles

- [Setting up Micro Frontends with Astro and ECMAScript Modules](https://medium.com/@sergio.a.soria/setting-up-micro-frontends-with-astro-and-ecma-script-modules-137340d2c520)
- [Microfrontends with Astro, Solid & React](https://medium.com/@raymondboswel/microfrontends-with-astro-solid-react-14b89a8e861a)

### Example Projects

- [Shoe Shop](https://github.com/ayoayco/shoe-shop) - Another Astro microfrontend example
- [Distributed SSR Microfrontends](https://github.com/sasoria/astro-microfrontends-ssr-distributed)

### Presentations

- [require(lx) Presentation](https://www.youtube.com/watch?v=UQ_C79OyXI4) by Afonso Ramos

## 📝 License

[Your License Here]

## 👥 Team

This project demonstrates how multiple teams can work independently:

- **Team Users** - React app for user management
- **Team Analytics** - React app for analytics and reporting
- **Team Products** - Vue app for product and inventory management
- **Team Settings** - Solid.js app for settings and integrations
- **Platform Team** - Astro shell orchestration

Each team maintains their own codebase, chooses their framework, and deploys independently!

## ⭐ Features Showcase

- ✨ **4 Different Microfrontends** - Users, Analytics, Products, Settings
- 🎨 **3 Different Frameworks** - React (x2), Vue, Solid.js
- 🎭 **Dynamic Theming** - Header changes color per module
- ⚡ **Parallel Builds** - Fast builds using pnpm `--parallel`
- 📦 **Shared Dependencies** - Via import maps (esm.sh)
- 🔄 **Hot Reload** - Development mode with HMR
- 🚀 **SSR/SSG** - Astro's flexible rendering
- 🔧 **Monorepo** - pnpm workspaces for easy management
- 🎯 **Client-Side Routing** - React Router, Vue Router
- 🌐 **HTTP Imports** - ESM modules loaded on demand

---

### Built with ❤️ using Astro, React, Vue, and Solid.js

For questions or issues, please open an issue on GitHub.

