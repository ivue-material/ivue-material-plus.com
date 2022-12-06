<template>
    <h4>Rows 默认为 2</h4>
    <ivue-input v-model="value1" type="textarea" placeholder="Enter something..."></ivue-input>
    <h4>Rows 设置为 4</h4>
    <ivue-input v-model="value2" :rows="4" type="textarea" placeholder="Enter something..."></ivue-input>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref('');
const value2 = ref('');
</script>
