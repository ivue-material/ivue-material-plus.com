<template>
    <ivue-input-number v-model="value" :max="10" :min="1" readonly></ivue-input-number>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(1);
</script>
