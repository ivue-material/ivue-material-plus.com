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

<script setup>
import { ref } from 'vue';

const cityList = ref([
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
]);

const model = ref('');
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

<script setup>
import { ref } from 'vue';

const cityList = ref([
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
]);

const model = ref('');
const model1 = ref('');
</script>
`;

code.clearable = `<template>
    <ivue-select v-model="model" clearable style="width:200px">
        <ivue-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</ivue-option>
    </ivue-select>
</template>

<script setup>
import { ref } from 'vue';

const cityList = ref([
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
]);

const model = ref('');
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

<script setup>
import { ref } from 'vue';

const cityList1 = ref([
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
]);

const cityList2 = ref([
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
]);

const model = ref('');
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

<script setup>
import { ref } from 'vue';

const model = ref('');
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

<script setup>
import { ref } from 'vue';

const cityList = ref([
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
]);

const model = ref([]);
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

<script setup>
import { ref } from 'vue';

const cityList = ref([
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
]);

const model1 = ref('');
const model2 = ref('');
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

<script setup>
import { ref } from 'vue';

const cityList = ref([
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
]);

const model1 = ref([]);
const model2 = ref([]);

const maxTagPlaceholder = (num) => {
    return \`more \${num}\`;
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

<script setup>
import { ref } from 'vue';

const cityList = ref([
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
]);

const model1 = ref('');
const model2 = ref([]);
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

<script setup>
import { ref, watch } from 'vue';

const model1 = ref('');
const loading1 = ref(false);
const options1 = ref([]);

const model2 = ref('');
const loading2 = ref(false);
const options2 = ref([]);

const list = ref([
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
]);

const searchEnd = ref(false);

const searchMethod1 = (query) => {
    if (query !== '') {
        if (!searchEnd.value) {
            loading1.value = true;
        }

        setTimeout(() => {
            loading1.value = false;

            const _list = list.value.map((item) => {
                return {
                    value: item,
                    label: item,
                };
            });

            options1.value = _list.filter(
                (item) =>
                    item.label.toLowerCase().indexOf(query.toLowerCase()) > -1
            );
        }, 2000);
    } else {
        options1.value = [];
    }
};

const searchMethod2 = (query) => {
    const _list = list.value.map((item) => {
        return {
            value: item,
            label: item,
        };
    });

    if (query !== '') {
        loading2.value = true;

        setTimeout(() => {
            loading2.value = false;

            options2.value = _list.filter(
                (item) =>
                    item.label.toLowerCase().indexOf(query.toLowerCase()) > -1
            );
        }, 200);
    } else {
        options2.value = _list;
    }
};

watch(
    () => model1.value,
    () => {
        searchEnd.value = true;

        setTimeout(() => {
            searchEnd.value = false;
        });
    }
);
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

<script setup>
import { ref } from 'vue';

const model1 = ref('beijing');
const options1 = ref([]);
const loading1 = ref(false);

const model2 = ref(['beijing', 'shenzhen']);
const options2 = ref([]);
const loading2 = ref(false);

const list = ref([
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
]);

const searchMethod1 = (query) => {
    if (query !== '') {
        loading1.value = true;

        setTimeout(() => {
            loading1.value = false;

            options1.value = list.value.filter(
                (item) => item.label.indexOf(query) > -1
            );
        }, 200);
    } else {
        options1.value = list.value;
    }
};

const searchMethod2 = (query) => {
    if (query !== '') {
        loading2.value = true;

        setTimeout(() => {
            loading2.value = false;

            options2.value = list.value.filter(
                (item) => item.label.indexOf(query) > -1
            );
        }, 200);
    } else {
        options2.value = list.value;
    }
};

const setDefaultOptions = (options) => {
    options2.value = options;
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

<script setup>
import { ref } from 'vue';

const list1 = ref([
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
]);

const list2 = ref([
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
]);

const model1 = ref('');
const model2 = ref([]);

const handleCreate1 = (val) => {
    list1.value.push({
        value: val,
        label: val,
    });
};

const handleCreate2 = (val) => {
    list2.value.push({
        value: val,
        label: val,
    });
};
</script>
`;

export default code;
