<template>
  <div class="commit-message">
    <h1>提交示例</h1>
    <p>
      详情请参阅
      <a
        class="a"
        href="https://www.conventionalcommits.org/en/v1.0.0/"
        target="_blank"
        >通用惯例</a
      >
    </p>
    <h2>一个好的 Git 提交信息能够使我们</h2>
    <ul class="ul">
      <li class="li">了解贡献者试图做什么</li>
      <li class="li">生成更改日志</li>
    </ul>
    <h2>写入提交消息的规则</h2>
    <pre-code>{{ code.default }}</pre-code>
    <h2>提交消息的模板</h2>
    <p>下面是供参考的模板提交消息</p>
    <pre-code>{{ code.template }}</pre-code>
    <h2>相关链接</h2>
    <a
      class="a"
      href="https://about.gitlab.com/blog/2018/06/07/keeping-git-commit-history-clean/"
      target="_blank"
      >保持 git 提交历史简洁</a
    >
  </div>
</template>

<script setup>
import code from './code';
</script>

<style lang="scss" scoped>
.commit-message {
  .ul {
    padding-left: 25px;
  }

  .li {
    margin-bottom: 5px;
    line-height: 1.5;
    list-style: circle;
  }
  .a {
    margin: 0;
    color: var(--ivue-primary-color);
  }
}
</style>
