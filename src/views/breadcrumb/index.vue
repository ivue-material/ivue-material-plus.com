<template>
  <div>
    <h1>Breadcrumb 面包屑</h1>
    <p>显示网站的层级结构，告知用户当前所在位置，以及在需要向上级导航时使用</p>
    <h2>基本用法</h2>
    <p>
      最基础的用法，通过设置
      <code>to</code>属性添加链接
    </p>
    <doc-markdown :code="code.default">
      <template #demo>
        <default></default>
      </template>
    </doc-markdown>
    <h2>分隔符</h2>
    <p>
      可通过插槽
      <code>divider</code> 自定义分隔符 或者通过
      <code>pops</code>修改，比如修改为图标
    </p>
    <doc-markdown :code="code.divider">
      <template #demo>
        <divider></divider>
      </template>
    </doc-markdown>
    <h2>对齐方向</h2>
    <p>
      可通过
      <code>justifyCenter</code> 设置为中间对齐或者通过
      <code>justifyEnd</code> 设置为尾部对齐
    </p>
    <doc-markdown :code="code.direction">
      <template #demo>
        <direction></direction>
      </template>
    </doc-markdown>
    <h2>API</h2>
    <h3>Breadcrumb Props</h3>
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
      <ivue-table-column
        prop="default"
        label="默认"
        width="150"
      ></ivue-table-column>
    </ivue-table>
    <h3>Breadcrumb Slots</h3>
    <ivue-table :data="slotsData" border>
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
    </ivue-table>
    <h3>Breadcrumb Item Slots</h3>
    <ivue-table :data="itemData" border>
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
        width="150"
      ></ivue-table-column>
    </ivue-table>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import Code from '@/code/breadcrumb';

import Default from '@/components/breadcrumb/default.vue';
import Divider from '@/components/breadcrumb/divider.vue';
import Direction from '@/components/breadcrumb/direction.vue';

const code = ref(Code);

// propsData
const propsData = ref([
  {
    name: 'divider',
    illustrate: '分隔符',
    type: 'String',
    default: '/',
  },
  {
    name: 'justify-center',
    illustrate: '中间对齐',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'justify-end',
    illustrate: '尾部对齐',
    type: 'Boolean',
    default: 'false',
  },
]);

// slotsData
const slotsData = ref([
  {
    name: 'divider',
    illustrate: '设置分隔符',
  },
]);

// itemData
const itemData = ref([
  {
    name: 'to',
    illustrate: '路由跳转对象，同 vue-router 的 to',
    type: 'String | Object',
    default: '-',
  },
  {
    name: 'replace',
    illustrate:
      '在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录',
    type: 'Boolean',
    default: 'false',
  },
]);
</script>

<style lang="scss" scoped></style>
