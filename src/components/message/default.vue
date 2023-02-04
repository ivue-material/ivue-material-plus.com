<template>
  <ivue-button type="primary" @click="handleInfo">普通提示</ivue-button>
</template>

<script setup>
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

const handleInfo = () => {
  proxy.$message.info('普通提示');
};
</script>
