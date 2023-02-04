<template>
  <ivue-relative-time
    :time="time"
    :date-function="dateFunction"
  ></ivue-relative-time>
</template>

<script setup>
import { ref } from 'vue';

const time = ref(new Date().getTime() - 86400 * 3 * 1000);

const dateFunction = (timeStamp, diff, isEarly) => {
  return `当前时间:${timeStamp},两个时间搓差值:${diff},是否早于当前时间${isEarly}`;
};
</script>
