<template>
  <h4>修改进度条高度</h4>
  <ivue-progress :percent="25" :stroke-width="5"></ivue-progress>
  <h4>修改百分比文案</h4>
  <ivue-progress :percent="100">
    <span>成功</span>
  </ivue-progress>
</template>
