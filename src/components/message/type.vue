<template>
    <ivue-button class="button" type="primary" @click="handleSuccess">成功提示</ivue-button>
    <ivue-button class="button" type="primary" @click="handleWarning">警告提示</ivue-button>
    <ivue-button class="button" type="primary" @click="handleError">失败提示</ivue-button>
</template>

<script setup>
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

const handleSuccess = () => {
    proxy.$message.success('成功提示');
};

const handleWarning = () => {
    proxy.$message.warning('警告提示');
};

const handleError = () => {
    proxy.$message.error('失败提示');
};
</script>

<style>
.button {
    margin-right: 10px !important;
}
</style>
