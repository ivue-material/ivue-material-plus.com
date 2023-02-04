<template>
  <ivue-upload v-model="fileList" multiple :max-count="2"></ivue-upload>
</template>

<script setup>
import { ref } from 'vue';

const fileList = ref([]);
</script>
