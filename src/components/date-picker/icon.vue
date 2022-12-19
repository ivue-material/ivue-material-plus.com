<template>
    <ivue-date-picker
        v-model="date"
        prev-icon="arrow_back"
        next-icon="arrow_forward"
        year-icon="favorite"
    ></ivue-date-picker>
</template>

<script setup>
import { ref } from 'vue';

const date = ref(new Date().toISOString().substr(0, 10));
</script>
