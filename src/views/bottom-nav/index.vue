<template>
    <div>
        <h1>BottomNav 底部导航</h1>
        <p>
            <code>ivue-bottom-nav</code> 组件是一个导航栏的替代方案。它主要用于移动端，并有两个变种，图标+文本和隐藏按钮文本直到被激活
        </p>
        <h2>基本用法</h2>
        <p>最基本用法</p>
        <doc-markdown :code="code.default">
            <template #demo>
                <default></default>
            </template>
        </doc-markdown>
        <h2>隐藏按钮文本</h2>
        <p>
            通过设置属性
            <code>shift</code>，隐藏按钮文本直到被激活
        </p>
        <doc-markdown :code="code.shift">
            <template #demo>
                <shift></shift>
            </template>
        </doc-markdown>
        <h2>缩放按钮文本</h2>
        <p>
            通过设置属性
            <code>scale</code>，激活放大按钮文本
        </p>
        <doc-markdown :code="code.scale">
            <template #demo>
                <scale></scale>
            </template>
        </doc-markdown>
        <h2>隐藏组件</h2>
        <p>
            通过设置
            <code>visible</code> 来显示组件
        </p>
        <doc-markdown :code="code.visible">
            <template #demo>
                <visible></visible>
            </template>
        </doc-markdown>
        <h2>高度</h2>
        <p>
            通过设置
            <code>height</code>显示组件不同高度
        </p>
        <doc-markdown :code="code.height">
            <template #demo>
                <height></height>
            </template>
        </doc-markdown>
        <h2>API</h2>
        <h3>BottomNav Props</h3>
        <ivue-table :data="propsData" border>
            <ivue-table-column prop="name" label="名称" width="200"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300">
                <template #default="props">
                    <p v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="type" label="类型" width="200"></ivue-table-column>
            <ivue-table-column prop="value" label="可选值" width="200">
                <template #default="props">
                    <p v-html="props.row.value"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="default" label="默认" width="150"></ivue-table-column>
        </ivue-table>
        <h3>BottomNav Events</h3>
        <ivue-table :data="eventsData" border>
            <ivue-table-column prop="name" label="名称" width="200"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300"></ivue-table-column>
            <ivue-table-column prop="value" label="返回值" width="200"></ivue-table-column>
        </ivue-table>
        <h3>BottomNavItem Props</h3>
        <ivue-table :data="itemPropsData" border>
            <ivue-table-column prop="name" label="名称" width="200"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300"></ivue-table-column>
            <ivue-table-column prop="type" label="类型" width="200"></ivue-table-column>
            <ivue-table-column prop="default" label="默认" width="200"></ivue-table-column>
        </ivue-table>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import Code from '@/code/bottom-nav';

import Default from '@/components/bottom-nav/default.vue';
import Shift from '@/components/bottom-nav/shift.vue';
import Scale from '@/components/bottom-nav/scale.vue';
import Visible from '@/components/bottom-nav/visible.vue';
import Height from '@/components/bottom-nav/height.vue';

const code = ref(Code);

// propsData
const propsData = ref([
    {
        name: 'model-value / v-model',
        illustrate: '当前激活的导航',
        type: 'Number | String',
        value: '-',
        default: '-',
    },
    {
        name: 'height',
        illustrate: '设置组件高度',
        type: 'Number | String',
        value: '-',
        default: '56',
    },
    {
        name: 'visible',
        illustrate: '是否隐藏导航栏',
        type: 'Boolean',
        value: '-',
        default: 'true',
    },
    {
        name: 'position',
        illustrate: '导航栏固定位置',
        type: 'String',
        value: '<code>fixed</code> | <code>absolute</code>',
        default: '-',
    },
    {
        name: 'shift',
        illustrate: '不是激活状态时隐藏按钮上的文字',
        type: 'Boolean',
        value: '-',
        default: 'false',
    },
    {
        name: 'scale',
        illustrate: '激活时缩放按钮文本',
        type: 'Boolean',
        value: '-',
        default: 'false',
    },
]);

// eventsData
const eventsData = ref([
    {
        name: 'on-change',
        illustrate: '当前激活的导航',
        value: 'model-value',
    },
]);

// itemPropsData
const itemPropsData = ref([
    {
        name: 'name',
        illustrate: '当前下标',
        type: 'Number | String',
        default: '-',
    },
]);
</script>

<style lang="scss" scoped>
</style>
