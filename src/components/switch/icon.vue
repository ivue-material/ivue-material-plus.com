<template>
  <div>
    <p>单个字符</p>
    <div>
      <ivue-switch class="switch">
        <template #open>
          <span>开</span>
        </template>
        <template #close>
          <span>关</span>
        </template>
      </ivue-switch>

      <ivue-switch class="ivue-switch">
        <template #open>
          <ivue-icon class="icon">check</ivue-icon>
        </template>
        <template #close>
          <ivue-icon class="icon">close</ivue-icon>
        </template>
      </ivue-switch>
    </div>

    <p>多个字符</p>
    <div>
      <ivue-switch size="large" class="switch">
        <template #open>
          <span>开启</span>
        </template>
        <template #close>
          <span>关闭</span>
        </template>
      </ivue-switch>

      <ivue-switch size="large" class="switch">
        <template #open>
          <span>ON</span>
        </template>
        <template #close>
          <span>OFF</span>
        </template>
      </ivue-switch>
    </div>
  </div>
</template>

<style scoped>
.switch {
  margin-right: 20px;
}

.icon {
  min-width: auto;
  width: auto;
  font-size: 12px;
}
</style>
