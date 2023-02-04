<template>
  <ivue-input v-model="value1" placeholder="请输入内容"></ivue-input>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref('');
</script>

<style scoped>
.modal-button {
  margin-right: 20px;
}
</style>
