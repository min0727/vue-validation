<template>
  <div class="app">
    <nav class="bg-blue-500 text-white p-4">
      <router-link to="/" class="px-2">Home</router-link>
      <router-link to="/about" class="px-2">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
</script>

<style scoped>
/* TailwindCSSのスタイルは適用されるのでここでは追加不要です */
</style>
