<template>
    <div>
        <h1>本地开发</h1>
        <p>1.使用命令，运行项目</p>
        <pre-code>pnpm serve</pre-code>
        <p>
            2.你需要在测试组件目录
            <code>examples/components</code>
            创建一个你的组件，用与区分开发是什么组件
        </p>
        <p>
            组册组件时要保证当前组件已注册到
            <code>components/index</code> 和
            <code>src/index</code> 文件中
        </p>
        <blockquote>components/index</blockquote>
        <pre-code>{{ code.index }}</pre-code>
        <blockquote>src/index</blockquote>
        <pre-code>{{ code.src }}</pre-code>
        <p>
            然后就可以在
            <code>examples/components</code>
            中使用你的组件
        </p>
        <pre-code>{{ code.components }}</pre-code>
        <p>3.使用命令格式你的代码</p>
        <pre-code>pnpm format</pre-code>
        <p>
            4.使用命令检测lint(如使用
            <code>vscode</code> 引入了
            <code>eslint</code> 保存自动识别
            <code>lint</code> 文件格式化该命令可选)
        </p>
        <pre-code>pnpm lint</pre-code>
    </div>
</template>

<script setup>
import code from './code';
</script>

<style lang="scss" scoped>
</style>
