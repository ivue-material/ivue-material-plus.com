<template>
    <div>
        <h1>InputNumber 数字输入框</h1>
        <p>输入一定范围的标准数值</p>
        <h2>基础用法</h2>
        <p>可以通过输入、鼠标点击或键盘的上下键来改变数值大小</p>
        <doc-markdown :code="code.default">
            <template #demo>
                <default></default>
            </template>
        </doc-markdown>
        <h2>小数</h2>
        <p>
            设置
            <code>step</code>
            属性控制每次改变的精度
        </p>
        <p>
            设置
            <code>precision</code>
            属性可修改数值精度
        </p>
        <doc-markdown :code="code.step">
            <template #demo>
                <step></step>
            </template>
        </doc-markdown>
        <h2>格式化展示</h2>
        <p>
            通过
            <code>formatter</code>
            格式化数字，以展示具有具体含义的数据，往往需要配合
            <code>parser</code>
            一起使用
        </p>
        <doc-markdown :code="code.formatter">
            <template #demo>
                <formatter></formatter>
            </template>
        </doc-markdown>
        <h2>不可用</h2>
        <p>
            通过设置
            <code>disabled</code>
            属性禁用输入框，点击按钮切换状态
        </p>
        <doc-markdown :code="code.disabled">
            <template #demo>
                <disabled></disabled>
            </template>
        </doc-markdown>
        <h2>只读</h2>
        <p>
            设置
            <code>readonly</code>
            属性开启只读
        </p>
        <doc-markdown :code="code.readonly">
            <template #demo>
                <readonly></readonly>
            </template>
        </doc-markdown>
        <h2>不可编辑</h2>
        <p>
            设置
            <code>editable</code>
            属性为
            <code>false</code>
            输入框不能输入
        </p>
        <doc-markdown :code="code.editable">
            <template #demo>
                <editable></editable>
            </template>
        </doc-markdown>
        <h2>按钮位置</h2>
        <p>
            通过设置
            <code>controls-outside</code>
            属性可以将按钮位置置于输入框两侧
        </p>
        <doc-markdown :code="code.controlsOutside">
            <template #demo>
                <controls-outside></controls-outside>
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
    </div>
</template>

<script setup>
import { ref } from 'vue';

import Code from '@/code/input-number';
import Default from '@/components/input-number/default.vue';
import Step from '@/components/input-number/step.vue';
import Formatter from '@/components/input-number/formatter.vue';
import Disabled from '@/components/input-number/disabled.vue';
import Readonly from '@/components/input-number/readonly.vue';
import Editable from '@/components/input-number/editable.vue';
import ControlsOutside from '@/components/input-number/controls-outside.vue';

const code = ref(Code);

// propsData
const propsData = ref([
    {
        name: 'model-value',
        illustrate: '当前值，可以使用 v-model 双向绑定数据',
        type: 'Number',
        default: '1',
    },
    {
        name: 'disabled',
        illustrate: '设置禁用状态',
        type: 'Boolean',
        default: 'false',
    },
    {
        name: 'autofocus',
        illustrate: '输入框自动获取焦点',
        type: 'Boolean',
        default: 'false',
    },
    {
        name: 'readonly',
        illustrate: '是否设置为只读',
        type: 'Boolean',
        default: 'false',
    },
    {
        name: 'editable',
        illustrate: '输入框是否可以输入',
        type: 'Boolean',
        default: 'false',
    },
    {
        name: 'placeholder',
        illustrate: '占位文本',
        type: 'String',
        default: '-',
    },
    {
        name: 'formatter',
        illustrate: '指定输入框展示值的格式',
        type: 'Function',
        default: '-',
    },
    {
        name: 'precision',
        illustrate: '数值精度，小数点',
        type: 'Number',
        default: '-',
    },
    {
        name: 'active-change',
        illustrate:
            '是否实时响应数据，设置为 <code>false</code> 时，只会在失焦时更改数据',
        type: 'Boolean',
        default: 'true',
    },
    {
        name: 'parser',
        illustrate:
            '指定从 <code>formatter</code> 里转换回数字的方式，和 <code>formatter</code> 搭配使用',
        type: 'Function',
        default: '-',
    },
    {
        name: 'max',
        illustrate: '最大值',
        type: 'Number',
        default: 'Infinity',
    },
    {
        name: 'min',
        illustrate: '最小值',
        type: 'Number',
        default: 'Infinity',
    },
    {
        name: 'controls-outside',
        illustrate: '按钮位置是否置于两侧',
        type: 'Boolean',
        default: 'false',
    },
    {
        name: 'step',
        illustrate: '每次改变数值，可以是小数',
        type: 'Number',
        default: '1',
    },
]);

// eventsData
const eventsData = ref([
    {
        name: 'on-focus',
        illustrate: '聚焦时触发',
        default: 'event',
    },
    {
        name: 'on-blur',
        illustrate: '失焦时触发',
        default: '-',
    },
    {
        name: 'on-change',
        illustrate: '数值改变时的回调，返回当前值',
        default: '当前值',
    },
]);
</script>

<style lang="scss" scoped>
</style>
