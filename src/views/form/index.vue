<template>
  <div class="form">
    <h1>Form 表单</h1>
    <p>
      具有数据收集、校验和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素
    </p>
    <h2>行内表单</h2>
    <p>
      设置属性
      <code>inline</code>
      ，表单元素可以水平排列
    </p>
    <doc-markdown :code="code.default">
      <template #demo>
        <default></default>
      </template>
    </doc-markdown>
    <h2>表单控件</h2>
    <p>
      在
      <code>ivue-form</code> 内，每个表单域由
      <code>ivue-form-item</code>
      组成
    </p>
    <p>
      给
      <code>ivue-form-item</code>
      设置属性
      <code>label</code>
      可以显示表单域的标签，设置
      <code>ivue-form</code>
      的
      <code>label-width</code>
      属性可以设置
      <code>label</code>
      的宽度
    </p>
    <p>
      给
      <code>ivue-form-item</code>
      设置属性
      <code>for</code>
      可以指定原生的
      <code>label</code>
      标签的
      <code>for</code>
      属性，配合设置控件的
      <code>id</code>
      属性
    </p>
    <doc-markdown :code="code.formItem">
      <template #demo>
        <form-item></form-item>
      </template>
    </doc-markdown>
    <h2>对齐方式</h2>
    <p>
      通过设置
      <code>label-position</code>
      属性可以改变表单域标签的位置，可选值为
      <code>top、left、right</code>， <code>top</code> 会置于表单域顶部
    </p>
    <doc-markdown :code="code.labelPosition">
      <template #demo>
        <label-position></label-position>
      </template>
    </doc-markdown>
    <h2>表单验证</h2>
    <p>
      <code>ivue-form</code>
      组件基于
      <a
        class="link"
        href="https://github.com/yiminghe/async-validator"
        target="_black"
        >async-validator</a
      >
      实现的数据验证，给
      <code>ivue-form</code>
      设置属性
      <code>rules</code>
      ，同时给需要验证的
      <code>ivue-form-item</code>
      设置属性
      <code>prop</code>
      指向对应字段即可
    </p>
    <p>
      完整的验证规则请参照开源项目
      <code>async-validator</code>
    </p>
    <doc-markdown :code="code.rules">
      <template #demo>
        <rules></rules>
      </template>
    </doc-markdown>
    <h2>自定义校验规则</h2>
    <p>如何使用自定义验证规则来完成密码的二次验证</p>
    <p>
      设置
      <code>show-success-status</code>
      属性，开启交验成功的提示
    </p>
    <doc-markdown :code="code.showSuccessStatus">
      <template #demo>
        <show-success-status></show-success-status>
      </template>
    </doc-markdown>
    <h2>动态增减表单项</h2>
    <p>
      除了一次通过表单组件上的所有验证规则外.
      您也可以动态地通过验证规则或删除单个表单字段的规则
    </p>
    <doc-markdown :code="code.dynamic">
      <template #demo>
        <dynamic></dynamic>
      </template>
    </doc-markdown>
    <h2>API</h2>
    <h3>Form Props</h3>
    <ivue-table :data="formProps" border>
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
        width="100"
      ></ivue-table-column>
    </ivue-table>

    <h3>Form Methods</h3>
    <ivue-table :data="formMethods" border>
      <ivue-table-column
        prop="name"
        label="名称"
        width="130"
      ></ivue-table-column>
      <ivue-table-column prop="illustrate" label="说明">
        <template #default="props">
          <p v-html="props.row.illustrate"></p>
        </template>
      </ivue-table-column>
      <ivue-table-column prop="value" label="参数">
        <template #default="props">
          <p v-html="props.row.value"></p>
        </template>
      </ivue-table-column>
    </ivue-table>

    <h3>Form Events</h3>
    <ivue-table :data="formEvents" border>
      <ivue-table-column
        prop="name"
        label="名称"
        width="130"
      ></ivue-table-column>
      <ivue-table-column prop="illustrate" label="说明">
        <template #default="props">
          <p v-html="props.row.illustrate"></p>
        </template>
      </ivue-table-column>
      <ivue-table-column prop="value" label="参数">
        <template #default="props">
          <p v-html="props.row.value"></p>
        </template>
      </ivue-table-column>
    </ivue-table>

    <h3>Form Slots</h3>
    <ivue-table :data="formSlots" border>
      <ivue-table-column
        prop="name"
        label="名称"
        width="130"
      ></ivue-table-column>
      <ivue-table-column prop="illustrate" label="说明"></ivue-table-column>
      <ivue-table-column prop="value" label="子标签"></ivue-table-column>
    </ivue-table>

    <h3>Form Item Props</h3>
    <ivue-table :data="formItemProps" border>
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
        width="100"
      ></ivue-table-column>
    </ivue-table>

    <h3>Form Item Rules</h3>
    <ivue-table :data="formItemRules" border>
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

    <h3>Form Item Methods</h3>
    <ivue-table :data="formItemMethods" border>
      <ivue-table-column
        prop="name"
        label="名称"
        width="130"
      ></ivue-table-column>
      <ivue-table-column prop="illustrate" label="说明">
        <template #default="props">
          <p v-html="props.row.illustrate"></p>
        </template>
      </ivue-table-column>
      <ivue-table-column prop="value" label="参数" width="100">
        <template #default="props">
          <p v-html="props.row.value"></p>
        </template>
      </ivue-table-column>
    </ivue-table>

    <h3>Form Item Slots</h3>
    <ivue-table :data="formItemSlots" border>
      <ivue-table-column
        prop="name"
        label="名称"
        width="130"
      ></ivue-table-column>
      <ivue-table-column prop="illustrate" label="说明"></ivue-table-column>
      <ivue-table-column
        prop="value"
        label="插槽作用域"
        width="100"
      ></ivue-table-column>
    </ivue-table>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import Code from '@/code/form';

import Default from '@/components/form/default.vue';
import FormItem from '@/components/form/form-item.vue';
import LabelPosition from '@/components/form/label-position.vue';
import Rules from '@/components/form/rules.vue';
import ShowSuccessStatus from '@/components/form/show-success-status.vue';
import Dynamic from '@/components/form/dynamic.vue';

const code = ref(Code);

// formProps
const formProps = ref([
  {
    name: 'model',
    illustrate: '表单数据对象',
    type: 'Object',
    default: '-',
  },
  {
    name: 'inline',
    illustrate: '行内表单模式',
    type: 'String | Number',
    default: '-',
  },
  {
    name: 'rules',
    illustrate: '表单验证规则',
    type: 'Object',
    default: '-',
  },
  {
    name: 'label-position',
    illustrate: '表单域标签的位置',
    type: 'Object',
    value: '<code>left</code> | <code>right</code> | <code>top</code>',
    default: 'right',
  },
  {
    name: 'require-asterisk-position',
    illustrate: '星号的位置',
    type: 'Object',
    value: '<code>left</code> | <code>right</code>',
    default: 'left',
  },
  {
    name: 'label-suffix',
    illustrate: '表单域标签的后缀',
    type: 'String',
    default: '-',
  },
  {
    name: 'label-width',
    illustrate:
      '标签的长度，例如 <code>50px</code>，作为 <code>Form</code> 直接子元素的 <code>form-item</code> 会继承该值，使用 <code>auto</code> 将匹配最长的那个子元素 <code>form-item</code> 宽度',
    type: 'String | Number',
    default: '-',
  },
  {
    name: 'show-message',
    illustrate: '是否显示校验错误信息',
    type: 'Boolean',
    default: 'true',
  },
  {
    name: 'show-success-status',
    illustrate: '显示验证成功的提示状态',
    type: 'Boolean',
    default: 'true',
  },
  {
    name: 'hide-required-asterisk',
    illustrate: '是否隐藏必填字段标签旁边的红色星号',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'validate-on-rule-change',
    illustrate: '是否在 <code>rules</code> 属性改变后立即触发一次验证',
    type: 'Boolean',
    default: 'true',
  },
  {
    name: 'disabled',
    illustrate: '是否禁用该表单内的所有组件',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'scroll-to-error',
    illustrate: '当校验失败时，滚动到第一个错误表单项',
    type: 'Boolean',
    default: 'false',
  },
]);

// formMethods
const formMethods = ref([
  {
    name: 'validate',
    illustrate:
      '对整个表单的内容进行验证。 接收一个回调函数，或返回 <code>Promise</code>',
    value:
      '(callback: (isValid: <code>是否通过验证</code>, invalidFields: <code>无效字段</code>)) => Promise',
  },
  {
    name: 'validateField',
    illustrate: '验证具体的某个字段',
    value:
      '(props: <code>需要验证的字段</code>, (callback: (isValid: <code>是否通过验证</code>, invalidFields: <code>无效字段</code>) => Promise',
  },
  {
    name: 'resetFields',
    illustrate: '重置该表单项，将其值重置为初始值，并移除校验结果',
    value: '(props: <code>需要移除的prop数组</code>) => void',
  },
  {
    name: 'scrollToField',
    illustrate: '滚动到指定的字段',
    value: '(props: <code>需要滚动到的prop字段</code>) => void',
  },
  {
    name: 'clearValidate',
    illustrate: '清理某个字段的表单验证信息',
    value: '(props: <code>需要清理的prop数组</code>) => void',
  },
]);

// formEvents
const formEvents = ref([
  {
    name: 'on-validate',
    illustrate: '任一表单项被校验后触发',
    value:
      '(prop: <code>验证的prop字段</code>, isValid: <code>是否通过验证</code>, message: <code>返回的验证提示信息</code>) => void',
  },
]);

// formSlots
const formSlots = ref([
  {
    name: '-',
    illustrate: '自定义默认内容',
    value: 'ivue-form-item',
  },
]);

// formItemProps
const formItemProps = ref([
  {
    name: 'prop',
    illustrate:
      "<code>model</code> 的键名。 它可以是一个路径数组(例如 ['a', 'b', 0])。 在定义了 <code>validate</code>、<code>resetFields</code> 的方法时，该属性是必填的",
    type: 'String | String[]',
    default: '-',
  },
  {
    name: 'label',
    illustrate: '标签文本',
    type: 'String',
    default: '-',
  },
  {
    name: 'label-width',
    illustrate: '标签宽度，例如 <code>50px</code>, 可以使用 <code>auto</code>',
    type: 'String | Number',
    default: '-',
  },
  {
    name: 'required',
    illustrate: '是否为必填项，如不设置，则会根据校验规则确认',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'rules',
    illustrate:
      '表单验证规则, 具体配置见下表, 更多内容可以参考 <a class="link"href="https://github.com/yiminghe/async-validator"target="_black">async-validator</a>',
    type: 'Object | Array',
    default: '-',
  },
  {
    name: 'show-message',
    illustrate: '是否显示校验错误信息',
    type: 'Boolean',
    default: 'true',
  },
  {
    name: 'show-success-status',
    illustrate: '显示验证成功的提示状态',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'validate-success-message',
    illustrate: '验证成功时显示的提示信息',
    type: 'String',
    default: '-',
  },
  {
    name: 'error',
    illustrate:
      '表单域验证错误时的提示信息。设置该值会导致表单验证状态变为 <code>error</code>，并显示该错误信息',
    type: 'Boolean',
    default: 'false',
  },
]);

// formItemRules
const formItemRules = ref([
  {
    name: 'trigger',
    illustrate: '验证逻辑的触发方式',
    value: '<code>blur</code> | <code>change</code>',
    default: '-',
  },
]);

// formItemMethods
const formItemMethods = ref([
  {
    name: 'resetField',
    illustrate: '对该表单项进行重置，将其值重置为初始值并移除校验结果',
    value: '() => void',
  },
  {
    name: 'clearValidate',
    illustrate: '移除该表单项的校验结果',
    value: '() => void',
  },
]);

// formItemSlots
const formItemSlots = ref([
  {
    name: '-',
    illustrate: '表单的内容',
    value: '-',
  },
  {
    name: 'label',
    illustrate: '标签位置显示的内容',
    value: '{ label }',
  },
  {
    name: 'error',
    illustrate: '验证错误信息的显示内容',
    value: '{ error }',
  },
  {
    name: 'success',
    illustrate: '验证成功信息的显示内容',
    value: '-',
  },
]);
</script>

<style lang="scss">
.form {
  .link {
    margin: 0;
    color: var(--ivue-primary-color);
  }
}
</style>
