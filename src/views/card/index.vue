<template>
    <div>
        <h1>Card 卡片</h1>
        <p>基础容器，用来显示文字、列表、图文等内容，也可以配合其它组件一起使用</p>
        <h2>基本用法</h2>
        <p>自定义标题、额外操作和主体内容，可以完全自由控制各个部分，也可以结合其它组件一起使用，较为灵活</p>
        <p>
            可以通过设置属性
            <code>title</code> 快速设置标题栏
        </p>
        <doc-markdown :code="code.default">
            <template #demo>
                <default></default>
            </template>
        </doc-markdown>
        <h2>无边框</h2>
        <p>
            通过设置属性
            <code>border</code>为
            <code>false</code> ，可以不添加边框，建议在灰色背景下使用
        </p>
        <doc-markdown :code="code.notBorder">
            <template #demo>
                <not-border></not-border>
            </template>
        </doc-markdown>
        <h2>禁用悬停阴影</h2>
        <p>
            通过设置属性
            <code>dis-hover</code>来禁用鼠标悬停显示阴影的效果
        </p>
        <doc-markdown :code="code.umbra">
            <template #demo>
                <umbra></umbra>
            </template>
        </doc-markdown>
        <h2>卡片阴影</h2>
        <p>
            通过设置
            <code>shadow</code>属性来显示卡片阴影
        </p>
        <doc-markdown :code="code.shadow">
            <template #demo>
                <card-shadow></card-shadow>
            </template>
        </doc-markdown>
        <h2>简洁卡片</h2>
        <p>只包含内容区域，没有标题</p>
        <doc-markdown :code="code.simple">
            <template #demo>
                <simple></simple>
            </template>
        </doc-markdown>
        <h2>样式联动</h2>
        <p>
            通过设置
            <code>padding-styles-linkage</code> 属性来设置联动标题和内容的
            <code>padding</code>,设置
            <code>title-padding</code>标题内部间距(
            <code>padding-styles-linkage</code>开启该属性将不生效)
        </p>
        <doc-markdown :code="code.padding">
            <template #demo>
                <padding></padding>
            </template>
        </doc-markdown>
        <h2>API</h2>
        <h3>Props</h3>
        <ivue-table :data="propsData" border>
            <ivue-table-column prop="name" label="名称" width="200"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300"></ivue-table-column>
            <ivue-table-column prop="type" label="类型" width="150"></ivue-table-column>
            <ivue-table-column prop="default" label="默认" width="150"></ivue-table-column>
        </ivue-table>
        <h3>Slots</h3>
        <ivue-table :data="slotsData" border>
            <ivue-table-column prop="name" label="名称" width="200"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300"></ivue-table-column>
        </ivue-table>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import Code from '@/code/card';

import Default from '@/components/card/default';
import NotBorder from '@/components/card/not-border';
import Umbra from '@/components/card/umbra';
import Simple from '@/components/card/simple';
import Padding from '@/components/card/padding';
import CardShadow from '@/components/card/shadow';

const code = ref(Code);

// propsData
const propsData = ref([
    {
        name: 'title',
        illustrate: '标题',
        type: 'String',
        default: '-',
    },
    {
        name: 'border',
        illustrate: '是否显示边框，建议在灰色背景下使用',
        type: 'Boolean',
        default: 'true',
    },
    {
        name: 'shadow',
        illustrate: '卡片阴影，建议在灰色背景下使用',
        type: 'Boolean',
        default: 'false',
    },
    {
        name: 'dis-hover',
        illustrate: '禁用鼠标悬停显示阴影',
        type: 'Boolean',
        default: 'false',
    },
    {
        name: 'padding',
        illustrate: '卡片内部间距,(可自定义单位，如：1rem)',
        type: 'Number | String',
        default: '-',
    },
    {
        name: 'title-padding',
        illustrate:
            '标题内部间距(padding-styles-linkage开启该属性将不生效),(可自定义单位，如：1rem)',
        type: 'Number | String',
        default: '-',
    },
    {
        name: 'radius',
        illustrate: '圆角大小',
        type: 'Number',
        default: '-',
    },
    {
        name: 'padding-styles-linkage',
        illustrate: '样式联动(联动标题和内容的padding)',
        type: 'Boolean',
        default: 'true',
    },
    {
        name: 'to',
        illustrate: '跳转的链接，支持 vue-router 对象',
        type: 'Object | String',
        default: '-',
    },
    {
        name: 'target',
        illustrate: '相当于 a 链接的 target 属性',
        type: 'String',
        default: '_self',
    },
    {
        name: 'replace',
        illustrate: '路由跳转时，开启 replace 将不会向 history 添加新记录',
        type: 'Boolean',
        default: 'false',
    },
]);

// slotsData
const slotsData = ref([
    {
        name: 'title',
        illustrate: '自定义卡片标题',
    },
    {
        name: 'extra',
        illustrate: '额外显示的内容，默认位置在右上角',
    },
    {
        name: 'default',
        illustrate: '卡片主体内容',
    },
]);
</script>

<style lang="scss" scoped>
</style>
