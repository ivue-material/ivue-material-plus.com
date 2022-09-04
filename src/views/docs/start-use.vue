<template>
    <div class="start-use">
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
        <h3>Webpack</h3>
        <pre><code>{{ code.webpack }}</code></pre>
        <p>
            <span>想了解更多打包(</span>
            <a target="_blank" href="https://rollupjs.org/">Rollup</a>
            <span>,</span>
            <a target="_blank" href="https://cli.vuejs.org/">Vue CLI</a>
            <span>)和配置工具</span>
            <!-- , Vue CLI) 和配置工具 -->
        </p>
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
.start-use {
    a {
        margin: 0;
    }
}
</style>
