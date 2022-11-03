<template>
    <div>
        <h1>Card 卡片</h1>
        <p>基础容器，用来显示文字、列表、图文等内容，也可以配合其它组件一起使用</p>
        <h2>基本用法</h2>
        <p>自定义标题、额外操作和主体内容，可以完全自由控制各个部分，也可以结合其它组件一起使用，较为灵活</p>
        <p>
            可以通过设置属性
            <code>title</code> 快速设置标题栏
        </p>
        <doc-markdown :code="code.default">
            <template #demo>
                <default></default>
            </template>
        </doc-markdown>
        <h2>无边框</h2>
        <p>
            通过设置属性
            <code>border</code>为
            <code>false</code> ，可以不添加边框，建议在灰色背景下使用
        </p>
        <doc-markdown :code="code.notBorder">
            <template #demo>
                <not-border></not-border>
            </template>
        </doc-markdown>
        <h2>禁用悬停阴影</h2>
        <p>
            通过设置属性
            <code>dis-hover</code>来禁用鼠标悬停显示阴影的效果
        </p>
        <doc-markdown :code="code.umbra">
            <template #demo>
                <umbra></umbra>
            </template>
        </doc-markdown>
        <h2>卡片阴影</h2>
        <p>
            通过设置
            <code>shadow</code>属性来显示卡片阴影
        </p>
        <doc-markdown :code="code.cardumbra">
            <template #demo>
                <cardumbra></cardumbra>
            </template>
        </doc-markdown>
        <h2>简洁卡片</h2>
        <p>只包含内容区域，没有标题</p>
        <doc-markdown :code="code.simple">
            <template #demo>
                <simple></simple>
            </template>
        </doc-markdown>
        <!-- <h2>API</h2>
        <h3>Card props</h3> -->
    </div>
</template>

<script>
import Code from '@/code/card';
import Default from '@/components/card/default';
import NotBorder from '@/components/card/not-border';
import Umbra from '@/components/card/umbra';
import Simple from '@/components/card/simple';
import Cardumbra from '@/components/card/cardumbra';

export default {
    data() {
        return {
            code: Code,
        };
    },
    components: {
        Default,
        NotBorder,
        Umbra,
        Simple,
        Cardumbra,
    },
};
</script>

<style lang="scss" scoped>
</style>
