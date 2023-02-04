<template>
  <div>
    <h1>Badge 徽标数</h1>
    <p>主要用于通知未读数的角标，提醒用户点击</p>
    <h2>基础用法</h2>
    <p>
      设置属性
      <code>count</code>可以定义显示的消息数量，或者使用插槽
      <code>count</code>自定义消息内容
    </p>
    <doc-markdown :code="code.default">
      <template #demo>
        <default></default>
      </template>
    </doc-markdown>
    <h2>小红点</h2>
    <p>
      设置
      <code>dot</code>属性可以将消息数量设置为小红点，可通过
      <code>color</code>属性设置小红点
    </p>
    <doc-markdown :code="code.dot">
      <template #demo>
        <dot></dot>
      </template>
    </doc-markdown>
    <h2>封顶数字</h2>
    <p>
      通过设置
      <code>overflow-count</code>
      属性设置一个封顶值，当超过时，会显示
      <code>${overflowCount}+</code>，默认值为 <code>99</code>封顶
    </p>
    <doc-markdown :code="code.overflowCount">
      <template #demo>
        <overflow-count></overflow-count>
      </template>
    </doc-markdown>
    <h2>单独使用</h2>
    <p>
      没有
      <code>slot</code>独立展示
    </p>
    <doc-markdown :code="code.alone">
      <template #demo>
        <alone></alone>
      </template>
    </doc-markdown>
    <h2>自定义内容</h2>
    <p>
      通过设置
      <code>text</code> 属性，可以自定义显示内容
    </p>
    <doc-markdown :code="code.setText">
      <template #demo>
        <set-text></set-text>
      </template>
    </doc-markdown>
    <h2>状态点</h2>
    <p>用于表示状态的小圆点</p>
    <doc-markdown :code="code.status">
      <template #demo>
        <status></status>
      </template>
    </doc-markdown>
    <h2>自定义</h2>
    <p>其他自定义状态</p>
    <doc-markdown :code="code.customize">
      <template #demo>
        <customize></customize>
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

import Code from '@/code/badge';

import Default from '@/components/badge/default.vue';
import Dot from '@/components/badge/dot.vue';
import OverflowCount from '@/components/badge/overflow-count.vue';
import Alone from '@/components/badge/alone.vue';
import SetText from '@/components/badge/set-text.vue';
import Status from '@/components/badge/status.vue';
import Customize from '@/components/badge/customize.vue';

const code = ref(Code);

// propsData
const propsData = ref([
  {
    name: 'count',
    illustrate:
      '显示的数字，大于<code>overflow-count</code>时，显示<code>${overflow-count}+</code>，为 <code>0</code> 时隐藏',
    type: 'Number',
    default: '-',
  },
  {
    name: 'overflow-count',
    illustrate: '封顶的数字值',
    type: 'Number | String',
    default: '99',
  },
  {
    name: 'show-zero',
    illustrate: '当数值为 <code>0</code> 时，是否展示 <code>badge</code>',
    type: 'Number | String',
    default: '99',
  },
  {
    name: 'text',
    illustrate:
      '自定义<code>badge</code>内容，如果设置了 <code>status</code>，则为状态点的文本',
    type: 'String',
    default: '-',
  },
  {
    name: 'color',
    illustrate: '自定义颜色',
    type: 'String',
    default: '#FF617F',
  },
  {
    name: 'offset',
    illustrate: '偏移位置，单位为:px，如:[10,10](上下，左右)',
    type: 'Array',
    default: '-',
  },
  {
    name: 'dot',
    illustrate:
      '不展示数字，显示为一个小红点，如需隐藏 dot ，需要设置<code>show</code>为 <code>false</code>',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'show',
    illustrate: '是否显示<code>badge</code>',
    type: 'Boolean',
    default: 'true',
  },
  {
    name: 'class-name',
    illustrate:
      '自定义数值的 <code>class</code> 名称，<code>dot</code> 模式下无效',
    type: 'String',
    default: '-',
  },
  {
    name: 'status',
    illustrate: '设置 <code>badge</code> 为状态点',
    type: 'String',
    value:
      '<code>blue</code> | <code>green</code> | <code>red</code> | <code>yellow</code> | <code>pink</code> | <code>orange</code> | <code>gold</code> | <code>lime</code> | <code>cyan</code> | <code>purple</code> | <code>success</code> | <code>processing</code> | <code>default</code> | <code>error</code> | <code>warning</code>',
    default: '-',
  },
]);

// slotsData
const slotsData = ref([
  {
    name: 'count',
    illustrate: '自定义角标显示内容），数值 <code>count</code> 将无效',
  },
  {
    name: 'text',
    illustrate:
      '自定义角标显示文字，数值 <code>count</code> 将无效。或者在自定义状态点模式下设置 <code>text</code> 内容',
  },
]);
</script>

<style lang="scss" scoped></style>
