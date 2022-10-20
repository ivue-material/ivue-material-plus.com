<template>
    <div>
        <ivue-auto-complete v-model="value" placeholder="请输入" @on-search="handleSearch">
            <ivue-option v-for="item in data" :value="item" :key="item">{{ item }}</ivue-option>
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
            this.data = !value || value.indexOf('@') >= 0
                ? []
                : [
                    `${value}@qq.com`,
                    `${value}@sina.com`,
                    `${value}@163.com`,
                ];
        },
    },
};
</script>

<style lang="scss" scoped>
</style>
