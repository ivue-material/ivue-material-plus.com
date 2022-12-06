<template>
    <h3>单选</h3>
    <ivue-select v-model="model1" filterable allow-create @on-create="handleCreate1">
        <ivue-option v-for="item in list1" :value="item.value" :key="item.value">{{ item.label }}</ivue-option>
    </ivue-select>

    <h3>多选</h3>
    <ivue-select v-model="model2" filterable multiple allow-create @on-create="handleCreate2">
        <ivue-option v-for="item in list2" :value="item.value" :key="item.value">{{ item.label }}</ivue-option>
    </ivue-select>
</template>

<script setup>
import { ref } from 'vue';

const list1 = ref([
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

const list2 = ref([
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

const model1 = ref('');
const model2 = ref([]);

const handleCreate1 = (val) => {
    list1.value.push({
        value: val,
        label: val,
    });
};

const handleCreate2 = (val) => {
    list2.value.push({
        value: val,
        label: val,
    });
};
</script>
