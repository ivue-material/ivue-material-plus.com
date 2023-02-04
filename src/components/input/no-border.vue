<template>
  <ivue-input
    v-model="value"
    :border="false"
    placeholder="Enter something..."
  ></ivue-input>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
</script>
