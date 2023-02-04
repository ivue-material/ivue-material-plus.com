<template>
  <h4>Render 函数</h4>
  <ivue-button class="button" type="primary" @click="handleRender"
    >打开通知提醒</ivue-button
  >
  <h4>Offset 偏移位置</h4>
  <ivue-button class="button" @click="handleOpen1">右上角向上偏移</ivue-button>
  <ivue-button class="button" type="primary" @click="handleOpen2"
    >右下角向下偏移</ivue-button
  >
  <ivue-button class="button" type="primary" @click="handleOpen3"
    >左下角向下偏移</ivue-button
  >
  <ivue-button class="button" type="primary" @click="handleOpen4"
    >左上角向下偏移</ivue-button
  >
  <h4>自定义id，使用 close 关闭自定义通知</h4>
  <ivue-button class="button" type="primary" @click="handleOpen5"
    >自定义通知提醒id</ivue-button
  >
</template>

<script setup>
import { getCurrentInstance, h, ref } from 'vue';

const { proxy } = getCurrentInstance();

const timer = ref(null);

// methods

const handleRender = () => {
  proxy.$notice.open({
    title: '标题',
    render: () => {
      return h('span', ['这是描述', h('a', '这是a标签')]);
    },
  });
};

const handleOpen1 = () => {
  proxy.$notice.open({
    title: '右上角向上偏移',
    desc: '这是描述这是描述这是描述这是描述这是描述这是描述',
    offset: 100,
  });
};

const handleOpen2 = () => {
  proxy.$notice.open({
    title: '右下角向下偏移',
    desc: '这是描述这是描述这是描述这是描述这是描述这是描述',
    position: 'bottom-right',
    offset: 100,
  });
};

const handleOpen3 = () => {
  proxy.$notice.open({
    title: '左下角向下偏移',
    desc: '这是描述这是描述这是描述这是描述这是描述这是描述',
    position: 'bottom-left',
    offset: 100,
  });
};

const handleOpen4 = () => {
  proxy.$notice.open({
    title: '左上角向下偏移',
    desc: '这是描述这是描述这是描述这是描述这是描述这是描述',
    position: 'top-left',
    offset: 100,
  });
};

const handleOpen5 = () => {
  const info = proxy.$notice.open({
    title: '右下角向下偏移',
    desc: '这是描述这是描述这是描述这是描述这是描述这是描述',
    id: 'id',
    duration: 0,
  });

  if (timer.value) {
    return;
  }

  timer.value = setTimeout(() => {
    info.close('id');

    clearTimeout(timer.value);

    timer.value = null;
  }, 2000);
};
</script>

<style>
.button {
  margin-right: 10px !important;
}
</style>
