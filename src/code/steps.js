const code = {};

code.default = `<template>
    <ivue-steps :current-step="currentStep">
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
`;

code.icon = `<template>
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
`;

code.nextSwitch = `<template>
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
`;

code.status = `<template>
    <ivue-steps :current-step="currentStep" status="error">
        <ivue-step title="已完成" content="这里是该步骤的描述信息"></ivue-step>
        <ivue-step title="进行中" content="这里是该步骤的描述信息"></ivue-step>
        <ivue-step title="待进行1" content="这里是该步骤的描述信息"></ivue-step>
        <ivue-step title="待进行2" content="这里是该步骤的描述信息"></ivue-step>
    </ivue-steps>
</template>

<script setup>
import { ref } from 'vue';

const currentStep = ref(1);
</script>
`;

code.direction = `<template>
    <ivue-steps :current-step="currentStep" direction="vertical">
        <ivue-step title="已完成" content="这里是该步骤的描述信息"></ivue-step>
        <ivue-step title="进行中" content="这里是该步骤的描述信息"></ivue-step>
        <ivue-step title="待进行1" content="这里是该步骤的描述信息"></ivue-step>
        <ivue-step title="待进行2" content="这里是该步骤的描述信息"></ivue-step>
    </ivue-steps>
</template>

<script setup>
import { ref } from 'vue';

const currentStep = ref(2);
</script>
`;

code.space = `<template>
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
`;

code.textDirection = `<template>
    <div>
        <h3>文字方向向右</h3>
        <ivue-steps :current-step="currentStep">
            <ivue-step title="已完成" content="这里是该步骤的描述信息"></ivue-step>
            <ivue-step title="进行中" content="这里是该步骤的描述信息"></ivue-step>
            <ivue-step title="待进行1" content="这里是该步骤的描述信息"></ivue-step>
            <ivue-step title="待进行2" content="这里是该步骤的描述信息"></ivue-step>
        </ivue-steps>

        <h3>文字方向向下</h3>
        <ivue-steps :current-step="currentStep" text-direction="bottom">
            <ivue-step title="已完成" content="这里是该步骤的描述信息"></ivue-step>
            <ivue-step title="进行中" content="这里是该步骤的描述信息"></ivue-step>
            <ivue-step title="待进行1" content="这里是该步骤的描述信息"></ivue-step>
            <ivue-step title="待进行2" content="这里是该步骤的描述信息"></ivue-step>
        </ivue-steps>

        <h3>文字方向向下居中</h3>
        <ivue-steps :current-step="currentStep" text-direction="bottom-center">
            <ivue-step title="已完成" content="这里是该步骤的描述信息"></ivue-step>
            <ivue-step title="进行中" content="这里是该步骤的描述信息"></ivue-step>
            <ivue-step title="待进行1" content="这里是该步骤的描述信息"></ivue-step>
            <ivue-step title="待进行2" content="这里是该步骤的描述信息"></ivue-step>
        </ivue-steps>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const currentStep = ref(0);
</script>
`;

export default code;
