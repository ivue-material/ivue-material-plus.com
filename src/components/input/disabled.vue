<template>
    <ivue-input class="input" v-model="value" disabled placeholder="Enter something..."></ivue-input>
    <ivue-input
        class="input"
        v-model="value"
        disabled
        type="textarea"
        placeholder="Enter something..."
    ></ivue-input>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
</script>

<style>
.input {
    display: flex;
    margin-bottom: 10px;
}
</style>
