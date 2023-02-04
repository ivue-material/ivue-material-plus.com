<template>
  <h4>设置show-zero时，当数值为0时显示</h4>
  <ivue-badge class="badge-wrapper" :count="0" show-zero>
    <div class="badge"></div>
  </ivue-badge>
  <h4>设置offset,自定义数字偏移位置,单位为px</h4>
  <ivue-badge
    class="badge-wrapper"
    className="green"
    :count="90"
    :offset="[0, 20]"
  >
    <div class="badge"></div>
  </ivue-badge>
</template>

<style>
.badge {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  background: #f3f3f3;
  border-radius: 6px;
}

.badge-wrapper {
  margin-right: 20px;
}
</style>
