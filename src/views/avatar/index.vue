<template>
    <div>
        <h1>Avatar 头像</h1>
        <p>
            该组件通常用于显示圆形用户个人资料图片，组件允许你动态调整大小，添加图片，图标和文本。
            <code>square</code> 属性可以让头像呈现有圆角的正方形
        </p>
        <h2>基本用法</h2>
        <p>头像有三种尺寸，两种形状可选</p>
        <p>size 可以设置为数值</p>
        <doc-markdown :code="code.default" jsfiddle>
            <template #demo>
                <default></default>
            </template>
        </doc-markdown>
        <h2>类型</h2>
        <p>支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。</p>
        <doc-markdown :code="code.type" jsfiddle>
            <template #demo>
                <type></type>
            </template>
        </doc-markdown>
        <h2>带徽标的头像</h2>
        <p>通常用于消息提示</p>
        <doc-markdown :code="code.badge" jsfiddle>
            <template #demo>
                <badge></badge>
            </template>
        </doc-markdown>
        <h2>自动调整字符大小</h2>
        <p>对于字符型的头像，当字符串较长时，字体大小可以根据头像宽度自动调整。</p>
        <doc-markdown :code="code.size" jsfiddle>
            <template #demo>
                <size></size>
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
            <ivue-table-column prop="value" label="可选值"></ivue-table-column>
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
import Code from '@/code/avatar';
import Default from '@/components/avatar/default.vue';
import Type from '@/components/avatar/type.vue';
import Badge from '@/components/avatar/badge.vue';
import Size from '@/components/avatar/size.vue';

export default {
    data() {
        return {
            code: Code,
            propsData: [
                {
                    name: 'shape',
                    illustrate: '指定头像的形状',
                    type: 'String',
                    value: 'circle | square',
                    default: 'circle',
                },
                {
                    name: 'src',
                    illustrate: '图片类头像的资源地址',
                    type: 'String',
                    value: '-',
                    default: '-',
                },
                {
                    name: 'icon',
                    illustrate:
                        '设置头像的图标类型，参考 <code>ivue-icon</code> 组件',
                    type: 'String',
                    value: '-',
                    default: '-',
                },
                {
                    name: 'size',
                    illustrate:
                        '设置组件的大小，该属性同时接受带 px、 rem、 em等单位的字符串，如：12px、12rem、12em',
                    type: 'String',
                    value: '-',
                    default: '-',
                },
            ],
            eventsData: [
                {
                    name: 'on-error',
                    illustrate: '在设置 src 且图片加载不成功时触发',
                    default: 'event',
                },
            ],
        };
    },
    components: {
        Default,
        Type,
        Badge,
        Size,
    },
};
</script>

<style lang="scss" scoped>
</style>
