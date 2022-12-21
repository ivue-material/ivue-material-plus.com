<template>
    <h4>禁用单个</h4>
    <ivue-checkbox v-model="value1" label="多啦a梦" disabled></ivue-checkbox>
    <h4>禁用组合单个</h4>
    <ivue-checkbox-group v-model="value2">
        <ivue-checkbox label="多啦a梦">多啦a梦的时光机</ivue-checkbox>
        <ivue-checkbox label="野比大雄" disabled>野比大雄的家</ivue-checkbox>
        <ivue-checkbox label="静香">静香的家</ivue-checkbox>
    </ivue-checkbox-group>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(true);
const value2 = ref(['多啦a梦']);
</script>
