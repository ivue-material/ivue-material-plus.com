<template>
    <h4>Small</h4>
    <ivue-input v-model="value" placeholder="Enter something..." size="small"></ivue-input>
    <h4>Default</h4>
    <ivue-input v-model="value" placeholder="Enter something..."></ivue-input>
    <h4>Large</h4>
    <ivue-input v-model="value" placeholder="Enter something..." size="large"></ivue-input>
</template>

<script setup>
import { ref } from 'vue';

const value= ref('');
</script>
