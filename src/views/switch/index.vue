<template>
  <div>
    <h1>Switch 开关</h1>
    <p>在两种状态间切换时用到的开关选择器。</p>
    <h2>基本用法</h2>
    <p>基本用法，状态切换时会触发事件</p>
    <doc-markdown :code="code.default">
      <template #demo>
        <default></default>
      </template>
    </doc-markdown>
    <h2>尺寸</h2>
    <p>
      设置
      <code>size</code>为 <code>large</code> 或
      <code>small</code> 使用大号和小号的开关
    </p>
    <doc-markdown :code="code.size">
      <template #demo>
        <size></size>
      </template>
    </doc-markdown>
    <h2>文字和图标</h2>
    <p>
      自定义内容，建议如果使用2个汉字，将开关尺寸设置为
      <code>large</code>
    </p>
    <doc-markdown :code="code.icon">
      <template #demo>
        <icon></icon>
      </template>
    </doc-markdown>
    <h2>不可用</h2>
    <p>禁用开关</p>
    <doc-markdown :code="code.disabled">
      <template #demo>
        <disabled></disabled>
      </template>
    </doc-markdown>
    <h2>加载中</h2>
    <p>标识开关操作仍在执行中</p>
    <doc-markdown :code="code.loading">
      <template #demo>
        <loading></loading>
      </template>
    </doc-markdown>
    <h2>自定义颜色</h2>
    <p>
      设置属性
      <code>color</code> 和 <code>false-color</code> 可以自定义背景色,
    </p>
    <p>
      当设置
      <code>color</code>/ <code>false-color</code> 为数组时自动开启渐变
    </p>
    <doc-markdown :code="code.color">
      <template #demo>
        <color></color>
      </template>
    </doc-markdown>
    <h2>阻止切换</h2>
    <p>
      设置属性
      <code>before-change</code> 并返回 Promise，可以阻止切换
    </p>
    <doc-markdown :code="code.beforeChange">
      <template #demo>
        <before-change></before-change>
      </template>
    </doc-markdown>
    <h2>API</h2>
    <h3>Props</h3>
    <ivue-table :data="propsData" border>
      <ivue-table-column prop="name" label="名称"></ivue-table-column>
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
        prop="value"
        label="可选值"
        width="200"
      ></ivue-table-column>
      <ivue-table-column
        prop="default"
        label="默认"
        width="100"
      ></ivue-table-column>
    </ivue-table>
    <h3>Event</h3>
    <ivue-table :data="eventData" border>
      <ivue-table-column
        prop="name"
        label="名称"
        width="100"
      ></ivue-table-column>
      <ivue-table-column
        prop="illustrate"
        label="说明"
        min-width="300"
      ></ivue-table-column>
      <ivue-table-column
        prop="default"
        label="返回值"
        width="100"
      ></ivue-table-column>
    </ivue-table>
    <h3>Slots</h3>
    <ivue-table :data="slotsData" border>
      <ivue-table-column
        prop="name"
        label="名称"
        width="100"
      ></ivue-table-column>
      <ivue-table-column
        prop="illustrate"
        label="说明"
        min-width="300"
      ></ivue-table-column>
    </ivue-table>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import Code from '@/code/switch';

import Default from '@/components/switch/default.vue';
import Size from '@/components/switch/size.vue';
import Icon from '@/components/switch/icon.vue';
import Disabled from '@/components/switch/disabled.vue';
import Loading from '@/components/switch/loading.vue';
import Color from '@/components/switch/color.vue';
import BeforeChange from '@/components/switch/before-change.vue';

const code = ref(Code);

// propsData
const propsData = ref([
  {
    name: 'model-value',
    illustrate: '指定当前是否选中，可以使用 <code>v-model</code> 双向绑定数据',
    type: 'Boolean',
    value: '-',
    default: 'false',
  },
  {
    name: 'size',
    illustrate:
      '开关的尺寸。建议开关如果使用了2个汉字的文字，使用 <code>large</code>',
    type: 'String',
    value: 'large | small | default',
    default: '-',
  },
  {
    name: 'disabled',
    illustrate: '禁用开关',
    type: 'Boolean',
    value: '-',
    default: 'false',
  },
  {
    name: 'disabled',
    illustrate: '禁用开关',
    type: 'Boolean',
    value: '-',
    default: 'false',
  },
  {
    name: 'true-value',
    illustrate:
      '选中时的值，当使用类似 <code>1</code> 和 <code>0</code> 来判断是否选中时会很有用',
    type: 'String | Number | Boolean',
    value: '-',
    default: 'true',
  },
  {
    name: 'false-value',
    illustrate:
      '没有选中时的值，当使用类似 <code>1</code> 和 <code>0</code> 来判断是否选中时会很有用',
    type: 'String | Number | Boolean',
    value: '-',
    default: 'false',
  },
  {
    name: 'color',
    illustrate: '自定义打开时的背景色',
    type: 'String | Array',
    value: '-',
    default: '-',
  },
  {
    name: 'false-color',
    illustrate: '自定义关闭时的背景色',
    type: 'String | Array',
    value: '-',
    default: '-',
  },
  {
    name: 'before-change',
    illustrate: '返回 Promise 可以阻止切换',
    type: 'Function',
    value: '-',
    default: '-',
  },
  {
    name: 'loading',
    illustrate: '加载中的开关',
    type: 'Boolean',
    value: '-',
    default: 'false',
  },
  {
    name: 'emboss',
    illustrate: '浮雕按钮',
    type: 'Boolean',
    value: '-',
    default: 'false',
  },
  {
    name: 'emboss-loading-color',
    illustrate: '浮雕按钮',
    type: 'Boolean',
    value: '-',
    default: 'false',
  },
  {
    name: 'ripple-disabled',
    illustrate: '禁用浮雕水波纹效果',
    type: 'Boolean',
    value: '-',
    default: 'false',
  },
]);

// eventData
const eventData = ref([
  {
    name: 'on-change',
    illustrate: '开关变化时触发，返回当前的状态',
    type: 'Boolean',
    value: '-',
    default: 'true | false',
  },
]);

// slotsData
const slotsData = ref([
  {
    name: 'open',
    illustrate: '自定义显示打开时的内容',
  },
  {
    name: 'close',
    illustrate: '自定义显示关闭时的内容',
  },
]);
</script>

<style lang="scss" scoped></style>
