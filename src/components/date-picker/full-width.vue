<template>
  <h2>纵向</h2>
  <ivue-date-picker v-model="date" full-width></ivue-date-picker>
  <h2>横向</h2>
  <ivue-date-picker v-model="date" landscape full-width></ivue-date-picker>
</template>

<script setup>
import { ref } from 'vue';

const date = ref(new Date().toISOString().substr(0, 10));
</script>
