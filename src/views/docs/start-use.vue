<template>
    <div>
        <h1>快速开始</h1>
        <h2>引入 IVue Material Plus</h2>
        <p>如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便</p>
        <pre><code>{{ code.main }}</code></pre>
        <h2>按需导入</h2>
        <p>您需要使用额外的插件来导入要使用的组件</p>
        <h3>自动导入</h3>
        <p>
            <span>首先你需要安装</span>
            <code>unplugin-vue-components</code>
            <span>和</span>
            <code>unplugin-auto-import</code>
            <span>这两款插件</span>
        </p>
        <h3>Vite</h3>
        <pre><code>{{ code.vite }}</code></pre>
    </div>
</template>

<script>
import Hljs from 'highlight.js';
import Code from '@/code/start-use';

export default {
    name: 'start-use',
    data() {
        return {
            code: Code,
        };
    },
    mounted() {
        Hljs.highlightAll();
    },
};
</script>

<style lang="scss" scoped>
</style>
