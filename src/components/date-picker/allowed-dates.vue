<template>
  <ivue-date-picker
    v-model="date"
    :allowed-dates="allowedDates"
  ></ivue-date-picker>
</template>

<script setup>
import { ref } from 'vue';

const date = ref(new Date().toISOString().substr(0, 10));

const allowedDates = (value) => {
  return parseInt(value.split('-')[2], 10) % 2 === 0;
};
</script>
