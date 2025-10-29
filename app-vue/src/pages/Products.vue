<template>
  <div class="products-page">
    <h1>Product Catalog</h1>
    <p class="subtitle">Browse and manage your product inventory</p>

    <div class="products-grid">
      <div v-for="product in products" :key="product.id" class="product-card">
        <div class="product-header">
          <h3>{{ product.name }}</h3>
          <span class="product-price">${{ product.price }}</span>
        </div>
        <p class="product-description">{{ product.description }}</p>
        <div class="product-footer">
          <span class="stock" :class="{ 'low-stock': product.stock < 10 }">
            Stock: {{ product.stock }}
          </span>
          <span class="category">{{ product.category }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Product {
  id: number
  name: string
  price: number
  description: string
  stock: number
  category: string
}

const products = ref<Product[]>([
  {
    id: 1,
    name: 'Laptop Pro',
    price: 1299.99,
    description: 'High-performance laptop for professionals',
    stock: 25,
    category: 'Electronics'
  },
  {
    id: 2,
    name: 'Wireless Mouse',
    price: 29.99,
    description: 'Ergonomic wireless mouse with precision tracking',
    stock: 150,
    category: 'Accessories'
  },
  {
    id: 3,
    name: 'Mechanical Keyboard',
    price: 89.99,
    description: 'Premium mechanical keyboard with RGB lighting',
    stock: 8,
    category: 'Accessories'
  },
  {
    id: 4,
    name: '4K Monitor',
    price: 399.99,
    description: 'Ultra HD 27-inch display',
    stock: 42,
    category: 'Electronics'
  },
  {
    id: 5,
    name: 'USB-C Hub',
    price: 49.99,
    description: 'Multi-port USB-C hub with power delivery',
    stock: 89,
    category: 'Accessories'
  },
  {
    id: 6,
    name: 'Desk Lamp',
    price: 34.99,
    description: 'LED desk lamp with adjustable brightness',
    stock: 5,
    category: 'Office'
  }
])
</script>
