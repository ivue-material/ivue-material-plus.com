<template>
  <h4>基本状态</h4>
  <ivue-progress :percent="25" />
  <h4>百分百状态</h4>
  <ivue-progress :percent="100" />
  <h4>
    <div>
      设置<code>stroke-color</code>属性,可以设置进度条颜色,如传入<code>Array</code>时为渐变,
    </div>
    <div>设置<code>box-shadow-color</code>属性,可设置进度条阴影颜色</div>
  </h4>
  <ivue-progress
    :percent="25"
    :stroke-color="['#5AB2FF', '#5B8EFF']"
    box-shadow-color="#5B8EFF"
  ></ivue-progress>
  <h4>
    <div>设置<code>active</code>属性,可设置进度条激活效果</div>
  </h4>
  <ivue-progress :percent="45" status="active" />
  <h4>
    <div>设置<code>wrong</code>属性,可设置进度条失败状态</div>
  </h4>
  <ivue-progress :percent="65" status="wrong" />
  <h4>
    <div>设置<code>hide-info</code>属性,可隐藏进度条图标</div>
  </h4>
  <ivue-progress :percent="25" hide-info />
</template>
