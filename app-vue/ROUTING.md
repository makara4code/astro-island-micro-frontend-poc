# Vue App Routing Configuration

## Overview

The Vue microfrontend uses Vue Router with a base path of `/products` to integrate with the Astro shell.

## Route Structure

### Base Configuration
```typescript
createRouter({
  history: createWebHistory('/products'),
  routes: [...]
})
```

The `/products` base path means:
- Shell URL: `http://localhost:4321/products`
- Maps to: Vue router's `/` route
- Which redirects to: `/products` (Products listing page)

### Routes

| Route Path | Component | Full URL | Description |
|------------|-----------|----------|-------------|
| `/` | - | `http://localhost:4321/products` | Redirects to `/products` |
| `/products` | Products.vue | `http://localhost:4321/products/products` | Product listing (landing page) |
| `/orders` | Orders.vue | `http://localhost:4321/products/orders` | Order management |
| `/inventory` | Inventory.vue | `http://localhost:4321/products/inventory` | Inventory tracking |

## How It Works

### 1. User visits `/products`
```
Browser: http://localhost:4321/products
↓
Astro: Matches /products/index.astro
↓
Loads Vue bundle: http://localhost:7400/bundle.js
↓
Vue Router: Base = /products, Current path = /
↓
Redirect rule: / → /products
↓
Final URL: http://localhost:4321/products/products
↓
Displays: Products.vue component
```

### 2. Navigation within Vue app

```typescript
// App.vue navigation links
<router-link to="/products">Products</router-link>
<router-link to="/orders">Orders</router-link>
<router-link to="/inventory">Inventory</router-link>
```

These are relative to the base `/products`:
- `to="/products"` → `http://localhost:4321/products/products`
- `to="/orders"` → `http://localhost:4321/products/orders`
- `to="/inventory"` → `http://localhost:4321/products/inventory`

## Why This Structure?

### Option 1: Current (with redirect)
```typescript
routes: [
  { path: '/', redirect: '/products' },        // Landing page redirect
  { path: '/products', component: Products },  // Product listing
  { path: '/orders', component: Orders },
  { path: '/inventory', component: Inventory },
]
```

**Pros:**
- Clear, explicit landing page
- Products listing shows at `/products` (base URL)
- Consistent with navigation structure

**Cons:**
- URL shows `/products/products` for landing page

### Option 2: Alternative (no redirect)
```typescript
routes: [
  { path: '/', component: Products },          // Landing page
  { path: '/orders', component: Orders },
  { path: '/inventory', component: Inventory },
]
```

**Pros:**
- Cleaner URL: `/products` shows Products listing
- No redirect needed

**Cons:**
- Navigation links need updating:
  - `<router-link to="/">Products</router-link>`
  - Less semantic (what does `/` mean in context?)
- Inconsistent with other links (`/orders`, `/inventory`)

## Current Implementation (Recommended)

We use **Option 1** for the following reasons:

1. **Semantic clarity**: `/products` in the link clearly means "products page"
2. **Consistency**: All navigation links follow same pattern (`/products`, `/orders`, `/inventory`)
3. **Explicit behavior**: The redirect makes it clear where the landing page is
4. **Easy to maintain**: Adding new routes follows the same pattern

## Navigation Links

All navigation links in [App.vue](src/App.vue:4-6) use absolute paths relative to the base:

```vue
<router-link to="/products">Products</router-link>
<router-link to="/orders">Orders</router-link>
<router-link to="/inventory">Inventory</router-link>
```

These work correctly because:
- Vue Router base is `/products`
- Links are relative to base
- Final URLs: `/products/products`, `/products/orders`, `/products/inventory`

## Testing

### Development Mode
```bash
pnpm dev:app-vue  # Start Vue app on port 7400
pnpm dev:shell    # Start shell on port 4321
```

Visit:
- `http://localhost:4321/products` → Should show Products listing
- `http://localhost:4321/products/orders` → Should show Orders
- `http://localhost:4321/products/inventory` → Should show Inventory

### Production Mode
```bash
pnpm build:all
pnpm preview:all
```

Test the same URLs as above.

## Troubleshooting

### Issue: Blank page at `/products`

**Cause**: Router not redirecting from `/` to `/products`

**Fix**: Verify redirect route exists in [MicroFrontend.ts](src/MicroFrontend.ts:17-20):
```typescript
{
  path: '/',
  redirect: '/products',
}
```

### Issue: Navigation links not working

**Cause**: Incorrect base path or link format

**Fix**:
1. Verify base path in router: `createWebHistory('/products')`
2. Verify links use absolute paths: `to="/products"` not `to="products"`

### Issue: URL shows `/products/products` which looks redundant

**Explanation**: This is expected behavior:
- `/products` = Shell route (Astro)
- `/products` = Vue app route (component)
- Full URL = Shell route + Vue route

If you prefer cleaner URLs, use **Option 2** from above and update navigation links.

## Summary

✅ **Landing page**: Products listing at `/products` (redirects to `/products/products`)
✅ **Navigation**: All links work correctly with base path
✅ **Consistent**: Same pattern as other microfrontends
✅ **Maintainable**: Easy to add new routes

The redirect from `/` → `/products` ensures users see the Products listing immediately when visiting the Vue app!
