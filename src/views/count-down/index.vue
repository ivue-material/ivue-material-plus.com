<template>
  <div>
    <h1>CountDown 倒计时</h1>
    <p>根据设置目标时间来倒计时的组件</p>
    <h2>基础用法</h2>
    <p>简单的倒计时组件使用</p>
    <p>
      设置
      <code>type</code>为
      <code>number</code>
      可使用数字倒计时
    </p>
    <p>
      通过自定义
      <code>format</code>
      方法可定义倒数计时显示的文案，该方法返回一个参数
      <code>time</code>
      当前倒计时数值
    </p>
    <doc-markdown :code="code.default">
      <template #demo>
        <default></default>
      </template>
    </doc-markdown>
    <h2>API</h2>
    <h3>Props</h3>
    <ivue-table :data="propsData" border>
      <ivue-table-column
        prop="name"
        label="名称"
        width="100"
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
      <ivue-table-column prop="value" label="可选值" width="150">
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
      <ivue-table-column
        prop="name"
        label="事件名"
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

import Code from '@/code/count-down';

import Default from '@/components/count-down/default.vue';

const code = ref(Code);

// propsData
const propsData = ref([
  {
    name: 'target',
    illustrate: '目标时间',
    type: 'Date | Number',
    default: '-',
  },
  {
    name: 'interval',
    illustrate: '自动倒计时间隔，单位：毫秒',
    type: 'Number',
    default: '1000',
  },
  {
    name: 'format',
    illustrate: '自定义显示倒计时格式',
    type: 'Function',
    default: '-',
  },
  {
    name: 'type',
    illustrate: '倒计时计算类型，设置当前倒计时是使用时间还是数字',
    type: 'String',
    value: '<code>date</code> | <code>number</code>',
    default: 'date',
  },
]);

// eventsData
const eventsData = ref([
  {
    name: 'on-end',
    illustrate: '倒计时结束时触发',
  },
]);
</script>

<style lang="scss" scoped></style>
