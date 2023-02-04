<template>
  <div class="install">
    <h1>Install 安装</h1>
    <h2>浏览器支持</h2>
    <p>
      <span>支持</span>
      <a
        class="link"
        target="_blank"
        href="https://caniuse.com/?feats=mdn-javascript_builtins_regexp_dotall,mdn-javascript_builtins_regexp_lookbehind_assertion,mdn-javascript_builtins_regexp_named_capture_groups,mdn-javascript_builtins_regexp_property_escapes,mdn-javascript_builtins_symbol_asynciterator,mdn-javascript_functions_method_definitions_async_generator_methods,mdn-javascript_grammar_template_literals_template_literal_revision,mdn-javascript_operators_destructuring_rest_in_objects,mdn-javascript_operators_spread_spread_in_destructuring,promise-finally"
        >ES2018</a
      >
      <span>和</span>
      <a class="link" target="_blank" href="https://caniuse.com/resizeobserver"
        >ResizeObserver</a
      >
      <span>的浏览器上运行。 如果您确实需要支持旧版本的浏览器，请自行添加</span>
      <a class="link" target="_blank" href="https://babeljs.io/">Babel</a>
      <span>
        和相应的
        <code>Polyfill</code>
      </span>
    </p>
    <p>由于 Vue 3 不再支持 IE11，该库也不再支持 IE 浏览器。</p>
    <h2>CDN 引入</h2>
    <p>
      <span>你可以通过</span>
      <a
        class="link"
        target="_blank"
        href="https://unpkg.com/ivue-material-plus"
        >unpkg.com/ivue-material-plus</a
      >
      <span>看到最新的版本资源，你也可以切换版本选择需要的资源:</span>
      <pre-code>{{ code.cdn }}</pre-code>
    </p>
    <h2>示例</h2>
    <p>
      <span>通过 CDN 引入快速使用</span>
      <code>ivue-material-plus</code>
      <span>写出一个示例。</span>
    </p>
    <doc-markdown :code="code.example" :showPlayground="false">
      <template #demo>
        <example></example>
      </template>
    </doc-markdown>
    <h2>NPM</h2>
    <p>
      推荐使用 npm 来安装，享受生态圈和工具带来的便利，更好地和 webpack
      配合使用，当然，我们也推荐使用 ES2015。
    </p>
    <pre-code>{{ code.npm }}</pre-code>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Hljs from 'highlight.js';
import Code from '@/code/install';

// data
const code = ref(Code);

// onMounted
onMounted(() => {
  Hljs.highlightAll();
});
</script>

<style lang="scss">
.install {
  .link {
    margin: 0 3px;
    color: var(--ivue-primary-color);
  }
}
</style>
