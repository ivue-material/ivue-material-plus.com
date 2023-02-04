<template>
  <ivue-relative-time :time="time" :interval="1"></ivue-relative-time>
</template>

<script setup>
import { ref } from 'vue';

const time = ref(new Date());
</script>
