<template>
  <h4>使用 label 的值</h4>
  <ivue-checkbox-group v-model="value1">
      <ivue-checkbox label="多啦a梦"></ivue-checkbox>
      <ivue-checkbox label="野比大雄"></ivue-checkbox>
      <ivue-checkbox label="静香"></ivue-checkbox>
  </ivue-checkbox-group>
  <h4>自定义内容</h4>
  <ivue-checkbox-group v-model="value2">
      <ivue-checkbox label="多啦a梦">多啦a梦的时光机</ivue-checkbox>
      <ivue-checkbox label="野比大雄">野比大雄的家</ivue-checkbox>
      <ivue-checkbox label="静香">静香的家</ivue-checkbox>
  </ivue-checkbox-group>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(['多啦a梦']);
const value2 = ref(['多啦a梦', '野比大雄']);
</script>
