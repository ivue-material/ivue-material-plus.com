<template>
    <h4>文本框</h4>
    <ivue-input v-model="value" placeholder="Enter something..." :maxlength="100" show-word-limit></ivue-input>
    <h4>文本域</h4>
    <ivue-input
        v-model="value"
        placeholder="Enter something..."
        type="textarea"
        :maxlength="100"
        show-word-limit
    ></ivue-input>
</template>

<script setup>
import { ref } from 'vue';

const value= ref('');
</script>
