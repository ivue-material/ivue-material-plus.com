<template>
  <ivue-button type="primary" @click="handleOpen">自定义时长</ivue-button>
</template>

<script setup>
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

// methods
const handleOpen = () => {
  proxy.$notice.open({
    title: '标题',
    desc: '这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述',
    duration: 0,
  });
};
</script>
