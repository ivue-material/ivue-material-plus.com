<template>
    <div>
        <h1>ClickOutside 点击外部触发</h1>
        <p>
            当绑定
            <code>v-click-outside</code>
            点时，元素的外部时将触发事件
        </p>
        <h2>基本用法</h2>
        <p>点击元素外部触发事件</p>
        <p>
            通过设置
            <code>capture</code>
            属性可以将
            <code>click-outside</code>
            触发设置为捕获事件
        </p>
        <p>
            还可以通过后面拼接
            <code>v-click-outside.touchstart</code>
            设置不同的事件类型，支持
            <code>click</code> 、
            <code>mousedown</code> 、
            <code>touchstart</code>，
            默认为
            <code>click</code>
        </p>
        <doc-markdown :code="code.default">
            <template #demo>
                <default></default>
            </template>
        </doc-markdown>
        <h2>API</h2>
        <h3>Props</h3>
        <ivue-table :data="propsData" border>
            <ivue-table-column prop="name" label="名称" width="200"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300">
                <template #default="props">
                    <p v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="type" label="类型" width="200"></ivue-table-column>
            <ivue-table-column prop="default" label="默认" width="150"></ivue-table-column>
        </ivue-table>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import Code from '@/code/click-outside';

import Default from '@/components/click-outside/default.vue';

const code = ref(Code);

// propsData
const propsData = ref([
    {
        name: 'capture',
        illustrate: '设置为捕获事件',
        type: 'Boolean',
        default: '-',
    },
]);
</script>

<style lang="scss" scoped>
</style>
