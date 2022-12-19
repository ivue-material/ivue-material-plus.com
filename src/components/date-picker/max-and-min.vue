<template>
    <ivue-date-picker v-model="date" :min="`${year}-01-01`" :max="`${year + 1}-01-01`"></ivue-date-picker>
</template>

<script setup>
import { ref } from 'vue';

const year = Number(new Date().toISOString().substr(0, 4));

const date = ref(new Date().toISOString().substr(0, 10));
</script>
