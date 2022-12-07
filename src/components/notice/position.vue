<template>
    <ivue-button class="button" type="primary" @click="handleOpen1">右上角弹出</ivue-button>
    <ivue-button class="button" type="primary" @click="handleOpen2">右下角弹出</ivue-button>
    <ivue-button class="button" type="primary" @click="handleOpen3">左下角弹出</ivue-button>
    <ivue-button class="button" type="primary" @click="handleOpen4">左上角弹出</ivue-button>
</template>

<script setup>
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

// methods
const handleOpen1 = () => {
    proxy.$notice.open({
        title: '自定义位置',
        desc: '右上角弹出的消息',
    });
};

const handleOpen2 = () => {
    proxy.$notice.open({
        title: '自定义位置',
        desc: '右下角弹出的消息',
        position: 'bottom-right',
    });
};

const handleOpen3 = () => {
    proxy.$notice.open({
        title: '自定义位置',
        desc: '左下角弹出的消息',
        position: 'bottom-left',
    });
};

const handleOpen4 = () => {
    proxy.$notice.open({
        title: '自定义位置',
        desc: '左上角弹出的消息',
        position: 'top-left',
    });
};
</script>

<style>
.button {
    margin-right: 10px !important;
}
</style>
