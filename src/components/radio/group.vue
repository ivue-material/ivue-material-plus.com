<template>
  <h4>使用 label 的值</h4>
  <ivue-radio-group v-model="value1">
    <ivue-radio label="多啦a梦"></ivue-radio>
    <ivue-radio label="野比大雄"></ivue-radio>
    <ivue-radio label="静香"></ivue-radio>
  </ivue-radio-group>
  <h4>自定义内容</h4>
  <ivue-radio-group v-model="value2">
    <ivue-radio label="多啦a梦">多啦a梦的时光机</ivue-radio>
    <ivue-radio label="野比大雄">野比大雄的家</ivue-radio>
    <ivue-radio label="静香">静香的家</ivue-radio>
  </ivue-radio-group>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref('多啦a梦');
const value2 = ref('多啦a梦');
</script>
