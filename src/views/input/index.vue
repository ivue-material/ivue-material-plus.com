<template>
    <div>
        <h1>Input 输入框</h1>
        <p>
            基本表单组件，支持
            <code>input</code> 和
            <code>textarea</code>，并在原生控件基础上进行了功能扩展，可以组合使用
        </p>
        <h2>基础用法</h2>
        <p>
            基本用法，可以使用
            <code>v-model</code> 实现数据的双向绑定。
            可以直接设置
            <code>style</code> 来改变输入框的宽度，默认
            <code>100%</code>
        </p>
        <doc-markdown :code="code.default">
            <template #demo>
                <default></default>
            </template>
        </doc-markdown>
        <h2>尺寸</h2>
        <p>输入框有三种尺寸：大、默认（中）、小</p>
        <p>
            通过设置
            <code>size</code> 为
            <code>large</code> 和
            <code>small</code> 设置为大和小尺寸，不设置为默认（中）尺寸
        </p>
        <doc-markdown :code="code.size">
            <template #demo>
                <size></size>
            </template>
        </doc-markdown>
        <h2>可清空</h2>
        <p>
            开启属性
            <code>clearable</code> 可显示清空按钮
        </p>
        <doc-markdown :code="code.clearable">
            <template #demo>
                <clearable></clearable>
            </template>
        </doc-markdown>
        <h2>输入长度限制</h2>
        <p>
            开启属性
            <code>show-word-limit</code> 可以显示字数统计，需配合
            <code>maxlength</code> 属性来限制输入长度
        </p>
        <doc-markdown :code="code.showWordLimit">
            <template #demo>
                <show-word-limit></show-word-limit>
            </template>
        </doc-markdown>
        <h2>密码框</h2>
        <p>
            在
            <code>type="password"</code> 时，开启属性
            <code>password</code> 可以切换显示隐藏密码
        </p>
        <doc-markdown :code="code.password">
            <template #demo>
                <password></password>
            </template>
        </doc-markdown>
        <h2>前缀和后缀图标</h2>
        <p>
            通过设置
            <code>prefix</code> 和
            <code>suffix</code> 及同名
            <code>slot</code> 设置前缀及后缀图标
        </p>
        <doc-markdown :code="code.prefixSuffix">
            <template #demo>
                <prefix-suffix></prefix-suffix>
            </template>
        </doc-markdown>
        <h2>搜索框</h2>
        <p>
            开启
            <code>search</code> 属性，可以设置为搜索型输入框
        </p>
        <doc-markdown :code="code.search">
            <template #demo>
                <search></search>
            </template>
        </doc-markdown>
        <h2>文本域</h2>
        <p>
            通过设置属性
            <code>type</code> 为
            <code>textarea</code> 来使用文本域，用于多行输入
        </p>
        <p>
            通过设置属性
            <code>rows</code> 控制文本域默认显示的行数
        </p>
        <doc-markdown :code="code.textarea">
            <template #demo>
                <is-textarea></is-textarea>
            </template>
        </doc-markdown>
        <h2>适应文本高度的文本域</h2>
        <p>
            设置属性
            <code>autosize</code>，文本域会自动适应高度的变化
        </p>
        <p>
            <code>autosize</code> 也可以设定为一个对象，指定最小行数和最大行数
        </p>
        <doc-markdown :code="code.autosize">
            <template #demo>
                <autosize></autosize>
            </template>
        </doc-markdown>
        <h2>禁用状态</h2>
        <p>
            通过添加
            <code>disabled</code> 属性可设置为不可用状态
        </p>
        <doc-markdown :code="code.disabled">
            <template #demo>
                <disabled></disabled>
            </template>
        </doc-markdown>
        <h2>无边框</h2>
        <p>
            通过设置属性
            <code>border</code> 可以不显示边框
        </p>
        <doc-markdown :code="code.noBorder">
            <template #demo>
                <no-border></no-border>
            </template>
        </doc-markdown>
        <h2>复合型输入框</h2>
        <p>通过前置和后置的 slot 可以实现复合型的输入框</p>
        <doc-markdown :code="code.compound">
            <template #demo>
                <compound></compound>
            </template>
        </doc-markdown>
        <h2>外部事件</h2>
        <p>通过外部事件操作输入框</p>
        <doc-markdown :code="code.emit">
            <template #demo>
                <emit></emit>
            </template>
        </doc-markdown>
        <h2>Props</h2>
        <ivue-table :data="propsData" border>
            <ivue-table-column prop="name" label="名称" width="200"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="200">
                <template #default="props">
                    <p v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="type" label="类型" width="200"></ivue-table-column>
            <ivue-table-column prop="value" label="可选值" width="200">
                <template #default="props">
                    <p v-html="props.row.value"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="default" label="默认" width="200"></ivue-table-column>
        </ivue-table>
        <h2>Events</h2>
        <ivue-table :data="eventsData" border>
            <ivue-table-column prop="name" label="名称" width="200"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="200">
                <template #default="props">
                    <p v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="value" label="返回值" width="200"></ivue-table-column>
        </ivue-table>
        <h2>Slots</h2>
        <ivue-table :data="slotsData" border>
            <ivue-table-column prop="name" label="名称" width="200"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="200">
                <template #default="props">
                    <p v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
        </ivue-table>
        <h2>Methods</h2>
        <ivue-table :data="methodsData" border>
            <ivue-table-column prop="name" label="名称" width="200"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="200">
                <template #default="props">
                    <p v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="value" label="参数" width="400"></ivue-table-column>
        </ivue-table>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import Code from '@/code/input';

import Default from '@/components/input/default.vue';
import Size from '@/components/input/size.vue';
import Clearable from '@/components/input/clearable.vue';
import IsTextarea from '@/components/input/textarea.vue';
import ShowWordLimit from '@/components/input/showWordLimit.vue';
import Password from '@/components/input/password.vue';
import PrefixSuffix from '@/components/input/prefixSuffix.vue';
import Search from '@/components/input/search.vue';
import Autosize from '@/components/input/autosize.vue';
import Disabled from '@/components/input/disabled.vue';
import NoBorder from '@/components/input/no-border.vue';
import Compound from '@/components/input/compound.vue';
import Emit from '@/components/input/emit.vue';

const code = ref(Code);

// propsData
const propsData = ref([
    {
        name: 'model-value',
        illustrate: '绑定的值，可使用 v-model 双向绑定',
        type: 'String | Number',
        value: '-',
        default: '-',
    },
    {
        name: 'type',
        illustrate: '输入框类型',
        type: 'String',
        value: '-',
        default: 'text',
    },
    {
        name: 'size',
        illustrate: '输入框尺寸，可选值为',
        type: 'String',
        value: '<code>large</code> | <code>small</code> | <code>default</code>',
        default: 'default',
    },
    {
        name: 'placeholder',
        illustrate: '占位文本',
        type: 'String',
        value: '-',
        default: '-',
    },
    {
        name: 'clearable',
        illustrate: '是否显示清空按钮',
        type: 'Boolean',
        value: '-',
        default: 'false',
    },
    {
        name: 'border',
        illustrate: '是否显示边框',
        type: 'Boolean',
        value: '-',
        default: 'false',
    },
    {
        name: 'disabled',
        illustrate: '设置输入框为禁用状态',
        type: 'Boolean',
        value: '-',
        default: 'false',
    },
    {
        name: 'readonly',
        illustrate: '设置输入框为只读',
        type: 'Boolean',
        value: '-',
        default: 'false',
    },
    {
        name: 'maxlength',
        illustrate: '最大输入长度',
        type: 'Number',
        value: '-',
        default: '-',
    },
    {
        name: 'show-word-limit',
        illustrate:
            '是否显示输入字数统计，可以配合 <code>maxlength</code> 使用',
        type: 'Boolean',
        value: '-',
        default: 'false',
    },
    {
        name: 'password',
        illustrate: '是否显示切换密码图标',
        type: 'Boolean',
        value: '-',
        default: 'false',
    },
    {
        name: 'prefix',
        illustrate: '输入框头部图标',
        type: 'String',
        value: '-',
        default: '-',
    },
    {
        name: 'suffix',
        illustrate: '输入框尾部图标',
        type: 'String',
        value: '-',
        default: '-',
    },
    {
        name: 'search',
        illustrate: '是否显示为搜索型输入框',
        type: 'Boolean',
        value: '-',
        default: '-',
    },
    {
        name: 'enter-button',
        illustrate:
            '开启 <code>search</code> 时可用，是否有确认按钮，可设为按钮文字',
        type: 'Boolean | String',
        value: '-',
        default: 'false',
    },
    {
        name: 'rows',
        illustrate: '文本域默认行数，仅在 <code>textarea</code> 类型下有效',
        type: 'Number',
        value: '-',
        default: '2',
    },
    {
        name: 'auto-height',
        illustrate:
            '自适应内容高度，仅在 <code>textarea</code> 类型下有效，可传入对象，如 <code>{ minRows: 2, maxRows: 6 }</code>',
        type: 'Boolean | Object',
        value: '-',
        default: 'false',
    },
    {
        name: 'number',
        illustrate: '只允许用户输入number',
        type: 'Boolean',
        value: '-',
        default: 'false',
    },
    {
        name: 'input-function',
        illustrate:
            '自定义输入方法,可以自定义过滤输入值内容等,如:只允许输入数字',
        type: 'Function',
        value: '-',
        default: '-',
    },
    {
        name: 'autofocus',
        illustrate: '自动获取焦点',
        type: 'Boolean',
        value: '-',
        default: 'false',
    },
    {
        name: 'autocomplete',
        illustrate: '原生的自动完成功能',
        type: 'String',
        value: '-',
        default: 'off',
    },
    {
        name: 'spellcheck',
        illustrate: '原生的 <code>spellcheck</code> 属性',
        type: 'Boolean',
        value: '-',
        default: 'false',
    },
    {
        name: 'wrap',
        illustrate:
            '原生的 <code>wrap</code> 属性，仅在 <code>textarea</code> 下生效',
        type: 'String',
        value: '<code>hard</code> | <code>soft</code>',
        default: 'soft',
    },
]);

// eventsData
const eventsData = ref([
    {
        name: 'on-change',
        illustrate: '数据改变时触发',
        value: 'value',
    },
    {
        name: 'on-clear',
        illustrate: '开启 <code>clearable</code> 时可用，点击清空按钮时触发',
        value: '-',
    },
    {
        name: 'on-focus',
        illustrate: '输入框聚焦时触发',
        value: 'event',
    },
    {
        name: 'on-blur',
        illustrate: '输入框聚焦时触发',
        value: 'event',
    },
    {
        name: 'on-enter',
        illustrate: '按下回车键时触发',
        value: 'event',
    },
    {
        name: 'on-keyup',
        illustrate: '原生的 <code>keyup</code> 事件',
        value: 'event',
    },
    {
        name: 'on-keypress',
        illustrate: '原生的 <code>keypress</code> 事件',
        value: 'event',
    },
    {
        name: 'on-keydown',
        illustrate: '原生的 <code>keydown</code> 事件',
        value: 'event',
    },
    {
        name: 'on-suffix',
        illustrate: '尾部图标点击事件',
        value: 'event',
    },
    {
        name: 'on-search',
        illustrate: '开启 <code>search</code> 时可用，点击搜索时触发',
        value: 'value',
    },
]);

// slotsData
const slotsData = ref([
    {
        name: 'prepend',
        illustrate: '前置内容，仅在 <code>text</code> 类型下有效',
    },
    {
        name: 'append',
        illustrate: '后置内容，仅在 <code>text</code> 类型下有效',
    },
    {
        name: 'prefix',
        illustrate: '输入框头部图标',
    },
    {
        name: 'suffix',
        illustrate: '输入框尾部图标',
    },
    {
        name: 'password-on',
        illustrate: '显示明文密码图标，仅在 <code>password</code> 类型下有效',
    },
    {
        name: 'password-off',
        illustrate: '显示密文密码图标，仅在 <code>password</code> 类型下有效',
    },
]);

// methodsData
const methodsData = ref([
    {
        name: 'focus',
        illustrate: '手动聚焦输入框',
        value: '{preventScroll?: boolean,cursor?: start | end | all}',
    },
]);
</script>

<style lang="scss" scoped>
</style>
