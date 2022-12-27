const code = {};

code.default = `<template>
    <ivue-input-number v-model="value" :max="10" :min="1"></ivue-input-number>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(1);
</script>
`;

code.step = `<template>
    <ivue-input-number v-model="value" :max="10" :min="1" :step="1.2" :precision="2"></ivue-input-number>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(1);
</script>
`;

code.formatter = `
<template>
    <h4>格式化前缀</h4>
    <ivue-input-number
        v-model="value"
        :max="10"
        :min="1"
        :formatter="value => \`$ \${value}\`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
        :parser="value => value.replace(/\$\s?|(,*)/g, '')"
    ></ivue-input-number>
    <h4>格式化后缀</h4>
    <ivue-input-number
        v-model="value"
        :max="10"
        :min="1"
        :formatter="value => \`\${value}%\`"
        :parser="value => value.replace('%', '')"
    ></ivue-input-number>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(1);
</script>
`;


code.disabled = `<template>
    <ivue-input-number v-model="value" :max="10" :min="1" :disabled="disabled"></ivue-input-number>
    <ivue-button class="input-number-button" @click="disabled = !disabled">切换禁用</ivue-button>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(1);
const disabled = ref(true);
</script>

<style scoped>
.input-number-button {
    margin-left: 20px;
}
</style>
`;

code.readonly = `<template>
    <ivue-input-number v-model="value" :max="10" :min="1" readonly></ivue-input-number>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(1);
</script>
`;

code.editable = `<template>
    <ivue-input-number v-model="value" :max="10" :min="1" :editable="false"></ivue-input-number>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(1);
</script>
`;

code.controlsOutside = `<template>
    <ivue-input-number v-model="value" :max="10" :min="1" controls-outside></ivue-input-number>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(1);
</script>
`;

export default code;
