<template>
    <div class="list">
        <h1>List 列表</h1>
        <p>列表将多个行项垂直显示为单个连续元素。</p>
        <p>组件用于显示信息，它可以包含一个头像、内容、操作、列表组标题等等。列表也可以包含子元素并在侧边栏（sidebar）使用。</p>
        <p>列表项可以包含交互事件，例如 click 和 mousedown 事件。</p>
        <h2>基本用法</h2>
        <p>基本用法，头像和列表项标题的组合</p>
        <doc-markdown :code="code.default">
            <template #demo>
                <default></default>
            </template>
        </doc-markdown>
        <h2>头像和三行的组合</h2>
        <p>对于3行的列表，列表项副标题内容占两行的时候如果超出范围则以省略号形式截断文字。</p>
        <doc-markdown :code="code.combination">
            <template #demo>
                <combination></combination>
            </template>
        </doc-markdown>
        <h2>列表操作</h2>
        <p>列表项将根据给定的交互类型呈现不同的类型</p>
        <p>
            根据你传递的
            <code>type</code>
            判断显示那种类型:
        </p>
        <ul>
            <li>text</li>
            <li>button</li>
            <li>a</li>
        </ul>
        <doc-markdown :code="code.type">
            <template #demo>
                <type></type>
            </template>
        </doc-markdown>
        <h2>列表扩展</h2>
        <p>列表可以使用扩展面板来显示更多选项</p>
        <p>
            <code>ivue-expand-single</code>用于扩展列表项，将在展开另一个列表项时折叠,一次最多可扩展一个列表项
        </p>
        <doc-markdown :code="code.expand">
            <template #demo>
                <expand></expand>
            </template>
        </doc-markdown>
    </div>
</template>

<script>
import Code from '@/code/list';
import Default from '@/components/list/default.vue';
import Combination from '@/components/list/combination.vue';
import Type from '@/components/list/type.vue';
import Expand from '@/components/list/expand.vue';

export default {
    data() {
        return {
            code: Code,
        };
    },
    components: {
        Default,
        Combination,
        Type,
        Expand,
    },
};
</script>

<style lang="scss" scoped>
.list {
    ul {
        margin-left: 20px;
    }

    li {
        list-style: square;
    }
}
</style>
