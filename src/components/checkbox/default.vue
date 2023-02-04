<template>
  <h4>默认</h4>
  <ivue-checkbox v-model="value1">checkbox</ivue-checkbox>
  <h4>color</h4>
  <ivue-checkbox v-model="value2" color="#27E2B2">checkbox</ivue-checkbox>
  <h2>设置true-value和false-value</h2>
  <ivue-checkbox v-model="value3" :true-value="1" :false-value="0"
    >Radio</ivue-checkbox
  >
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(false);
const value2 = ref(false);
const value3 = ref(1);
</script>
