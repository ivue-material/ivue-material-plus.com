<template>
    <div class="message-wrapper">
        <h1>Message 全局提示</h1>
        <p>轻量级的信息反馈组件，在顶部居中显示，并自动消失。有多种不同的提示状态可选择</p>
        <h2>普通提示</h2>
        <p>最基本的提示，默认在1.5秒后消失</p>
        <doc-markdown :code="code.default">
            <template #demo>
                <default></default>
            </template>
        </doc-markdown>
        <h2>提示类型</h2>
        <p>不同的提示状态：成功、警告、错误</p>
        <doc-markdown :code="code.type">
            <template #demo>
                <type></type>
            </template>
        </doc-markdown>
        <h2>带背景色</h2>
        <p>
            设置属性
            <code>background</code>后，通知提示会显示背景色
        </p>
        <doc-markdown :code="code.background">
            <template #demo>
                <background></background>
            </template>
        </doc-markdown>
        <h2>加载中</h2>
        <p>
            <code>Loading</code> 的状态，并异步在某个时机移除
        </p>
        <doc-markdown :code="code.loading">
            <template #demo>
                <loading></loading>
            </template>
        </doc-markdown>
        <h2>自定义时长</h2>
        <p>
            自定义时长，也可以在
            <code>Message.config()</code>中全局配置
        </p>
        <doc-markdown :code="code.duration">
            <template #demo>
                <duration></duration>
            </template>
        </doc-markdown>
        <h2>可关闭</h2>
        <p>
            将参数设置为一个对象，并指定
            <code>closable</code> 为
            <code>true</code> 后可以手动关闭提示
        </p>
        <doc-markdown :code="code.closable">
            <template #demo>
                <closable></closable>
            </template>
        </doc-markdown>
        <h2>自定义全局提示</h2>
        <p>
            你可以自定义
            <code>Render</code> 函数来替代
            <code>content</code>
        </p>
        <p>
            可以通过设置
            <code>top</code>，设置通知提醒距离顶部的位置
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
                <code>this.$message.info(options)</code>
            </li>
            <li class="li">
                <code>this.$message.success(options)</code>
            </li>
            <li class="li">
                <code>this.$message.warning(options)</code>
            </li>
            <li class="li">
                <code>this.$message.error(options)</code>
            </li>
            <li class="li">
                <code>this.$message.loading(options)</code>
            </li>
        </ul>
        <p>
            参数
            <code>options</code> 为对象，具体说明如下
        </p>
        <ivue-table :data="optionsData" border>
            <ivue-table-column prop="name" label="名称" width="150"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300">
                <template #default="props">
                    <p v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="type" label="类型" width="100"></ivue-table-column>
            <ivue-table-column prop="default" label="默认值" width="100"></ivue-table-column>
        </ivue-table>
        <p>另外提供了全局配置、全局关闭某个通知和全局销毁的方法</p>
        <ul class="ul">
            <li class="li">
                <code>this.$message.config(options)</code>
            </li>
            <li class="li">
                <code>this.$message.close(id(通知id), userOnClose(关闭时调用的回调))</code>
            </li>
            <li class="li">
                <code>this.$message.closeAll()</code>
            </li>
        </ul>
        <pre-code>{{ code.config }}</pre-code>
        <ivue-table class="ivue-table" :data="configsData" border>
            <ivue-table-column prop="name" label="名称" width="150"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300">
                <template #default="props">
                    <p v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="type" label="类型" width="100"></ivue-table-column>
            <ivue-table-column prop="default" label="默认值" width="100"></ivue-table-column>
        </ivue-table>
        <h3>注意：引入多个组件库名称冲突时需重新定义全局方法名称</h3>
        <pre-code>{{ code.tips }}</pre-code>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import Code from '@/code/message';

import Default from '@/components/message/default.vue';
import Type from '@/components/message/type.vue';
import Background from '@/components/message/background.vue';
import Loading from '@/components/message/loading.vue';
import Duration from '@/components/message/duration.vue';
import Closable from '@/components/message/closable.vue';
import Custom from '@/components/message/custom.vue';

const code = ref(Code);

// optionsData
const optionsData = ref([
    {
        name: 'content',
        illustrate: '提示内容',
        type: 'String',
        default: '-',
    },
    {
        name: 'render',
        illustrate:
            '自定义描述内容，使用 <code>Vue</code> 的 <code>Render</code> 函数，如果同时设置了 <code>render</code> 和 <code>content</code>，则只显示 <code>render</code> 的内容',
        type: 'Function',
        default: '-',
    },
    {
        name: 'background',
        illustrate: '是否显示背景色',
        type: 'Boolean',
        default: 'false',
    },
    {
        name: 'duration',
        illustrate: '自动关闭的延时，单位毫秒，不关闭可以写 0',
        type: 'Number',
        default: '1500',
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
        name: 'top',
        illustrate: '通知提醒偏移位置，向下或向上',
        type: 'Number',
        default: '0',
    },
    {
        name: 'loadingIcon',
        illustrate:
            '自定义 <code>loading</code> 图标，内部通过 <code>class</code> 修改',
        type: 'String',
        default: '-',
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
        name: 'top',
        illustrate: '通知组件距离顶端的距离，单位像素',
        type: 'Number',
        default: '0',
    },
    {
        name: 'duration',
        illustrate: '默认自动关闭的延时，单位秒',
        type: 'Number',
        default: '1500',
    },
]);
</script>

<style lang="scss" scoped>
.message-wrapper {
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
