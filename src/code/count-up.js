const code = {};

code.default = `<template>
    <h4>目标值：1000，持续时间：6秒</h4>
    <h1>
        <ivue-count-up :end-value="1000" :duration="6" ref="count"></ivue-count-up>
    </h1>
    <ivue-button class="button" @click="handleStart">开始</ivue-button>
    <ivue-button class="button" @click="handlePause">暂停/继续</ivue-button>
    <ivue-button class="button" @click="handleReset">重置</ivue-button>
    <ivue-button class="button" @click="handleUpdate">更新至：5000</ivue-button>
</template>

<script setup>
import { ref } from 'vue';

const count = ref();

// 开始
const handleStart = () => {
    count.value.start();
};

// 暂停/继续
const handlePause = () => {
    count.value.pauseResume();
};

// 重置
const handleReset = () => {
    count.value.reset();
};

// 更新至
const handleUpdate = () => {
    count.value.update(5000);
};
</script>

<style scoped>
.button {
    margin-right: 20px;
}
</style>
`;

code.decimals = `<template>
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
`;

code.callback = `<template>
    <h4>初始目标值：50，到达后，延迟1秒再到目标值 100</h4>
    <h1>
        <ivue-count-up :end-value="endValue" :duration="6" :callback="handleCallback" ref="countUp"></ivue-count-up>
    </h1>
    <ivue-button class="button" @click="handleReset">重新开始</ivue-button>
</template>

<script setup>
import { ref } from 'vue';

const countUp = ref();
const endValue = ref(50);

// 重新开始
const handleReset = () => {
    endValue.value = 50;
    countUp.value.reset();
    countUp.value.start();
};

// 回调
const handleCallback = (value) => {
    if (value.endVal === 50) {
        setTimeout(() => {
            endValue.value = 100;
        }, 1000);
    }
};
</script>
`;

code.options = `<template>
    <h4>不显示分隔符及 easing 动画</h4>
    <h1>
        <ivue-count-up :end-value="1000" :duration="6" :options="options" ref="countUp"></ivue-count-up>
    </h1>
    <ivue-button class="button" @click="handleReset">重新开始</ivue-button>
</template>

<script setup>
import { ref } from 'vue';

const countUp = ref();
const options = ref({
    prefix: '计时开始:',
    useGrouping: false,
});

// 重新开始
const handleReset = () => {
    countUp.value.reset();
    countUp.value.start();
};
</script>
`;

export default code;
