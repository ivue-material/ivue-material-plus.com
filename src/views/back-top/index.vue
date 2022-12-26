<template>
    <div>
        <h1>BackTop 返回顶部</h1>
        <p>当页面内容冗长，需要快捷返回顶部时使用，一般放置在页面右下角位置</p>
        <h2>基础用法</h2>
        <p>
            默认位置距离页面右部和底部
            <code>30px</code>，默认页面滚动高度达到
            <code>200px</code> 时才显示
        </p>
        <doc-markdown :code="code.default">
            <template #demo>
                <default></default>
            </template>
        </doc-markdown>
        <h2>自定义样式</h2>
        <p>
            自定义了位置距离页面底部
            <code>100px</code>
            ,滚动至距顶端
            <code>100px</code> 时显示
        </p>
        <doc-markdown :code="code.styles">
            <template #demo>
                <styles></styles>
            </template>
        </doc-markdown>
        <h2>只修改图标</h2>
        <p>
            通过
            <code>slot = icon</code>
            插槽可只修改图标内容，插槽保留按钮样式
        </p>
        <doc-markdown :code="code.icon">
            <template #demo>
                <icon></icon>
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
            <ivue-table-column prop="value" label="可选值" width="200">
                <template #default="props">
                    <p v-html="props.row.value || '-'"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="default" label="默认" width="100"></ivue-table-column>
        </ivue-table>
        <h3>Events</h3>
        <ivue-table :data="eventsData" border>
            <ivue-table-column prop="name" label="事件名"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300">
                <template #default="props">
                    <p v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="default" label="返回值" width="150"></ivue-table-column>
        </ivue-table>
        <h3>Slots</h3>
        <ivue-table :data="slotsData" border>
            <ivue-table-column prop="name" label="事件名"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300">
                <template #default="props">
                    <p v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
        </ivue-table>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import Code from '@/code/back-top';

import Default from '@/components/back-top/default.vue';
import Styles from '@/components/back-top/styles.vue';
import Icon from '@/components/back-top/icon.vue';

const code = ref(Code);

// propsData
const propsData = ref([
    {
        name: 'target',
        illustrate:
            '触发滚动的对象，通过 <code>document.querySelector</code> 查找',
        type: 'String',
        default: '-',
    },
    {
        name: 'visibility-height',
        illustrate: '页面滚动高度达到该值时才显示',
        type: 'Number',
        default: '200',
    },
    {
        name: 'bottom',
        illustrate: '组件距离底部的距离',
        type: 'Number',
        default: '30',
    },
    {
        name: 'right',
        illustrate: '组件距离右部的距离',
        type: 'Number',
        default: '30',
    },
    {
        name: 'duration',
        illustrate: '滚动动画持续时间，单位 毫秒',
        type: 'Number',
        default: '1000',
    },
]);

// eventsData
const eventsData = ref([
    {
        name: 'on-scroll-end',
        illustrate: '滚动结束，回到顶部触发',
        default: '-',
    },
    {
        name: 'on-click',
        illustrate: '点击按钮时触发',
        default: '-',
    },
]);

// slotsData
const slotsData = ref([
    {
        name: 'default',
        illustrate: '自定义内容',
    },
    {
        name: 'icon',
        illustrate: '自定义图标内容，保留原本的返回顶部按钮样式',
    },
]);
</script>

<style lang="scss" scoped>
</style>
