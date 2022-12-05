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
        <h2>带图标的步骤条</h2>
        <p>
            通过设置
            <code>Step</code> 的
            <code>icon</code> 属性可以自定义图标
        </p>
        <doc-markdown :code="code.default">
            <template #demo>
                <icon></icon>
            </template>
        </doc-markdown>
        <h2>切换步骤</h2>
        <p>点击下一步按钮可以切换当前进度状态</p>
        <doc-markdown :code="code.nextSwitch">
            <template #demo>
                <next-switch></next-switch>
            </template>
        </doc-markdown>
        <h2>步骤运行错误</h2>
        <p>
            设置
            <code>Steps</code> 的属性
            <code>status</code> 为
            <code>error</code> 指定当前步骤状态
        </p>
        <doc-markdown :code="code.status">
            <template #demo>
                <status></status>
            </template>
        </doc-markdown>
        <h2>垂直方向</h2>
        <p>
            设置属性
            <code>direction</code> 为
            <code>vertical</code> 在垂直方向展示
        </p>
        <doc-markdown :code="code.direction">
            <template #demo>
                <direction></direction>
            </template>
        </doc-markdown>
        <h2>自定义 Step 的间距</h2>
        <p>
            设置属性
            <code>space</code>
            自定义每个
            <code>step</code>
            的间距，不填写将自适应间距。支持百分比
        </p>
        <doc-markdown :code="code.space">
            <template #demo>
                <space></space>
            </template>
        </doc-markdown>
        <h2>控制文字方向</h2>
        <p>
            自定义内容对其方式，
            <code>right</code>文字向右,
            <code>bottom-center</code>底部居中,
            <code>bottom</code>底部
        </p>
        <doc-markdown :code="code.textDirection">
            <template #demo>
                <text-direction></text-direction>
            </template>
        </doc-markdown>
        <h3>Steps Props</h3>
        <ivue-table :data="propsStepsData" border>
            <ivue-table-column prop="name" label="名称" width="200"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="200">
                <template #default="props">
                    <p v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="type" label="类型" width="200"></ivue-table-column>
            <ivue-table-column prop="value" label="可选值" width="200">
                <template #default="props">
                    <p v-html="props.row.value"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="default" label="默认" width="200"></ivue-table-column>
        </ivue-table>
        <h3>Step Props</h3>
        <ivue-table :data="propsStepData" border>
            <ivue-table-column prop="name" label="名称" width="200"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="200">
                <template #default="props">
                    <p v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="type" label="类型" width="200"></ivue-table-column>
            <ivue-table-column prop="value" label="可选值" width="200">
                <template #default="props">
                    <p v-html="props.row.value"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="default" label="默认" width="200"></ivue-table-column>
        </ivue-table>
        <h3>Step Slots</h3>
        <ivue-table :data="slotsStepData" border>
            <ivue-table-column prop="name" label="名称" width="200"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="200">
                <template #default="props">
                    <p v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
        </ivue-table>
    </div>
</template>

<script>
import Code from '@/code/steps';
import Default from '@/components/steps/default.vue';
import Icon from '@/components/steps/icon.vue';
import NextSwitch from '@/components/steps/next-switch.vue';
import Status from '@/components/steps/status.vue';
import Direction from '@/components/steps/direction.vue';
import Space from '@/components/steps/space.vue';
import TextDirection from '@/components/steps/text-direction.vue';

export default {
    data() {
        return {
            code: Code,
            propsStepsData: [
                {
                    name: 'current-step',
                    illustrate: '当前步骤，从 0 开始计数',
                    type: 'Number',
                    value: '-',
                    default: '0',
                },
                {
                    name: 'direction',
                    illustrate:
                        '步骤条的方向，可选值为 <code>horizontal</code>（水平）或 <code>vertical</code>（垂直)',
                    type: 'String',
                    value: 'horizontal | vertical',
                    default: 'horizontal',
                },
                {
                    name: 'status',
                    illustrate: '当前步骤的状态',
                    type: 'String',
                    value: 'wait | process | finish | error',
                    default: 'process',
                },
                {
                    name: 'space',
                    illustrate:
                        '每个 step 的间距，不填写将自适应间距。支持百分比，如：<code>flex-basis: 10%</code>',
                    type: 'Number | String',
                    value: '-',
                    default: '-',
                },
                {
                    name: 'text-direction',
                    illustrate: '文字方向',
                    type: 'String',
                    value: 'right | bottom-center | bottom',
                    default: '-',
                },
            ],
            propsStepData: [
                {
                    name: 'status',
                    illustrate: '当前步骤的状态',
                    type: 'String',
                    value: 'wait | process | finish | error',
                    default: 'process',
                },
                {
                    name: 'title',
                    illustrate: '标题',
                    type: 'String',
                    value: '-',
                    default: '-',
                },
                {
                    name: 'content',
                    illustrate: '步骤的详细描述，可选',
                    type: 'String',
                    value: '-',
                    default: '-',
                },
                {
                    name: 'icon',
                    illustrate: '步骤的图标，可选',
                    type: 'String',
                    value: '-',
                    default: '-',
                },
            ],
            slotsStepData: [
                {
                    name: 'title',
                    illustrate: '自定义 title',
                },
                {
                    name: 'content',
                    illustrate: '自定义 content',
                },
                {
                    name: 'icon',
                    illustrate: '自定义 icon',
                },
            ],
        };
    },
    components: {
        Default,
        Icon,
        NextSwitch,
        Status,
        Direction,
        Space,
        TextDirection,
    },
};
</script>

<style lang="scss" scoped>
</style>
