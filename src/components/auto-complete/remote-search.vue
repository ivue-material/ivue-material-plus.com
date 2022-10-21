<template>
    <div>
        <ivue-auto-complete
            v-model="value"
            filterable
            :remoteMethod="remoteMethod1"
            :loading="loading"
            placeholder="请输入"
            @on-select="handleSelect"
        >
            <ivue-option v-for="item in data" :value="item.value" :key="item.value">{{ item.value }}</ivue-option>
        </ivue-auto-complete>
    </div>
</template>

<script>
const loadAll = [
    { value: 'vue', link: 'https://github.com/vuejs/vue' },
    { value: 'element', link: 'https://github.com/ElemeFE/element' },
    { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
    { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
    { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
    { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
    { value: 'babel', link: 'https://github.com/babel/babel' },
];

export default {
    data() {
        return {
            value: '',
            data: loadAll,
            loading: false,
            select: '',
        };
    },
    methods: {
        remoteMethod1(queryString) {
            if (this.select === queryString) {
                return;
            }

            const results = queryString
                ? loadAll.filter((item) => (
                    item.value
                        .toLowerCase()
                        .indexOf(queryString.toLowerCase()) === 0
                ))
                : loadAll;

            this.loading = true;

            setTimeout(() => {
                this.loading = false;
                this.data = results;
            }, 3000);
        },
        handleSelect(value) {
            this.select = value;
        },
    },
};
</script>

<style lang="scss" scoped>
</style>
