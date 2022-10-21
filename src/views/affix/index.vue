<template>
    <div>
        <h1>Affix 图钉</h1>
        <p>使用图钉，可以将内容固定在屏幕上，并且不随页面的滚动而滚动。常用于侧边菜单等。</p>
        <h2>基础用法</h2>
        <p>基础用法，当元素不可见时，直接固定在最顶端。</p>
        <doc-markdown :code="code.default" jsfiddle="https://codesandbox.io/s/default-9bxmm4">
            <template #demo>
                <default></default>
            </template>
        </doc-markdown>
        <h2>顶部偏移</h2>
        <p>
            通过设置属性
            <code>offset-top</code>，当滚动到一定距离时再固定。
        </p>
        <doc-markdown :code="code.offsetTop" jsfiddle="https://codesandbox.io/s/offset-top-4iczvn">
            <template #demo>
                <offset-top></offset-top>
            </template>
        </doc-markdown>
        <h2>固定在底部</h2>
        <p>在屏幕下方固定，可以通过缩小浏览器窗口高度来查看效果。</p>
        <p>
            注意，
            <code>offset-top</code> 和
            <code>offset-bottom</code> 只可以设置一个，如果都设置，会使用
            <code>offset-top</code>。
        </p>
        <doc-markdown
            :code="code.offsetBottom"
            jsfiddle="https://codesandbox.io/s/offset-bottom-uccnsk"
        >
            <template #demo>
                <offset-bottom></offset-bottom>
            </template>
        </doc-markdown>
        <h2>固定状态改变时的回调</h2>
        <p>当固定状态发生改变时，会触发事件</p>
        <doc-markdown
            :code="code.callback"
            jsfiddle="https://codesandbox.io/s/callback-6dg9y9?file=/src/App.vue"
        >
            <template #demo>
                <callback></callback>
            </template>
        </doc-markdown>
        <h2>API</h2>
        <h3>Props</h3>
        <ivue-table :data="propsData" border>
            <ivue-table-column prop="name" label="名称"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明">
                <template #default="props">
                    <p v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="type" label="类型"></ivue-table-column>
            <ivue-table-column prop="default" label="默认"></ivue-table-column>
        </ivue-table>
        <h3>Events</h3>
        <ivue-table :data="eventsData" border>
            <ivue-table-column prop="name" label="事件名"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明"></ivue-table-column>
            <ivue-table-column prop="default" label="返回值"></ivue-table-column>
        </ivue-table>
    </div>
</template>

<script>
import Code from '@/code/affix';
import Default from '@/components/affix/default.vue';
import OffsetTop from '@/components/affix/offset-top.vue';
import OffsetBottom from '@/components/affix/offset-bottom.vue';
import Callback from '@/components/affix/callback.vue';

export default {
    data() {
        return {
            code: Code,
            propsData: [
                {
                    name: 'offset-top',
                    illustrate: '距离窗口顶部达到指定偏移量后触发',
                    type: 'number',
                    default: '0',
                },
                {
                    name: 'offset-bottom',
                    illustrate: '距离窗口底部达到指定偏移量后触发',
                    type: 'number',
                    default: '-',
                },
                {
                    name: 'use-capture',
                    illustrate:
                        'addEventListener 原生的 <code>useCapture</code> 选项',
                    type: 'boolean',
                    default: 'false',
                },
            ],
            eventsData: [
                {
                    name: 'on-change',
                    illustrate: '在固定状态发生改变时触发',
                    default: 'true | false',
                },
            ],
        };
    },
    components: {
        Default,
        OffsetTop,
        OffsetBottom,
        Callback,
    },
};
</script>

<style lang="scss" scoped>
</style>