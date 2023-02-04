<template>
  <h4>不显示分隔符及 easing 动画</h4>
  <h1>
    <ivue-count-up
      :end-value="1000"
      :duration="6"
      :options="options"
      ref="countUp"
    ></ivue-count-up>
  </h1>
  <ivue-button class="button" @click="handleReset">重新开始</ivue-button>
</template>

<script setup>
import { ref } from 'vue';

const countUp = ref();
const options = ref({
  prefix: '计时开始:',
  useGrouping: false,
});

// 重新开始
const handleReset = () => {
  countUp.value.reset();
  countUp.value.start();
};
</script>
