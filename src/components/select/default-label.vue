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
<script>
export default {
    data() {
        return {
            model1: 'beijing',
            options1: [],
            loading1: false,

            model2: ['beijing', 'shenzhen'],
            options2: [],
            loading2: false,

            list: [
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
            ],
        };
    },
    methods: {
        searchMethod1(query) {
            if (query !== '') {
                this.loading1 = true;

                setTimeout(() => {
                    this.loading1 = false;

                    this.options1 = this.list.filter(
                        (item) => item.label.indexOf(query) > -1
                    );

                }, 200);
            } else {
                this.options1 = this.list;
            }
        },
        searchMethod2(query) {
            if (query !== '') {
                this.loading2 = true;

                setTimeout(() => {
                    this.loading2 = false;

                    this.options2 = this.list.filter(
                        (item) => item.label.indexOf(query) > -1
                    );


                }, 200);
            } else {
                this.options2 = this.list;
            }
        },
        setDefaultOptions(options) {
            this.options2 = options;
        },
    },
};
</script>
