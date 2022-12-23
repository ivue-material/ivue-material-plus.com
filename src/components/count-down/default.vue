<template>
    <h4>默认</h4>
    <ivue-count-down :target="target1"></ivue-count-down>
    <h4>监听倒计时完成</h4>
    <ivue-count-down :target="target2" @on-end="handleEnd"></ivue-count-down>
    <h4>数字倒计时</h4>
    <ivue-count-down :target="10000" type="number"></ivue-count-down>
    <h4>自定义显示格式</h4>
    <ivue-count-down :target="10000" :interval="1" type="number" :format="format"></ivue-count-down>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

const target1 = ref(new Date().getTime() + 3900000);
const target2 = ref(new Date().getTime() + 30000);

const handleEnd = () => {
    proxy.$message.success('倒计时结束');
};

const format = (time) => {
  return `剩余${time}秒`;
};

</script>
