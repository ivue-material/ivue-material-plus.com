<template>
    <ivue-tooltip class="tooltip" content="显示前执行" :before-show-popper="beforeShowPopper">
        <ivue-button>显示前执行</ivue-button>
    </ivue-tooltip>
</template>

<script setup>
import { getCurrentInstance } from 'vue';

const {proxy} = getCurrentInstance();

const beforeShowPopper = () => {
  proxy.$message.info('鼠标已进入');

  return true;
};
</script>
