<template>
  <div class="inventory-page">
    <h1>Inventory Management</h1>
    <p class="subtitle">Monitor stock levels and warehouse status</p>

    <div class="inventory-summary">
      <div class="summary-card">
        <h3>Low Stock Alert</h3>
        <p class="alert-count">{{ lowStockItems }} items</p>
        <p class="alert-text">Need reordering</p>
      </div>
      <div class="summary-card">
        <h3>Total Products</h3>
        <p class="alert-count">{{ inventory.length }}</p>
        <p class="alert-text">In inventory</p>
      </div>
      <div class="summary-card">
        <h3>Total Value</h3>
        <p class="alert-count">${{ totalValue.toLocaleString() }}</p>
        <p class="alert-text">Inventory value</p>
      </div>
    </div>

    <div class="inventory-table-container">
      <table class="inventory-table">
        <thead>
          <tr>
            <th>SKU</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Location</th>
            <th>Last Updated</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in inventory" :key="item.sku">
            <td>{{ item.sku }}</td>
            <td>{{ item.product }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.location }}</td>
            <td>{{ item.lastUpdated }}</td>
            <td>
              <span class="status-badge" :class="getStatusClass(item.quantity)">
                {{ getStatus(item.quantity) }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

type SKU = 'LP-001' | 'WM-002' | 'MK-003' | 'MN-004' | 'HB-005' | 'DL-006'

interface InventoryItem {
  sku: SKU
  product: string
  quantity: number
  location: string
  lastUpdated: string
}

const inventory = ref<InventoryItem[]>([
  {
    sku: 'LP-001',
    product: 'Laptop Pro',
    quantity: 25,
    location: 'Warehouse A',
    lastUpdated: '2025-01-29'
  },
  {
    sku: 'WM-002',
    product: 'Wireless Mouse',
    quantity: 150,
    location: 'Warehouse B',
    lastUpdated: '2025-01-28'
  },
  {
    sku: 'MK-003',
    product: 'Mechanical Keyboard',
    quantity: 8,
    location: 'Warehouse A',
    lastUpdated: '2025-01-29'
  },
  {
    sku: 'MN-004',
    product: '4K Monitor',
    quantity: 42,
    location: 'Warehouse C',
    lastUpdated: '2025-01-27'
  },
  {
    sku: 'HB-005',
    product: 'USB-C Hub',
    quantity: 89,
    location: 'Warehouse B',
    lastUpdated: '2025-01-26'
  },
  {
    sku: 'DL-006',
    product: 'Desk Lamp',
    quantity: 5,
    location: 'Warehouse A',
    lastUpdated: '2025-01-29'
  }
])

const lowStockItems = computed(() =>
  inventory.value.filter((item: InventoryItem) => item.quantity < 10).length
)

const totalValue = computed(() => {
  const prices: Record<SKU, number> = {
    'LP-001': 1299.99,
    'WM-002': 29.99,
    'MK-003': 89.99,
    'MN-004': 399.99,
    'HB-005': 49.99,
    'DL-006': 34.99
  }
  return inventory.value.reduce((sum: number, item: InventoryItem) => sum + (prices[item.sku] * item.quantity), 0)
})

function getStatus(quantity: number): string {
  if (quantity < 10) return 'Low Stock'
  if (quantity < 50) return 'Normal'
  return 'In Stock'
}

function getStatusClass(quantity: number): string {
  if (quantity < 10) return 'status-low'
  if (quantity < 50) return 'status-normal'
  return 'status-good'
}
</script>
