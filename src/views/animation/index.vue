<template>
    <div>
        <h1>Animation 基础动画</h1>
        <p>内置了丰富的动画效果，直接作用于 <code>{{ '<transition>' }}</code> 组件。</p>
        <doc-markdown :code="code.animation">
            <template #demo>
                <default></default>
            </template>
        </doc-markdown>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Code from '@/code/animation';

import Default from '@/components/animation/default.vue';

const code = ref(Code);
</script>

<style lang="scss" scoped>
</style>
