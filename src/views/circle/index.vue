<template>
    <div>
        <h1>Circle 进度环</h1>
        <p>显示某项任务进度的百分比</p>
        <h2>基础用法</h2>
        <p>
            最近基本的用法,可通过
            <code>percent</code>设置百分比,还可以设置
            <code>stroke-color</code>设置进度条颜色,当设置为数组
            <code>Array</code>时显示渐变
        </p>
        <doc-markdown :code="code.default">
            <template #demo>
                <default></default>
            </template>
        </doc-markdown>
        <h2>配合外部组件使用</h2>
        <p>通过数据的联动和逻辑控制，实现交互效果</p>
        <doc-markdown :code="code.linkage">
            <template #demo>
                <linkage></linkage>
            </template>
        </doc-markdown>
        <h2>仪表盘</h2>
        <p>
            通过设置属性
            <code>dashboard</code>，可以很方便地实现仪表盘样式的进度环
        </p>
        <doc-markdown :code="code.dashboard">
            <template #demo>
                <dashboard></dashboard>
            </template>
        </doc-markdown>
        <h2>自定义更多样式</h2>
        <p>
            通过自定义
            <code>slots</code>和丰富的配置，可以组合出很多统计效果
        </p>
        <doc-markdown :code="code.slots">
            <template #demo>
                <slots></slots>
            </template>
        </doc-markdown>
        <h2>API</h2>
        <h3>Props</h3>
        <ivue-table :data="propsData" border>
            <ivue-table-column prop="name" label="名称"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300">
                <template #default="props">
                    <p v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="type" label="类型"></ivue-table-column>
            <ivue-table-column prop="value" label="可选值">
                <template #default="props">
                    <p v-html="props.row.value || '-'"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="default" label="默认"></ivue-table-column>
        </ivue-table>
        <h3>Slots</h3>
        <ivue-table :data="slotsData" border>
            <ivue-table-column prop="name" label="名称"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300"></ivue-table-column>
        </ivue-table>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import Code from '@/code/circle';
import Default from '@/components/circle/default.vue';
import Linkage from '@/components/circle/linkage.vue';
import Slots from '@/components/circle/slots.vue';
import Dashboard from '@/components/circle/dashboard.vue';

const code = ref(Code);

// propsData
const propsData = ref([
    {
        name: 'percent',
        illustrate: '百分比',
        type: 'Number',
        default: '0',
    },
    {
        name: 'size',
        illustrate: '图表的宽度和高度,可自定义单位。如: <code>100rem</code>',
        type: 'String | Number',
        default: '120',
    },
    {
        name: 'stroke-linecap',
        illustrate: '进度环顶端的形状',
        type: 'String',
        value: '<code>square(方)</code> | <code>round(圆)</code>',
        default: 'round',
    },
    {
        name: 'stroke-width',
        illustrate: '进度环的线宽',
        type: 'Number',
        default: '6',
    },
    {
        name: 'stroke-color',
        illustrate: '进度环的颜色,当为<code>Array</code>数组时显示为渐变',
        type: 'String | Array',
        default: '#5B8EFF',
    },
    {
        name: 'trail-width',
        illustrate: '进度环背景的线宽',
        type: 'Number',
        default: '6',
    },
    {
        name: 'trail-color',
        illustrate: '进度环背景的颜色',
        type: 'String',
        default: '#F8F9FD',
    },
    {
        name: 'dashboard',
        illustrate: '是否显示为仪表盘',
        type: 'Boolean',
        default: 'false',
    },
]);

// slotsData

const slotsData = ref([
    {
        name: 'default',
        illustrate: '自定义显示中间内容，内容默认垂直居中',
    },
]);
</script>
