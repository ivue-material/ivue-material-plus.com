<template>
    <ivue-tooltip class="tooltip" content="通过设置属性disabled可以禁用文字提示" :disabled="disabled">
      <ivue-button @click="handleClick">{{ disabled ? '取消禁用' : '点击禁用' }}</ivue-button>
    </ivue-tooltip>
</template>

<script setup>
import { ref } from 'vue';

const disabled = ref(false);

const handleClick = () => {
  disabled.value = !disabled.value;
};

</script>

<style lang="scss" scoped>
</style>
