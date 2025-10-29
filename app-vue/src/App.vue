<template>
  <div class="app-vue">
    <nav class="vue-nav">
      <router-link to="/products">Products</router-link>
      <router-link to="/orders">Orders</router-link>
      <router-link to="/inventory">Inventory</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.app-vue {
  padding: 20px;
}

.vue-nav {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  padding: 15px;
  background: linear-gradient(135deg, #42b883 0%, #35495e 100%);
  border-radius: 8px;
}

.vue-nav a {
  color: white;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.vue-nav a:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.vue-nav a.router-link-active {
  background-color: rgba(255, 255, 255, 0.3);
  font-weight: bold;
}
</style>
