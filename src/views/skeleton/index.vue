<template>
    <div>
        <h1>Skeleton 骨架屏</h1>
        <p>在需要等待加载数据的位置提供一个占位组合</p>
        <h2>基础用法</h2>
        <p>基础的骨架屏效果</p>
        <doc-markdown :code="code.default">
            <template #demo>
                <default></default>
            </template>
        </doc-markdown>
        <h2>自定义段落</h2>
        <p>
            通过属性
            <code>paragraph</code>
            设置段落行数及每行宽度，可传入对象
            <code>{rows:number, width: number[] | string[]}</code>
            或者
            <code>number</code>
        </p>
        <doc-markdown :code="code.paragraph">
            <template #demo>
                <paragraph></paragraph>
            </template>
        </doc-markdown>
        <h2>动画效果</h2>
        <p>
            通过设置
            <code>animated</code>
            属性开启加载动画
        </p>
        <doc-markdown :code="code.animated">
            <template #demo>
                <animated></animated>
            </template>
        </doc-markdown>
        <h2>slot 插槽</h2>
        <p>使用插槽自定义骨架屏</p>
        <doc-markdown :code="code.slots">
            <template #demo>
                <slots></slots>
            </template>
        </doc-markdown>
        <h2>自定义样式</h2>
        <p>
            通过
            <code>loading</code>
            属性来控制是否显示加载后的 DOM
        </p>
        <p>
            也可以通过具名插槽
            <code>default</code>
            来构建
            <code>loading</code>
            结束之后需要展示的真实 DOM 元素结构
        </p>
        <doc-markdown :code="code.loading">
            <template #demo>
                <loading></loading>
            </template>
        </doc-markdown>
        <h2>防止渲染抖动</h2>
        <p>
            有的时候，API 的请求回来的特别快， 往往骨架占位刚刚被渲染，
            真实的数据就已经回来了， 用户的界面会突然一闪， 此时为了避免这种情况，
            可通过设置
            <code>throttle</code>
            属性来避免这个问题
        </p>
        <doc-markdown :code="code.throttle">
            <template #demo>
                <throttle></throttle>
            </template>
        </doc-markdown>
        <h2>API</h2>
        <h3>Skeleton Props</h3>
        <ivue-table :data="skeletonPropsData" border>
            <ivue-table-column prop="name" label="名称" width="200"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300">
                <template #default="props">
                    <p v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="type" label="类型" width="200"></ivue-table-column>
            <ivue-table-column prop="default" label="默认" width="100"></ivue-table-column>
        </ivue-table>
        <h3>Skeleton Slots</h3>
        <ivue-table :data="skeletonSlotsData" border>
            <ivue-table-column prop="name" label="事件名"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300">
                <template #default="props">
                    <p v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
        </ivue-table>
        <h3>Skeleton Item Props</h3>
        <ivue-table :data="skeletonItemPropsData" border>
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

import Code from '@/code/skeleton';

import Default from '@/components/skeleton/default.vue';
import Paragraph from '@/components/skeleton/paragraph.vue';
import Animated from '@/components/skeleton/animated.vue';
import Slots from '@/components/skeleton/slots.vue';
import Loading from '@/components/skeleton/loading.vue';
import Throttle from '@/components/skeleton/throttle.vue';

const code = ref(Code);

// skeletonPropsData
const skeletonPropsData = [
    {
        name: 'loading',
        illustrate: '是否显示加载结束后的 <code>DOM</code> 结构',
        type: 'Boolean',
        default: 'false',
    },
    {
        name: 'animated',
        illustrate: '是否使用动画',
        type: 'Boolean',
        default: 'false',
    },
    {
        name: 'total',
        illustrate: '渲染多少个 template, 建议使用尽可能小的数字',
        type: 'Number',
        default: '1',
    },
    {
        name: 'throttle',
        illustrate: '渲染延迟（以毫秒为单位）',
        type: 'Number',
        default: '0',
    },
    {
        name: 'paragraph',
        illustrate:
            '设置段落占位效果，为数字时，表示行数。另外，可以设置每行宽度，例如：<code>{ rows: 4, width: [100, 200, \'300px\', \'50%\'] }</code>，也可以为所有行设置相同宽度，例如：<code>{ rows: 4, width: 300 }</code>',
        type: 'Number | Object',
        default: '4',
    },
];

// skeletonSlotsData
const skeletonSlotsData = [
    {
        name: 'default',
        illustrate: '正在渲染的DOM',
    },
    {
        name: 'template',
        illustrate: '自定义渲染 <code>skeleton</code> 模板',
    },
];

// skeletonItemPropsData
const skeletonItemPropsData = [
    {
        name: 'type',
        illustrate: '当前渲染的 <code>skeleton</code> 类型',
        type: 'String',
        value: `
          <code>circle</code> ｜
          <code>square</code> |
          <code>rect</code> |
          <code>h1</code> |
          <code>h3</code> |
          <code>text</code> |
          <code>caption</code> |
          <code>p</code> |
          <code>image</code> |
          <code>button</code>
          `,
        default: 'text',
    },
];
</script>
