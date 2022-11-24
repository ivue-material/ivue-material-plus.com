<template>
    <div>
        <h1>Steps 步骤条</h1>
        <p>组件用于显示步骤进度，引导用户按流程完成任务</p>
        <h2>基本用法</h2>
        <p>
            基本用法，组件会根据
            <code>currentStep</code>自动判断各步骤状态
        </p>
        <doc-markdown :code="code.default">
            <template #demo>
                <default></default>
            </template>
        </doc-markdown>
    </div>
</template>

<script>
import Code from '@/code/steps';
import Default from '@/components/steps/default.vue';

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
