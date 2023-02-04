<template>
  <div>
    <h1>Collapse 折叠面板</h1>
    <h2>基础用法</h2>
    <p>同时展开多个面板，设置默认展开第几个</p>
    <doc-markdown :code="code.default">
      <template #demo>
        <default></default>
      </template>
    </doc-markdown>
    <h2>手风琴</h2>
    <p>
      通过设置属性
      <code>accordion</code>开启手风琴模式，每次只能打开一个面板
    </p>
    <doc-markdown :code="code.accordion">
      <template #demo>
        <accordion></accordion>
      </template>
    </doc-markdown>
    <h2>面板嵌套</h2>
    <p>折叠面板可以进行嵌套</p>
    <doc-markdown :code="code.nesting">
      <template #demo>
        <nesting></nesting>
      </template>
    </doc-markdown>
    <h2>简洁模式</h2>
    <p>
      设置属性
      <code>simple</code> 可以显示为不带边框和背景色的简洁模式
    </p>
    <doc-markdown :code="code.simple">
      <template #demo>
        <simple></simple>
      </template>
    </doc-markdown>
    <h2>API</h2>
    <h3>Collapse Props</h3>
    <ivue-table :data="propsData" border>
      <ivue-table-column prop="name" label="名称"></ivue-table-column>
      <ivue-table-column prop="illustrate" label="说明" min-width="300">
        <template #default="props">
          <p v-html="props.row.illustrate"></p>
        </template>
      </ivue-table-column>
      <ivue-table-column prop="type" label="类型"></ivue-table-column>
      <ivue-table-column prop="default" label="默认"></ivue-table-column>
    </ivue-table>
    <h3>Collapse Events</h3>
    <ivue-table :data="eventsData" border>
      <ivue-table-column prop="name" label="名称"></ivue-table-column>
      <ivue-table-column prop="illustrate" label="说明" min-width="300">
        <template #default="props">
          <p v-html="props.row.illustrate"></p>
        </template>
      </ivue-table-column>
      <ivue-table-column prop="value" label="返回值"></ivue-table-column>
    </ivue-table>
    <h3>Collapse Panel Props</h3>
    <ivue-table :data="panelPropsData" border>
      <ivue-table-column prop="name" label="名称"></ivue-table-column>
      <ivue-table-column prop="illustrate" label="说明" min-width="300">
        <template #default="props">
          <p v-html="props.row.illustrate"></p>
        </template>
      </ivue-table-column>
      <ivue-table-column prop="type" label="类型"></ivue-table-column>
      <ivue-table-column prop="default" label="默认"></ivue-table-column>
    </ivue-table>
    <h3>Collapse Panel Slots</h3>
    <ivue-table :data="panelSlotsData" border>
      <ivue-table-column prop="name" label="名称"></ivue-table-column>
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

import Code from '@/code/collapse';

import Default from '@/components/collapse/default.vue';
import Accordion from '@/components/collapse/accordion.vue';
import Nesting from '@/components/collapse/nesting.vue';
import Simple from '@/components/collapse/simple.vue';

const code = ref(Code);

// propsData
const propsData = ref([
  {
    name: 'model-value',
    illustrate:
      '当前激活的面板的 <code>name</code>，可以使用 <code>v-model</code> 双向绑定',
    type: 'Array | String',
    default: '-',
  },
  {
    name: 'simple',
    illustrate: '是否开启手风琴模式，开启后每次至多展开一个面板',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'accordion',
    illustrate: '是否开启简洁模式',
    type: 'Boolean',
    default: 'false',
  },
]);

// eventsData
const eventsData = ref([
  {
    name: 'on-change',
    illustrate:
      '切换面板时触发，返回当前已展开的面板的 <code>name</code>，格式为数组',
    value: '[]',
  },
]);

// panelPropsData
const panelPropsData = ref([
  {
    name: 'title',
    illustrate: '标题',
    type: 'String',
    default: '-',
  },
  {
    name: 'name',
    illustrate:
      '当前面板的 <code>name</code>，与 <code>Collapse</code>的 <code>value</code> 对应，不填为索引值',
    type: 'String',
    default: '-',
  },
  {
    name: 'hide-arrow',
    illustrate: '隐藏箭头',
    type: 'Boolean',
    default: 'false',
  },
]);

// panelSlotsData
const panelSlotsData = ref([
  {
    name: 'title',
    illustrate: '标题',
  },
  {
    name: 'header-icon',
    illustrate: '自定义箭头',
  },
  {
    name: 'content',
    illustrate: '描述内容',
  },
]);
</script>

<style lang="scss" scoped></style>
