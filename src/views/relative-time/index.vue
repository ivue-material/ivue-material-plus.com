<template>
  <div>
    <h1>RelativeTime 相对时间</h1>
    <p>常用于表示几分钟前、几小时前、几天前以及一些自定义时间</p>
    <h2>基本用法</h2>
    <p>
      设置一个
      <code>时间戳</code>或者 <code>Date</code>,可以自动转为相对于当前的时间
    </p>
    <doc-markdown :code="code.default">
      <template #demo>
        <default></default>
      </template>
    </doc-markdown>
    <h2>自动更新间隔</h2>
    <p>
      设置
      <code>interval</code>
      属性自定义自动更新时间间隔，默认为
      <code>60秒</code>
    </p>
    <doc-markdown :code="code.autoUpdate">
      <template #demo>
        <auto-update></auto-update>
      </template>
    </doc-markdown>
    <h2>不同类型的时间格式</h2>
    <p>
      设置
      <code>type</code>
      属性可以根据情况，设置不同的显示类型
    </p>
    <doc-markdown :code="code.different">
      <template #demo>
        <different></different>
      </template>
    </doc-markdown>
    <h2>locale</h2>
    <p>
      设置
      <code>locale</code>
      属性可自定义时间文案，设置几分钟、几小时、几天前
    </p>
    <doc-markdown :code="code.locale">
      <template #demo>
        <locale></locale>
      </template>
    </doc-markdown>
    <h2>自定义日期方法</h2>
    <p>
      设置
      <code>date-function</code>
      属性可自定义日期方法，返回3个参数
      <code>timeStamp</code> 当前时间搓, <code>diff</code> 两个时间戳差值,
      <code>isEarly</code> 判断传入时间戳是否早于当前时间戳
    </p>
    <doc-markdown :code="code.custom">
      <template #demo>
        <custom></custom>
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
        width="200"
      ></ivue-table-column>
      <ivue-table-column prop="value" label="可选值" width="250">
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
  </div>
</template>

<script setup>
import { ref } from 'vue';

import Code from '@/code/relative-time';

import Default from '@/components/relative-time/default.vue';
import AutoUpdate from '@/components/relative-time/auto-update.vue';
import Different from '@/components/relative-time/different.vue';
import Locale from '@/components/relative-time/locale.vue';
import Custom from '@/components/relative-time/custom.vue';

const code = ref(Code);

// propsData
const propsData = ref([
  {
    name: 'time',
    illustrate: '需要对比的时间，可以是时间戳或是 <code>Date</code> 类型',
    type: 'Number | Date | String',
    default: '-',
  },
  {
    name: 'type',
    illustrate: '日期类型，可选值为 相对时间、日期 或 日期时间',
    type: 'String',
    value: '<code>relative</code> | <code>date</code> | <code>datetime</code>',
    default: 'relative',
  },
  {
    name: 'locale',
    illustrate: '日期语言',
    type: 'Object',
    value: `
            <ul>
                <li>before?: 前</li>
                <li>after?: 后</li>
                <li>just?: 刚刚</li>
                <li>seconds?: 秒钟</li>
                <li>minutes?: 分钟</li>
                <li>hours?: 时</li>
                <li>days?: 日</li>
            </ul>
        `,
    default: '-',
  },
  {
    name: 'date-start-type',
    illustrate: '月份格式开始类型，<code>type=relative</code> 下生效',
    type: 'String',
    value: '<code>month</code> | <code>year</code>',
    default: '-',
  },
  {
    name: 'interval',
    illustrate: '自动更新的间隔，单位：秒',
    type: 'Number',
    default: '60',
  },
  {
    name: 'date-function',
    illustrate: '自定义日期方法',
    type: 'Function',
    default: '-',
  },
]);
</script>

<style lang="scss" scoped></style>
