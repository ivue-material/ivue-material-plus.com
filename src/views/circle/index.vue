<template>
    <div>
        <h1>Circle 进度环</h1>
        <p>显示某项任务进度的百分比</p>
        <h2>基础用法</h2>
        <p>
            最近基本的用法,可通过
            <code>percent</code>设置百分比,还可以设置
            <code>stroke-color</code>设置进度条颜色,当设置为数组
            <code>Array</code>时显示渐变
        </p>
        <doc-markdown :code="code.default">
            <template #demo>
                <default></default>
            </template>
        </doc-markdown>
        <h2>配合外部组件使用</h2>
        <p>通过数据的联动和逻辑控制，实现交互效果</p>
        <doc-markdown :code="code.linkage">
            <template #demo>
                <linkage></linkage>
            </template>
        </doc-markdown>
    </div>
</template>

<script>
import Code from '@/code/circle';
import Default from '@/components/circle/default.vue';
import Linkage from '@/components/circle/linkage.vue';

export default {
    data() {
        return {
            code: Code,
        };
    },
    components: {
        Default,
        Linkage
    },
};
</script>

<style lang="scss" scoped>
</style>
