<template>
  <div>
    <h2>LineClamp 文本按行省略指令</h2>
    <p>
      该指令绑定值为需要省略的行数，一段文本在超出该行数时会以
      <code>…</code>
      的形式省略。该指令只适用于
      <code>Webkit</code>
      内核的浏览器，但具有更高的处理性能和效果
    </p>
    <p>
      如果要兼容其它浏览器，请选择
      <code>ivue-ellipsis</code>组件
    </p>
    <h2>基本用法</h2>
    <p>只需要绑定行数即可</p>
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
  </div>
</template>

<script setup>
import { ref } from 'vue';

import Code from '@/code/line-clamp';

import Default from '@/components/line-clamp/default.vue';

const code = ref(Code);

// propsData
const propsData = ref([
  {
    name: 'value',
    illustrate: '需要省略的行数',
    type: 'Number',
    default: '-',
  },
]);
</script>

<style lang="scss" scoped></style>
