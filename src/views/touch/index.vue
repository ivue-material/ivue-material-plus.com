<template>
    <div>
        <h1>Touch 手指指令</h1>
        <p>允许您捕获轻扫手势</p>
        <h2>基本用法</h2>
        <p>
            只需在组件或HTML元素上使用
            <code>v-touch</code>
            指令即可启用手势监听
        </p>
        <doc-markdown :code="code.default">
            <template #demo>
                <default></default>
            </template>
        </doc-markdown>
        <h2>API</h2>
        <h3>Props</h3>
        <ivue-table :data="propsData" border>
            <ivue-table-column prop="name" label="名称" width="100"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300">
                <template #default="props">
                    <p v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="type" label="类型" width="100"></ivue-table-column>
            <ivue-table-column prop="value" label="可选值" width="200">
                <template #default="props">
                    <p v-html="props.row.value || '-'"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="default" label="默认" width="100"></ivue-table-column>
        </ivue-table>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import Code from '@/code/touch';

import Default from '@/components/touch/default.vue';

const code = ref(Code);

// propsData
const propsData = ref([
    {
        name: 'value',
        illustrate: '可传入参数',
        type: 'Object',
        value: `
            <ul>
                <li><code>left(手势向左移动)</code></li>
                <li><code>right(手势向右移动)</code></li>
                <li><code>up(手势向上移动)</code></li>
                <li><code>down(手势向下移动)</code></li>
                <li><code>start(手势按下)</code></li>
                <li><code>move(手势移动中)</code></li>
                <li><code>end(手势移动结束)</code></li>
            </ul>
        `,
        default: '-',
    },
]);
</script>

<style lang="scss" scoped>
</style>
