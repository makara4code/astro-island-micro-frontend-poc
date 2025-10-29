import { createApp, Component } from 'vue'
import { createRouter, createWebHistory, Router } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import App from './App.vue'
import Products from './pages/Products.vue'
import Orders from './pages/Orders.vue'
import Inventory from './pages/Inventory.vue'
import './styles/products.css'

export interface MicroFrontendVueReturn {
  App: Component
  router: Router
}

export default function MicroFrontendVue(): MicroFrontendVueReturn {
  const routes: RouteRecordRaw[] = [
    {
      path: '/',
      redirect: '/products',
    },
    {
      path: '/products',
      name: 'Products',
      component: Products,
    },
    {
      path: '/orders',
      name: 'Orders',
      component: Orders,
    },
    {
      path: '/inventory',
      name: 'Inventory',
      component: Inventory,
    },
  ]

  const router = createRouter({
    history: createWebHistory('/products'),
    routes,
  })

  return { App, router }
}
