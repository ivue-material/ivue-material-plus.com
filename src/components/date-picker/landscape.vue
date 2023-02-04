<template>
  <h4>纵向</h4>
  <ivue-date-picker v-model="date"></ivue-date-picker>
  <h4>横向</h4>
  <ivue-date-picker v-model="date" landscape></ivue-date-picker>
</template>

<script setup>
import { ref } from 'vue';

const date = ref(new Date().toISOString().substr(0, 10));
</script>
