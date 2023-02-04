<template>
  <ivue-radio-group v-model="value">
    <ivue-radio label="多啦a梦" border>多啦a梦的时光机</ivue-radio>
    <ivue-radio label="野比大雄" border>野比大雄的家</ivue-radio>
    <ivue-radio label="静香" border>静香的家</ivue-radio>
  </ivue-radio-group>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('多啦a梦');
</script>
