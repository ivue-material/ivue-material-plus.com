<template>
    <ivue-auto-complete
        v-model="value"
        icon="ios-search"
        placeholder="input here"
        style="width:300px"
    >
        <div class="demo-auto-complete-item" v-for="item in data" :key="item.title">
            <div class="demo-auto-complete-group">
                <span>{{ item.title }}</span>
                <a href="https://www.google.com/search?q=iView" target="_blank">更多</a>
            </div>
            <ivue-option v-for="option in item.children" :value="option.title" :key="option.title">
                <span class="demo-auto-complete-title">{{ option.title }}</span>
                <span class="demo-auto-complete-count">{{ option.count }} 人关注</span>
            </ivue-option>
        </div>
        <a
            href="https://www.google.com/search?q=iView"
            target="_blank"
            class="demo-auto-complete-more"
        >查看所有结果</a>
    </ivue-auto-complete>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
const data = ref([
    {
        title: '话题',
        children: [
            {
                title: 'View UI',
                count: 10000,
            },
            {
                title: 'View UI Plus',
                count: 10600,
            },
        ],
    },
    {
        title: '问题',
        children: [
            {
                title: 'View UI Plus 有多好',
                count: 60100,
            },
            {
                title: 'View UI Plus 是啥',
                count: 30010,
            },
        ],
    },
    {
        title: '文章',
        children: [
            {
                title: 'View UI Plus 是一个设计语言',
                count: 100000,
            },
        ],
    },
]);
</script>

<style lang="scss" scoped>
.demo-auto-complete-item {
    padding: 4px 0;
    border-bottom: 1px solid #f6f6f6;
}

.demo-auto-complete-group {
    font-size: 12px;
    padding: 4px 6px;
}

.demo-auto-complete-group span {
    color: #666;
    font-weight: bold;
}

.demo-auto-complete-group a {
    float: right;
}

.demo-auto-complete-count {
    float: right;
    color: #999;
}

.demo-auto-complete-more {
    display: block;
    margin: 0 auto;
    padding: 4px;
    text-align: center;
    font-size: 12px;
}
</style>
