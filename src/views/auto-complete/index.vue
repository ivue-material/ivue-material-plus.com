<template>
    <div>
        <h1>AutoComplete 自动完成</h1>
        <p>该组件提供简单灵活的预先输入功能。这在搜索大型数据集或甚至从API动态请求信息时非常有用。</p>
        <h2>基础用法</h2>
        <p>
            基本用法，通过
            <code>list</code> 设置自动完成的数据源
        </p>
        <doc-markdown :code="code.default" jsfiddle="https://codesandbox.io/s/auto-complete-2hg3t3">
            <template #demo>
                <default></default>
            </template>
        </doc-markdown>
        <h2>自定义选项</h2>
        <p>
            <span>除了使用</span>
            <code>list</code>
            <span>，还可以直接传入</span>
            <code>ivue-option</code>
            <span>
                组件作为
                <code>slot</code> 使用，这样可以自定义显示效果。
            </span>
        </p>
        <doc-markdown :code="code.custom" jsfiddle="https://codesandbox.io/s/custom-493cfm">
            <template #demo>
                <custom></custom>
            </template>
        </doc-markdown>
        <h2>不区分大小写</h2>
        <p>
            不区分大小写的
            <code>auto-complete</code>，及过滤的用法
        </p>
        <doc-markdown :code="code.notCaseSensitive" jsfiddle="https://codesandbox.io/s/custom-493cfm">
            <template #demo>
                <not-case-sensitive></not-case-sensitive>
            </template>
        </doc-markdown>
    </div>
</template>

<script>
import Code from '@/code/auto-complete';

import Default from '@/components/auto-complete/default.vue';
import Custom from '@/components/auto-complete/custom.vue';
import NotCaseSensitive from '@/components/auto-complete/not-case-sensitive.vue';

export default {
    data() {
        return {
            code: Code,
        };
    },
    components: {
        Default,
        Custom,
        NotCaseSensitive,
    },
};
</script>

<style lang="scss" scoped>
</style>
