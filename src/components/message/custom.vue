<template>
    <h4>Render 函数</h4>
    <ivue-button class="button" type="primary" @click="handleRender">render提示</ivue-button>
    <h4>Offset 偏移位置</h4>
    <ivue-button class="button" type="primary" @click="handleTop">距离顶部的位置</ivue-button>
    <h4>自定义id，使用 close 关闭自定义通知</h4>
    <ivue-button class="button" type="primary" @click="handleId">自定义提示id</ivue-button>
</template>

<script setup>
import { getCurrentInstance, h, ref } from 'vue';

const { proxy } = getCurrentInstance();

const timer = ref(null);

// render提示
const handleRender = () => {
    proxy.$message.info({
        render: () => {
            return h('span', ['这是通知', h('a', '这是a标签')]);
        },
    });
};

// 偏移位置
const handleTop = () => {
    proxy.$message.info({
        content: '距离顶部的位置',
        top: 100,
    });
};

// 自定义提示id
const handleId = () => {
    const info = proxy.$message.info({
        content: '自定义提示id',
        id: 'id',
        duration: 0,
    });

    if (timer.value) {
        return;
    }

    timer.value = setTimeout(() => {
        info.close('id');

        clearTimeout(timer.value);

        timer.value = null;
    }, 2000);
};
</script>

<style>
.button {
    margin-right: 10px !important;
}
</style>
