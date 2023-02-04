<template>
  <div>
    <h1>Page 分页</h1>
    <p>使用分页可以快速进行数据切换</p>
    <h2>基本用法</h2>
    <p>基本的分页，页数过多时会自动折叠</p>
    <doc-markdown :code="code.default">
      <template #demo>
        <default></default>
      </template>
    </doc-markdown>
    <h2>显示分页</h2>
    <p>可以切换每页显示的数量</p>
    <doc-markdown :code="code.showSizer">
      <template #demo>
        <show-sizer></show-sizer>
      </template>
    </doc-markdown>
    <h2>电梯</h2>
    <p>通过键盘回车键确认，快速跳转到某一页</p>
    <doc-markdown :code="code.showElevator">
      <template #demo>
        <show-elevator></show-elevator>
      </template>
    </doc-markdown>
    <h2>总数</h2>
    <p>
      显示总共多少条数据，通过插槽 slots
      <code>total</code>
      来自定义内容，默认显示
      <code>{{ `共\{\{ total \}\}条` }}</code>
    </p>
    <doc-markdown :code="code.total">
      <template #demo>
        <total></total>
      </template>
    </doc-markdown>
    <h2>迷你型</h2>
    <p>
      设置
      <code>small</code>使用小型分页样式，小型分页拥有普通的所有功能
    </p>
    <doc-markdown :code="code.small">
      <template #demo>
        <smalls></smalls>
      </template>
    </doc-markdown>
    <h2>简洁</h2>
    <p>
      设置
      <code>simple</code>
      属性即可使用简洁版的分页，通过输入页码回车切换，或使用鼠标点击切换页码，或使用键盘的上下键来切换。简洁分页不能使用总数、电梯和切换数量
    </p>
    <doc-markdown :code="code.simple">
      <template #demo>
        <simple></simple>
      </template>
    </doc-markdown>
    <h2>Slots</h2>
    <p>
      通过设置
      <code>prev(上一页按钮)</code>， <code>prevArrow(上一页更多)</code>，
      <code>next(下一页按钮)</code>， <code>nextArrow(下一页更多)</code>不同的
      <code>slots</code> 显示不同的内容
    </p>
    <doc-markdown :code="code.slots">
      <template #demo>
        <slots></slots>
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
        width="150"
      ></ivue-table-column>
    </ivue-table>
    <h3>Events</h3>
    <ivue-table :data="eventsData" border>
      <ivue-table-column
        prop="name"
        label="事件名"
        width="200"
      ></ivue-table-column>
      <ivue-table-column
        prop="illustrate"
        label="说明"
        min-width="300"
      ></ivue-table-column>
      <ivue-table-column prop="value" label="返回值" width="150">
        <template #default="props">
          <p v-html="props.row.value"></p>
        </template>
      </ivue-table-column>
    </ivue-table>
    <h3>Slots</h3>
    <ivue-table :data="slotsData" border>
      <ivue-table-column
        prop="name"
        label="事件名"
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

import Code from '@/code/page';

import Default from '@/components/page/default.vue';
import ShowSizer from '@/components/page/show-sizer.vue';
import ShowElevator from '@/components/page/show-elevator.vue';
import Total from '@/components/page/total.vue';
import Smalls from '@/components/page/smalls.vue';
import Simple from '@/components/page/simple.vue';
import Slots from '@/components/page/slots.vue';

const code = ref(Code);

// propsData
const propsData = [
  {
    name: 'model-value',
    illustrate: '当前页码, 可以使用 v-model来进行双向绑定',
    type: 'Number',
    default: '1',
  },
  {
    name: 'total',
    illustrate: '数据总数',
    type: 'Number',
    default: '0',
  },
  {
    name: 'show-total',
    illustrate: '显示总数',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'prev-icon',
    illustrate: '上一页图标',
    type: 'String',
    default: 'keyboard_arrow_left',
  },
  {
    name: 'next-icon',
    illustrate: '下一页图标',
    type: 'String',
    default: 'keyboard_arrow_right',
  },
  {
    name: 'disabled',
    illustrate: '是否禁用',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'page-size',
    illustrate: '每页条数',
    type: 'Number',
    default: '10',
  },
  {
    name: 'page-count',
    illustrate:
      '页码按钮的数量，当总页数超过该值时会折叠，大于等于 <code>5</code> 且小于等于 <code>21</code> 的奇数',
    type: 'Number',
    default: '5',
  },
  {
    name: 'show-sizer',
    illustrate: '显示分页，用来改变 <code>page-size</code>',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'placement',
    illustrate: '条数切换弹窗的展开方向',
    type: 'String',
    value: '<code>bottom</code> | <code>top</code>',
    default: 'bottom',
  },
  {
    name: 'transfer',
    illustrate:
      '显示分页，是否将弹层放置于 body 内，<code>show-sizer</code>时生效',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'page-size-opts',
    illustrate: '每页条数切换的配置',
    type: 'Array',
    default: '[10, 20, 30, 40]',
  },
  {
    name: 'page-size-text',
    illustrate: '分页页数选择文字，<code>show-sizer</code>时有效',
    type: 'String',
    default: '条/页',
  },
  {
    name: 'show-elevator',
    illustrate: '显示电梯，可以快速切换到某一页',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'elevator-text',
    illustrate: '电梯文案，<code>show-elevator</code>时有效',
    type: 'Array',
    default: "['跳至', '页']",
  },
  {
    name: 'small',
    illustrate: '是否使用小型分页样式',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'simple',
    illustrate: '简洁版',
    type: 'Boolean',
    default: 'false',
  },
];

// eventsData
const eventsData = [
  {
    name: 'on-change',
    illustrate: '页码改变的回调，返回改变后的页码',
    value: 'page',
  },
  {
    name: 'on-page-size-change',
    illustrate: '切换每页条数时的回调，返回切换后的每页条数',
    value: 'page-size',
  },
  {
    name: 'on-prev',
    illustrate: '切换上一页时触发，返回切换后的页码',
    value: 'page',
  },
  {
    name: 'on-next',
    illustrate: '切换下一页时触发，返回切换后的页码',
    value: 'page',
  },
];

// slotsData
const slotsData = [
  {
    name: 'prev',
    illustrate: '自定义上一页按钮',
  },
  {
    name: 'next',
    illustrate: '自定义下一页按钮',
  },
  {
    name: 'prevArrow',
    illustrate: '自定义上一页更多文案',
  },
  {
    name: 'nextArrow',
    illustrate: '自定义下一页更多文案',
  },
  {
    name: 'total',
    illustrate: '自定义总数内容',
  },
];
</script>

<style lang="scss" scoped></style>
