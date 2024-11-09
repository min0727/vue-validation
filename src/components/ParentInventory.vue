<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">在庫管理</h1>
    <ChildInventory
      v-model:inbound="inbound"
      v-model:outbound="outbound"
      v-model:stock="stock"
    />
    <div class="mt-4">
      <p class="text-lg">入庫: {{ inbound }}</p>
      <p class="text-lg">出庫: {{ outbound }}</p>
      <p class="text-lg">在庫: {{ stock }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import ChildInventory from '@/components/ChildInventory.vue';

const inbound = ref(0);
const outbound = ref(0);
const stock = ref(100); // 初期在庫
</script>
