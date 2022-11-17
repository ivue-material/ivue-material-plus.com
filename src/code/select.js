const code = {};

code.default = `<template>
    <h3>普通</h3>
    <ivue-select v-model="model" style="width:200px">
        <ivue-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</ivue-option>
    </ivue-select>
    <h3>渐变颜色</h3>
    <ivue-select
        v-model="model"
        :selected-color="['#E91E63', '#9C27B0']"
        :hover-color="['#673AB7', '#2196F3']"
        style="width:200px"
    >
        <ivue-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</ivue-option>
    </ivue-select>
</template>

<script>
export default {
    data() {
        return {
            cityList: [
                {
                    value: 'New York',
                    label: 'New York',
                },
                {
                    value: 'London',
                    label: 'London',
                },
                {
                    value: 'Sydney',
                    label: 'Sydney',
                },
                {
                    value: 'Ottawa',
                    label: 'Ottawa',
                },
                {
                    value: 'Paris',
                    label: 'Paris',
                },
                {
                    value: 'Canberra',
                    label: 'Canberra',
                },
            ],
            model: '',
        };
    },
};
</script>
`;

code.disabled = `<template>
    <h3>禁用禁用整个选择器</h3>
    <ivue-select v-model="model" disabled style="width:200px">
        <ivue-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</ivue-option>
    </ivue-select>

    <h3>禁用当前项</h3>
    <ivue-select v-model="model1" style="width:200px">
        <ivue-option value="beijing">New York</ivue-option>
        <ivue-option value="shanghai" disabled>London</ivue-option>
        <ivue-option value="shenzhen">Sydney</ivue-option>
    </ivue-select>
</template>

<script>
export default {
    data() {
        return {
            cityList: [
                {
                    value: 'New York',
                    label: 'New York',
                },
                {
                    value: 'London',
                    label: 'London',
                },
                {
                    value: 'Sydney',
                    label: 'Sydney',
                },
                {
                    value: 'Ottawa',
                    label: 'Ottawa',
                },
                {
                    value: 'Paris',
                    label: 'Paris',
                },
                {
                    value: 'Canberra',
                    label: 'Canberra',
                },
            ],
            model: '',
            model1: '',
        };
    },
};
</script>
`;

code.clearable = `<template>
    <ivue-select v-model="model" clearable style="width:200px">
        <ivue-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</ivue-option>
    </ivue-select>
</template>

<script>
export default {
    data() {
        return {
            cityList: [
                {
                    value: 'New York',
                    label: 'New York',
                },
                {
                    value: 'London',
                    label: 'London',
                },
                {
                    value: 'Sydney',
                    label: 'Sydney',
                },
                {
                    value: 'Ottawa',
                    label: 'Ottawa',
                },
                {
                    value: 'Paris',
                    label: 'Paris',
                },
                {
                    value: 'Canberra',
                    label: 'Canberra',
                },
            ],
            model: '',
        };
    },
};
</script>
`;

code.group = `<template>
    <h3>普通分组</h3>
    <ivue-select v-model="model" style="width:200px">
        <ivue-option-group label="Hot Cities">
            <ivue-option
                v-for="item in cityList1"
                :value="item.value"
                :key="item.value"
            >{{ item.label }}</ivue-option>
        </ivue-option-group>
        <ivue-option-group label="Other Cities">
            <ivue-option
                v-for="item in cityList2"
                :value="item.value"
                :key="item.value"
            >{{ item.label }}</ivue-option>
        </ivue-option-group>
    </ivue-select>
    <h3>普通分组 开启过滤</h3>
    <ivue-select v-model="model" filterable style="width:200px">
        <ivue-option-group label="Hot Cities">
            <ivue-option
                v-for="item in cityList1"
                :value="item.value"
                :key="item.value"
            >{{ item.label }}</ivue-option>
        </ivue-option-group>
        <ivue-option-group label="Other Cities">
            <ivue-option
                v-for="item in cityList2"
                :value="item.value"
                :key="item.value"
            >{{ item.label }}</ivue-option>
        </ivue-option-group>
    </ivue-select>
    <h3>分组开启过滤, 开启搜索时，隐藏其他 option-group 组件头</h3>
    <ivue-select v-model="model" filterable filterable-hidden-group style="width:200px">
        <ivue-option-group label="Hot Cities">
            <ivue-option
                v-for="item in cityList1"
                :value="item.value"
                :key="item.value"
            >{{ item.label }}</ivue-option>
        </ivue-option-group>
        <ivue-option-group label="Other Cities">
            <ivue-option
                v-for="item in cityList2"
                :value="item.value"
                :key="item.value"
            >{{ item.label }}</ivue-option>
        </ivue-option-group>
    </ivue-select>
</template>
<script>
export default {
    data() {
        return {
            cityList1: [
                {
                    value: 'New York',
                    label: 'New York',
                },
                {
                    value: 'London',
                    label: 'London',
                },
                {
                    value: 'Sydney',
                    label: 'Sydney',
                },
            ],
            cityList2: [
                {
                    value: 'Ottawa',
                    label: 'Ottawa',
                },
                {
                    value: 'Paris',
                    label: 'Paris',
                },
                {
                    value: 'Canberra',
                    label: 'Canberra',
                },
            ],
            model: '',
        };
    },
};
</script>
`;


code.custom = `<template>
    <ivue-select v-model="model" style="width:200px">
        <ivue-option value="New York" label="New York">
            <div class="select-custom">
                <span>New York</span>
                <span>America</span>
            </div>
        </ivue-option>
        <ivue-option value="London" label="London">
            <div class="select-custom">
                <span>London</span>
                <span>U.K.</span>
            </div>
        </ivue-option>
        <ivue-option value="Sydney" label="Sydney">
            <div class="select-custom">
                <span>Sydney</span>
                <span>Australian</span>
            </div>
        </ivue-option>
    </ivue-select>
</template>

<script>
export default {
    data() {
        return {
            model: '',
        };
    },
};
</script>

<style scoped>
.select-custom {
    width: 100%;
    display: flex;
    justify-content: space-between;
}
</style>
`;


code.multiple = `<template>
    <ivue-select v-model="model" multiple style="width:260px">
        <ivue-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</ivue-option>
    </ivue-select>
</template>

<script>
export default {
    data() {
        return {
            cityList: [
                {
                    value: 'New York',
                    label: 'New York',
                },
                {
                    value: 'London',
                    label: 'London',
                },
                {
                    value: 'Sydney',
                    label: 'Sydney',
                },
                {
                    value: 'Ottawa',
                    label: 'Ottawa',
                },
                {
                    value: 'Paris',
                    label: 'Paris',
                },
                {
                    value: 'Canberra',
                    label: 'Canberra',
                },
            ],
            model: [],
        };
    },
};
</script>
`;

code.prefix = `<template>
    <ivue-select v-model="model1" prefix="catching_pokemon" style="width:200px">
        <ivue-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</ivue-option>
    </ivue-select>

    <ivue-select class="select" v-model="model2" style="width:200px">
        <template #prefix>前缀图标</template>
        <ivue-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</ivue-option>
    </ivue-select>
</template>

<script>
export default {
    data() {
        return {
            cityList: [
                {
                    value: 'New York',
                    label: 'New York',
                },
                {
                    value: 'London',
                    label: 'London',
                },
                {
                    value: 'Sydney',
                    label: 'Sydney',
                },
                {
                    value: 'Ottawa',
                    label: 'Ottawa',
                },
                {
                    value: 'Paris',
                    label: 'Paris',
                },
                {
                    value: 'Canberra',
                    label: 'Canberra',
                },
            ],
            model1: '',
            model2: '',
        };
    },
};
</script>

<style scoped>
.select {
    margin-left: 20px;
}
</style>
`;


code.tag = `<template>
    <h3>多选时最多显示多少个 tag</h3>
    <ivue-select v-model="model1" multiple :max-tag-count="2" style="width:400px">
        <ivue-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</ivue-option>
    </ivue-select>
    <h3>隐藏 tag 时显示的内容，参数是剩余项数量</h3>
    <ivue-select
        v-model="model2"
        multiple
        :max-tag-count="2"
        :max-tag-placeholder="maxTagPlaceholder"
        style="width:400px"
    >
        <ivue-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</ivue-option>
    </ivue-select>
</template>

<script>
export default {
    data() {
        return {
            cityList: [
                {
                    value: 'New York',
                    label: 'New York',
                },
                {
                    value: 'London',
                    label: 'London',
                },
                {
                    value: 'Sydney',
                    label: 'Sydney',
                },
                {
                    value: 'Ottawa',
                    label: 'Ottawa',
                },
                {
                    value: 'Paris',
                    label: 'Paris',
                },
                {
                    value: 'Canberra',
                    label: 'Canberra',
                },
            ],
            model1: [],
            model2: [],
        };
    },
    methods: {
        maxTagPlaceholder(num) {
            return 'more ' + num;
        },
    },
};
</script>
`;

code.filterable = `<template>
    <h3>单选</h3>
    <ivue-select v-model="model1" filterable style="width:400px">
        <ivue-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</ivue-option>
    </ivue-select>
    <h3>多选</h3>
    <ivue-select v-model="model2" filterable multiple style="width:400px">
        <ivue-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</ivue-option>
    </ivue-select>
</template>

<script>
export default {
    data() {
        return {
            cityList: [
                {
                    value: 'New York',
                    label: 'New York',
                },
                {
                    value: 'London',
                    label: 'London',
                },
                {
                    value: 'Sydney',
                    label: 'Sydney',
                },
                {
                    value: 'Ottawa',
                    label: 'Ottawa',
                },
                {
                    value: 'Paris',
                    label: 'Paris',
                },
                {
                    value: 'Canberra',
                    label: 'Canberra',
                },
            ],
            model1: '',
            model2: [],
        };
    },
};
</script>
`;

code.search = `<template>
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
`;

code.defaultLabel = `<template>
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
`;

code.allowCreate = `<template>
    <h3>单选</h3>
    <ivue-select v-model="model1" filterable allow-create @on-create="handleCreate1">
        <ivue-option v-for="item in list1" :value="item.value" :key="item.value">{{ item.label }}</ivue-option>
    </ivue-select>

    <h3>多选</h3>
    <ivue-select v-model="model2" filterable multiple allow-create @on-create="handleCreate2">
        <ivue-option v-for="item in list2" :value="item.value" :key="item.value">{{ item.label }}</ivue-option>
    </ivue-select>
</template>

<script>
export default {
    data() {
        return {
            list1: [
                {
                    value: 'New York',
                    label: 'New York',
                },
                {
                    value: 'London',
                    label: 'London',
                },
                {
                    value: 'Sydney',
                    label: 'Sydney',
                },
                {
                    value: 'Ottawa',
                    label: 'Ottawa',
                },
                {
                    value: 'Paris',
                    label: 'Paris',
                },
                {
                    value: 'Canberra',
                    label: 'Canberra',
                },
            ],
            list2: [
                {
                    value: 'New York',
                    label: 'New York',
                },
                {
                    value: 'London',
                    label: 'London',
                },
                {
                    value: 'Sydney',
                    label: 'Sydney',
                },
                {
                    value: 'Ottawa',
                    label: 'Ottawa',
                },
                {
                    value: 'Paris',
                    label: 'Paris',
                },
                {
                    value: 'Canberra',
                    label: 'Canberra',
                },
            ],
            model1: '',
            model2: [],
        };
    },
    methods: {
        handleCreate1(val) {
            this.list1.push({
                value: val,
                label: val,
            });
        },
        handleCreate2(val) {
            this.list2.push({
                value: val,
                label: val,
            });
        },
    },
};
</script>
`;

export default code;
