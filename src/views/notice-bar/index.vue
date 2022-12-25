<template>
    <div>
        <h1>NoticeBar 通知栏</h1>
        <p>用于循环播放展示一组消息通知</p>
        <h2>基础用法</h2>
        <p>
            通过
            <code>text</code>
            属性设置通知栏的内容，通过
            <code>left-icon</code>
            属性或者使用
            <code>slot = leftIcon</code>
            插槽设置通知栏左侧的图标
        </p>
        <doc-markdown :code="code.default">
            <template #demo>
                <default></default>
            </template>
        </doc-markdown>
        <h2>滚动播放</h2>
        <p>
            通知栏的内容长度溢出时会自动开启滚动播放，通过
            <code>scrollable</code>
            属性可以控制该行为，设置
            <code>speed</code>
            属性可以控制滚动的滚动速率 (px/s)，设置
            <code>delay</code>
            属性可以修改滚动动画延迟执行时间
        </p>
        <doc-markdown :code="code.scrollable">
            <template #demo>
                <scrollable></scrollable>
            </template>
        </doc-markdown>
        <h2>多行展示</h2>
        <p>
            文字较长时，可以通过设置
            <code>wrapable</code>
            属性来开启多行展示
        </p>
        <doc-markdown :code="code.wrapable">
            <template #demo>
                <wrapable></wrapable>
            </template>
        </doc-markdown>
        <h2>通知栏模式</h2>
        <p>
            设置
            <code>mode</code>
            为
            <code>closeable</code>
            属性显示关闭按钮，点击按钮返回
            <code>on-close</code>
            事件，并且关闭当前通知，设置为
            <code>link</code>
            属性，点击按钮返回
            <code>on-link</code>
            事件
        </p>
        <doc-markdown :code="code.mode">
            <template #demo>
                <mode></mode>
            </template>
        </doc-markdown>
        <h2>自定义样式</h2>
        <p>
            通过
            <code>text-color</code>
            属性设置文本颜色，通过
            <code>background</code>
            属性设置背景色
        </p>
        <doc-markdown :code="code.styles">
            <template #demo>
                <styles></styles>
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
            <ivue-table-column prop="illustrate" label="说明" min-width="300"></ivue-table-column>
        </ivue-table>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import Code from '@/code/notice-bar';

import Default from '@/components/notice-bar/default.vue';
import Scrollable from '@/components/notice-bar/scrollable.vue';
import Wrapable from '@/components/notice-bar/wrapable.vue';
import Mode from '@/components/notice-bar/mode.vue';
import Styles from '@/components/notice-bar/styles.vue';

const code = ref(Code);

// propsData
const propsData = ref([
    {
        name: 'text',
        illustrate: '通知文本内容',
        type: 'String',
        default: '-',
    },
    {
        name: 'speed',
        illustrate: '滚动速率 (px/s)',
        type: 'Number',
        default: '60',
    },
    {
        name: 'delay',
        illustrate: '动画延迟执行时间 (s)',
        type: 'Number',
        default: '1',
    },
    {
        name: 'scrollable',
        illustrate: '是否开启滚动播放，内容长度溢出时默认开启',
        type: 'Boolean',
        default: 'false',
    },
    {
        name: 'mode',
        illustrate: '通知栏模式',
        type: 'String',
        value: '<code>closeable</code> | <code>link</code>',
        default: '-',
    },
    {
        name: 'wrapable',
        illustrate: '是否开启文本换行，只在禁用滚动时生效',
        type: 'Boolean',
        default: '-',
    },
    {
        name: 'left-icon',
        illustrate: '左侧图标名称',
        type: 'String',
        default: '-',
    },
    {
        name: 'background',
        illustrate: '滚动条背景',
        type: 'String | Array',
        default: '-',
    },
    {
        name: 'text-color',
        illustrate: '文字颜色',
        type: 'String',
        default: '-',
    },
]);

// eventsData
const eventsData = ref([
    {
        name: 'on-replay',
        illustrate: '每当滚动栏重新开始滚动时触发',
    },
    {
        name: 'on-close',
        illustrate: '关闭通知栏时触发，mode=closeable 模式下生效',
    },
    {
        name: 'on-link',
        illustrate: '点击通知栏时箭头触发，mode=link 模式下生效',
    },
]);
</script>

<style lang="scss" scoped>
</style>
