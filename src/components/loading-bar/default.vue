<template>
  <ivue-button class="button" @click="handleStart">Start</ivue-button>
  <ivue-button class="button" @click="handleFinish">Finish</ivue-button>
  <ivue-button class="button" @click="handleError">Error</ivue-button>
  <ivue-button class="button" @click="handleUpdate">Update 50%</ivue-button>
</template>

<script setup>
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

const handleStart = () => {
  proxy.$LoadingBar.start();
};

const handleFinish = () => {
  proxy.$LoadingBar.finish();
};

const handleError = () => {
  proxy.$LoadingBar.error();
};

const handleUpdate = () => {
  proxy.$LoadingBar.update(50);
};
</script>

<style scoped>
.button {
  margin-right: 10px !important;
}
</style>
