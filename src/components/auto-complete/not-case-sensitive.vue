<template>
    <div>
        <ivue-auto-complete
            v-model="value"
            :list="data"
            :filter-method="filterMethod"
            placeholder="请输入"
        ></ivue-auto-complete>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: '',
            data: ['Steve Jobs', 'Stephen Gary Wozniak', 'Jonathan Paul Ive'],
        };
    },
    methods: {
        filterMethod(value, option) {
            return option.toUpperCase().indexOf(value.toUpperCase()) !== -1;
        },
    },
};
</script>

<style lang="scss" scoped>
</style>
