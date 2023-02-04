<template>
  <div>
    <h1>Radio 单选框</h1>
    <p>主要用于一组可选项单项选择，或者单独用于切换到选中状态</p>
    <h2>基本用法</h2>
    <p>
      使用
      <code>v-model</code> 可以双向绑定数据
    </p>
    <doc-markdown :code="code.default">
      <template #demo>
        <default></default>
      </template>
    </doc-markdown>
    <h2>组合使用</h2>
    <p>
      使用
      <code>radio-group</code> 实现一组互斥的选项组
    </p>
    <p>
      在组合使用时，
      <code>Radio</code> 使用 <code>label</code> 来自动判断
    </p>
    <p>
      每个
      <code>Radio</code> 的内容可以自定义，如不填写则默认使用
      <code>label</code> 的值
    </p>
    <doc-markdown :code="code.group">
      <template #demo>
        <group></group>
      </template>
    </doc-markdown>
    <h2>不可用</h2>
    <p>
      通过设置
      <code>disabled</code> 属性来禁用单选框
    </p>
    <doc-markdown :code="code.disabled">
      <template #demo>
        <disabled></disabled>
      </template>
    </doc-markdown>
    <h2>垂直</h2>
    <p>
      设置属性
      <code>vertical</code> 可以垂直显示，按钮样式下无效
    </p>
    <doc-markdown :code="code.vertical">
      <template #demo>
        <vertical></vertical>
      </template>
    </doc-markdown>
    <h2>按钮样式</h2>
    <p>
      设置
      <code>type</code> 为 <code>button</code> 来应用按钮的样式， 设置属性
      <code>button-style</code> 为
      <code>solid</code> 可显示为实色填底的单选按钮样式，
      <code>radio-group</code>
      时生效
    </p>
    <doc-markdown :code="code.type">
      <template #demo>
        <type></type>
      </template>
    </doc-markdown>
    <h2>显示边框</h2>
    <p>
      设置属性
      <code>border</code> 可以显示边框
    </p>
    <doc-markdown :code="code.border">
      <template #demo>
        <border></border>
      </template>
    </doc-markdown>
    <h2>尺寸</h2>
    <p>
      通过设置属性
      <code>size</code> 为 <code>large</code> 或
      <code>small</code> 将按钮样式设置为大和小尺寸，不设置为默认(中)尺寸， 当
      <code>radio-group</code>设置 <code>type</code>为 <code>button</code>时生效
    </p>
    <doc-markdown :code="code.size">
      <template #demo>
        <size></size>
      </template>
    </doc-markdown>
    <h2>API</h2>
    <h3>Radio Props</h3>
    <ivue-table :data="radioPropsData" border>
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
        width="200"
      ></ivue-table-column>
      <ivue-table-column
        prop="default"
        label="默认"
        width="100"
      ></ivue-table-column>
    </ivue-table>
    <h3>Radio Events</h3>
    <ivue-table :data="radioEventsData" border>
      <ivue-table-column prop="name" label="事件名"></ivue-table-column>
      <ivue-table-column
        prop="illustrate"
        label="说明"
        min-width="300"
      ></ivue-table-column>
      <ivue-table-column
        prop="default"
        label="返回值"
        width="150"
      ></ivue-table-column>
    </ivue-table>
    <h3>RadioGroup Props</h3>
    <ivue-table :data="radioGroupPropsData" border>
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
        width="200"
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
    <h3>RadioGroup Events</h3>
    <ivue-table :data="radioGroupEventsData" border>
      <ivue-table-column prop="name" label="事件名"></ivue-table-column>
      <ivue-table-column
        prop="illustrate"
        label="说明"
        min-width="300"
      ></ivue-table-column>
      <ivue-table-column
        prop="default"
        label="返回值"
        width="150"
      ></ivue-table-column>
    </ivue-table>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import Code from '@/code/radio';

import Default from '@/components/radio/default.vue';
import Group from '@/components/radio/group.vue';
import Disabled from '@/components/radio/disabled.vue';
import Vertical from '@/components/radio/vertical.vue';
import Type from '@/components/radio/type.vue';
import Border from '@/components/radio/border.vue';
import Size from '@/components/radio/size.vue';

const code = ref(Code);

// radioPropsData
const radioPropsData = ref([
  {
    name: 'model-value',
    illustrate:
      '只在单独使用时有效。可以使用 <code>v-model</code> 双向绑定数据',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'label',
    illustrate:
      '指定当前选项的 <code>value</code> 值，在组合中使用时会自动判断当前选择的项目',
    type: 'String | Number',
    default: '-',
  },
  {
    name: 'disabled',
    illustrate: '是否禁用当前项',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'color',
    illustrate: '背景颜色',
    type: 'String',
    default: 'primary',
  },
  {
    name: 'border',
    illustrate: '是否显示边框',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'true-value',
    illustrate: '选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用',
    type: 'String | Number | Boolean',
    default: 'true',
  },
  {
    name: 'false-value',
    illustrate: '没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用',
    type: 'String | Number | Boolean',
    default: 'false',
  },
]);

// radioEventsData
const radioEventsData = ref([
  {
    name: 'on-change',
    illustrate: '在选项状态发生改变时触发，返回当前状态，当使用组合时失效',
    default: 'model-value',
  },
]);

// radioGroupPropsData
const radioGroupPropsData = ref([
  {
    name: 'model-value',
    illustrate:
      '指定当前选中的项目数据。可以使用 <code>v-model</code> 双向绑定数据',
    type: 'String | Number',
    default: '-',
  },
  {
    name: 'type',
    illustrate: '为 <code>button</code> 时使用按钮样式',
    type: 'String',
    value: '<code>button</code>',
    default: '-',
  },
  {
    name: 'button-style',
    illustrate: '设置为 <code>solid</code> 显示有底色的按钮样式',
    type: 'String',
    value: '<code>solid</code>',
    default: 'default',
  },
  {
    name: 'size',
    illustrate:
      '<code>button</code>尺寸大小，<code>type</code> 为 <code>button</code> 时生效',
    type: 'String',
    value: '<code>large</code> | <code>small</code> | <code>default</code>',
    default: 'default',
  },
  {
    name: 'vertical',
    illustrate: '是否垂直排列，按钮样式下无效',
    type: 'Boolean',
    default: '-',
  },
]);

// radioGroupEventsData
const radioGroupEventsData = ref([
  {
    name: 'on-change',
    illustrate: '在选项状态发生改变时触发，返回当前状态',
    default: 'model-value',
  },
]);
</script>

<style lang="scss" scoped></style>
