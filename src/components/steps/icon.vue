<template>
    <ivue-steps :current-step="currentStep">
        <ivue-step title="已完成" content="这里是该步骤的描述信息" icon="sentiment_satisfied"></ivue-step>
        <ivue-step title="进行中" content="这里是该步骤的描述信息" icon="sentiment_very_satisfied"></ivue-step>
        <ivue-step title="待进行" content="这里是该步骤的描述信息" icon="sentiment_dissatisfied"></ivue-step>
        <ivue-step title="待进行1" content="这里是该步骤的描述信息" icon="sentiment_very_dissatisfied"></ivue-step>
    </ivue-steps>
</template>

<script setup>
import { ref } from 'vue';

const currentStep = ref(0);
</script>
