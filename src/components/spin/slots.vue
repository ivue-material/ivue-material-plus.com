<template>
  <div class="spin">
    <ivue-spin fix>loading...</ivue-spin>
  </div>
  <div class="spin">
    <ivue-spin fix>
      <ivue-icon class="ivue-animation-loop">refresh</ivue-icon>
      <div>Loading</div>
    </ivue-spin>
  </div>
</template>

<style scoped>
.spin {
  display: inline-block;
  position: relative;
  width: 200px;
  height: 100px;
  border: 1px solid #000;
}
</style>
