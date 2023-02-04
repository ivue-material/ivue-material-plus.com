<template>
  <div>
    <h1>Ellipsis 文本自动省略号</h1>
    <p>
      文本过长自动处理省略号，支持按照文本长度、最大行数、限制高度三种方式截取
    </p>
    <h2>按照字符数省略</h2>
    <p>
      设置属性
      <code>length</code>
      可以按照指定长度省略
    </p>
    <p>
      设置属性
      <code>tooltip</code>
      可以以
      <code>Tooltip</code>
      的形式显示完整的内容
    </p>
    <doc-markdown :code="code.default">
      <template #demo>
        <default></default>
      </template>
    </doc-markdown>
    <h2>按照高度省略</h2>
    <p>
      设置属性
      <code>height</code>
      可以按照指定高度省略
    </p>
    <p>
      <code>auto-resize</code>
      默认开启自动根据外层宽度动态改变内容(设置 height 时生效)
    </p>
    <doc-markdown :code="code.height">
      <template #demo>
        <height></height>
      </template>
    </doc-markdown>
    <h2>按照行数省略</h2>
    <p>
      设置属性
      <code>lines</code>
      可以指定最大行数，超出这个行数的文本会自动截取
    </p>
    <p>
      另一种按照行数省略的方法是使用自定义指令
      <code>v-line-clamp</code>
      ，它是 CSS 级别的处理，具有更高的性能，但只适用于
      <code>Webkit</code>
      内核浏览器
    </p>
    <doc-markdown :code="code.lines">
      <template #demo>
        <lines></lines>
      </template>
    </doc-markdown>
    <h2>插槽</h2>
    <p>
      <code>slot = suffix</code>
      自定义省略号之后的内容
    </p>
    <p>
      <code>slot = more</code>
      自定义省略号
    </p>
    <doc-markdown :code="code.slots">
      <template #demo>
        <slots></slots>
      </template>
    </doc-markdown>
    <h2>API</h2>
    <h3>Props</h3>
    <ivue-table :data="propsData" border>
      <ivue-table-column
        prop="name"
        label="名称"
        width="200"
      ></ivue-table-column>
      <ivue-table-column prop="illustrate" label="说明" min-width="300">
        <template #default="props">
          <p v-html="props.row.illustrate"></p>
        </template>
      </ivue-table-column>
      <ivue-table-column
        prop="type"
        label="类型"
        width="150"
      ></ivue-table-column>
      <ivue-table-column prop="value" label="可选值" width="200">
        <template #default="props">
          <p v-html="props.row.value || '-'"></p>
        </template>
      </ivue-table-column>
      <ivue-table-column
        prop="default"
        label="默认"
        width="100"
      ></ivue-table-column>
    </ivue-table>
    <h3>Events</h3>
    <ivue-table :data="eventsData" border>
      <ivue-table-column prop="name" label="事件名"></ivue-table-column>
      <ivue-table-column prop="illustrate" label="说明" min-width="300">
        <template #default="props">
          <p v-html="props.row.illustrate"></p>
        </template>
      </ivue-table-column>
      <ivue-table-column
        prop="default"
        label="返回值"
        width="100"
      ></ivue-table-column>
    </ivue-table>
    <h3>Slots</h3>
    <ivue-table :data="slotsData" border>
      <ivue-table-column prop="name" label="事件名"></ivue-table-column>
      <ivue-table-column prop="illustrate" label="说明" min-width="300">
        <template #default="props">
          <p v-html="props.row.illustrate"></p>
        </template>
      </ivue-table-column>
    </ivue-table>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import Code from '@/code/ellipsis';

import Default from '@/components/ellipsis/default.vue';
import Height from '@/components/ellipsis/height.vue';
import Lines from '@/components/ellipsis/lines.vue';
import Slots from '@/components/ellipsis/slots.vue';

const code = ref(Code);

// propsData
const propsData = ref([
  {
    name: 'text',
    illustrate: '文本',
    type: 'String',
    default: '-',
  },
  {
    name: 'length',
    illustrate: '按照指定长度截取',
    type: 'Number',
    default: '-',
  },
  {
    name: 'height',
    illustrate: '限制的高度',
    type: 'Number',
    default: '-',
  },
  {
    name: 'disabled',
    illustrate: '是否禁用',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'lines',
    illustrate:
      '限制行数，将换算为 <code>height</code>。如果设置了 <code>height</code>，则直接使用 <code>height</code> 计算',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'full-width-recognition',
    illustrate:
      '是否将全角字符的长度视为2来计算字符串长度，适用于 <code>length</code>',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'auto-resize',
    illustrate:
      '是否自动根据外层宽度动态改变内容 (设置 <code>height</code> 时生效)',
    type: 'Boolean',
    default: 'true',
  },
  {
    name: 'tooltip',
    illustrate: '是否开启 tooltip',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'placement',
    illustrate: '弹窗的展开方向',
    type: 'String',
    value:
      '<code>top</code> | <code>top-start</code> | <code>top-end</code> | <code>bottom</code> | <code>bottom-start</code> | <code>bottom-end</code> | <code>left</code> | <code>left-start</code> | <code>left-end</code> | <code>right</code> | <code>right-start</code> | <code>right-end</code>',
    default: 'bottom',
  },
  {
    name: 'theme',
    illustrate: '<code>tooltip</code> 主题颜色',
    type: 'String',
    value: '<code>dark</code> | <code>light</code>',
    default: 'dark',
  },
  {
    name: 'transfer',
    illustrate: '<code>tooltip</code> 的 <code>transfer</code> 属性',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'max-width',
    illustrate: '<code>tooltip</code> 的 <code>max-width</code> 属性',
    type: 'String | Number',
    default: '-',
  },
]);

// eventsData
const eventsData = ref([
  {
    name: 'on-hide',
    illustrate: '文本省略的时候触发',
    default: '-',
  },
  {
    name: 'on-show',
    illustrate: '文本全部展示的时候触发',
    default: '-',
  },
]);

// slotsData
const slotsData = ref([
  {
    name: 'suffix',
    illustrate: '自定义省略号之后的内容',
  },
  {
    name: 'more',
    illustrate: '自定义省略号',
  },
]);
</script>

<style lang="scss" scoped></style>
