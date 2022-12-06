<template>
    <h3>普通分组</h3>
    <ivue-select v-model="model" style="width:200px">
        <ivue-option-group label="Hot Cities">
            <ivue-option
                v-for="item in cityList1"
                :value="item.value"
                :key="item.value"
            >{{ item.label }}</ivue-option>
        </ivue-option-group>
        <ivue-option-group label="Other Cities">
            <ivue-option
                v-for="item in cityList2"
                :value="item.value"
                :key="item.value"
            >{{ item.label }}</ivue-option>
        </ivue-option-group>
    </ivue-select>
    <h3>普通分组 开启过滤</h3>
    <ivue-select v-model="model" filterable style="width:200px">
        <ivue-option-group label="Hot Cities">
            <ivue-option
                v-for="item in cityList1"
                :value="item.value"
                :key="item.value"
            >{{ item.label }}</ivue-option>
        </ivue-option-group>
        <ivue-option-group label="Other Cities">
            <ivue-option
                v-for="item in cityList2"
                :value="item.value"
                :key="item.value"
            >{{ item.label }}</ivue-option>
        </ivue-option-group>
    </ivue-select>
    <h3>分组开启过滤, 开启搜索时，隐藏其他 option-group 组件头</h3>
    <ivue-select v-model="model" filterable filterable-hidden-group style="width:200px">
        <ivue-option-group label="Hot Cities">
            <ivue-option
                v-for="item in cityList1"
                :value="item.value"
                :key="item.value"
            >{{ item.label }}</ivue-option>
        </ivue-option-group>
        <ivue-option-group label="Other Cities">
            <ivue-option
                v-for="item in cityList2"
                :value="item.value"
                :key="item.value"
            >{{ item.label }}</ivue-option>
        </ivue-option-group>
    </ivue-select>
</template>

<script setup>
import { ref } from 'vue';

const cityList1 = ref([
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
]);

const cityList2 = ref([
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
</script>
