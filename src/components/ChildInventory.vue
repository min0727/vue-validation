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
  default: 0,
  validator: (value) => value >= 0
});

const outbound = defineModel('outbound', {
  default: 0
});

const stock = defineModel('stock', {
  default: 100,
  validator: (value) => value >= 0
});

// バリデーションと計算ロジック
watch([inbound, outbound, stock], ([newInbound, newOutbound, newStock]) => {
  // 出庫のバリデーション
  if (newOutbound > newStock) {
    outbound.value = newStock;
  }

  // 在庫の計算
  stock.value = Math.max(0, newStock + newInbound - outbound.value);
}, { immediate: true });
</script>
