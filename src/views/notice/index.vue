<template>
  <div class="notice-wrapper">
    <h1>Notice 通知提醒</h1>
    <p>在界面右上角显示可关闭的全局通知，常用于以下场景:</p>
    <p>1.通知内容带有描述信息</p>
    <p>2.系统主动推送</p>
    <h2>基础用法</h2>
    <p>
      基本用法，默认在
      <code>4.5</code>秒后关闭。如果
      <code>desc</code>参数为空或不填，则自动应用仅标题模式下的样式
    </p>
    <doc-markdown :code="code.default">
      <template #demo>
        <default></default>
      </template>
    </doc-markdown>
    <h1>提醒类型</h1>
    <p>带有状态图标的提醒</p>
    <doc-markdown :code="code.status">
      <template #demo>
        <status></status>
      </template>
    </doc-markdown>
    <h1>自定义时长</h1>
    <p>
      自定义时长，为
      <code>0</code> 则不自动关闭。也可以在
      <code>Notice.config</code>中全局配置，详见API
    </p>
    <doc-markdown :code="code.customDuration">
      <template #demo>
        <custom-duration></custom-duration>
      </template>
    </doc-markdown>
    <h2>自定义弹出位置</h2>
    <p>
      通过设置选项
      <code>position</code>，可自定义弹出位置，默认右上角弹出
    </p>
    <doc-markdown :code="code.position">
      <template #demo>
        <position></position>
      </template>
    </doc-markdown>
    <h2>自定义通知提醒</h2>
    <p>
      你可以自定义
      <code>Render</code> 函数来替代
      <code>desc</code>
    </p>
    <p>
      可以通过设置
      <code>offset</code>，设置通知提醒偏移的位置
    </p>
    <p>
      可以通过设置
      <code>id</code>，设置通知提醒的一标识
    </p>
    <doc-markdown :code="code.custom">
      <template #demo>
        <custom></custom>
      </template>
    </doc-markdown>
    <h2>API</h2>
    <p>通过直接调用以下方法来使用组件:</p>
    <ul class="ul">
      <li class="li">
        <code>this.$notice.open(options)</code>
      </li>
      <li class="li">
        <code>this.$notice.info(options)</code>
      </li>
      <li class="li">
        <code>this.$notice.success(options)</code>
      </li>
      <li class="li">
        <code>this.$notice.warning(options)</code>
      </li>
      <li class="li">
        <code>this.$notice.error(options)</code>
      </li>
    </ul>
    <p>
      参数
      <code>options</code> 为对象，具体说明如下
    </p>
    <ivue-table :data="optionsData" border>
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
      <ivue-table-column prop="value" label="可选值" width="200">
        <template #default="props">
          <p v-html="props.row.value || '-'"></p>
        </template>
      </ivue-table-column>
      <ivue-table-column
        prop="default"
        label="默认值"
        width="100"
      ></ivue-table-column>
    </ivue-table>
    <p>另外提供了全局配置、全局关闭某个通知和全局销毁的方法</p>
    <ul class="ul">
      <li class="li">
        <code>this.$notice.config(options)</code>
      </li>
      <li class="li">
        <code
          >this.$notice.close(id(通知id), position(通知定位策略),
          userOnClose(关闭时调用的回调))</code
        >
      </li>
      <li class="li">
        <code>this.$notice.closeAll()</code>
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
    <h3>注意：引入多个组件库名称冲突时需重新定义全局方法名称</h3>
    <pre-code>{{ code.tips }}</pre-code>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import Code from '@/code/notice';

import Default from '@/components/notice/default.vue';
import Status from '@/components/notice/status.vue';
import CustomDuration from '@/components/notice/custom-duration.vue';
import Position from '@/components/notice/position.vue';
import Custom from '@/components/notice/custom.vue';

const code = ref(Code);

// optionsData
const optionsData = ref([
  {
    name: 'title',
    illustrate: '通知提醒的标题',
    type: 'String',
    default: '-',
  },
  {
    name: 'desc',
    illustrate: '通知提醒的内容，为空或不填时，自动应用仅标题模式下的样式',
    type: 'String',
    default: '-',
  },
  {
    name: 'render',
    illustrate:
      '自定义描述内容，使用 <code>Vue</code> 的 <code>Render</code> 函数，如果同时设置了 <code>render</code> 和 <code>desc</code>，则只显示 <code>render</code> 的内容',
    type: 'Function',
    default: '-',
  },
  {
    name: 'duration',
    illustrate: '自动关闭的延时，单位毫秒，不关闭可以写 0',
    type: 'Number',
    default: '4500',
  },
  {
    name: 'onClose',
    illustrate: '关闭时的回调',
    type: 'Function',
    default: '-',
  },
  {
    name: 'className',
    illustrate: '通知提醒的外层样式',
    type: 'String',
    default: '-',
  },
  {
    name: 'closable',
    illustrate: '是否有关闭按钮',
    type: 'Boolean',
    default: 'true',
  },
  {
    name: 'offset',
    illustrate: '通知提醒偏移位置，向下或向上',
    type: 'Number',
    default: '0',
  },
  {
    name: 'position',
    illustrate: '通知提醒弹出位置',
    type: 'String',
    value:
      '<code>top-right</code> | <code>top-left</code> | <code>bottom-right</code> | <code>bottom-left</code>',
    default: 'top-right',
  },
  {
    name: 'id',
    illustrate: '当前通知的唯一标识，用于自定义关闭某个通知',
    type: 'String',
  },
]);

// configsData
const configsData = ref([
  {
    name: 'offset',
    illustrate: '通知组件距离顶端的距离，单位像素',
    type: 'Number',
    default: '0',
  },
  {
    name: 'duration',
    illustrate: '默认自动关闭的延时，单位秒',
    type: 'Number',
    default: '4500',
  },
]);
</script>

<style lang="scss" scoped>
.notice-wrapper {
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
