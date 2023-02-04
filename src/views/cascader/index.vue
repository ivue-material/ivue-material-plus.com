<template>
  <div>
    <h2>Cascader 级联选择</h2>
    <p>从一组相关联的数据集合中进行选择</p>
    <h2>基础用法</h2>
    <p>
      级联选择对数据有较严格要求，请参照示例的格式使用
      <code>data</code>，每项数据至少包含 <code>value</code>、
      <code>label</code>两项，子集为 <code>children</code>，以此类推
    </p>
    <p>
      <code>value</code> 为当前选择的数据，如： ['1', '2']
      ，按照级联顺序依次排序，使用 <code>v-model</code> 进行双向绑定
    </p>
    <doc-markdown :code="code.default">
      <template #demo>
        <default></default>
      </template>
    </doc-markdown>
    <h2>移入展开</h2>
    <p>
      设置属性
      <code>trigger</code> 为 <code>hover</code>，当鼠标悬停时就会展开子集
    </p>
    <doc-markdown :code="code.trigger">
      <template #demo>
        <trigger></trigger>
      </template>
    </doc-markdown>
    <h2>自定义显示</h2>
    <p>
      通过设置
      <code>slot</code> 可以自定义显示内容，不局限于输入框
    </p>
    <doc-markdown :code="code.slots">
      <template #demo>
        <slots></slots>
      </template>
    </doc-markdown>
    <h2>禁用</h2>
    <p>
      设置属性
      <code>disabled</code>
      可以禁用组件
    </p>
    <p>
      给某项数据设置
      <code>disabled: true</code> 可以禁用某一项
    </p>
    <doc-markdown :code="code.disabled">
      <template #demo>
        <disabled></disabled>
      </template>
    </doc-markdown>
    <h2>选择即改变</h2>
    <p>
      设置属性
      <code>change-on-select</code>可点任何一级都可以选择
    </p>
    <doc-markdown :code="code.changeOnSelect">
      <template #demo>
        <change-on-select></change-on-select>
      </template>
    </doc-markdown>
    <h2>自定义已选项</h2>
    <p>
      对于显示的结果，可以通过
      <code>render-format</code> 接收一个函数来自定义
    </p>
    <p>
      其中第一个参数
      <code>labels</code> 是当前选择的 <code>label</code>的集合，第二个参数
      <code>selectedData</code>
      是当前选择的数据集合，可以利用它们组合出你想要显示的内容
    </p>
    <doc-markdown :code="code.renderFormat">
      <template #demo>
        <render-format></render-format>
      </template>
    </doc-markdown>
    <h2>动态加载选项</h2>
    <p>
      使用
      <code>load-data</code>属性可以异步加载子选项，需要给数据增加
      <code>loading</code> 来标识当前是否在加载中
    </p>
    <p>
      <code>load-data</code>
      的第二个参数为回调，如果执行，则会自动展开当前项的子列表
    </p>
    <doc-markdown :code="code.loadData">
      <template #demo>
        <load-data></load-data>
      </template>
    </doc-markdown>
    <h2>搜索</h2>
    <p>
      使用属性
      <code>filterable</code> 可直接搜索选项并选择
    </p>
    <doc-markdown :code="code.filterable">
      <template #demo>
        <filterable></filterable>
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
    <h3>Events</h3>
    <ivue-table :data="eventsData" border>
      <ivue-table-column prop="name" label="事件名"></ivue-table-column>
      <ivue-table-column prop="illustrate" label="说明" min-width="300">
        <template #default="props">
          <p v-html="props.row.illustrate"></p>
        </template>
      </ivue-table-column>
      <ivue-table-column
        prop="default"
        label="返回值"
        width="200"
      ></ivue-table-column>
    </ivue-table>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import Code from '@/code/cascader';
import Default from '@/components/cascader/default.vue';
import Trigger from '@/components/cascader/trigger.vue';
import Slots from '@/components/cascader/slots.vue';
import Disabled from '@/components/cascader/disabled.vue';
import ChangeOnSelect from '@/components/cascader/change-on-select.vue';
import RenderFormat from '@/components/cascader/render-format.vue';
import LoadData from '@/components/cascader/load-data.vue';
import Filterable from '@/components/cascader/filterable.vue';

const code = ref(Code);

// propsData
const propsData = ref([
  {
    name: 'options',
    illustrate: '可选项的数据源，格式参照示例说明',
    type: 'Array',
    default: '[]',
  },
  {
    name: 'model-value',
    illustrate: '当前已选项的数据',
    type: 'Array',
    default: '[]',
  },
  {
    name: 'filterable',
    illustrate: '是否支持搜索',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'disabled',
    illustrate: '是否禁用选择',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'render-format',
    illustrate: '选择后展示的函数，用于自定义显示格式',
    type: 'Function',
    default: "label => label.join(' / ')",
  },
  {
    name: 'placeholder',
    illustrate: '输入框占位符',
    type: 'String',
    default: '请选择',
  },
  {
    name: 'arrow-down-icon',
    illustrate: '下拉图标',
    type: 'String',
    default: 'keyboard_arrow_down',
  },
  {
    name: 'arrow-down-icon-class',
    illustrate: '自定义下拉图标class',
    type: 'String',
    default: '-',
  },
  {
    name: 'clearable-icon',
    illustrate: '清除按钮图标',
    type: 'String',
    default: 'cancel',
  },
  {
    name: 'clearable-icon-class',
    illustrate: '自定义清除按钮图标class',
    type: 'String',
    default: '-',
  },
  {
    name: 'transfer-class-name',
    illustrate:
      '开启 <code>transfer</code> 时，给浮层添加额外的 <code>class</code> 名称',
    type: 'String',
    default: '-',
  },
  {
    name: 'transfer',
    illustrate: '是否将弹层放置于 <code>body</code> 内',
    type: 'String',
    default: '-',
  },
  {
    name: 'change-on-select',
    illustrate: '当此项为 <code>true</code> 时，点选每级菜单选项值都会发生变化',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'trigger',
    illustrate:
      '菜单展开方式，可选值为 <code>click</code> 或 <code>hover</code>',
    type: 'String',
    default: 'click',
  },
  {
    name: 'load-data',
    illustrate: '动态获取数据，数据源需标识 <code>loading</code>',
    type: 'Function',
    default: '-',
  },
  {
    name: 'clearable',
    illustrate: '是否支持清除',
    type: 'Boolean',
    default: 'true',
  },
  {
    name: 'not-found-text',
    illustrate: '当搜索列表为空时显示的内容',
    type: 'String',
    default: '无匹配数据',
  },
]);

// eventsData
const eventsData = ref([
  {
    name: 'on-change',
    illustrate:
      '选择完成后的回调，返回值 <code>value</code> 即已选值 <code>value</code>，<code>selectedData</code> 为已选项的具体数据',
    default: 'value, selectedData',
  },
  {
    name: 'on-visible-change',
    illustrate: '展开和关闭弹窗时触发',
    default: 'Boolean',
  },
]);
</script>

<style lang="scss" scoped></style>
