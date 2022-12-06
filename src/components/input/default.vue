<template>
    <ivue-input v-model="value" placeholder="Enter something..." style="width: 300px"></ivue-input>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
</script>
