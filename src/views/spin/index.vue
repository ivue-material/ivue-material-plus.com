<template>
    <div>
        <h1>Spin 加载中</h1>
        <p>当区块正在获取数据中时可使用，适当的等待动画可以提升用户体验</p>
        <h2>基础用法</h2>
        <p>最简单的用法</p>
        <doc-markdown :code="code.default">
            <template #demo>
                <default></default>
            </template>
        </doc-markdown>
        <h2>尺寸</h2>
        <p>
            设置
            <code>size</code>属性，可自定义大小，单位为
            <code>px</code>，可传入带单位的尺寸，如：
            <code>10px</code>
        </p>
        <doc-markdown :code="code.size">
            <template #demo>
                <size></size>
            </template>
        </doc-markdown>
        <h2>居中固定</h2>
        <p>
            在容器内部垂直居中固定，需要父级有
            <code>relative</code>或
            <code>absolute</code>
        </p>
        <doc-markdown :code="code.center">
            <template #demo>
                <center></center>
            </template>
        </doc-markdown>
        <h2>自定义内容</h2>
        <p>
            通过
            <code>slots</code>自定义内容
        </p>
        <doc-markdown :code="code.slots">
            <template #demo>
                <slots></slots>
            </template>
        </doc-markdown>
        <h2>状态切换</h2>
        <p>
            通过
            <code>show</code>属性，控制组件的显示和消失
        </p>
        <doc-markdown :code="code.show">
            <template #demo>
                <show></show>
            </template>
        </doc-markdown>
        <h2>整页加载</h2>
        <p>
            使用内置的
            <code>$IvueSpin</code>
            方法可以全局加载，
            <code>$IvueSpin.show</code>显示，
            <code>$IvueSpin.hide</code>隐藏，
            添加
            <code>render</code>函数可自定义显示内容，该函数需返回一个
            <code>vnode</code>
        </p>
        <doc-markdown :code="code.render">
            <template #demo>
                <render></render>
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
            <ivue-table-column prop="default" label="默认" width="150"></ivue-table-column>
        </ivue-table>
        <h3>Slots</h3>
        <ivue-table :data="slotsData" border>
            <ivue-table-column prop="name" label="事件名" width="200"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300"></ivue-table-column>
        </ivue-table>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import Code from '@/code/spin';

import Default from '@/components/spin/default.vue';
import Size from '@/components/spin/size.vue';
import Center from '@/components/spin/center.vue';
import Slots from '@/components/spin/slots.vue';
import Show from '@/components/spin/show.vue';
import Render from '@/components/spin/render.vue';

const code = ref(Code);

// propsData
const propsData = ref([
    {
        name: 'show',
        illustrate: '控制显示/隐藏',
        type: 'Boolean',
        default: 'true',
    },
    {
        name: 'size',
        illustrate:
            '自定义大小，单位为 <code>px</code>，可传入带单位的尺寸，如：<code>10px</code>',
        type: 'Number ｜ String',
        default: '-',
    },
    {
        name: 'fix',
        illustrate:
            '是否固定，需要父级有<code>relative</code>或<code>absolute</code>，或者使用全局配置<code>spin.fix</code>设置全局属性',
        type: 'Boolean',
        default: 'false',
    },
]);

// slotsData
const slotsData = ref([
    {
        name: 'default',
        illustrate: '自定义的内容',
    },
]);
</script>

<style lang="scss" scoped>
</style>
