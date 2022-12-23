<template>
    <h4>目标值：1000，持续时间：6秒</h4>
    <h1>
        <ivue-count-up :end-value="1000" :duration="6" :decimals="2" ref="countUp"></ivue-count-up>
    </h1>
    <ivue-button class="button" @click="handleReset">重新开始</ivue-button>
</template>

<script setup>
import { ref } from 'vue';

const countUp = ref();

// 重新开始
const handleReset = () => {
    countUp.value.reset();
    countUp.value.start();
};
</script>
