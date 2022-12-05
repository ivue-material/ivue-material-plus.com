<template>
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

<script>
export default {
    data() {
        return {
            currentStep: 0,
        };
    },
};
</script>
