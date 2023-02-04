<template>
  <div class="loading-bar-wrapper">
    <h1>LoadingBar 加载进度条</h1>
    <p>全局创建一个显示页面加载、异步请求、文件上传等的加载进度条</p>
    <p>
      <code>LoadingBar</code>
      只会在全局创建一个，因此在任何位置调用的方法都会控制这同一个组件
    </p>
    <p>
      当然也可以通过
      <code>update()</code>方法来传入一个精确的进度
    </p>
    <h2>在路由中使用</h2>
    <pre-code>{{ code.route }}</pre-code>
    <h2>在异步请求中使用</h2>
    <pre-code>{{ code.async }}</pre-code>
    <h2>代码示例</h2>
    <p>基本用法</p>
    <p class="line-2">
      点击
      <code>Start</code> 开始进度，点击 <code>Finish</code> 结束。在调用
      <code>start()</code>方法后，组件会自动模拟进度，当调用
      <code>finish()</code>或 <code>error()</code>时，补全进度并自动消失。
    </p>
    <doc-markdown :code="code.default">
      <template #demo>
        <default></default>
      </template>
    </doc-markdown>
    <h2>API</h2>
    <p>通过直接调用以下方法来使用组件</p>
    <ul class="ul">
      <li class="li">
        <code>this.$LoadingBar.start()</code>
      </li>
      <li class="li">
        <code>this.$LoadingBar.finish()</code>
      </li>
      <li class="li">
        <code>this.$LoadingBar.error()</code>
      </li>
      <li class="li">
        <code>this.$LoadingBar.update(percent)</code>
      </li>
    </ul>
    <p>函数及参数说明如下</p>
    <ivue-table class="ivue-table" :data="optionsData" border>
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
        prop="default"
        label="参数"
        width="200"
      ></ivue-table-column>
    </ivue-table>
    <p>另外提供了全局配置和全局销毁的方法</p>
    <ul class="ul">
      <li class="li">
        <code>this.$LoadingBar.config(options)</code>
      </li>
      <li class="li">
        <code>this.$LoadingBar.destroy()</code>
      </li>
    </ul>
    <pre-code>{{ code.config }}</pre-code>
    <ivue-table class="ivue-table" :data="configsData" border>
      <ivue-table-column
        prop="name"
        label="名称"
        width="150"
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
        label="默认值"
        width="100"
      ></ivue-table-column>
    </ivue-table>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import Code from '@/code/loading-bar';

import Default from '@/components/loading-bar/default.vue';

const code = ref(Code);

// optionsData
const optionsData = ref([
  {
    name: 'start',
    illustrate: '开始从 <code>0</code> 显示进度条，并自动加载进度',
    default: '-',
  },
  {
    name: 'finish',
    illustrate: '结束进度条，自动补全剩余进度',
    default: '-',
  },
  {
    name: 'error',
    illustrate: '以错误的类型结束进度条，自动补全剩余进度',
    default: '-',
  },
  {
    name: 'update',
    illustrate: '精确加载到指定的进度',
    default: 'percent，指定的进度百分比',
  },
]);

// configsData
const configsData = ref([
  {
    name: 'color',
    illustrate: '进度条的颜色',
    type: 'String',
    default: 'primary',
  },
  {
    name: 'failedColor',
    illustrate: '失败时的进度条颜色',
    type: 'String',
    default: 'error',
  },
  {
    name: 'height',
    illustrate: '进度条高度，单位 <code>px</code>',
    type: 'Number',
    default: '2',
  },
  {
    name: 'duration',
    illustrate: '隐藏时的持续时间，单位 <code>ms</code>',
    type: 'Number',
    default: '800',
  },
]);
</script>

<style lang="scss" scoped>
.loading-bar-wrapper {
  .ivue-table {
    margin-top: 10px;
  }

  .ul {
    padding-left: 25px;
  }

  .li {
    margin-bottom: 5px;
    line-height: 1.5;
    list-style: circle;
  }
}
</style>
