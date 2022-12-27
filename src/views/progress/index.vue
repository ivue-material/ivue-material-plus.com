<template>
    <div>
        <h1>Progress 进度条</h1>
        <p>展示操作或任务的当前进度，比如上传文件。</p>
        <h2>基本用法</h2>
        <p>
            <code>progress</code>处在不同状态下的进度条，当
            <code>percent</code> 为
            <code>100</code> 时，自动将状态置为
            <code>success</code>
        </p>
        <doc-markdown :code="code.default">
            <template #demo>
                <default></default>
            </template>
        </doc-markdown>
        <h2>动画进度条</h2>
        <p>
            使用
            <code>indeterminate</code> 属性来设置不确定的进度，
            <code>duration</code> 来控制动画持续时间
        </p>
        <doc-markdown :code="code.animation">
            <template #demo>
                <animation></animation>
            </template>
        </doc-markdown>
        <h2>百分比内显</h2>
        <p>
            设置属性
            <code>text-inside</code> 可以将百分比显示在进度条内部
        </p>
        <p>
            设置属性
            <code>stroke-width</code> 可以设置一个足够的高度。
        </p>
        <doc-markdown :code="code.percentage">
            <template #demo>
                <percentage></percentage>
            </template>
        </doc-markdown>
        <h2>垂直方向</h2>
        <p>
            设置属性
            <code>vertical</code> 将以垂直方向显示
        </p>
        <doc-markdown :code="code.vertical">
            <template #demo>
                <vertical></vertical>
            </template>
        </doc-markdown>
        <h2>配合外部组件使用</h2>
        <p>通过数据的联动控制，实现动态效果</p>
        <doc-markdown :code="code.external">
            <template #demo>
                <external></external>
            </template>
        </doc-markdown>
        <h2>自定义更多样式</h2>
        <p>
            通过自定义
            <code>slot</code>和属性
            <code>stroke-width</code>改变进度条效果
        </p>
        <doc-markdown :code="code.custom">
            <template #demo>
                <custom></custom>
            </template>
        </doc-markdown>
        <h2>渐变色</h2>
        <p>
            设置属性
            <code>stroke-color</code> 为数组时，可以显示为渐变色
        </p>
        <p>数组只能设置为两项</p>
        <doc-markdown :code="code.gradient">
            <template #demo>
                <gradient></gradient>
            </template>
        </doc-markdown>
        <h2>分段进度条</h2>
        <p>标准进度条</p>
        <doc-markdown :code="code.gradient">
            <template #demo>
                <gradient></gradient>
            </template>
        </doc-markdown>
        <h2>分段进度条</h2>
        <p></p>
        <doc-markdown :code="code.subsection">
            <template #demo>
                <subsection></subsection>
            </template>
        </doc-markdown>
    </div>
</template>

<script>
import Code from '@/code/progress';
import Default from '../../components/progress/default.vue';
import Animation from '../../components/progress/animation.vue';
import Percentage from '../../components/progress/percentage.vue';
import Vertical from '../../components/progress/vertical.vue';
import External from '../../components/progress/external.vue';
import Custom from '../../components/progress/custom.vue';
import Gradient from '../../components/progress/gradient.vue';
import Subsection from '../../components/progress/subsection.vue';

export default {
    data() {
        return {
            code: Code,
        };
    },
    components: {
        Default,
        Animation,
        Percentage,
        Vertical,
        External,
        Custom,
        Gradient,
        Subsection,
    },
};
</script>

<style lang="scss" scoped>
</style>
