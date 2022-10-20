<template>
    <div>
        <ivue-auto-complete
            v-model="value"
            :list="data"
            placeholder="请输入"
            clearable
            @on-search="handleSearch"
        >
            <template #prefix>
                <ivue-icon>favorite_border</ivue-icon>
            </template>
            <template #suffix>
                <ivue-icon>cruelty_free</ivue-icon>
            </template>
        </ivue-auto-complete>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: '',
            data: [],
        };
    },
    methods: {
        handleSearch(value) {
            this.data = !value
                ? []
                : [value, value + value, value + value + value];
        },
    },
};
</script>

<style lang="scss" scoped>
</style>
