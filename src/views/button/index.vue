<template>
    <div>
        <h1>Button 按钮</h1>
        <p>按钮传达用户触摸它们时将发生的操作。它们可以是平坦的，凸起的，任何色彩辅助类都可以用来改变背景或文字的颜色。</p>
        <h2>基本用法</h2>
        <p>基本用法，凸陷的按钮具有单击时增加的框阴影，这是默认样式。</p>
        <doc-markdown :code="code.default" jsfiddle>
            <template #demo>
                <default></default>
            </template>
        </doc-markdown>
        <h2>平面</h2>
        <p>
            通过设置属性
            <code>flat</code>
            使按钮没有框阴影，也没有背景。仅在悬停时显示按钮的背景。
        </p>
        <doc-markdown :code="code.flat" jsfiddle>
            <template #demo>
                <flat></flat>
            </template>
        </doc-markdown>
        <h2>凹陷</h2>
        <p>
            通过设置属性
            <code>depressed</code> 使按钮仍然保持其背景颜色，但没有框阴影。
        </p>
        <doc-markdown :code="code.depressed" jsfiddle>
            <template #demo>
                <depressed></depressed>
            </template>
        </doc-markdown>
        <h2>轮廓</h2>
        <p>
            通过设置属性
            <code>outline</code> 使按钮继承其当前边框颜色。
        </p>
        <doc-markdown :code="code.outline" jsfiddle>
            <template #demo>
                <outline></outline>
            </template>
        </doc-markdown>
        <h2>轮廓</h2>
        <p>
            通过设置属性
            <code>outline</code> 使按钮继承其当前边框颜色。
        </p>
        <doc-markdown :code="code.outline" jsfiddle>
            <template #demo>
                <outline></outline>
            </template>
        </doc-markdown>
        <h2>链接</h2>
        <p>
            通过设置属性
            <code>href</code> 使按钮变成一个
            <code>a</code> 连接跳转到
            <code>href</code> 指定的地址。
        </p>
        <doc-markdown :code="code.href" jsfiddle>
            <template #demo>
                <href></href>
            </template>
        </doc-markdown>
        <h2>图标</h2>
        <p>
            通过设置属性
            <code>icon</code> 使按钮显示为圆形图标。
        </p>
        <doc-markdown :code="code.icon" jsfiddle>
            <template #demo>
                <icon></icon>
            </template>
        </doc-markdown>
        <h2>自定义颜色</h2>
        <p>
            通过设置属性
            <code>color</code> 设置按钮颜色
        </p>
        <doc-markdown :code="code.color" jsfiddle>
            <template #demo>
                <color></color>
            </template>
        </doc-markdown>
        <h2>API</h2>
        <h3>props</h3>
        <ivue-table :data="propsData" border>
            <ivue-table-column prop="name" label="名称"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明"></ivue-table-column>
            <ivue-table-column prop="type" label="类型"></ivue-table-column>
            <ivue-table-column prop="default" label="默认"></ivue-table-column>
        </ivue-table>
    </div>
</template>

<script>
import Code from '@/code/button';
import Default from '@/components/button/default.vue';
import Flat from '@/components/button/flat.vue';
import Depressed from '@/components/button/depressed.vue';
import Outline from '@/components/button/outline.vue';
import Href from '@/components/button/href.vue';
import Icon from '@/components/button/icon.vue';
import Color from '@/components/button/color.vue';

export default {
    data() {
        return {
            code: Code,
            propsData: [
                {
                    name: 'color',
                    illustrate: '定义按钮颜色',
                    type: 'String',
                    default: '-',
                },
                {
                    name: 'textColor',
                    illustrate: '文字颜色',
                    type: 'String',
                    default: '#ffffff',
                },
            ],
        };
    },
    components: {
        Default,
        Flat,
        Depressed,
        Outline,
        Href,
        Icon,
        Color,
    },
};
</script>

<style lang="scss" scoped>
</style>
