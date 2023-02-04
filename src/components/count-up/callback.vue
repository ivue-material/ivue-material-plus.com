<template>
  <h4>初始目标值：50，到达后，延迟1秒再到目标值 100</h4>
  <h1>
    <ivue-count-up
      :end-value="endValue"
      :duration="6"
      :callback="handleCallback"
      ref="countUp"
    ></ivue-count-up>
  </h1>
  <ivue-button class="button" @click="handleReset">重新开始</ivue-button>
</template>

<script setup>
import { ref } from 'vue';

const countUp = ref();
const endValue = ref(50);

// 重新开始
const handleReset = () => {
  endValue.value = 50;
  countUp.value.reset();
  countUp.value.start();
};

// 回调
const handleCallback = (value) => {
  if (value && value.endVal === 50) {
    setTimeout(() => {
      endValue.value = 100;
    }, 1000);
  }
};
</script>
