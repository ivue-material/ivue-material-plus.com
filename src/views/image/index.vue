<template>
    <div class="images">
        <h1>Image 图片</h1>
        <p>
            图片容器，在保留所有原生
            <code>img</code> 的特性下，支持懒加载，自定义占位、加载失败等
        </p>
        <h2>基础用法</h2>
        <p>
            可通过
            <code>fit</code>
            确定图片如何适应到容器框，同原生
            <a
                class="link"
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit"
                target="_black"
            >object-fit</a>
        </p>
        <doc-markdown :code="code.default">
            <template #demo>
                <default></default>
            </template>
        </doc-markdown>
        <h2>占位内容</h2>
        <p>
            可通过
            <code>slot = loading</code>或
            <code>loading-text</code>属性
            加载中占位内容，
            <code>slot = error</code> 或
            <code>error-text</code>
            加载失败占位内容
        </p>
        <doc-markdown :code="code.slots">
            <template #demo>
                <slots></slots>
            </template>
        </doc-markdown>
        <h2>懒加载</h2>
        <p>
            设置属性
            <code>lazy</code> 可以开启图片懒加载功能，当图片滚动到可视范围内才会加载
        </p>
        <p>
            设置属性
            <code>scroll-container</code>
            可以指定滚动容器，如未设置，会自动寻找最近一个
            <code>overflow</code> 值为
            <code>auto</code> 或
            <code>scroll</code> 的父元素
        </p>
        <doc-markdown :code="code.lazy">
            <template #demo>
                <lazy></lazy>
            </template>
        </doc-markdown>
        <h2>图片预览</h2>
        <p>
            设置属性
            <code>preview</code>
            可以开启图片预览模式，通过属性
            <code>preview-list</code>
            来设置图片列表，
            <code>initial-index</code>
            属性设置打开预览时显示图片的索引。 预览时，可以使用
            <code>←</code> 、
            <code>→</code> 切换图片，
            <code>↑</code> 、
            <code>↓</code>
            缩放图片，
            <code>Space</code>
            显示
            <code>1:1</code> 图片，
            <code>ESC</code> 退出预览。
        </p>
        <doc-markdown :code="code.preview">
            <template #demo>
                <preview></preview>
            </template>
        </doc-markdown>
        <h2>单独使用预览</h2>
        <p>
            图片预览组件
            <code>ImagePreview</code>
            也可以单独使用
        </p>
        <doc-markdown :code="code.imagePreview">
            <template #demo>
                <image-preview></image-preview>
            </template>
        </doc-markdown>
        <h2>实例化调用</h2>
        <p>
            图片预览也支持通过
            <code>$IvueImagePreview</code>
            调用，更多参数请看下方文档
        </p>
        <doc-markdown :code="code.instantiateImagePreview">
            <template #demo>
                <instantiate-image-preview></instantiate-image-preview>
            </template>
        </doc-markdown>
        <h2>API</h2>
        <h3>Image Props</h3>
        <ivue-table :data="propsData" border>
            <ivue-table-column prop="name" label="名称" width="200"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300">
                <template #default="props">
                    <p v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="type" label="类型" width="200"></ivue-table-column>
            <ivue-table-column prop="value" label="可选值" width="200">
                <template #default="props">
                    <p v-html="props.row.value || '-'"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="default" label="默认" width="100"></ivue-table-column>
        </ivue-table>
        <h3>Image Events</h3>
        <ivue-table :data="eventsData" border>
            <ivue-table-column prop="name" label="事件名"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300"></ivue-table-column>
            <ivue-table-column prop="default" label="返回值" width="150"></ivue-table-column>
        </ivue-table>
        <h3>Image Slots</h3>
        <ivue-table :data="slotsData" border>
            <ivue-table-column prop="name" label="事件名"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300">
                <template #default="props">
                    <p v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
        </ivue-table>
        <h3>ImagePreview Props</h3>
        <ivue-table :data="propsImagePreviewData" border>
            <ivue-table-column prop="name" label="名称" width="200"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300">
                <template #default="props">
                    <p v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="type" label="类型" width="200"></ivue-table-column>
            <ivue-table-column prop="default" label="默认" width="200"></ivue-table-column>
        </ivue-table>
        <h3>ImagePreview Events</h3>
        <ivue-table :data="eventsImagePreviewData" border>
            <ivue-table-column prop="name" label="事件名"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300"></ivue-table-column>
            <ivue-table-column prop="default" label="返回值" width="150"></ivue-table-column>
        </ivue-table>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import Code from '@/code/image';

import Default from '@/components/image/default.vue';
import Slots from '@/components/image/slots.vue';
import Lazy from '@/components/image/lazy.vue';
import Preview from '@/components/image/preview.vue';
import ImagePreview from '@/components/image/image-preview.vue';
import InstantiateImagePreview from '@/components/image/instantiate-image-preview.vue';

const code = ref(Code);

// propsData
const propsData = ref([
    {
        name: 'radius',
        illustrate:
            '<code>ivue-image</code> 组件的圆角，可自定义单位，如: <code>10rem</code>',
        type: 'String | Number',
        default: '0',
    },
    {
        name: 'src',
        illustrate: '图片地址',
        type: 'String',
        default: '-',
    },
    {
        name: 'fit',
        illustrate: '图片适配容器模式',
        type: 'String',
        value: '<code>fill</code> | <code>contain</code> | <code>cover</code> | <code>none</code> | <code>scale-down</code>',
        default: '-',
    },
    {
        name: 'alt',
        illustrate: '图片描述',
        type: 'String',
        default: '-',
    },
    {
        name: 'referrer-policy',
        illustrate: '首部用来监管哪些访问来源信息',
        type: 'String',
        value: '<code>no-referrer</code> | <code>no-referrer-when-downgrade</code> | <code>origin</code> | <code>origin-when-cross-origin</code> | <code>same-origin</code> ｜ <code>strict-origin</code> | <code>strict-origin-when-cross-origin</code> | <code>unsafe-url</code>',
        default: '-',
    },
    {
        name: 'lazy',
        illustrate: '是否懒加载',
        type: 'Boolean',
        default: 'false',
    },
    {
        name: 'loading-text',
        illustrate: 'loading中的文案',
        type: 'String',
        default: '加载中',
    },
    {
        name: 'error-text',
        illustrate: '加载错误的文案',
        type: 'String',
        default: '加载失败',
    },
    {
        name: 'preview',
        illustrate: '是否图片预览',
        type: 'Boolean',
        default: 'false',
    },
    {
        name: 'preview-text',
        illustrate: '图片预览文案',
        type: 'String',
        default: '预览',
    },
    {
        name: 'preview-tip',
        illustrate: '是否显示预览提示和遮罩',
        type: 'Boolean',
        default: 'false',
    },
    {
        name: 'scroll-container',
        illustrate: '滚动加载容器',
        type: 'String | HTMLElement',
        default: '-',
    },
    {
        name: 'initial-index',
        illustrate: '打开预览的第一项',
        type: 'Number',
        default: '0',
    },
    {
        name: 'preview-list',
        illustrate: '图片预览列表',
        type: 'Array',
        default: '-',
    },
]);

// eventsData
const eventsData = ref([
    {
        name: 'on-click',
        illustrate: '图片点击',
        default: 'initialIndex',
    },
    {
        name: 'on-load',
        illustrate: '图片加载成功',
        default: '-',
    },
    {
        name: 'on-error',
        illustrate: '图片加载失败',
        default: '-',
    },
    {
        name: 'on-close',
        illustrate: '图片预览关闭',
        default: '-',
    },
    {
        name: 'on-switch',
        illustrate: '图片预览切换',
        default: '({currentIndex})',
    },
]);

// slotsData
const slotsData = ref([
    {
        name: 'loading',
        illustrate: '自定义图片加载中',
    },
    {
        name: 'error',
        illustrate: '自定义图片加载失败',
    },
    {
        name: 'preview',
        illustrate: '自定义图片预览',
    },
]);

// propsImagePreviewData
const propsImagePreviewData = ref([
    {
        name: 'model-value',
        illustrate: '是否显示，可使用 <code>v-model</code> 双向绑定',
        type: 'Boolean',
        default: 'false',
    },
    {
        name: 'transfer',
        illustrate: '是否将弹层放置于 body 内',
        type: 'Boolean',
        default: 'false',
    },
    {
        name: 'initial-index',
        illustrate: '打开预览的第一项',
        type: 'Number',
        default: '0',
    },
    {
        name: 'mask-closable',
        illustrate: '是否允许点击遮罩层关闭',
        type: 'Boolean',
        default: 'true',
    },
    {
        name: 'preview-list',
        illustrate: '图片预览列表',
        type: 'Array',
        default: '[]',
    },
    {
        name: 'infinite',
        illustrate: '是否循环切换',
        type: 'Boolean',
        default: 'true',
    },
    {
        name: 'toolbar',
        illustrate: '操作栏选项，按数组顺序排序',
        type: 'Array',
        default:
            '[\'zoomIn\', \'zoomOut\', \'original\', \'rotateLeft\', \'rotateRight\', \'download\']',
    },
    {
        name: 'body-overflow',
        illustrate: '防止body滚动',
        type: 'Boolean',
        default: 'true',
    },
]);

// eventsImagePreviewData
const eventsImagePreviewData = ref([
    {
        name: 'on-close',
        illustrate: '图片预览关闭',
        default: '-',
    },
    {
        name: 'on-switch',
        illustrate: '图片预览切换',
        default: '({currentIndex})',
    },
]);
</script>

<style lang="scss" scoped>
.images {
    .link {
        margin: 0;
        color: var(--ivue-primary-color);
    }
}
</style>
