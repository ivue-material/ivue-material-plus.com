<template>
    <div>
        <h1>Chip 芯片</h1>
        <p>用于传递小块信息。使用close属性，允许用户交互</p>
        <h2>基本用法</h2>
        <p>Chip 有以下几种状态：默认，可关闭，边框，正方形。默认插槽将接受所有内容</p>
        <doc-markdown :code="code.default">
            <template #demo>
                <default></default>
            </template>
        </doc-markdown>
        <h2>轮廓</h2>
        <p>当前的文字颜色继承它们的边框颜色</p>
        <doc-markdown :code="code.outline">
            <template #demo>
                <outline></outline>
            </template>
        </doc-markdown>
        <h2>正方形</h2>
        <p>
            设置
            <code>square</code>
            属性，可以使边框变为直角
        </p>
        <doc-markdown :code="code.square">
            <template #demo>
                <square></square>
            </template>
        </doc-markdown>
        <h2>可关闭</h2>
        <p>
            通过设置
            <code>model-value</code>，
            可控制关闭
        </p>
        <doc-markdown :code="code.close">
            <template #demo>
                <close></close>
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
            <ivue-table-column prop="default" label="默认" width="100"></ivue-table-column>
        </ivue-table>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import Code from '@/code/chip';

import Default from '@/components/chip/default.vue';
import Outline from '@/components/chip/outline.vue';
import Square from '@/components/chip/square.vue';
import Close from '@/components/chip/close.vue';

const code = ref(Code);

// propsData
const propsData = ref([
    {
        name: 'model-value',
        illustrate: '控制<code>chip</code>是否显示',
        type: 'Boolean',
        default: 'true',
    },
    {
        name: 'text-color',
        illustrate: '字体颜色',
        type: 'String',
        default: '-',
    },
    {
        name: 'color',
        illustrate: '背景颜色',
        type: 'String',
        default: '-',
    },
    {
        name: 'disabled',
        illustrate: '是否禁用',
        type: 'Boolean',
        default: '-',
    },
    {
        name: 'outline',
        illustrate: '是否显示为轮廓',
        type: 'Boolean',
        default: '-',
    },
    {
        name: 'square',
        illustrate: '显示为正方形边框',
        type: 'Boolean',
        default: '-',
    },
    {
        name: 'close',
        illustrate: '显示可关闭按钮',
        type: 'Boolean',
        default: '-',
    },
    {
        name: 'close-icon',
        illustrate: '自定义关闭图标',
        type: 'String',
        default: 'cancel',
    },
    {
        name: 'depressed',
        illustrate: '保持其背景颜色，去除没有阴影',
        type: 'Boolean',
        default: '-',
    },
]);
</script>

<style lang="scss" scoped>
</style>
