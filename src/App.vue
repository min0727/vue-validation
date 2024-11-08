<template>
  <div class="app">
    <nav class="bg-blue-500 text-white p-4">
      <router-link
        v-for="route in routes"
        :key="route.path"
        :to="route.path"
        class="px-2"
      >
        {{ route.name }}
      </router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
import { routes } from '@/router';
</script>

<style scoped>
/* TailwindCSSのスタイルは適用されるのでここでは追加不要です */
</style>
