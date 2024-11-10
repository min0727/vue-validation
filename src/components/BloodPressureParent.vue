<template>
  <div>
    <h1>Blood Pressure Management</h1>
    <BloodPressureChild
      v-model:systolic="systolic"
      v-model:diastolic="diastolic"
    />
    <p>血圧上: {{ systolic }}</p>
    <p>血圧下: {{ diastolic }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import BloodPressureChild from '@/components/BloodPressureChild.vue';

const systolic = ref(120); // 血圧上
const diastolic = ref(80); // 血圧下
</script>
