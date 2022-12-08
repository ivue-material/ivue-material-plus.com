<template>
    <ivue-button type="primary" @click="handleInfo">可关闭提示</ivue-button>
</template>

<script setup>
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

const handleInfo = () => {
    proxy.$message.info({
        content: '可关闭提示',
        duration: 0,
        closable: true,
    });
};
</script>
