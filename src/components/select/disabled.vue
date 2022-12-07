<template>
    <h3>禁用禁用整个选择器</h3>
    <ivue-select v-model="model" disabled style="width:200px">
        <ivue-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</ivue-option>
    </ivue-select>

    <h3>禁用当前项</h3>
    <ivue-select v-model="model1" style="width:200px">
        <ivue-option value="beijing">New York</ivue-option>
        <ivue-option value="shanghai" disabled>London</ivue-option>
        <ivue-option value="shenzhen">Sydney</ivue-option>
    </ivue-select>
</template>

<script setup>
import { ref } from 'vue';

const cityList = ref([
    {
        value: 'New York',
        label: 'New York',
    },
    {
        value: 'London',
        label: 'London',
    },
    {
        value: 'Sydney',
        label: 'Sydney',
    },
    {
        value: 'Ottawa',
        label: 'Ottawa',
    },
    {
        value: 'Paris',
        label: 'Paris',
    },
    {
        value: 'Canberra',
        label: 'Canberra',
    },
]);

const model = ref('');
const model1 = ref('');
</script>
