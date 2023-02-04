<template>
  <h4>普通</h4>
  <ivue-radio v-model="value1">Radio</ivue-radio>
  <h4>设置true-value和false-value</h4>
  <ivue-radio v-model="value2" :true-value="1" :false-value="0" color="orange"
    >Radio</ivue-radio
  >
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(false);
const value2 = ref(0);
</script>

<style lang="scss" scoped></style>
