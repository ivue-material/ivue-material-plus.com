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
            <span>请参考</span>
            <a
                target="_blank"
                href="https://github.com/antfu/unplugin-vue-components#installation"
            >unplugin-vue-components</a>
            <span>和</span>
            <a
                target="_blank"
                href="https://github.com/antfu/unplugin-auto-import#install"
            >unplugin-auto-import</a>
        </p>
        <h3>按需加载组件</h3>
        <p>
            <span>借助插件</span>
            <a
                target="_blank"
                href="https://github.com/umijs/babel-plugin-import"
            >babel-plugin-import</a>
            <span>
                可以实现按需加载组件，减少文件体积。首先安装，并在文件
                <code>.babelrc</code>
                <span>或者在 webpack</span>
                <code>babel-loader</code>
                <span>中配置：</span>
            </span>
        </p>
        <pre><code>{{ code.babel }}</code></pre>
        <p>然后这样按需引入组件，就可以减小体积了</p>
        <pre><code>{{ code.main }}</code></pre>
        <h2>特别提醒</h2>
        <p>
            <span>按需引用仍然需要导入样式，即在</span>
            <code>main.js</code>
            <span>或根组件执行</span>
            <code>import 'ivue-material-plus/dist/styles/index.css';</code>
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
        margin: 0 3px;
    }
}
</style>
