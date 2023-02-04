<template>
  <div>
    <h1>Progress 进度条</h1>
    <p>展示操作或任务的当前进度，比如上传文件。</p>
    <h2>基本用法</h2>
    <p>
      <code>progress</code>
      处在不同状态下的进度条，当
      <code>percent</code>
      为
      <code>100</code>
      时，自动将状态置为
      <code>success</code>
    </p>
    <doc-markdown :code="code.default">
      <template #demo>
        <default></default>
      </template>
    </doc-markdown>
    <h2>动画进度条</h2>
    <p>
      使用
      <code>indeterminate</code>
      属性来设置不确定的进度，
      <code>duration</code>
      来控制动画持续时间
    </p>
    <doc-markdown :code="code.animation">
      <template #demo>
        <animation></animation>
      </template>
    </doc-markdown>
    <h2>百分比内显</h2>
    <p>
      设置属性
      <code>text-inside</code>
      可以将百分比显示在进度条内部
    </p>
    <p>
      设置属性
      <code>stroke-width</code>
      可以设置一个足够的高度。
    </p>
    <doc-markdown :code="code.percentage">
      <template #demo>
        <percentage></percentage>
      </template>
    </doc-markdown>
    <h2>垂直方向</h2>
    <p>
      设置属性
      <code>vertical</code>
      将以垂直方向显示
    </p>
    <doc-markdown :code="code.vertical">
      <template #demo>
        <vertical></vertical>
      </template>
    </doc-markdown>
    <h2>配合外部组件使用</h2>
    <p>通过数据的联动控制，实现动态效果</p>
    <doc-markdown :code="code.external">
      <template #demo>
        <external></external>
      </template>
    </doc-markdown>
    <h2>自定义更多样式</h2>
    <p>
      自定义
      <code>slot</code>
      自定义百分比文案
    </p>
    <p>
      属性
      <code>stroke-width</code>
      修改进度条高度
    </p>
    <doc-markdown :code="code.custom">
      <template #demo>
        <custom></custom>
      </template>
    </doc-markdown>
    <h2>分段进度条</h2>
    <p>
      设置
      <code>success-percent</code>
      属性可设置成功进度
    </p>
    <doc-markdown :code="code.subsection">
      <template #demo>
        <subsection></subsection>
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
        width="150"
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

import Code from '@/code/progress';

import Default from '../../components/progress/default.vue';
import Animation from '../../components/progress/animation.vue';
import Percentage from '../../components/progress/percentage.vue';
import Vertical from '../../components/progress/vertical.vue';
import External from '../../components/progress/external.vue';
import Custom from '../../components/progress/custom.vue';
import Subsection from '../../components/progress/subsection.vue';

const code = ref(Code);

const propsData = ref([
  {
    name: 'status',
    illustrate: '进度条状态',
    type: 'String',
    value:
      '<code>normal</code> | <code>active</code> | <code>wrong</code> | <code>success</code> | <code>warning</code>',
    default: 'normal',
  },
  {
    name: 'hide-info',
    illustrate: '隐藏数值或状态图标',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'text-inside',
    illustrate: '百分比是否置于进度条内',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'success-percent',
    illustrate: '已完成的分段百分比',
    type: 'Number',
    default: '0',
  },
  {
    name: 'percent',
    illustrate: '百分比',
    type: 'Number',
    default: '0',
  },
  {
    name: 'stroke-width',
    illustrate: '进度条的线宽，单位 px',
    type: 'Number',
    default: '10',
  },
  {
    name: 'vertical',
    illustrate: '是否在垂直方向显示',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'stroke-color',
    illustrate: '进度条的颜色，支持传入数组，显示为渐变色',
    type: 'String | Array',
    default: '-',
  },
  {
    name: 'box-shadow-color',
    illustrate: '进度条阴影颜色',
    type: 'String',
    default: '-',
  },
  {
    name: 'icon',
    illustrate: '状态图标',
    type: 'String',
    default: '-',
  },
  {
    name: 'icon',
    illustrate: '用于自定义状态图标 <code>class</code>',
    type: 'String',
    default: '-',
  },
  {
    name: 'indeterminate',
    illustrate: '是否为动画进度条',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'duration',
    illustrate: '控制动画进度条速度',
    type: 'Number',
    default: '3',
  },
]);

// slotsData
const slotsData = ref([
  {
    name: 'default',
    illustrate: '自定义进度文案内容',
  },
]);
</script>

<style lang="scss" scoped></style>
