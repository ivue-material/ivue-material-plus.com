<template>
    <h3>多选时最多显示多少个 tag</h3>
    <ivue-select v-model="model1" multiple :max-tag-count="2" style="width:400px">
        <ivue-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</ivue-option>
    </ivue-select>
    <h3>隐藏 tag 时显示的内容，参数是剩余项数量</h3>
    <ivue-select
        v-model="model2"
        multiple
        :max-tag-count="2"
        :max-tag-placeholder="maxTagPlaceholder"
        style="width:400px"
    >
        <ivue-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</ivue-option>
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

const model1 = ref([]);
const model2 = ref([]);

const maxTagPlaceholder = (num) => {
    return `more ${num}`;
};
</script>
