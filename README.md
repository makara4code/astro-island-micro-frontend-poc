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

## ⚖️ Architecture Comparison: Astro Islands vs Module Federation

This project uses **Astro's Island architecture with HTTP imports**, which differs significantly from **Webpack Module Federation**. Understanding these differences is crucial for making informed architectural decisions.

### Astro Island Architecture (This Project)

**How It Works:**
- Microfrontends are built as standalone ESM bundles (`bundle.js`)
- Shell loads bundles via HTTP imports: `import MFE from "http://localhost:7100/bundle.js"`
- Shared dependencies distributed via Import Maps (esm.sh CDN)
- Each microfrontend requires a **full build** before being served
- Development uses preview mode (serving built bundles)

### Module Federation (Webpack/Vite/Rspack)

**How It Works:**
- Microfrontends expose modules dynamically via federation plugin
- Shell loads remote modules at runtime with automatic dependency sharing
- Shared dependencies bundled once and deduplicated automatically
- True development hot reload (HMR) across all microfrontends
- TypeScript support with shared types between host and remotes

---

### 🔴 Key Limitations of Astro Island Approach

#### 1. **No True Development Hot Reload**

**Astro Islands:**
- ❌ Microfrontends must be **built before every change** (`pnpm build:mfes`)
- ❌ Cannot run microfrontends in dev mode alongside shell
- ❌ Any code change requires:
  1. Stop dev server
  2. Rebuild microfrontend (`vite build`)
  3. Restart servers
- ❌ Slow feedback loop for iterative development
- ⚠️ Current workaround: Run microfrontends in preview mode (serves pre-built bundles)

**Module Federation:**
- ✅ **True HMR** - Changes reflect instantly without rebuild
- ✅ All microfrontends run in dev mode simultaneously
- ✅ Instant feedback loop (< 1 second)
- ✅ Preserves application state during hot reload
- ✅ Vite/Webpack dev server handles all updates automatically

**Example Workflow Comparison:**

```bash
# Astro Islands (This Project)
# Make a change to app-react-1/src/pages/Users.jsx
pnpm build:mfes                    # ~5-10 seconds
# Restart dev server
# See changes                       # Total: ~15 seconds

# Module Federation
# Make a change to app-react-1/src/pages/Users.jsx
# See changes instantly              # Total: < 1 second (HMR)
```

---

#### 2. **No Runtime TypeScript Support**

**Astro Islands:**
- ❌ No shared TypeScript types between shell and microfrontends
- ❌ No type safety when importing remote modules
- ❌ Each microfrontend has isolated TypeScript config
- ❌ Shell cannot infer types from microfrontend exports
- ❌ Manual type definitions required for integration points

**Module Federation:**
- ✅ **Full TypeScript support** with `@module-federation/typescript`
- ✅ Automatic type generation for federated modules
- ✅ Type-safe imports across microfrontends
- ✅ IDE autocomplete and IntelliSense across boundaries
- ✅ Compile-time type checking for remote modules

**Example:**

```typescript
// Astro Islands - No type inference
import MicroFrontendReact1 from "http://localhost:7100/bundle.js";
// ❌ Type: any - no autocomplete, no type safety

// Module Federation - Full type support
import { App } from "appReact1/App";
// ✅ Type: React.ComponentType<AppProps>
// ✅ Full autocomplete and type checking
```

---

#### 3. **Build-First Development Requirement**

**Astro Islands:**
- ❌ Cannot develop against source code directly
- ❌ `pnpm dev` script must build all microfrontends first
- ❌ Slow initial startup (~5-15 seconds for builds)
- ❌ Debugging built bundles (not source) in browser
- ❌ Source maps required but may not be perfect

```javascript
// Current dev script - requires build step
"dev": "pnpm build:mfes && concurrently \"pnpm serve:mfes\" \"pnpm dev:shell\""
```

**Module Federation:**
- ✅ Develop against **source code** in real-time
- ✅ Instant startup (no build step required)
- ✅ Debug actual source files in browser
- ✅ Native browser dev tools experience
- ✅ Perfect source maps automatically

---

#### 4. **Limited Dynamic Module Loading**

**Astro Islands:**
- ❌ HTTP imports are static strings (must know URL at build time)
- ❌ Difficult to load modules conditionally
- ❌ Cannot easily implement plugin systems
- ❌ Hard to version and rollback individual modules
- ❌ No runtime module discovery

```javascript
// Static - must know URL at compile time
import MFE from "http://localhost:7100/bundle.js";
```

**Module Federation:**
- ✅ **Dynamic imports** at runtime
- ✅ Conditional loading based on user permissions/features
- ✅ Plugin architectures with runtime discovery
- ✅ Version negotiation and fallbacks
- ✅ A/B testing different module versions

```javascript
// Dynamic - load based on runtime conditions
const module = await import(`${remoteUrl}/module`);
```

---

#### 5. **CORS and Networking Complexity**

**Astro Islands:**
- ❌ **CORS must be configured** on every microfrontend server
- ❌ Network requests for every bundle (even localhost)
- ❌ Cannot work offline during development
- ❌ Browser caching issues during development
- ❌ Additional Express servers required for CORS

```javascript
// Every server needs CORS config
server.use(cors({ origin: true }));
```

**Module Federation:**
- ✅ No CORS issues (modules bundled by build tool)
- ✅ Works offline after initial load
- ✅ Better caching strategies
- ✅ No additional server configuration needed
- ✅ Simplified development setup

---

#### 6. **Dependency Version Management**

**Astro Islands:**
- ❌ Import maps hardcode specific versions
- ❌ All apps must use exact same dependency versions
- ❌ Updating React version requires:
  - Updating import map in shell
  - Updating all microfrontend package.json files
  - Full rebuild of all apps
- ❌ No automatic version negotiation

```html
<!-- Shell must specify exact versions -->
<script type="importmap">
{
  "imports": {
    "react": "https://esm.sh/react@19.2.0",  <!--❌ Hardcoded -->
    "react-dom": "https://esm.sh/react-dom@19.2.0"
  }
}
</script>
```

**Module Federation:**
- ✅ **Automatic dependency sharing** and deduplication
- ✅ Version negotiation (use highest compatible version)
- ✅ Fallback strategies for incompatible versions
- ✅ Singleton dependencies (React, Vue) shared automatically
- ✅ Update one app without affecting others

---

#### 7. **State Management and Communication**

**Astro Islands:**
- ⚠️ Shared state requires manual implementation
- ⚠️ Custom events or global state managers needed
- ⚠️ No built-in communication patterns
- ⚠️ Difficult to share context across microfrontends

**Module Federation:**
- ✅ **Built-in shared modules** for state management
- ✅ Can expose Redux/Zustand stores as federated modules
- ✅ React Context can be shared across remotes
- ✅ Event buses can be federated
- ✅ Established patterns for communication

---

#### 8. **Performance Implications**

**Astro Islands:**
- ⚠️ Import maps load dependencies from CDN (network latency)
- ⚠️ Separate HTTP requests for each bundle
- ⚠️ Browser must download React/Vue from esm.sh
- ⚠️ Cold start can be slower
- ✅ Better for SSR/SSG scenarios
- ✅ Smaller initial bundle (dependencies external)

**Module Federation:**
- ✅ Dependencies bundled locally (faster initial load)
- ✅ Single request for shared dependencies
- ✅ Better performance for client-side apps
- ✅ Automatic code splitting and optimization
- ⚠️ Larger initial bundle (includes shared deps)

---

### 📊 Feature Comparison Table

| Feature | Astro Islands | Module Federation |
|---------|---------------|-------------------|
| **Development HMR** | ❌ No - requires rebuild | ✅ Yes - instant |
| **TypeScript Support** | ❌ No runtime types | ✅ Full type safety |
| **Startup Time** | ❌ Slow (build required) | ✅ Instant |
| **Live Debugging** | ⚠️ Built bundles only | ✅ Source code |
| **Dynamic Loading** | ❌ Static URLs only | ✅ Runtime dynamic |
| **CORS Setup** | ❌ Required | ✅ Not needed |
| **Version Management** | ❌ Manual/hardcoded | ✅ Automatic |
| **State Sharing** | ⚠️ Manual implementation | ✅ Built-in patterns |
| **Framework Support** | ✅ Any framework | ✅ Any framework |
| **Independent Deploy** | ✅ Yes | ✅ Yes |
| **SSR/SSG Support** | ✅ Excellent | ⚠️ Limited |
| **Learning Curve** | ✅ Simple | ⚠️ Moderate |
| **Production Bundle** | ✅ Smaller | ⚠️ Larger |
| **Build Tool** | ✅ Any (Vite, Webpack) | ⚠️ Webpack/Rspack/Vite |

---

### 🎯 When to Use Each Approach

#### Choose **Astro Islands** (This Project) When:

- ✅ You need **SSR/SSG** (static site generation)
- ✅ Your site is **content-heavy** (blogs, docs, marketing)
- ✅ You want **framework flexibility** without build tool constraints
- ✅ You prefer **simple** architecture (no complex federation config)
- ✅ Development speed is not critical (infrequent changes)
- ✅ You don't need TypeScript types across boundaries
- ✅ Your microfrontends are relatively **independent** (minimal shared state)

#### Choose **Module Federation** When:

- ✅ You need **fast development iteration** (frequent changes)
- ✅ Your app is **highly interactive** (dashboard, SaaS platform)
- ✅ You require **TypeScript support** across microfrontends
- ✅ You need **runtime dynamic module loading**
- ✅ You have **complex shared state** requirements
- ✅ Development teams work on features **simultaneously**
- ✅ You need **A/B testing** or feature flags at module level
- ✅ Performance is critical (avoid CDN dependencies)

---

### 💡 Hybrid Approach Recommendation

For the best of both worlds, consider:

1. **Development**: Use Module Federation for fast HMR and TypeScript support
2. **Production**: Build as ESM bundles for independent deployment
3. **Shell**: Use Astro for SSG/SSR capabilities
4. **Remotes**: Use Module Federation for development, compile to ESM for production

This gives you development velocity **and** deployment flexibility.

---

### 🔄 Migration Path

If you need Module Federation features, you can migrate incrementally:

1. Keep Astro shell for routing and SSR
2. Replace HTTP imports with `@module-federation/vite` or Webpack Module Federation
3. Configure federation plugin in each microfrontend
4. Update shell to use federation runtime
5. Maintain same independent deployment model

**Resources:**
- [Module Federation Examples](https://github.com/module-federation/module-federation-examples)
- [Vite Plugin Federation](https://github.com/originjs/vite-plugin-federation)
- [@module-federation/enhanced](https://github.com/module-federation/core)

---

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

