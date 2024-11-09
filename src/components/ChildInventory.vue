<template>
  <div class="space-y-4">
    <div>
      <label class="block text-sm font-medium text-gray-700">入庫</label>
      <input
        v-model="inbound"
        type="number"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      />
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700">出庫</label>
      <input
        v-model="outbound"
        type="number"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      />
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700">在庫</label>
      <input
        v-model="stock"
        type="number"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
});
</script>
