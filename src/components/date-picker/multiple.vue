<template>
  <ivue-date-picker v-model="date" multiple></ivue-date-picker>
</template>

<script setup>
import { ref } from 'vue';

const date = ref(['2022-12-19', '2022-12-20']);
</script>
