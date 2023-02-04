<template>
  <ivue-button
    class="button"
    v-loading.fullscreen.lock="loading"
    type="primary"
    @click="handleOpen1"
    >锁定屏幕滚动</ivue-button
  >
  <ivue-button class="button" type="primary" @click="handleOpen2"
    >不锁定屏幕滚动,使用方法调用</ivue-button
  >
  <ivue-button class="button" type="primary" @click="handleOpen3"
    >使用方法调用,自定义旋转图标</ivue-button
  >
</template>

<script setup>
import { ref, getCurrentInstance, h } from 'vue';

const { proxy } = getCurrentInstance();

const loading = ref(false);

const handleOpen1 = () => {
  loading.value = true;

  setTimeout(() => {
    loading.value = false;
  }, 2000);
};

const handleOpen2 = () => {
  const loading = proxy.$loading({
    lock: false,
    text: 'Loading...',
    background: 'rgba(0, 0, 0, 0.7)',
  });

  setTimeout(() => {
    loading.close();
  }, 2000);
};

const handleOpen3 = () => {
  const loading = proxy.$loading({
    text: 'Loading...',
    background: 'rgba(0, 0, 0, 0.7)',
    loadingSpinner: () =>
      h(
        'i',
        {
          class: 'ivue-loop-icon ivue-icon ivue-animation-loop',
        },
        ['loop']
      ),
  });

  setTimeout(() => {
    loading.close();
  }, 2000);
};
</script>

<style>
.button {
  margin-right: 10px !important;
}
</style>
