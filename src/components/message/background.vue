<template>
  <ivue-button class="button" @click="handleBackground('info')"
    >普通提示</ivue-button
  >
  <ivue-button class="button" @click="handleBackground('success')"
    >成功提示</ivue-button
  >
  <ivue-button class="button" @click="handleBackground('warning')"
    >警告提示</ivue-button
  >
  <ivue-button class="button" @click="handleBackground('error')"
    >错误提示</ivue-button
  >
</template>

<script setup>
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

const handleBackground = (type) => {
  proxy.$message[type]({
    background: true,
    content: `这是一条带背景色的 ${type} 通知`,
  });
};
</script>

<style>
.button {
  margin-right: 10px !important;
}
</style>
