<template>
  <div class="modal-wrapper">
    <h1>Modal 对话框</h1>
    <p>模态对话框，在浮层中显示，引导用户进行相关操作</p>
    <p>
      <code>ivue-modal</code>
      提供了两种用法，普通组件使用和实例调用
    </p>
    <h2>基础用法</h2>
    <p>
      最简单的使用方法，通过控制属性
      <code>model-value</code>
      来显示 / 隐藏对话框
    </p>
    <p>
      可以使用
      <code>v-model</code> 实现双向绑定
    </p>
    <p>
      默认按键盘
      <code>ESC</code>
      键也可以关闭
    </p>
    <doc-markdown :code="code.default">
      <template #demo>
        <default></default>
      </template>
    </doc-markdown>
    <h2>自定义样式</h2>
    <p>
      <code>ivue-modal</code> 组件提供了灵活的自定义样式 <code>API</code> 和
      <code>Slot</code>
    </p>
    <p>可以自由控制整个 Modal 的各个组成部分，比如页头、页脚、关闭按钮</p>
    <doc-markdown :code="code.styles">
      <template #demo>
        <styles></styles>
      </template>
    </doc-markdown>
    <h2>异步关闭</h2>
    <p>
      设置
      <code>loading</code>
      属性后，点击确定按钮对话框不会自动消失，并显示
      <code>loading</code> 状态，需要手动关闭对话框，
    </p>
    <p>
      <code>loading</code>
      状态分为两种
      <code>spin</code>
      和
      <code>button</code> ， 通过设置
      <code>loading-type</code>
      修改状态类型，默认为
      <code>spin</code>
    </p>
    <doc-markdown :code="code.loading">
      <template #demo>
        <loading></loading>
      </template>
    </doc-markdown>
    <h2>禁用关闭</h2>
    <p>
      设置
      <code>closable</code>
      禁用关闭按钮时同时会禁用键盘
      <code>Esc</code>
      关闭，设置
      <code>mask-closable</code>
      禁用点击遮罩层关闭
    </p>
    <doc-markdown :code="code.closable">
      <template #demo>
        <closable></closable>
      </template>
    </doc-markdown>
    <h2>自定义位置</h2>
    <p>
      可以自定义
      <code>ivue-modal</code>
      的对话框样式 以及 对话框
      <code>wrapper</code> 的
      <code>class</code> 名称，从而实现更多自定义的样式，比如垂直居中
    </p>
    <doc-markdown :code="code.classes">
      <template #demo>
        <classes></classes>
      </template>
    </doc-markdown>
    <h2>全屏</h2>
    <p>
      设置
      <code>fullscreen</code>
      可以全屏显示，设置
      <code>footer-hide</code>
      可以隐藏底部内容
    </p>
    <doc-markdown :code="code.fullscreen">
      <template #demo>
        <fullscreen></fullscreen>
      </template>
    </doc-markdown>
    <h2>拖拽移动</h2>
    <p>
      设置
      <code>draggable</code>
      对话框可以进行拖拽移动
    </p>
    <p>
      设置
      <code>sticky</code>
      不会拖出屏幕边缘，可通过设置
      <code>sticky-distance</code>
      调整自动吸附的临界距离
    </p>
    <p>
      设置
      <code>reset-drag-position</code>
      可使
      <code>ivue-modal</code>
      再次打开时，会重置拖拽的位置
    </p>
    <p>
      <code>mask</code>
      属性将不再生效
    </p>
    <doc-markdown :code="code.draggable">
      <template #demo>
        <draggable></draggable>
      </template>
    </doc-markdown>
    <h2>重新渲染内容</h2>
    <p>
      设置
      <code>reset-body</code>
      将使用
      <code>v-if</code>
      重新渲染body内容，对于输入框表单重新渲染很有用
    </p>
    <doc-markdown :code="code.resetBody" :showPlayground="false">
      <template #demo>
        <reset-body></reset-body>
      </template>
    </doc-markdown>
    <h2>实例化使用方法</h2>
    <p>
      除了上述通过标准组件的使用方法，还封装了一些实例方法，用来创建一次性的轻量级对话框
    </p>
    <p>
      实例以隐式创建
      <code>Vue</code>
      组件的方式在全局创建一个对话框，并在消失时移除，所以同时只能操作一个对话框
    </p>
    <h2>基本用法</h2>
    <p>
      通过实例
      <code>$IvueModal</code>
      调用四种基本的对话框
    </p>
    <doc-markdown :code="code.instance">
      <template #demo>
        <instance></instance>
      </template>
    </doc-markdown>
    <h2>确认对话框</h2>
    <p>快速弹出确认对话框，并且可以自定义按钮文字及异步关闭</p>
    <doc-markdown :code="code.confirm">
      <template #demo>
        <confirm></confirm>
      </template>
    </doc-markdown>
    <h2>自定义内容</h2>
    <p>
      使用
      <code>render</code>
      字段可以基于
      <code>Render</code>
      函数来自定义内容
    </p>
    <p>
      使用
      <code>render</code>
      后，将不再限制类型，
      <code>content</code>
      也将无效
    </p>
    <doc-markdown :code="code.render">
      <template #demo>
        <render></render>
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
      <ivue-table-column prop="name" label="事件名"></ivue-table-column>
      <ivue-table-column prop="illustrate" label="说明" min-width="300">
        <template #default="props">
          <p v-html="props.row.illustrate"></p>
        </template>
      </ivue-table-column>
    </ivue-table>
    <h2>Modal Instance</h2>
    <p>通过直接调用以下方法来使用</p>
    <ul class="ul">
      <li class="li">
        <code>this.$IvueModal.info(config)</code>
      </li>
      <li class="li">
        <code>this.$IvueModal.success(config)</code>
      </li>
      <li class="li">
        <code>this.$IvueModal.warning(config)</code>
      </li>
      <li class="li">
        <code>this.$IvueModal.error(config)</code>
      </li>
      <li class="li">
        <code>this.$IvueModal.confirm(config)</code>
      </li>
      <li class="li">
        <code>this.$IvueModal.remove()</code>
      </li>
    </ul>
    <p>
      参数
      <code>config</code> 为对象，具体说明如下
    </p>
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
  </div>
</template>

<script setup>
import { ref } from 'vue';

import Code from '@/code/modal';
import Default from '@/components/modal/default.vue';
import Styles from '@/components/modal/styles.vue';
import Loading from '@/components/modal/loading.vue';
import Closable from '@/components/modal/closable.vue';
import Classes from '@/components/modal/classes.vue';
import Fullscreen from '@/components/modal/fullscreen.vue';
import Draggable from '@/components/modal/draggable.vue';
import ResetBody from '@/components/modal/reset-body.vue';
import Instance from '@/components/modal/instance.vue';
import Confirm from '@/components/modal/confirm.vue';
import Render from '@/components/modal/render.vue';

const code = ref(Code);

// propsData
const propsData = ref([
  {
    name: 'model-value',
    illustrate: '对话框是否显示，可使用 <code>v-model</code> 双向绑定数据',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'title',
    illustrate:
      '对话框标题，如果使用 <code>slot = header</code> 自定义了，则 <code>title</code> 无效',
    type: 'String',
    default: '-',
  },
  {
    name: 'transfer',
    illustrate: '是否将弹层放置于 <code>body</code> 内',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'transition-names',
    illustrate: '自定义显示动画，第一项是模态框，第二项是背景',
    type: 'Array',
    default: "['zoom', 'fade']",
  },
  {
    name: 'z-index',
    illustrate: '对话框层级',
    type: 'Number',
    default: '1000',
  },
  {
    name: 'mask',
    illustrate: '是否显示遮罩层',
    type: 'Boolean',
    default: 'true',
  },
  {
    name: 'mask-closable',
    illustrate: '是否允许点击遮罩层关闭',
    type: 'Boolean',
    default: 'true',
  },
  {
    name: 'mask-closable',
    illustrate: '是否允许点击遮罩层关闭',
    type: 'Boolean',
    default: 'true',
  },
  {
    name: 'before-close',
    illustrate: '返回 <code>Promise</code> 可以阻止关闭',
    type: 'Function',
    default: '-',
  },
  {
    name: 'modal-wrapper-classes',
    illustrate:
      '设置对话框容器 <code>.ivue-modal-wrapper</code> 的类名，可辅助实现垂直居中等自定义效果',
    type: 'String',
    default: '-',
  },
  {
    name: 'scrollable',
    illustrate: '页面是否可以滚动',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'width',
    illustrate:
      '对话框宽度，对话框的宽度是响应式的，当屏幕尺寸小于 <code>576px</code> 时，宽度会变为自动 <code>auto</code> 。当其值不大于 <code>100</code> 时以百分比显示，大于 <code>100</code> 时为像素',
    type: 'Number | String',
    default: '520',
  },
  {
    name: 'styles',
    illustrate:
      '设置浮层样式，调整浮层位置等，该属性设置的是 <code>.ivue-modal</code> 的样式',
    type: 'Object',
    default: '-',
  },
  {
    name: 'close-icon',
    illustrate: '设置关闭按钮图标',
    type: 'String',
    default: 'cancel',
  },
  {
    name: 'closable',
    illustrate: '是否显示关闭按钮',
    type: 'Boolean',
    default: 'true',
  },
  {
    name: 'cancel-text',
    illustrate: '关闭文案',
    type: 'String',
    default: '取消',
  },
  {
    name: 'confirm-text',
    illustrate: '确定按钮文字',
    type: 'String',
    default: '确认',
  },
  {
    name: 'loading',
    illustrate:
      '点击确定按钮时，确定按钮是否显示 <code>loading</code> 状态，开启则需手动设置 <code>model-value</code> 来关闭对话框',
    type: 'String',
    default: '确认',
  },
  {
    name: 'loading-type',
    illustrate: 'loading状态类型',
    type: 'String',
    value: '<code>spin</code> | <code>button</code>',
    default: 'spin',
  },
  {
    name: 'top',
    illustrate: '弹窗到顶部的距离',
    type: 'Number',
    default: '100',
  },
  {
    name: 'reset-drag-position',
    illustrate: '<code>ivue-modal</code> 再次打开时，是否重置拖拽的位置',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'center',
    illustrate: '<code>ivue-modal</code> 垂直居中显示',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'fullscreen',
    illustrate: '是否全屏显示',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'footer-hide',
    illustrate: '不显示底部',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'draggable',
    illustrate: '是否可以拖拽移动',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'sticky',
    illustrate: '拖拽时，是否吸附屏幕边缘',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'sticky-distance',
    illustrate: '拖拽时，自动吸附屏幕边缘的临界距离',
    type: 'Number',
    default: '10',
  },
  {
    name: 'render',
    illustrate: '自定义内容，使用后不再限制类型， <code>content</code> 也无效',
    type: 'Function',
    default: '-',
  },
  {
    name: 'reset-body',
    illustrate: '使用 <code>v-if</code> 重新渲染 <code>body</code> 内容',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'lock-scroll',
    illustrate: '是否禁止对页面滚动条的修改',
    type: 'Boolean',
    default: 'true',
  },
]);

// eventsData
const eventsData = ref([
  {
    name: 'on-cancel',
    illustrate: '点击取消的回调',
    value: '-',
  },
  {
    name: 'on-hidden',
    illustrate: '对话框动画结束隐藏',
    value: '-',
  },
  {
    name: 'on-confirm',
    illustrate: '点击确定的回调',
    value: '-',
  },
  {
    name: 'on-visible-change',
    illustrate: '显示状态发生变化时触发',
    value: 'true / false',
  },
]);

// slotsData
const slotsData = ref([
  {
    name: 'default',
    illustrate: '对话框主体内容',
  },
  {
    name: 'header',
    illustrate: '自定义标题',
  },
  {
    name: 'footer',
    illustrate: '自定义底部',
  },
  {
    name: 'close',
    illustrate: '自定义右上角关闭内容',
  },
]);

// configsData
const configsData = ref([
  {
    name: 'width',
    illustrate: '宽度，单位 px',
    type: 'Number ｜ String',
    default: '416',
  },
  {
    name: 'title',
    illustrate: '标题',
    type: 'String',
    default: '-',
  },
  {
    name: 'content',
    illustrate: '内容',
    type: 'String',
    default: '-',
  },
  {
    name: 'cancel-text',
    illustrate: '关闭按钮文案',
    type: 'String',
    default: '取消',
  },
  {
    name: 'confirm-text',
    illustrate: '确定按钮文案',
    type: 'String',
    default: '确认',
  },
  {
    name: 'loading',
    illustrate:
      '点击确定按钮时，确定按钮是否显示 <code>loading</code> 状态，开启则需手动调用 <code>$IvueModal.remove()</code> 来关闭对话框',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'loading-type',
    illustrate: 'loading状态类型',
    type: 'String',
    value: '<code>spin</code> | <code>button</code>',
    default: 'spin',
  },
  {
    name: 'scrollable',
    illustrate: '页面是否可以滚动',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'closable',
    illustrate: '是否显示关闭按钮',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'closable',
    illustrate: '是否显示关闭按钮',
    type: 'Boolean',
    default: 'false',
  },
]);
</script>

<style lang="scss" scoped>
.modal-wrapper {
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
