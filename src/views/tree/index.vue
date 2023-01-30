<template>
    <div>
        <h1>Tree 树形控件</h1>
        <p>使用树控件可以完整展现其中的层级关系，并具有展开收起选择等交互功能</p>
        <h2>基础用法</h2>
        <p>最简单的用法，展示可选中，展开功能</p>
        <doc-markdown :code="code.default">
            <template #demo>
                <default></default>
            </template>
        </doc-markdown>
        <h2>可勾选</h2>
        <p>
            设置属性
            <code>show-checkbox</code>
            可以对节点进行勾选
        </p>
        <p>
            也可以通过
            <code>disabled</code>
            设置禁用勾选框
        </p>
        <doc-markdown :code="code.checkbox">
            <template #demo>
                <checkbox></checkbox>
            </template>
        </doc-markdown>
        <h2>异步加载子节点</h2>
        <p>
            默认情况下
            <code>ivue-tree</code>
            无法预知某个节点是否为叶子节点，所以会为每个节点添加一个下拉按钮，
            如果节点没有下层数据，则点击后下拉按钮会消失，
            同时，你也可以提前告知某个节点是否为叶子节点，从而避免在叶子节点前渲染下拉按钮。
        </p>
        <p>
            添加
            <code>lazy</code>
            属性，设置为懒加载子节点
        </p>
        <p>
            添加
            <code>load</code>
            属性，设置加载子树数据的方法
        </p>
        <doc-markdown :code="code.lazy">
            <template #demo>
                <lazy></lazy>
            </template>
        </doc-markdown>
        <h2>默认展开和默认选中的节点</h2>
        <p>
            分别通过
            <code>default-expanded-keys</code>
            和
            <code>default-checked-keys</code>
            设置默认展开和默认选中的节点。
            需要注意的是，此时必须设置
            <code>node-key</code>
            ， 其值为节点数据中的一个字段名，该字段在整棵树中是唯一的
        </p>
        <doc-markdown :code="code.expandedAndChecked">
            <template #demo>
                <expanded-and-checked></expanded-and-checked>
            </template>
        </doc-markdown>
        <h2>树节点的选择</h2>
        <p>
            展示所有主动调用的方法，
            如果需要通过
            <code>key</code> 来获取或设置，则必须设置
            <code>node-key</code>
        </p>
        <doc-markdown :code="code.function">
            <template #demo>
              <function></function>
            </template>
        </doc-markdown>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import Code from '@/code/tree';

import Default from '@/components/tree/default.vue';
import Checkbox from '@/components/tree/checkbox.vue';
import Lazy from '@/components/tree/lazy.vue';
import ExpandedAndChecked from '@/components/tree/expanded-and-checked.vue';
import Function from '@/components/tree/function.vue';

const code = ref(Code);
</script>

<style lang="scss" scoped></style>
