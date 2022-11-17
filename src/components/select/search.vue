<template>
    <h3>单选</h3>
    <ivue-select
        v-model="model1"
        filterable
        :search-method="searchMethod1"
        :loading="loading1"
        style="width:400px"
        ref="select1"
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
        :loading="loading2"
        style="width:400px"
    >
        <ivue-option
            v-for="(option, index) in options2"
            :value="option.value"
            :key="index"
        >{{option.label}}</ivue-option>
    </ivue-select>
    <h3>开启多选过滤收起时清除输入</h3>
    <ivue-select
        v-model="model2"
        multiple
        filterable
        :search-method="searchMethod2"
        :loading="loading2"
        :multiple-filterable-clear="true"
        style="width:400px"
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
            model1: '',
            loading1: false,
            options1: [],

            model2: [],
            loading2: false,
            options2: [],

            list: [
                'Alabama',
                'Alaska',
                'Arizona',
                'Arkansas',
                'California',
                'Colorado',
                'Connecticut',
                'Delaware',
                'Florida',
                'Georgia',
                'Hawaii',
                'Idaho',
                'Illinois',
                'Indiana',
                'Iowa',
                'Kansas',
                'Kentucky',
                'Louisiana',
                'Maine',
                'Maryland',
                'Massachusetts',
                'Michigan',
                'Minnesota',
                'Mississippi',
                'Missouri',
                'Montana',
                'Nebraska',
                'Nevada',
                'New hampshire',
                'New jersey',
                'New mexico',
                'New york',
                'North carolina',
                'North dakota',
                'Ohio',
                'Oklahoma',
                'Oregon',
                'Pennsylvania',
                'Rhode island',
                'South carolina',
                'South dakota',
                'Tennessee',
                'Texas',
                'Utah',
                'Vermont',
                'Virginia',
                'Washington',
                'West virginia',
                'Wisconsin',
                'Wyoming',
            ],
            searchEnd: false,
        };
    },
    methods: {
        searchMethod1(query) {
            if (query !== '') {
                if (!this.searchEnd) {
                    this.loading1 = true;
                }

                setTimeout(() => {
                    this.loading1 = false;

                    const list = this.list.map((item) => {
                        return {
                            value: item,
                            label: item,
                        };
                    });

                    this.options1 = list.filter(
                        (item) =>
                            item.label
                                .toLowerCase()
                                .indexOf(query.toLowerCase()) > -1
                    );
                }, 2000);
            } else {
                this.options1 = [];
            }
        },
        searchMethod2(query) {
            const list = this.list.map((item) => {
                return {
                    value: item,
                    label: item,
                };
            });

            if (query !== '') {
                this.loading2 = true;
                setTimeout(() => {
                    this.loading2 = false;

                    this.options2 = list.filter(
                        (item) =>
                            item.label
                                .toLowerCase()
                                .indexOf(query.toLowerCase()) > -1
                    );
                }, 200);
            } else {
                this.options2 = list;
            }
        },
    },
    watch: {
        model1() {
            this.searchEnd = true;

            setTimeout(() => {
                this.searchEnd = false;
            });
        },
    },
};
</script>
