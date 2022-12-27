<template>
    <div>
        <h1>RelativeTime 相对时间</h1>
        <p>常用于表示几分钟前、几小时前、几天前以及一些自定义时间</p>
        <h2>基本用法</h2>
        <p>
            设置一个
            <code>时间戳</code>或者
            <code>Date</code>,可以自动转为相对于当前的时间
        </p>
        <doc-markdown :code="code.default">
            <template #demo>
                <default></default>
            </template>
        </doc-markdown>
        <h2>自动更新间隔</h2>
        <p>设置自动更新时间间隔，默认为<code>60秒</code></p>
        <doc-markdown :code="code.autoUpdate">
            <template #demo>
                <auto-update></auto-update>
            </template>
        </doc-markdown>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import Code from '@/code/relative-time';

import Default from '@/components/relative-time/default';
import AutoUpdate from '@/components/relative-time/auto-update';

const code = ref(Code);
</script>

<style lang="scss" scoped>
</style>
