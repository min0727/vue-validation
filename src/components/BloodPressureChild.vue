<template>
  <div>
    <h2>Blood Pressure Child Component</h2>
    <label>血圧上</label>
    <input v-model.number="systolic" type="number" min="0" max="300" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
    <label>血圧下</label>
    <input v-model.number="diastolic" type="number" min="0" max="300" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
  </div>
</template>

<script setup>
import { watch } from 'vue';

const systolic = defineModel('systolic', {
  type: Number,
  default: 120,
  validator: (value) => value >= 0 && value <= 300, // 0以上300以下
});

const diastolic = defineModel('diastolic', {
  type: Number,
  default: 80,
  validator: (value, { systolic }) =>
    value >= 0 && value <= 300 && value < systolic, // 0以上300以下かつ血圧上より小さい
});

// 血圧上が変わった場合、血圧下が自動的に上を超えないよう調整
watch(systolic, (newSystolic) => {
  if (diastolic.value >= newSystolic && newSystolic > 1) {
    diastolic.value = newSystolic - 1; // 血圧下が血圧上を超えないように設定
  } else if (newSystolic <= 1) {
    diastolic.value = 0; // 血圧上が1以下の場合、血圧下を0に設定
  }
});
</script>
