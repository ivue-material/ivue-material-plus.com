<template>
    <ivue-date-picker v-model="date" v-model:pickerDate="pickerDate"></ivue-date-picker>
</template>

<script setup>
import { getCurrentInstance, ref, watch } from 'vue';

const { proxy } = getCurrentInstance();

const date = ref(new Date().toISOString().substr(0, 10));
const pickerDate = ref('');

watch(
    () => pickerDate.value,
    (value) => {
        proxy.$message.info(`select:${value}`);
    }
);
</script>
