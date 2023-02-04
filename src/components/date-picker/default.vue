<template>
  <ivue-date-picker
    v-model="date"
    no-title
    @on-change="handleChange"
  ></ivue-date-picker>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue';
const { proxy } = getCurrentInstance();

const date = ref(new Date().toISOString().substr(0, 10));

const handleChange = (value) => {
  proxy.$message.info(`select:${value}`);
};
</script>
