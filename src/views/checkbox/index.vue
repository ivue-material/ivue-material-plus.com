<template>
  <div>
    <h1>Checkbox 多选框</h1>
    <p>主要用于一组可选项多项选择，或者单独用于标记切换某种状态</p>
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
      <code>checkbox-group</code>
      配合数组来生成组合
    </p>
    <p>
      在组合使用时，
      <code>checkbox</code> 使用 <code>label</code> 来自动判断选中状态
    </p>
    <p>
      每个
      <code>checkbox</code> 的内容可以自定义，如不填写则默认使用
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
      <code>disabled</code>属性来禁用多选框
    </p>
    <doc-markdown :code="code.disabled">
      <template #demo>
        <disabled></disabled>
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
    <h2>全选</h2>
    <p>
      在实现全选效果时，你可能会用到
      <code>indeterminate</code> 属性
    </p>
    <doc-markdown :code="code.indeterminate">
      <template #demo>
        <indeterminate></indeterminate>
      </template>
    </doc-markdown>
    <h3>Checkbox Props</h3>
    <ivue-table :data="checkboxPropsData" border>
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
    <h3>Checkbox Events</h3>
    <ivue-table :data="checkboxEventsData" border>
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
    <h3>CheckboxGroup Props</h3>
    <ivue-table :data="checkboxGroupPropsData" border>
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
    <h3>CheckboxGroup Events</h3>
    <ivue-table :data="checkboxGroupEventsData" border>
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

import Code from '@/code/checkbox';

import Default from '@/components/checkbox/default.vue';
import Group from '@/components/checkbox/group.vue';
import Disabled from '@/components/checkbox/disabled.vue';
import Border from '@/components/checkbox/border.vue';
import Indeterminate from '@/components/checkbox/indeterminate.vue';

const code = ref(Code);

// checkboxPropsData
const checkboxPropsData = ref([
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
    name: 'indeterminate',
    illustrate:
      '设置 <code>indeterminate</code> 状态时，只负责样式控制，用于显示非全选',
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

// checkboxEventsData
const checkboxEventsData = ref([
  {
    name: 'on-change',
    illustrate: '在选项状态发生改变时触发，返回已选中的数组，当使用组合时失效',
    default: 'model-value',
  },
]);

// checkboxGroupPropsData
const checkboxGroupPropsData = ref([
  {
    name: 'model-value',
    illustrate:
      '指定选中项目的集合。可以使用 <code>v-model</code> 双向绑定数据',
    type: 'String | Number',
    default: '-',
  },
]);

// checkboxGroupEventsData
const checkboxGroupEventsData = ref([
  {
    name: 'on-change',
    illustrate: '在选项状态发生改变时触发，返回已选中的数组',
    default: 'model-value',
  },
]);
</script>

<style lang="scss" scoped></style>
