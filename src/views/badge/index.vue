<template>
    <div>
        <h1>Badge 徽标数</h1>
        <p>主要用于通知未读数的角标，提醒用户点击</p>
        <h2>基础用法</h2>
        <p>
            设置属性
            <code>count</code>可以定义显示的消息数量，或者使用插槽
            <code>count</code>自定义消息内容
        </p>
        <doc-markdown :code="code.default">
            <template #demo>
                <default></default>
            </template>
        </doc-markdown>
        <h2>小红点</h2>
        <p>
            设置
            <code>dot</code>属性可以将消息数量设置为小红点，可通过
            <code>color</code>属性设置小红点
        </p>
        <doc-markdown :code="code.dot">
            <template #demo>
                <dot></dot>
            </template>
        </doc-markdown>
        <h2>封顶数字</h2>
        <p>
            通过设置
            <code>overflow-count</code>
            属性设置一个封顶值，当超过时，会显示
            <code>${overflowCount}+</code>，默认值为<code>99</code>封顶
        </p>
        <doc-markdown :code="code.overflowCount">
            <template #demo>
               <overflow-count></overflow-count>
            </template>
        </doc-markdown>
        <h2>单独使用</h2>
        <doc-markdown :code="code.alone">
            <template #demo>
               <alone></alone>
            </template>
        </doc-markdown>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import Code from '@/code/badge';

import Default from '@/components/badge/default.vue';
import Dot from '@/components/badge/dot.vue';
import OverflowCount from '@/components/badge/overflow-count.vue';
import Alone from '@/components/badge/alone.vue';

const code = ref(Code);
</script>

<style lang="scss" scoped>
</style>
