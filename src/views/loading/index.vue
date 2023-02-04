<template>
  <div>
    <h1>区域加载</h1>
    <p>在需要的时候展示加载动画，防止页面失去响应提高用户体验（例如表格)</p>
    <h2>基础用法</h2>
    <p>该组件提供了两种调用 Loading 的方法：指令和服务</p>
    <p>
      对于自定义指令
      <code>v-loading</code>，只需要绑定 <code>boolean</code> 值即可
    </p>
    <p>
      通过添加
      <code>body</code> 修饰符，可以使遮罩插入至 <code>Dom</code> 中的
      <code>body</code> 上
    </p>
    <doc-markdown :code="code.default">
      <template #demo>
        <default></default>
      </template>
    </doc-markdown>
    <h2>自定义加载中组件内容</h2>
    <p>你可以自定义加载中组件的文字，图标，以及背景颜色</p>
    <p>
      在绑定了
      <code>v-loading</code> 指令的元素上添加
      <code>ivue-loading-text</code>
      属性，其值会被渲染为加载文案，并显示在加载图标的下方
    </p>
    <p>
      <code>ivue-loading-spinner</code>自定义加载图标类名，
      <code>ivue-loading-background</code>遮罩背景色，
      <code>ivue-loading-icon-class</code>自定义加载图标类名，
      <code>ivue-loading-icon-text</code>自定义加载图标的内容
    </p>
    <doc-markdown :code="code.customize">
      <template #demo>
        <customize></customize>
      </template>
    </doc-markdown>
    <h2>让加载组件铺满整个屏幕</h2>
    <p>加载数据时显示全屏动画</p>
    <p>
      当使用指令方式时，全屏遮罩需要添加
      <code>fullscreen</code>修饰符（遮罩会插入至 <code>body</code> 上）
    </p>
    <p>
      此时若需要锁定屏幕的滚动，可以使用
      <code>lock</code>修饰符； 当使用服务方式时，遮罩默认即为全屏，无需额外设置
    </p>
    <doc-markdown :code="code.fullscreen">
      <template #demo>
        <fullscreen></fullscreen>
      </template>
    </doc-markdown>
    <h2>以方法的方式来调用</h2>
    <p>
      <code>Loading</code> 还可以以方法的方式调用。 你可以像这样引入
      <code>Loading</code> 方法
    </p>
    <pre-code>import { IvueLoading } from 'ivue-material-plus'</pre-code>
    <p>在你需要的时候通过下面的方式调用</p>
    <pre-code>IvueLoading.$loading(options)</pre-code>
    <p>
      在
      <code>setup</code>中使用
    </p>
    <pre-code>{{ code.setup }}</pre-code>
    <p>
      其中
      <code>options</code>参数为 <code>Loading</code> 的配置项，具体见下表
    </p>
    <p>
      <code>Loading</code> 会返回一个
      <code>Loading</code> 实例，可通过调用该实例的
      <code>close</code> 方法来关闭它：
    </p>
    <pre-code>{{ code.close }}</pre-code>
    <p>
      需要注意的是，以服务的方式调用的全屏 Loading 是单例的。 若在前一个全屏
      Loading 关闭前再次调用全屏 Loading，并不会创建一个新的 Loading
      实例，而是返回现有全屏 Loading 的实例
    </p>
    <pre-code>{{ code.singleton }}</pre-code>
    <p>
      此时调用它们中任意一个的
      <code>close</code> 方法都能关闭这个全屏
      <code>Loading</code>
    </p>
    <p>
      如果完整引入了 Ivue Material Plus，那么
      <code>app.config.globalProperties</code>上会有一个全局方法，
      <code>$loading</code>， 它的调用方式为：
      <code>this.$loading(options)</code>，同样会返回一个
      <code>Loading</code> 实例。
    </p>
    <h2>Options</h2>
    <ivue-table :data="optionsData" border>
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
        label="默认值"
        width="200"
      ></ivue-table-column>
    </ivue-table>
    <h2>Directives</h2>
    <ivue-table :data="directivesData" border>
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
    </ivue-table>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import Code from '@/code/loading';

import Default from '@/components/loading/default.vue';
import Customize from '@/components/loading/customize.vue';
import Fullscreen from '@/components/loading/fullscreen.vue';

const code = ref(Code);

const optionsData = ref([
  {
    name: 'target',
    illustrate:
      '<code>Loading</code> 需要覆盖的 <code>DOM</code> 节点。 可传入一个 <code>DOM</code> 对象或字符串； 若传入字符串，则会将其作为参数传入 <code>document.querySelector</code> 以获取到对应 <code>DOM</code> 节点',
    type: 'Object | String',
    default: 'document.body',
  },
  {
    name: 'body',
    illustrate:
      '同 <code>v-loading</code> 指令中的 <code>body</code> 修饰符，使遮罩插入至 <code>Dom</code> 中的 <code>body</code> 上',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'fullscreen',
    illustrate:
      '同 <code>v-loading</code> 指令中的 <code>fullscreen</code> 修饰符，让加载组件铺满整个屏幕',
    type: 'Boolean',
    default: 'true',
  },
  {
    name: 'lock',
    illustrate:
      '同 <code>v-loading</code> 指令中的 <code>lock</code> 修饰符，锁定屏幕的滚动',
    type: 'Boolean',
    default: 'true',
  },
  {
    name: 'text',
    illustrate: '显示在加载图标下方的加载文案',
    type: 'String',
    default: '-',
  },
  {
    name: 'spinner',
    illustrate: '自定义加载图标类名',
    type: 'String',
    default: '-',
  },
  {
    name: 'background',
    illustrate: '遮罩背景色',
    type: 'String',
    default: '-',
  },
  {
    name: 'custom-class',
    illustrate: 'Loading 的自定义类名',
    type: 'String',
    default: '-',
  },
  {
    name: 'icon-class',
    illustrate: '自定义加载图标类名',
    type: 'String',
    default: '-',
  },
  {
    name: 'icon-text',
    illustrate: '自定义加载图标内容',
    type: 'String',
    default: '-',
  },
  {
    name: 'loading-spinner',
    illustrate: '通过 <code>Render</code> 函数，自定义旋转图标',
    type: 'VNode',
    default: '-',
  },
]);

const directivesData = ref([
  {
    name: 'v-loading',
    illustrate: '是否显示动画',
    type: 'Boolean',
  },
  {
    name: 'ivue-loading-text',
    illustrate: '显示在加载图标下方的加载文案',
    type: 'string',
  },
  {
    name: 'ivue-loading-background',
    illustrate: '遮罩背景色',
    type: 'string',
  },
  {
    name: 'ivue-loading-icon-class',
    illustrate: '自定义加载图标类名',
    type: 'string',
  },
  {
    name: 'ivue-loading-icon-text',
    illustrate: '自定义加载图标内容',
    type: 'string',
  },
  {
    name: 'ivue-loading-custom-class',
    illustrate: '<code>Loading</code> 的自定义类名',
    type: 'string',
  },
]);
</script>

<style lang="scss" scoped></style>
