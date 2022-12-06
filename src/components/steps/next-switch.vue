<template>
    <div>
        <h3>当前正在进行第 {{ currentStep }} 步</h3>
        <ivue-steps class="steps" :current-step="currentStep">
            <ivue-step title="已完成" content="这里是该步骤的描述信息"></ivue-step>
            <ivue-step title="进行中" content="这里是该步骤的描述信息"></ivue-step>
            <ivue-step title="待进行1" content="这里是该步骤的描述信息"></ivue-step>
            <ivue-step title="待进行2" content="这里是该步骤的描述信息"></ivue-step>
        </ivue-steps>

        <ivue-button class="button" @click="handleNext">Next step</ivue-button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const currentStep = ref(0);

const handleNext = () => {
    if (currentStep.value == 3) {
        currentStep.value = 0;
    } else {
        currentStep.value += 1;
    }
};
</script>

<style>
.steps {
    margin: 20px 0;
}
</style>
