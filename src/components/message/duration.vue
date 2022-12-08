<template>
    <ivue-button type="primary" @click="handleInfo">自定义时长3秒</ivue-button>
</template>

<script setup>
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

const handleInfo = () => {
    proxy.$message.info({
        content: '自定义时长3秒',
        duration: 3000,
    });
};
</script>
