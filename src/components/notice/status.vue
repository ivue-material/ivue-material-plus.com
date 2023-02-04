<template>
  <h4>有描述</h4>
  <ivue-button class="button" @click="handleInfo(false)">Info</ivue-button>
  <ivue-button class="button" @click="handleSuccess(false)"
    >Success</ivue-button
  >
  <ivue-button class="button" @click="handleWarning(false)"
    >Warning</ivue-button
  >
  <ivue-button class="button" @click="handleError(false)">Error</ivue-button>
  <h4>没有描述</h4>
  <ivue-button class="button" @click="handleInfo(true)">Info</ivue-button>
  <ivue-button class="button" @click="handleSuccess(true)">Success</ivue-button>
  <ivue-button class="button" @click="handleWarning(true)">Warning</ivue-button>
  <ivue-button class="button" @click="handleError(true)">Error</ivue-button>
</template>

<script setup>
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

// methods
const handleInfo = (nodesc) => {
  proxy.$notice.info({
    title: 'Notification title',
    desc: nodesc
      ? ''
      : '这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述',
  });
};

const handleSuccess = (nodesc) => {
  proxy.$notice.success({
    title: 'Notification title',
    desc: nodesc
      ? ''
      : '这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述',
  });
};

const handleWarning = (nodesc) => {
  proxy.$notice.warning({
    title: 'Notification title',
    desc: nodesc
      ? ''
      : '这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述',
  });
};

const handleError = (nodesc) => {
  proxy.$notice.error({
    title: 'Notification title',
    desc: nodesc
      ? ''
      : '这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述',
  });
};
</script>

<style>
.button {
  margin-right: 10px !important;
}
</style>
