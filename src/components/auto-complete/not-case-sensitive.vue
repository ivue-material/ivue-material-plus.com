<template>
  <ivue-auto-complete
    v-model="value"
    :list="data"
    :filter-method="filterMethod"
    placeholder="请输入"
  ></ivue-auto-complete>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
const data = ref([]);

const filterMethod = (value, option) => {
  return option.toUpperCase().indexOf(value.toUpperCase()) !== -1;
};
</script>
