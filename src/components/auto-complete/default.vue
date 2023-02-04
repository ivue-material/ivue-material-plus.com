<template>
  <ivue-auto-complete
    v-model="value"
    :list="data"
    placeholder="请输入"
    clearable
    @on-search="handleSearch"
  >
    <template #prefix>
      <ivue-icon>favorite_border</ivue-icon>
    </template>
    <template #suffix>
      <ivue-icon>cruelty_free</ivue-icon>
    </template>
  </ivue-auto-complete>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
const data = ref([]);

const handleSearch = (value) => {
  data.value = !value ? [] : [value, value + value, value + value + value];
};
</script>
