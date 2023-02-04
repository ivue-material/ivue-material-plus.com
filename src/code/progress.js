const code = {};

code.default = `<template>
    <h4>基本状态</h4>
    <ivue-progress :percent="25" />
    <h4>百分百状态</h4>
    <ivue-progress :percent="100" />
    <h4>
        <div>设置<code>stroke-color</code>属性,可以设置进度条颜色,如传入<code>Array</code>时为渐变,</div>
        <div>设置<code>box-shadow-color</code>属性,可设置进度条阴影颜色</div>
    </h4>
    <ivue-progress :percent="25" :stroke-color="['#5AB2FF', '#5B8EFF']" box-shadow-color="#5B8EFF"></ivue-progress>
    <h4>
        <div>设置<code>active</code>属性,可设置进度条激活效果</div>
    </h4>
    <ivue-progress :percent="45" status="active" />
    <h4>
        <div>设置<code>wrong</code>属性,可设置进度条失败状态</div>
    </h4>
    <ivue-progress :percent="65" status="wrong" />
    <h4>
        <div>设置<code>hide-info</code>属性,可隐藏进度条图标</div>
    </h4>
    <ivue-progress :percent="25" hide-info />
</template>
`;

code.animation = `<template>
    <h4>默认</h4>
    <ivue-progress :percent="45" indeterminate></ivue-progress>
    <h4>动画进度条速度 duration 5s</h4>
    <ivue-progress :percent="100" indeterminate :duration="5"></ivue-progress>
    <h4>动画进度条速度 duration 10s 进度条渐变</h4>
    <ivue-progress
        indeterminate
        :duration="10"
        :percent="25"
        :strokeColor="['#5AB2FF', '#5B8EFF']"
        boxShadowColor="#5B8EFF"
    ></ivue-progress>
</template>
`;

code.percentage = `<template>
    <h4>25% 高度为 20</h4>
    <ivue-progress :percent="25" :stroke-width="20" text-inside></ivue-progress>
    <h4>45% 高度为 25</h4>
    <ivue-progress :percent="45" :stroke-width="25" status="active" text-inside></ivue-progress>
    <h4>65% 高度为 30</h4>
    <ivue-progress :percent="65" :stroke-width="30" status="wrong" text-inside></ivue-progress>
    <h4>70% 高度为 35</h4>
    <ivue-progress :percent="70" :stroke-width="35" status="warning" text-inside></ivue-progress>
    <h4>100% 高度为 40</h4>
    <ivue-progress :percent="100" :stroke-width="40" text-inside></ivue-progress>
</template>
`;

code.vertical = `<template>
    <ivue-progress class="progress-demo" :percent="50" vertical></ivue-progress>
    <ivue-progress class="progress-demo" :percent="45" status="active" vertical></ivue-progress>
    <ivue-progress class="progress-demo" :percent="25" status="wrong" vertical></ivue-progress>
    <ivue-progress class="progress-demo" :percent="25" status="warning" vertical></ivue-progress>
    <ivue-progress class="progress-demo" :percent="100" vertical></ivue-progress>
    <ivue-progress class="progress-demo" :percent="25" hide-info vertical></ivue-progress>
</template>

<style scoped>
.progress-demo {
    margin-right: 20px;
}
</style>
`;

code.external = `<template>
    <ivue-progress :percent="percent"></ivue-progress>

    <ivue-button class="progress-button" @click="handleAdd">增加</ivue-button>
    <ivue-button class="progress-button" @click="handleMinus">减少</ivue-button>
</template>

<script setup>
import { ref } from 'vue';

const percent = ref(0);

const handleAdd = () => {
    if (percent.value >= 100) {
        return false;
    }

    percent.value += 10;
};

const handleMinus = () => {
    if (percent.value <= 0) {
        return false;
    }

    percent.value -= 10;
};
</script>

<style scoped>
.progress-button{
    margin: 20px 20px 0 0;
}
</style>
`;

code.custom = `<template>
    <h4>修改进度条高度</h4>
    <ivue-progress :percent="25" :stroke-width="5"></ivue-progress>
    <h4>修改百分比文案</h4>
    <ivue-progress :percent="100">
        <span>成功</span>
    </ivue-progress>
</template>
`;

code.subsection = `<template>
    <ivue-progress :percent="60" :success-percent="30"></ivue-progress>
</template>
`;

export default code;
