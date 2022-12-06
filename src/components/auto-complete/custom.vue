<template>
    <ivue-auto-complete v-model="value" placeholder="请输入" @on-search="handleSearch">
        <ivue-option v-for="item in data" :value="item" :key="item">{{ item }}</ivue-option>
    </ivue-auto-complete>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
const data = ref([]);

const handleSearch = (value) => {
    data.value =
        !value || value.indexOf('@') >= 0
            ? []
            : [`${value}@qq.com`, `${value}@sina.com`, `${value}@163.com`];
};
</script>
