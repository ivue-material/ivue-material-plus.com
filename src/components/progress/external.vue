<template>
  <ivue-progress :percent="percent"></ivue-progress>

  <ivue-button class="progress-button" @click="handleAdd">增加</ivue-button>
  <ivue-button class="progress-button" @click="handleMinus">减少</ivue-button>
</template>

<script setup>
import { ref } from 'vue';

const percent = ref(0);

const handleAdd = () => {
  if (percent.value >= 100) {
    return false;
  }

  percent.value += 10;
};

const handleMinus = () => {
  if (percent.value <= 0) {
    return false;
  }

  percent.value -= 10;
};
</script>

<style scoped>
.progress-button {
  margin: 20px 20px 0 0;
}
</style>
