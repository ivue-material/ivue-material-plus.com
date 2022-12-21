<template>
    <ivue-checkbox
        v-model="checkAll"
        :indeterminate="indeterminate"
        @click.prevent="handleCheckAll"
    >全选</ivue-checkbox>

    <ivue-checkbox-group v-model="checkAllGroup" @on-change="handleGroupChange">
        <ivue-checkbox label="多啦a梦"></ivue-checkbox>
        <ivue-checkbox label="野比大雄"></ivue-checkbox>
        <ivue-checkbox label="静香"></ivue-checkbox>
    </ivue-checkbox-group>
</template>

<script setup>
import { ref } from 'vue';

const indeterminate = ref(true);
const checkAll = ref(true);
const checkAllGroup = ref(['多啦a梦']);

const handleCheckAll = () => {
    if (indeterminate.value) {
        checkAll.value = false;
    } else {
        checkAll.value = !checkAll.value;
    }

    indeterminate.value = false;

    if (checkAll.value) {
        checkAllGroup.value = ['多啦a梦', '野比大雄', '静香'];
    } else {
        checkAllGroup.value = [];
    }
};

const handleGroupChange = (data) => {
    if (data.length === 3) {
        indeterminate.value = false;
        checkAll.value = true;
    } else if (data.length > 0) {
        indeterminate.value = true;
        checkAll.value = false;
    } else {
        indeterminate.value = false;
        checkAll.value = false;
    }
};
</script>

<style lang="scss" scoped>
</style>
