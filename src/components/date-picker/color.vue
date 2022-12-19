<template>
    <h4>只设置color</h4>
    <ivue-date-picker v-model="date" color="#FFBD3C"></ivue-date-picker>
    <h4>设置color和header-color</h4>
    <ivue-date-picker v-model="date" color="#FF617F" header-color="#27E2B2"></ivue-date-picker>
</template>

<script setup>
import { ref } from 'vue';

const date = ref(new Date().toISOString().substr(0, 10));
</script>
