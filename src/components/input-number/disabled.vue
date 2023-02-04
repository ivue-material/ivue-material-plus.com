<template>
  <ivue-input-number
    v-model="value"
    :max="10"
    :min="1"
    :disabled="disabled"
  ></ivue-input-number>
  <ivue-button class="input-number-button" @click="disabled = !disabled"
    >切换禁用</ivue-button
  >
</template>

<script setup>
import { ref } from 'vue';

const value = ref(1);
const disabled = ref(true);
</script>

<style scoped>
.input-number-button {
  margin-left: 20px;
}
</style>
