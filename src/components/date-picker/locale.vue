<template>
  <ivue-date-picker v-model="date" locale="zh-CN"></ivue-date-picker>
</template>

<script setup>
import { ref } from 'vue';

const date = ref(new Date().toISOString().substr(0, 10));
</script>
