<template>
  <div>
    <h1>AutoComplete 自动完成</h1>
    <p>
      该组件提供简单灵活的预先输入功能。这在搜索大型数据集或甚至从API动态请求信息时非常有用。
    </p>
    <h2>基础用法</h2>
    <p>
      基本用法，通过
      <code>list</code> 设置自动完成的数据源
    </p>
    <doc-markdown :code="code.default">
      <template #demo>
        <default></default>
      </template>
    </doc-markdown>
    <h2>自定义选项</h2>
    <p>
      <span>除了使用</span>
      <code>list</code>
      <span>，还可以直接传入</span>
      <code>ivue-option</code>
      <span>
        组件作为
        <code>slot</code> 使用，这样可以自定义显示效果。
      </span>
    </p>
    <doc-markdown :code="code.custom">
      <template #demo>
        <custom></custom>
      </template>
    </doc-markdown>
    <h2>不区分大小写</h2>
    <p>
      不区分大小写的
      <code>auto-complete</code>，及过滤的用法
    </p>
    <doc-markdown :code="code.notCaseSensitive">
      <template #demo>
        <not-case-sensitive></not-case-sensitive>
      </template>
    </doc-markdown>
    <h2>查询模式</h2>
    <p>
      完全自定义
      <code>ivue-option</code>，显示复杂的布局
    </p>
    <doc-markdown :code="code.queryMod">
      <template #demo>
        <query-mode></query-mode>
      </template>
    </doc-markdown>
    <h2>远程搜索</h2>
    <p>从服务端搜索数据</p>
    <doc-markdown :code="code.remoteSearch">
      <template #demo>
        <remote-search></remote-search>
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
        width="120"
      ></ivue-table-column>
    </ivue-table>
    <h3>Events</h3>
    <ivue-table :data="eventsData" border>
      <ivue-table-column
        prop="name"
        label="事件名"
        width="200"
      ></ivue-table-column>
      <ivue-table-column prop="illustrate" label="说明" min-width="300">
        <template #default="props">
          <p v-html="props.row.illustrate"></p>
        </template>
      </ivue-table-column>
      <ivue-table-column
        prop="default"
        label="返回值"
        width="100"
      ></ivue-table-column>
    </ivue-table>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import Code from '@/code/auto-complete';

import Default from '@/components/auto-complete/default.vue';
import Custom from '@/components/auto-complete/custom.vue';
import NotCaseSensitive from '@/components/auto-complete/not-case-sensitive.vue';
import QueryMode from '@/components/auto-complete/query-mode.vue';
import RemoteSearch from '@/components/auto-complete/remote-search.vue';

const code = ref(Code);

// propsData
const propsData = ref([
  {
    name: 'model-value / v-model',
    illustrate: '选中项绑定值',
    type: 'String',
    default: '-',
  },
  {
    name: 'placeholder',
    illustrate: '占位文本',
    type: 'String',
    default: '-',
  },
  {
    name: 'disabled',
    illustrate: '是否禁用',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'clearable',
    illustrate: '是否可以清空选项',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'placement',
    illustrate: '弹窗的展开方向',
    type: 'String',
    value:
      '<code>top</code> | <code>top-start</code> | <code>top-end</code> | <code>bottom</code> | <code>bottom-start</code> | <code>bottom-end</code>',
    default: 'bottom-start',
  },
  {
    name: 'transfer-class-name',
    illustrate:
      '开启 <code>transfer</code> 时，给浮层添加额外的 <code>class</code> 名称',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'transfer',
    illustrate:
      '是否将弹层放置于 body 内，在下拉列表的定位出现问题时，可将该属性设置为 <code>true</code>',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'capture',
    illustrate: '是否开启外部点击的 <code>capture</code> 模式，可通过全局配置',
    type: 'Boolean',
    default: 'true',
  },
  {
    name: 'list',
    illustrate: '自动完成的数据源',
    type: 'Array',
    default: '[]',
  },
  {
    name: 'filter-method',
    illustrate:
      '是否根据输入项进行筛选。当其为一个函数时，会接收 <code>value</code> 和 <code>option</code> 两个参数，当 <code>option</code> 符合筛选条件时，应返回 <code>true</code>，反之则返回 <code>false</code>',
    type: 'Function | Boolean',
    default: 'false',
  },
  {
    name: 'remote-method',
    illustrate:
      '远程搜索的方法, 用于请求搜索数据, 接收参数 <code>queryString</code> 为输入框的内容',
    type: 'Function',
    default: '-',
  },
  {
    name: 'loading',
    illustrate: '加载中',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'loading-text',
    illustrate: '加载中的文字提示',
    type: 'String',
    default: '-',
  },
]);

// eventsData
const eventsData = ref([
  {
    name: 'on-change',
    illustrate:
      '选中 <code>ivue-option</code>，或 <code>input</code> 的 <code>value</code> 变化时，调用此函数',
    default: 'value',
  },
  {
    name: 'on-select',
    illustrate: '被选中时调用，参数为选中项的 <code>value</code> 值',
    default: 'value',
  },
  {
    name: 'on-search',
    illustrate: '搜索补全项的时候调用',
    default: 'query',
  },
  {
    name: 'on-focus',
    illustrate: '聚焦时触发',
    default: 'event',
  },
  {
    name: 'on-blur',
    illustrate: '失焦时触发',
    default: 'event',
  },
  {
    name: 'on-change',
    illustrate: '清空时触发',
    default: '无',
  },
]);
</script>

<style lang="scss" scoped></style>
