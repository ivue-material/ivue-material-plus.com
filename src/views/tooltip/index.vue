<template>
    <div>
        <h1>Tooltip 文字提示</h1>
        <p>文字提示气泡框，在鼠标悬停时显示</p>
        <h2>基础用法</h2>
        <p>最简单的用法</p>
        <doc-markdown :code="code.default">
            <template #demo>
                <default></default>
            </template>
        </doc-markdown>
        <h2>位置</h2>
        <p>组件提供了12个不同的方向显示Tooltip</p>
        <doc-markdown :code="code.placement">
            <template #demo>
                <placement></placement>
            </template>
        </doc-markdown>
        <h2>自定义内容</h2>
        <p>
            通过自定义
            <code>slot</code> 显示多行文本或更复杂的样式
        </p>
        <doc-markdown :code="code.slots">
            <template #demo>
                <slots></slots>
            </template>
        </doc-markdown>
        <h2>禁用</h2>
        <p>
            通过设置属性
            <code>disabled</code> 可以禁用文字提示
        </p>
        <doc-markdown :code="code.disabled">
            <template #demo>
                <disabled></disabled>
            </template>
        </doc-markdown>
        <h2>延迟显示</h2>
        <p>
            通过设置属性
            <code>delay</code>可以延时显示文字提示，单位毫秒
        </p>
        <doc-markdown :code="code.delay">
            <template #demo>
                <delay></delay>
            </template>
        </doc-markdown>
        <h2>主题</h2>
        <p>
            设置属性
            <code>theme</code> 可以显示深色主题或者浅色主题
        </p>
        <doc-markdown :code="code.theme">
            <template #demo>
                <theme></theme>
            </template>
        </doc-markdown>
        <h2>宽度</h2>
        <p>
            设置属性
            <code>max-width</code>
            可以设置提示框最大宽度
        </p>
        <doc-markdown :code="code.width">
            <template #demo>
                <width></width>
            </template>
        </doc-markdown>
        <h2>显示前执行</h2>
        <p>
            设置
            <code>before-show-popper</code>
            方法， 用于提示框显示前执行的一些操作，函数必须返回一个
            <code>boolean</code>用于执行下一步
        </p>
        <doc-markdown :code="code.beforeShowPopper">
            <template #demo>
                <before-show-popper></before-show-popper>
            </template>
        </doc-markdown>
        <h2>鼠标离开时不会关闭</h2>
        <p>
            设置
            <code>controlled</code>
            属性，可使鼠标离开时提示不隐藏
        </p>
        <doc-markdown :code="code.controlled">
            <template #demo>
                <controlled></controlled>
            </template>
        </doc-markdown>
        <h2>通过点击外部才隐藏提示框</h2>
        <p>
            设置
            <code>manual</code>
            属性，点击外部才隐藏提示框
        </p>
        <doc-markdown :code="code.manual">
            <template #demo>
                <manual></manual>
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

import Code from '@/code/tooltip';

import Default from '@/components/tooltip/default.vue';
import Placement from '@/components/tooltip/placement.vue';
import Slots from '@/components/tooltip/slots.vue';
import Disabled from '@/components/tooltip/disabled.vue';
import Delay from '@/components/tooltip/delay.vue';
import Theme from '@/components/tooltip/theme.vue';
import Width from '@/components/tooltip/width.vue';
import BeforeShowPopper from '@/components/tooltip/before-show-popper.vue';
import Controlled from '@/components/tooltip/controlled.vue';
import Manual from '@/components/tooltip/manual.vue';

const code = ref(Code);

// propsData
const propsData = ref([
    {
        name: 'content',
        illustrate: '显示的内容',
        type: 'String | Number',
        default: '-',
    },
    {
        name: 'controlled',
        illustrate: '鼠标离开时Tooltip不会关闭',
        type: 'Boolean',
        default: 'false',
    },
    {
        name: 'delay',
        illustrate: '延迟显示，单位毫秒',
        type: 'Number',
        default: '0',
    },
    {
        name: 'always',
        illustrate: '是否总是可见',
        type: 'Boolean',
        default: 'false',
    },
    {
        name: 'disabled',
        illustrate: '是否禁用提示框',
        type: 'Boolean',
        default: 'false',
    },
    {
        name: 'max-width',
        illustrate: '提示框最大宽度',
        type: 'String | Number',
        default: '-',
    },
    {
        name: 'before-show-popper',
        illustrate:
            '提示框显示前执行的一些操作，函数必须返回一个<code>boolean</code>用于执行下一步',
        type: 'Function',
        default: '-',
    },
    {
        name: 'manual',
        illustrate: '通过点击外部才隐藏提示框',
        type: 'Function',
        default: '-',
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
        name: 'capture',
        illustrate:
            '外部点击事件是否开启 <code>capture</code> 模式，<code>manual</code>为<code>true</code>时有效，也可通过全局配置',
        type: 'Boolean',
        default: 'true',
    },
    {
        name: 'theme',
        illustrate: '主题颜色',
        type: 'Boolean',
        value: '<code>dark</code> | <code>light</code>',
        default: 'true',
    },
    {
        name: 'no-arrow',
        illustrate: '不显示提示框三角形',
        type: 'Boolean',
        default: 'false',
    },
    {
        name: 'placement',
        illustrate: '弹窗的展开方向',
        type: 'String',
        value: '<code>top</code> | <code>top-start</code> | <code>top-end</code> | <code>bottom</code> | <code>bottom-start</code> | <code>bottom-end</code> | <code>left</code> | <code>left-start</code> | <code>left-end</code> | <code>right</code> | <code>right-start</code> | <code>right-end</code>',
        default: 'bottom',
    },
]);

// slotsData
const slotsData = ref([
    {
        name: 'default',
        illustrate: '主体内容',
    },
    {
        name: 'content',
        illustrate:
            '提示框的内容，定义此 <code>slot</code> 时，会覆盖 <code>props</code> <code>content</code>',
    },
]);
</script>

<style lang="scss" scoped>
</style>
