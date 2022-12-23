<template>
    <h4>目标值：1000，持续时间：6秒</h4>
    <h1>
        <ivue-count-up :end-value="1000" :duration="6" ref="countUp"></ivue-count-up>
    </h1>
    <ivue-button class="button" @click="handleStart">开始</ivue-button>
    <ivue-button class="button" @click="handlePause">暂停/继续</ivue-button>
    <ivue-button class="button" @click="handleReset">重置</ivue-button>
    <ivue-button class="button" @click="handleUpdate">更新至：5000</ivue-button>
</template>

<script setup>
import { ref } from 'vue';

const countUp = ref();

// 开始
const handleStart = () => {
    countUp.value.start();
};

// 暂停/继续
const handlePause = () => {
    countUp.value.pauseResume();
};

// 重置
const handleReset = () => {
    countUp.value.reset();
};

// 更新至
const handleUpdate = () => {
    countUp.value.update(5000);
};
</script>

<style scoped>
.button {
    margin-right: 20px;
}
</style>
