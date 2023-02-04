<template>
  <h4>分钟</h4>
  <ivue-relative-time :time="time1"></ivue-relative-time>
  <h4>天</h4>
  <ivue-relative-time :time="time2"></ivue-relative-time>
</template>

<script setup>
import { ref } from 'vue';

const time1 = ref(new Date().getTime() - 60 * 3 * 1000);
const time2 = ref(new Date().getTime() - 86400 * 3 * 1000);
</script>
