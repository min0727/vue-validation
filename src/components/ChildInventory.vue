<template>
  <div class="space-y-4">
    <div>
      <label class="block text-sm font-medium text-gray-700">入庫</label>
      <input
        v-model="inbound"
        type="number"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700">出庫</label>
      <input
        v-model="outbound"
        type="number"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700">在庫</label>
      <input
        v-model="stock"
        type="number"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        readonly
      />
    </div>
  </div>
</template>

<script setup>
import { watch } from 'vue';

const inbound = defineModel('inbound', {
  type: Number,
  default: 0,
  validator: (value) => value >= 0,
});

const outbound = defineModel('outbound', {
  type: Number,
  default: 0,
  validator: (value, { stock }) => value >= 0 && value <= stock, // 0以上かつ在庫以下
});

const stock = defineModel('stock', {
  default: 100,
  validator: (value) => value >= 0,
});

// 入庫と出庫が変わるたびに在庫を更新
watch([inbound, outbound], ([newInbound, newOutbound]) => {
  stock.value = newInbound - newOutbound;
  // inbound.value = 0;
  // outbound.value = 0;
});
</script>
