<template>
    <h4>格式化前缀</h4>
    <ivue-input-number
        v-model="value"
        :max="10"
        :min="1"
        :formatter="value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
        :parser="value => value.replace(/\$\s?|(,*)/g, '')"
    ></ivue-input-number>
    <h4>格式化后缀</h4>
    <ivue-input-number
        v-model="value"
        :max="10"
        :min="1"
        :formatter="value => `${value}%`"
        :parser="value => value.replace('%', '')"
    ></ivue-input-number>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(1);
</script>
