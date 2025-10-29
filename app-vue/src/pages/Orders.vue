<template>
  <div class="orders-page">
    <h1>Order Management</h1>
    <p class="subtitle">Track and manage customer orders</p>

    <div class="orders-stats">
      <div class="stat-card">
        <div class="stat-value">{{ orders.length }}</div>
        <div class="stat-label">Total Orders</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">{{ pendingOrders }}</div>
        <div class="stat-label">Pending</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">{{ shippedOrders }}</div>
        <div class="stat-label">Shipped</div>
      </div>
    </div>

    <div class="orders-list">
      <div v-for="order in orders" :key="order.id" class="order-card">
        <div class="order-header">
          <span class="order-id">Order #{{ order.id }}</span>
          <span class="order-status" :class="'status-' + order.status.toLowerCase()">
            {{ order.status }}
          </span>
        </div>
        <div class="order-details">
          <p><strong>Customer:</strong> {{ order.customer }}</p>
          <p><strong>Date:</strong> {{ order.date }}</p>
          <p><strong>Total:</strong> ${{ order.total }}</p>
          <p><strong>Items:</strong> {{ order.items }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

type OrderStatus = 'Pending' | 'Shipped' | 'Delivered'

interface Order {
  id: number
  customer: string
  date: string
  total: number
  items: string
  status: OrderStatus
}

const orders = ref<Order[]>([
  {
    id: 1001,
    customer: 'John Doe',
    date: '2025-01-28',
    total: 1329.98,
    items: 'Laptop Pro, Wireless Mouse',
    status: 'Pending'
  },
  {
    id: 1002,
    customer: 'Jane Smith',
    date: '2025-01-27',
    total: 489.98,
    items: '4K Monitor, USB-C Hub',
    status: 'Shipped'
  },
  {
    id: 1003,
    customer: 'Bob Johnson',
    date: '2025-01-26',
    total: 89.99,
    items: 'Mechanical Keyboard',
    status: 'Delivered'
  },
  {
    id: 1004,
    customer: 'Alice Brown',
    date: '2025-01-29',
    total: 64.98,
    items: 'Desk Lamp, Wireless Mouse',
    status: 'Pending'
  },
  {
    id: 1005,
    customer: 'Charlie Wilson',
    date: '2025-01-25',
    total: 399.99,
    items: '4K Monitor',
    status: 'Shipped'
  }
])

const pendingOrders = computed(() =>
  orders.value.filter(order => order.status === 'Pending').length
)

const shippedOrders = computed(() =>
  orders.value.filter(order => order.status === 'Shipped').length
)
</script>
