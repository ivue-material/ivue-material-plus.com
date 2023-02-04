<template>
  <h4>默认</h4>
  <ivue-relative-time :time="time"></ivue-relative-time>
  <h4>date</h4>
  <ivue-relative-time :time="time" type="date"></ivue-relative-time>
  <h4>datetime</h4>
  <ivue-relative-time :time="time" type="datetime"></ivue-relative-time>
</template>

<script setup>
import { ref } from 'vue';

const time = ref(new Date().getTime() - 86400 * 3 * 1000);
</script>
