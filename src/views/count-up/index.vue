<template>
  <div class="count-up">
    <h1>CountUp 数字动画</h1>
    <p>将一个数字以动画的形式动态渐变到指定值的组件</p>
    <h2>基础用法</h2>
    <p>
      该组件基于
      <a
        class="link"
        href="https://github.com/inorganik/countUp.js"
        target="_black"
        >countup.js</a
      >
      封装，可以自由控制数字动画过程
    </p>
    <doc-markdown :code="code.default">
      <template #demo>
        <default></default>
      </template>
    </doc-markdown>
    <h2>小数</h2>
    <p>
      设置
      <code>decimals</code> 属性指定小数位数
    </p>
    <doc-markdown :code="code.decimals">
      <template #demo>
        <decimals></decimals>
      </template>
    </doc-markdown>
    <h2>回调</h2>
    <p>
      设置
      <code>callback</code>
      属性可以在结束时继续完成某些操作，该函数返回
      <code>countUp</code>倒计时对象
    </p>
    <doc-markdown :code="code.callback">
      <template #demo>
        <callback></callback>
      </template>
    </doc-markdown>
    <h2>自定义 countup.js 设置项</h2>
    <p>
      设置属性
      <code>options</code> 可以自定义
      <code>countup.js</code> 的其他选项，比如示例是不显示分隔符及
      <code>easing</code> 动画。
    </p>
    <doc-markdown :code="code.options">
      <template #demo>
        <options></options>
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
        width="100"
      ></ivue-table-column>
      <ivue-table-column
        prop="default"
        label="默认"
        width="100"
      ></ivue-table-column>
    </ivue-table>
    <h3>Methods</h3>
    <ivue-table :data="methodsData" border>
      <ivue-table-column
        prop="name"
        label="名称"
        width="150"
      ></ivue-table-column>
      <ivue-table-column
        prop="illustrate"
        label="说明"
        min-width="300"
      ></ivue-table-column>
      <ivue-table-column
        prop="value"
        label="参数"
        width="150"
      ></ivue-table-column>
    </ivue-table>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import Code from '@/code/count-up';

import Default from '@/components/count-up/default.vue';
import Decimals from '@/components/count-up/decimals.vue';
import Callback from '@/components/count-up/callback.vue';
import Options from '@/components/count-up/options.vue';

const code = ref(Code);

const propsData = ref([
  {
    name: 'start-value',
    illustrate: '起始值',
    type: 'Number',
    default: '0',
  },
  {
    name: 'end-value',
    illustrate: '结束值，必填',
    type: 'Number',
    default: '-',
  },
  {
    name: 'decimals',
    illustrate: '小数位数',
    type: 'Number',
    default: '-',
  },
  {
    name: 'duration',
    illustrate: '持续时间，单位：秒',
    type: 'Number',
    default: '2',
  },
  {
    name: 'callback',
    illustrate: '回调函数',
    type: 'Function',
    default: '-',
  },
  {
    name: 'options',
    illustrate:
      '<a class="link" href="https://github.com/inorganik/countUp.js" target="_black">countup.js</a> 选项',
    type: 'Number',
    default: '2',
  },
]);

// methodsData
const methodsData = ref([
  {
    name: 'pauseResume',
    illustrate: '暂停/继续',
    value: '-',
  },
  {
    name: 'reset',
    illustrate: '重置',
    value: '-',
  },
  {
    name: 'start',
    illustrate: '开始',
    value: 'callback(可选)',
  },
  {
    name: 'update',
    illustrate: '更新结束值',
    value: 'newEndVal',
  },
]);
</script>

<style lang="scss">
.count-up {
  .link {
    margin: 0;
    color: var(--ivue-primary-color);
  }
}
</style>
