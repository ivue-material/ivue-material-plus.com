<template>
  <div>
    <h1>Tabs 标签页</h1>
    <p>组件用于隐藏可选项目后面的内容。这也可以用作页面的伪导航</p>
    <h2>基础用法</h2>
    <p>
      <code>model-value</code> 与 <code>ivue-tab</code> 的
      <code>name</code> 对应，用于标识当前激活的是哪一项，
      <code>name</code> 值默认为组件的
      <code>uid</code> 开始，默认激活第一项。可以使用
      <code>v-model</code> 双向绑定数据
    </p>
    <doc-markdown :code="code.default">
      <template #demo>
        <default></default>
      </template>
    </doc-markdown>
    <h2>禁用</h2>
    <p>
      通过设置
      <code>ivue-tab</code>的 <code>disabled</code>属性，禁用某一项
    </p>
    <doc-markdown :code="code.disabled">
      <template #demo>
        <disabled></disabled>
      </template>
    </doc-markdown>
    <h2>自适应宽度选项卡</h2>
    <p>
      通过设置
      <code>ivue-tab</code>的 <code>auto-width</code>属性，使每一个
      <code>ivue-tab</code>自适应宽度
    </p>
    <doc-markdown :code="code.autoWidth">
      <template #demo>
        <auto-width></auto-width>
      </template>
    </doc-markdown>
    <h2>固定宽度的Tab</h2>
    <p>
      通过设置
      <code>fixed-width</code>可以使 <code>tab</code>设置固定宽度
    </p>
    <doc-markdown :code="code.fixedWidth">
      <template #demo>
        <fixed-width></fixed-width>
      </template>
    </doc-markdown>
    <h2>分页</h2>
    <p>如果选项卡标签溢出它们的容器，分页控件将会出现</p>
    <doc-markdown :code="code.paging">
      <template #demo>
        <paging></paging>
      </template>
    </doc-markdown>
    <h2>Tab 对齐方向</h2>
    <p>
      为
      <code>ivue-tab</code>设置 <code>centered</code>可使
      <code>tab</code>居中，设置 <code>right</code>可使 <code>tab</code>向右对齐
    </p>
    <doc-markdown :code="code.direction">
      <template #demo>
        <direction></direction>
      </template>
    </doc-markdown>
    <h2>自定义切换图标</h2>
    <p>
      设置
      <code>next-icon</code>或者 <code>prev-icon</code>可自定义切换图标
    </p>
    <doc-markdown :code="code.icon">
      <template #demo>
        <icon></icon>
      </template>
    </doc-markdown>
    <h2>自定义 Tab</h2>
    <doc-markdown :code="code.customize">
      <template #demo>
        <customize></customize>
      </template>
    </doc-markdown>
    <h2>Tabs Props</h2>
    <ivue-table :data="tabsPropsData" border>
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
        width="200"
      ></ivue-table-column>
    </ivue-table>
    <h2>Tabs Slots</h2>
    <ivue-table :data="tabsSlotsData" border>
      <ivue-table-column
        prop="name"
        label="名称"
        width="200"
      ></ivue-table-column>
      <ivue-table-column
        prop="illustrate"
        label="说明"
        min-width="300"
      ></ivue-table-column>
      <ivue-table-column
        prop="value"
        label="子标签"
        min-width="300"
      ></ivue-table-column>
    </ivue-table>
    <h2>Tab Props</h2>
    <ivue-table :data="tabPropsData" border>
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
        width="200"
      ></ivue-table-column>
    </ivue-table>
    <h2>Tab Item Slots</h2>
    <ivue-table :data="tabItemSlotsData" border>
      <ivue-table-column
        prop="name"
        label="名称"
        width="200"
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

import Code from '@/code/tabs';

import Default from '@/components/tabs/default.vue';
import Disabled from '@/components/tabs/disabled.vue';
import AutoWidth from '@/components/tabs/auto-width.vue';
import Paging from '@/components/tabs/paging.vue';
import Direction from '@/components/tabs/direction.vue';
import Icon from '@/components/tabs/icon.vue';
import FixedWidth from '@/components/tabs/fixed-width.vue';
import Customize from '@/components/tabs/customize.vue';

const code = ref(Code);

const tabsPropsData = ref([
  {
    name: 'model-value',
    illustrate:
      '当前激活 <code>tab</code> 面板的 <code>name</code>，可使用 v-model 双向绑定',
    type: 'String | Number',
    default: '默认为第一项的 name',
  },
  {
    name: 'centered',
    illustrate: '使导航内容居中',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'right',
    illustrate: '使导航内容向右',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'show-arrows',
    illustrate: '是否显示导航栏箭头',
    type: 'Boolean',
    default: 'true',
  },
  {
    name: 'show-arrows',
    illustrate: '是否显示导航栏箭头',
    type: 'Boolean',
    default: 'true',
  },
  {
    name: 'prev-icon',
    illustrate: '左边按钮',
    type: 'String',
    default: 'chevron_left',
  },
  {
    name: 'next-icon',
    illustrate: '右边按钮',
    type: 'String',
    default: 'chevron_right',
  },
  {
    name: 'fixed-width',
    illustrate: '固定宽度<code>tab</code>',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'auto-width',
    illustrate: '自动适应宽度<code>tab</code>',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'height',
    illustrate: '设置导航高度，可以传入自定义单位，如：<code>1rem</code>',
    type: 'String | Number',
    default: '-',
  },
  {
    name: 'slider-color',
    illustrate: '滑动条颜色',
    type: 'String',
    default: 'primary',
  },
  {
    name: 'hide-slider',
    illustrate: '隐藏滑动条',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'arrows-margin',
    illustrate: '调整显示箭头时设置的前后滚动的间距',
    type: 'Number | String',
    default: '40',
  },
]);

const tabsSlotsData = ref([
  {
    name: 'header',
    illustrate: '导航栏',
    value: 'ivue-tab',
  },
  {
    name: 'content',
    illustrate: '导航内容',
    value: 'ivue-tab-item',
  },
]);

const tabPropsData = ref([
  {
    name: 'disabled',
    illustrate: '是否禁用当前标签',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'ripple-disabled',
    illustrate: '是否禁用涟漪效果',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'ripple-centered',
    illustrate: '是否居中涟漪效果',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'name',
    illustrate: '用于标识当前面板，对应 <code>value</code>，默认为其索引值',
    type: 'String',
    default: '-',
  },
]);

const tabItemSlotsData = ref([
  {
    name: 'default',
    illustrate: '默认插槽内容',
  },
]);
</script>

<style lang="scss" scoped></style>
