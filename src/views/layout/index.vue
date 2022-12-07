<template>
    <div>
        <h1>Layout 布局</h1>
        <p>响应式布局适应任何可能的屏幕尺寸。此UI指南包括一个灵活的网格，可确保布局之间的一致性，有关内容如何在不同屏幕上回流的断点详细信息，以及应用程序如何从小屏幕扩展到超大屏幕的说明。</p>
        <p>默认情况下，您可以创建无装饰布局或使网格系统计算每个屏幕大小的最佳边距大小。</p>
        <p>布局系统使用行和列的概念。您可以创建大小的列。您将能够为每个列设置大小，即使在嵌套列上也是如此。</p>
        <ivue-table :data="propsData" border>
            <ivue-table-column prop="name" label="名称" width="200"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明">
                <template #default="props">
                    <p v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="size" label="size" width="200"></ivue-table-column>
        </ivue-table>
        <h2>首先引入CSS</h2>
        <pre-code>{{ code.import }}</pre-code>
        <h2>列布局</h2>
        <p>
            要开始使用布局，您需要做的是创建一个
            <code>ivue-layout</code> 父元素，它将包含一个列表
            <code>ivue-layout-item</code> 。您可以设置所需的列数：
        </p>
        <doc-markdown :code="code.default">
            <template #demo>
                <default></default>
            </template>
        </doc-markdown>
        <p>
            默认情况下，布局之间没有空格，这对于常规布局有点不好，例如卡片列表,您可以使用
            <code>ivue-gutter</code> 为自动计算元素之间的空间，这些空间基于屏幕宽度：
        </p>
        <p>查看这段代码并调整浏览器大小以查看更改(观察布局之间的间隔大小)：</p>
        <ivue-table :data="rowData" border>
            <ivue-table-column prop="name" label="屏幕尺寸"></ivue-table-column>
            <ivue-table-column prop="interval" label="间隔"></ivue-table-column>
        </ivue-table>
        <doc-markdown :code="code.gutter">
            <template #demo>
                <gutter></gutter>
            </template>
        </doc-markdown>
        <p>同时列布局也适用于嵌套布局：</p>
        <doc-markdown :code="code.column">
            <template #demo>
                <column></column>
            </template>
        </doc-markdown>
        <h2>对齐</h2>
        <p>
            使用
            <code>ivue-alignment-[horizontal]-[vertical]</code> 类，例如
            <code>ivue-alignment-top-center</code>。对齐适用于父元素，并将影响所有子项的位置.
        </p>
        <doc-markdown :code="code.alignment">
            <template #demo>
                <alignment></alignment>
            </template>
        </doc-markdown>
        <h2>尺寸</h2>
        <p>
            布局系统根据项目数量计算子项大小。但是如果你想为每个项目设置尺寸。只需在项目中设置一个
            <code>ivue-size-[amount]</code> ，例如
            <code>ivue-size-30</code> 。总是以
            <code>％</code>表示的大小可以是
            <code>5</code>的倍数，也可以接受值
            <code>33</code>和
            <code>66</code>。
        </p>
        <doc-markdown :code="code.size">
            <template #demo>
                <size></size>
            </template>
        </doc-markdown>
        <h2>响应</h2>
        <p>
            使用流体布局，你可以根据断点名称更改它们，加入类
            <code>ivue-[breakpoint]-size-[amount]</code> 布局引擎将发挥神奇作用。尝试调整浏览器的大小：
        </p>
        <doc-markdown :code="code.response">
            <template #demo>
                <response></response>
            </template>
        </doc-markdown>
        <h2>隐藏元素</h2>
        <p>
            在较小的屏幕上隐藏元素的需求是相当普遍的。你可以使用这些
            <code>ivue-[breakpoint]-hide</code> 类来做到这一点：
        </p>
        <doc-markdown :code="code.hide">
            <template #demo>
                <hide></hide>
            </template>
        </doc-markdown>
        <h2>API</h2>
        <h3>ivue-layout</h3>
        <h4>Class</h4>
        <p>以下类可以应用于任何HTML元素：</p>
        <ivue-table :data="layoutData" border>
            <ivue-table-column prop="name" label="名称" width="200"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300">
                <template #default="props">
                    <p v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="default" label="可选值">
                <template #default="props">
                    <p v-html="props.row.default"></p>
                </template>
            </ivue-table-column>
        </ivue-table>
        <h3>ivue-layout-item</h3>
        <h4>Class</h4>
        <ivue-table :data="itemData" border>
            <ivue-table-column prop="name" label="名称" width="250"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300">
                <template #default="props">
                    <p v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="default" label="可选值">
                <template #default="props">
                    <p v-html="props.row.default"></p>
                </template>
            </ivue-table-column>
        </ivue-table>
        <h3>ivue-hide</h3>
        <h4>Class</h4>
        <ivue-table :data="hideData" border>
            <ivue-table-column prop="name" label="名称" width="300"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300">
                <template #default="props">
                    <p v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="default" label="可选值">
                <template #default="props">
                    <p v-html="props.row.default"></p>
                </template>
            </ivue-table-column>
        </ivue-table>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import Code from '@/code/layout';

import Default from '@/components/layout/default';
import Gutter from '@/components/layout/gutter';
import Column from '@/components/layout/column';
import Alignment from '@/components/layout/alignment';
import Size from '@/components/layout/size';
import Response from '@/components/layout/response';
import Hide from '@/components/layout/hide';

const code = ref(Code);

// propsData
const propsData = ref([
    {
        name: 'xsmall',
        illustrate:
            '适用于宽度最大为600px的屏幕。适用于肖像中的小型，中型和大型手机',
        size: '<600px',
    },
    {
        name: 'small',
        illustrate: '适用于宽度介于600px和960px之间的屏幕	',
        size: '960px',
    },
    {
        name: 'medium',
        illustrate: '适用于宽度介于960px和1280px之间的屏幕	',
        size: '1280px',
    },
    {
        name: 'large',
        illustrate: '适用于宽度介于1280像素到1920像素之间的屏幕	',
        size: '1920px',
    },
    {
        name: 'xlarge',
        illustrate: '适用于宽度超过1920px的屏幕',
        size: '>1920px',
    },
]);

// rowData
const rowData = ref([
    {
        name: 'xsmall',
        interval: '8px',
    },
    {
        name: 'small',
        interval: '16px',
    },
    {
        name: 'medium',
        interval: '24px',
    },
    {
        name: 'large',
        interval: '48px',
    },
]);

// layoutData
const layoutData = ref([
    {
        name: 'ivue-gutter',
        illustrate: '在布局项之间启用自动装订线空间',
        default: '-',
    },
    {
        name: 'ivue-layout-nowrap',
        illustrate:
            '默认情况下，布局项将始终包装在父布局下。如果要禁用此行为，请使用此类，但响应性将不起作用',
        default: '-',
    },
    {
        name: 'ivue-alignment-[x]-[y]',
        illustrate:
            '根据每个坐标的值设置所有子项的对齐方式。只有当x和y都存在时，对齐才有效, 例如:<code>ivue-alignment-top-center</code>',
        default:
            '<code>top</code> | <code>center</code> | <code>left</code> | <code>space-around</code> | <code>space-between</code>',
    },
]);

// itemData
const itemData = ref([
    {
        name: 'ivue-size-[amount]',
        illustrate:
            '设置特定item的大小。数量可以是五的倍数， 例如<code>ivue-size-25</code>。',
        default:
            '可以接受<code>33</code>,<code>66</code>和<code>100</code>以便于原型设计',
    },
    {
        name: 'ivue-[breakpoint]-size-[amount]',
        illustrate: '将大小设置为特定 breakpoint 上的特定项。',
        default: `<code>breakpoint</code> : <code>xsmall</code> | <code>small</code></code> | <code>medium</code> | <code>large</code> | <code>xlarge</code>
                        </br><code>amount</code> : 可以接受<code>33</code>,<code>66</code>和<code>100</code>以便于原型设计`,
    },
]);

// hideData
const hideData = ref([
    {
        name: 'ivue-[breakpoint]-hide',
        illustrate: '隐藏特定断点上的特定元素',
        default:
            '<code>xsmall</code> | <code>small</code> | <code>medium</code> | <code>large</code> | <code>xlarge</code>',
    },
]);
</script>

<style lang="scss" scoped>
</style>
