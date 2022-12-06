<template>
    <ivue-input
        v-model="value"
        type="password"
        password
        autocomplete="new-password"
        placeholder="Enter something..."
        style="width: 300px"
    ></ivue-input>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
</script>
