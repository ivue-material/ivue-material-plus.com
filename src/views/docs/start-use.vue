<template>
    <div>
        <h1>快速开始</h1>
        <h2>引入 IVue Material Plus</h2>
        <p>如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便</p>
        <pre><code>{{ code.main }}</code></pre>
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
