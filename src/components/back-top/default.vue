<template>
    <h4>向下滚动页面</h4>
    <ivue-back-top @on-scroll-end="handleScrollEnd"></ivue-back-top>
</template>

<script setup>
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

const handleScrollEnd = () => {
    proxy.$message.info('到达顶部');
};
</script>
