<template>
  <ivue-button class="button" color="#5B8EFF">primary</ivue-button>
  <ivue-button class="button" :color="['#5AB2FF', '#5B8EFF']">渐变</ivue-button>
  <ivue-button class="button" :color="['#5AB2FF', '#5B8EFF']" radius
    >圆角按钮</ivue-button
  >
  <ivue-button class="button" color="#27E2B2" loading>加载中</ivue-button>
  <ivue-button class="button" disabled>禁用</ivue-button>
</template>

<style scoped>
.button {
  margin: 10px;
}
</style>
