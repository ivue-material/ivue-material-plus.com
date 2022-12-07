<template>
    <ivue-button class="button" type="primary" @click="handleOpen(false)">打开通知提醒</ivue-button>
    <ivue-button class="button" @click="handleOpen(true)">打开通知提醒(没有标题)</ivue-button>
</template>

<script setup>
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

// methods
const handleOpen = (nodesc) => {
    proxy.$notice.open({
        title: '标题',
        desc: nodesc
            ? ''
            : '这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述',
    });
};
</script>

<style>
.button {
    margin-right: 10px !important;
}
</style>
