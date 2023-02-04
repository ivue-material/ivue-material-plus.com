<template>
  <div>
    <h3>普通按钮</h3>
    <p>渐变</p>
    <ivue-switch
      class="switch"
      :color="['#5AB2FF', '#5B8EFF']"
      :false-color="['#FFA82D', '#FFBD3C']"
    />
    <p>单色</p>
    <ivue-switch class="switch" color="#9C27B0" false-color="#3F51B5" />
    <h3>浮雕按钮</h3>
    <p>渐变</p>
    <ivue-switch
      class="switch"
      :color="['#5AB2FF', '#5B8EFF']"
      :false-color="['#FFA82D', '#FFBD3C']"
      emboss
    />
    <p>单色</p>
    <ivue-switch class="switch" color="#9C27B0" false-color="#3F51B5" />
  </div>
</template>

<style scoped>
.switch {
  margin-right: 20px;
}
</style>
