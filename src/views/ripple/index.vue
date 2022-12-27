<template>
    <div>
        <h1>Ripple 波纹指令</h1>
        <p>
            <code>v-ripple</code>
            指令被用于显示用户的操作。 它可以应用于任何块级元素。许多组件都带有内置的波纹指令。比如
            <code>ivue-button</code> 、
            <code>ivue-tabs</code>等等。
        </p>
        <h2>基本用法</h2>
        <p>
            只需在组件或HTML元素上使用
            <code>v-ripple</code>
            指令即可启用基本纹波功能
        </p>
        <doc-markdown :code="code.default">
            <template #demo>
                <default></default>
            </template>
        </doc-markdown>
        <h2>波纹居中</h2>
        <p>
            通过设置属性
            <code>center</code>
            ，使纹波始终来自目标的中心
        </p>
        <doc-markdown :code="code.center">
            <template #demo>
                <center></center>
            </template>
        </doc-markdown>
        <h2>自定义波纹颜色</h2>
        <p>
            通过设置外层样式改变波纹颜色，
            <code>ripple</code>
            将继承上一个层级
            <code>color</code>
            颜色，或者设置
            <code>{class=''}</code>
            定义
            <code>ripple</code>
            颜色
        </p>
        <doc-markdown :code="code.color">
            <template #demo>
                <color></color>
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
            <ivue-table-column prop="value" label="可选值" width="350">
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

import Code from '@/code/affix';

import Default from '@/components/ripple/default.vue';
import Center from '@/components/ripple/center.vue';
import Color from '@/components/ripple/color.vue';

const code = ref(Code);

// propsData
const propsData = ref([
    {
        name: 'value',
        illustrate: 'ripple的值',
        type: 'Object | Boolean',
        value: '<code>{center=true}</code> | <code>{class:\'\'}</code> | <code>false</code>',
        default: '-',
    },
]);
</script>

<style lang="scss" scoped>
</style>
