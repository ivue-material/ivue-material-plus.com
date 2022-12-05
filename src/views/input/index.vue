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
    </div>
</template>

<script>
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

export default {
    data() {
        return {
            code: Code,
        };
    },
    components: {
        Default,
        Size,
        Clearable,
        IsTextarea,
        ShowWordLimit,
        Password,
        PrefixSuffix,
        Search,
        Autosize,
        Disabled,
        NoBorder,
        Compound
    },
};
</script>

<style lang="scss" scoped>
</style>
