<template>
  <ivue-checkbox-group v-model="value">
    <ivue-checkbox label="多啦a梦" border>多啦a梦的时光机</ivue-checkbox>
    <ivue-checkbox label="野比大雄" border>野比大雄的家</ivue-checkbox>
    <ivue-checkbox label="静香" border>静香的家</ivue-checkbox>
  </ivue-checkbox-group>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(['多啦a梦']);
</script>
