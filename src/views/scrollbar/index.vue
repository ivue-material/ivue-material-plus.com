<template>
  <div>
    <h1>Scrollbar 滚动条</h1>
    <p>用于替换浏览器原生滚动条</p>
    <h2>基础用法</h2>
    <p>
      通过
      <code>height</code> 属性设置滚动条高度，若不设置则根据父容器高度自适应
    </p>
    <doc-markdown :code="code.default">
      <template #demo>
        <default></default>
      </template>
    </doc-markdown>
    <h2>横向滚动</h2>
    <p>当元素宽度大于滚动条宽度时，会显示横向滚动条</p>
    <doc-markdown :code="code.horizontal">
      <template #demo>
        <horizontal></horizontal>
      </template>
    </doc-markdown>
    <h2>手动滚动</h2>
    <p>
      通过使用
      <code>setScrollTop</code>
      与
      <code>setScrollLeft</code>
      方法，可以手动控制滚动条滚动
    </p>
    <doc-markdown :code="code.manual">
      <template #demo>
        <manual></manual>
      </template>
    </doc-markdown>
    <h2>API</h2>
    <h3>Props</h3>
    <ivue-table :data="propsData" border>
      <ivue-table-column
        prop="name"
        label="名称"
        width="150"
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
      <ivue-table-column
        prop="default"
        label="默认"
        width="100"
      ></ivue-table-column>
    </ivue-table>
    <h3>Events</h3>
    <ivue-table :data="eventsData" border>
      <ivue-table-column prop="name" label="事件名"></ivue-table-column>
      <ivue-table-column
        prop="illustrate"
        label="说明"
        min-width="300"
      ></ivue-table-column>
      <ivue-table-column
        prop="default"
        label="返回值"
        width="200"
      ></ivue-table-column>
    </ivue-table>
    <h3>Slots</h3>
    <ivue-table :data="slotsData" border>
      <ivue-table-column
        prop="name"
        label="事件名"
        width="100"
      ></ivue-table-column>
      <ivue-table-column prop="illustrate" label="说明" min-width="300">
        <template #default="props">
          <p v-html="props.row.illustrate"></p>
        </template>
      </ivue-table-column>
    </ivue-table>
    <h3>Methods</h3>
    <ivue-table :data="methodsData" border>
      <ivue-table-column
        prop="name"
        label="名称"
        width="150"
      ></ivue-table-column>
      <ivue-table-column
        prop="illustrate"
        label="说明"
        min-width="300"
      ></ivue-table-column>
      <ivue-table-column
        prop="value"
        label="参数"
        width="150"
      ></ivue-table-column>
    </ivue-table>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import Code from '@/code/scrollbar';

import Default from '@/components/scrollbar/default.vue';
import Horizontal from '@/components/scrollbar/horizontal.vue';
import Manual from '@/components/scrollbar/manual.vue';

const code = ref(Code);

// propsData
const propsData = ref([
  {
    name: 'height',
    illustrate: '滚动条高度',
    type: 'String | Number',
    default: '-',
  },
  {
    name: 'max-height',
    illustrate: '滚动条最大高度',
    type: 'String | Number',
    default: '-',
  },
  {
    name: 'native',
    illustrate: '是否使用原生滚动条样式',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'tag',
    illustrate: '视图的元素标签',
    type: 'String',
    default: 'div',
  },
  {
    name: 'always',
    illustrate: '滚动条总是显示',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'noresize',
    illustrate:
      '不响应容器尺寸变化，如果容器尺寸不会发生变化，最好设置它可以优化性能',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'min-bar-size',
    illustrate: '滚动条最小尺寸',
    type: 'Number',
    default: '20',
  },
  {
    name: 'wrapper-class',
    illustrate: '包裹容器的自定义类名',
    type: 'String | Number',
    default: '-',
  },
  {
    name: 'wrapper-style',
    illustrate: '包裹容器的自定义样式',
    type: 'String | Object',
    default: '-',
  },
  {
    name: 'content-class',
    illustrate: '视图的自定义类名',
    type: 'String',
    default: '-',
  },
  {
    name: 'content-style',
    illustrate: '视图的自定义样式',
    type: 'String | Object',
    default: '-',
  },
]);

// eventsData
const eventsData = ref([
  {
    name: 'on-scroll',
    illustrate: '当触发滚动事件时，返回滚动的距离',
    default: '{scrollTop,scrollLeft}',
  },
]);

// slotsData
const slotsData = ref([
  {
    name: 'default',
    illustrate: '默认插槽',
  },
]);

// methodsData
const methodsData = ref([
  {
    name: 'handleScroll',
    illustrate: '触发滚动事件',
    value: '-',
  },
  {
    name: 'scrollTo',
    illustrate: '滚动到一组特定坐标',
    value: '(x,y) 或 ({top,left,behavior})',
  },
  {
    name: 'setScrollTop',
    illustrate: '设置滚动条到顶部的距离',
    value: 'scrollTop',
  },
  {
    name: 'setScrollLeft',
    illustrate: '设置滚动条到左边的距离',
    value: 'scrollLeft',
  },
  {
    name: 'update',
    illustrate: '手动更新滚动条状态',
    value: '-',
  },
]);
</script>

<style lang="scss" scoped></style>
