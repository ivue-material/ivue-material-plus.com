<template>
    <h3>单选</h3>
    <ivue-select
        v-model="model1"
        filterable
        :search-method="searchMethod1"
        default-label="北京"
        :loading="loading1"
        @on-set-default-options="setDefaultOptions"
    >
        <ivue-option
            v-for="(option, index) in options1"
            :value="option.value"
            :key="index"
        >{{option.label}}</ivue-option>
    </ivue-select>

    <h3>多选</h3>
    <ivue-select
        v-model="model2"
        multiple
        filterable
        :search-method="searchMethod2"
        :default-label="['北京', '深圳']"
        :loading="loading2"
        @on-set-default-options="setDefaultOptions"
    >
        <ivue-option
            v-for="(option, index) in options2"
            :value="option.value"
            :key="index"
        >{{option.label}}</ivue-option>
    </ivue-select>
</template>

<script setup>
import { ref } from 'vue';

const model1 = ref('beijing');
const options1 = ref([]);
const loading1 = ref(false);

const model2 = ref(['beijing', 'shenzhen']);
const options2 = ref([]);
const loading2 = ref(false);

const list = ref([
    {
        value: 'beijing',
        label: '北京',
    },
    {
        value: 'shanghai',
        label: '上海',
    },
    {
        value: 'shenzhen',
        label: '深圳',
    },
    {
        value: 'hangzhou',
        label: '杭州',
    },
    {
        value: 'guangzhou',
        label: '广州',
    },
]);

const searchMethod1 = (query) => {
    if (query !== '') {
        loading1.value = true;

        setTimeout(() => {
            loading1.value = false;

            options1.value = list.value.filter(
                (item) => item.label.indexOf(query) > -1
            );
        }, 200);
    } else {
        options1.value = list.value;
    }
};

const searchMethod2 = (query) => {
    if (query !== '') {
        loading2.value = true;

        setTimeout(() => {
            loading2.value = false;

            options2.value = list.value.filter(
                (item) => item.label.indexOf(query) > -1
            );
        }, 200);
    } else {
        options2.value = list.value;
    }
};

const setDefaultOptions = (options) => {
    options2.value = options;
};
</script>
