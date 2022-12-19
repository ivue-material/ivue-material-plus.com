<template>
    <ivue-date-picker v-model="date" :title-year-format="titleYearFormat"></ivue-date-picker>
</template>

<script setup>
import { ref } from 'vue';

const date = ref(new Date().toISOString().substr(0, 10));

const format = () => {
    return (dateString) => {
        return `${dateString}年`;
    };
};

const titleYearFormat = format();
</script>
