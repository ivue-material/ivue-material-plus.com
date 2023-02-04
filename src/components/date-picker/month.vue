<template>
  <ivue-date-picker v-model="date" type="month"></ivue-date-picker>
</template>

<script setup>
import { ref } from 'vue';

const date = ref(new Date().toISOString().substr(0, 7));
</script>
