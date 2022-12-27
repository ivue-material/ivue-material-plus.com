<template>
    <div>
        <h1>Popover 气泡卡片</h1>
        <p>文字提示气泡框</p>
        <h2>基础用法</h2>
        <p>
            <code>trigger</code>
            属性被用来决定
            <code>popover</code>
            的触发方式，支持的触发方式：
            <code>hover</code> 、
            <code>click</code> 、
            <code>focus</code> ，
            你想手动控制它，可以设置
            <code>model-value</code>
            属性，
        </p>
        <doc-markdown :code="code.default">
            <template #demo>
                <default></default>
            </template>
        </doc-markdown>
        <h2>位置</h2>
        <p>组件提供了12个不同的方向显示</p>
        <doc-markdown :code="code.placement">
            <template #demo>
                <placement></placement>
            </template>
        </doc-markdown>
        <h2>从浮层内关闭</h2>
        <p>
            通过
            <code>v-model</code>
            来控制提示框的显示和隐藏
        </p>
        <doc-markdown :code="code.model">
            <template #demo>
                <model></model>
            </template>
        </doc-markdown>
        <h2>确认框</h2>
        <p>
            通过设置
            <code>confirm</code>
            属性开启确认框模式。确认框只会以
            <code>click</code>
            的形式激活，并且只会显示
            <code>title</code>
            的内容，忽略
            <code>content</code>
        </p>
        <doc-markdown :code="code.confirm">
            <template #demo>
                <confirm></confirm>
            </template>
        </doc-markdown>
        <h3>Props</h3>
        <ivue-table :data="propsData" border>
            <ivue-table-column prop="name" label="名称" width="200"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300">
                <template #default="props">
                    <p v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="type" label="类型" width="200"></ivue-table-column>
            <ivue-table-column prop="value" label="可选值" width="150">
                <template #default="props">
                    <p v-html="props.row.value || '-'"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="default" label="默认" width="150"></ivue-table-column>
        </ivue-table>
        <h3>Events</h3>
        <ivue-table :data="eventsData" border>
            <ivue-table-column prop="name" label="事件名" width="100"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300">
                <template #default="props">
                    <p v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="value" label="返回值" width="100"></ivue-table-column>
        </ivue-table>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import Code from '@/code/popover';
import Default from '@/components/popover/default.vue';
import Placement from '@/components/popover/placement.vue';
import Model from '@/components/popover/model.vue';
import Confirm from '@/components/popover/confirm.vue';

const code = ref(Code);

// propsData
const propsData = ref([
    {
        name: 'title',
        illustrate: '显示的标题',
        type: 'String | Number',
        default: '-',
    },
    {
        name: 'content',
        illustrate: '显示的正文内容，只在非 <code>confirm</code> 模式下有效',
        type: 'String | Number',
        default: '-',
    },
    {
        name: 'trigger',
        illustrate:
            '触发方式，可选值为 <code>hover(悬停)</code>、<code>click(点击)</code>、 <code>focus(聚焦)</code>，在 <code>confirm</code> 模式下，只有 <code>click</code> 有效',
        type: 'String',
        default: '-',
    },
    {
        name: 'transfer',
        illustrate: '是否将弹层放置于 body 内',
        type: 'Boolean',
        default: 'false',
    },
    {
        name: 'transfer',
        illustrate: '是否将弹层放置于 body 内',
        type: 'Boolean',
        default: 'false',
    },
    {
        name: 'transfer-class-name',
        illustrate:
            '开启 <code>transfer</code> 时，给浮层添加额外的 <code>class</code> 名称',
        type: 'String',
        default: '-',
    },
    {
        name: 'theme',
        illustrate:
            '开启 <code>transfer</code> 时，给浮层添加额外的 <code>class</code> 名称',
        type: 'String',
        value: '<code>dark</code> | <code>light</code>',
        default: 'light',
    },
    {
        name: 'width',
        illustrate:
            '宽度，最小宽度为 <code>150px</code>，在 <code>confirm</code> 模式下，默认最大宽度为 <code>250px</code>',
        type: 'String ｜ Number',
        default: '-',
    },
    {
        name: 'word-wrap',
        illustrate: '开启后，超出指定宽度文本将自动换行，并两端对齐',
        type: 'Boolean',
        default: 'true',
    },
    {
        name: 'confirm',
        illustrate: '是否开启对话框模式',
        type: 'Boolean',
        default: 'false',
    },
    {
        name: 'disabled',
        illustrate: '是否禁用',
        type: 'Boolean',
        default: 'false',
    },
    {
        name: 'delay',
        illustrate: '鼠标进入延迟显示时间',
        type: 'Number',
        default: '100',
    },
    {
        name: 'placement',
        illustrate: '弹窗的展开方向',
        type: 'String',
        value: '<code>top</code> | <code>top-start</code> | <code>top-end</code> | <code>bottom</code> | <code>bottom-start</code> | <code>bottom-end</code> | <code>left</code> | <code>left-start</code> | <code>left-end</code> | <code>right</code> | <code>right-start</code> | <code>right-end</code>',
        default: 'bottom',
    },
    {
        name: 'capture',
        illustrate: '是否开启外部点击的 capture 模式，可通过全局配置',
        type: 'Boolean',
        default: 'false',
    },
    {
        name: 'cancel-text',
        illustrate: '关闭按钮文案',
        type: 'String',
        default: '取消',
    },
    {
        name: 'confirm-text',
        illustrate: '确定按钮文案',
        type: 'String',
        default: '确认',
    },
]);

// eventsData
const eventsData = ref([
    {
        name: 'on-cancel',
        illustrate: '点击取消的回调，只在 <code>confirm</code> 模式下有效',
        value: '-',
    },
    {
        name: 'on-confirm',
        illustrate: '点击确定的回调，只在 <code>confirm</code> 模式下有效',
        value: '-',
    },
]);
</script>

<style lang="scss" scoped>
</style>
