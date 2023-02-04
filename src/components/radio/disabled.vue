<template>
  <h4>禁用单个</h4>
  <ivue-radio v-model="value1" label="多啦a梦" disabled></ivue-radio>
  <h4>禁用组合单个</h4>
  <ivue-radio-group v-model="value2">
    <ivue-radio label="多啦a梦">多啦a梦的时光机</ivue-radio>
    <ivue-radio label="野比大雄" disabled>野比大雄的家</ivue-radio>
    <ivue-radio label="静香">静香的家</ivue-radio>
  </ivue-radio-group>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(true);
const value2 = ref('多啦a梦');
</script>
