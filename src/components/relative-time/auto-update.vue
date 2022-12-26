<template>
  <div>
    <ivue-relative-time :time="time1"></ivue-relative-time>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const time1 = ref(new Date().getTime() - 60 * 3 * 1000);

</script>

<style lang="scss" scoped>

</style>
