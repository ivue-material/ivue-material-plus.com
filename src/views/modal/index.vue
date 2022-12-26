<template>
    <div>
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
            <code>ivue-modal</code> 组件提供了灵活的自定义样式
            <code>API</code> 和
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
            <code>button</code> ，
            通过设置
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
        <p>除了上述通过标准组件的使用方法，还封装了一些实例方法，用来创建一次性的轻量级对话框</p>
        <p>
            实例以隐式创建
            <code>Vue</code>
            组件的方式在全局创建一个对话框，并在消失时移除，所以同时只能操作一个对话框
        </p>
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

const code = ref(Code);
</script>

<style lang="scss" scoped>
</style>
