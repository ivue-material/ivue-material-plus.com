<template>
  <h3>横向</h3>
  <ivue-steps :current-step="currentStep" :space="100">
    <ivue-step title="已完成" content="这里是该步骤的描述信息"></ivue-step>
    <ivue-step title="进行中" content="这里是该步骤的描述信息"></ivue-step>
    <ivue-step title="待进行1" content="这里是该步骤的描述信息"></ivue-step>
    <ivue-step title="待进行2" content="这里是该步骤的描述信息"></ivue-step>
  </ivue-steps>
  <h3>垂直</h3>
  <ivue-steps :current-step="currentStep" space="10%" direction="vertical">
    <ivue-step title="已完成" content="这里是该步骤的描述信息"></ivue-step>
    <ivue-step title="进行中" content="这里是该步骤的描述信息"></ivue-step>
    <ivue-step title="待进行1" content="这里是该步骤的描述信息"></ivue-step>
    <ivue-step title="待进行2" content="这里是该步骤的描述信息"></ivue-step>
  </ivue-steps>
</template>

<script setup>
import { ref } from 'vue';

const currentStep = ref(0);
</script>
