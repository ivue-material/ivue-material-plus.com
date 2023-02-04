<template>
  <h4>自定义颜色小红点</h4>
  <ivue-badge dot color="#0DDECE">
    <div class="badge"></div>
  </ivue-badge>
  <h4>自定义插槽小红点</h4>
  <ivue-badge class="badge" dot>
    <ivue-icon>local_police</ivue-icon>
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

.badge-icon {
  color: #ffbd3c;
  background: #fff;
  box-shadow: 0 0 3px #cccccc;
  border-radius: 100%;
  width: 25px;
  height: 25px;
}

.badge-wrapper {
  margin-right: 20px;
}
</style>
