<template>
    <ivue-button @click="handleLoading">loading提示</ivue-button>
</template>

<script setup>
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

const handleLoading = () => {
    proxy.$message.loading({
        content: 'Loading...',
        duration: 3000,
    });
};
</script>
