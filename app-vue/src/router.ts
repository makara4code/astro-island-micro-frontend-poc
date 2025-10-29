import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Products from './pages/Products.vue'
import Orders from './pages/Orders.vue'
import Inventory from './pages/Inventory.vue'

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
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
