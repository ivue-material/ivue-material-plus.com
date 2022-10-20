<template>
    <div>
        <h1>Animation 基础动画</h1>
        <p>内置了丰富的动画效果，直接作用于 <code>{{ '<transition>' }}</code> 组件。</p>
        <doc-markdown :code="code.animation" jsfiddle="https://codesandbox.io/s/summer-dream-ye5npw">
            <template #demo>
                <default></default>
            </template>
        </doc-markdown>
    </div>
</template>

<script>
import Code from '@/code/animation';
import Default from '@/components/animation/default.vue';

export default {
    data() {
        return {
            code: Code,
        };
    },
    components: {
        Default,
    },
};
</script>

<style lang="scss" scoped>
</style>
