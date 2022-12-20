const code = {};

code.default = `<template>
    <ivue-cascader v-model="value" :options="data"></ivue-cascader>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(['藤子·F·不二雄', '哆啦A梦']);
const data = ref([
    {
        value: '藤子·F·不二雄',
        label: '藤子·F·不二雄',
        children: [
            {
                value: '哆啦A梦',
                label: '哆啦A梦',
            },
            {
                value: '野比大雄',
                label: '野比大雄',
            },
            {
                value: '源静香',
                label: '源静香',
            },
        ],
    },
    {
        value: '法寶',
        label: '法寶',
        children: [
            {
                value: '道具',
                label: '道具',
                children: [
                    {
                        value: '任意门',
                        label: '任意门',
                    },
                ],
            },
            {
                value: '时光机',
                label: '时光机',
                children: [
                    {
                        value: '冰雪时代',
                        label: '冰雪时代',
                    },
                    {
                        value: '工业时代',
                        label: '工业时代',
                    },
                ],
            },
        ],
    },
]);
</script>
`;

code.trigger = `<template>
    <ivue-cascader v-model="value" :options="data" trigger="hover"></ivue-cascader>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(['藤子·F·不二雄', '哆啦A梦']);
const data = ref([
    {
        value: '藤子·F·不二雄',
        label: '藤子·F·不二雄',
        children: [
            {
                value: '哆啦A梦',
                label: '哆啦A梦',
            },
            {
                value: '野比大雄',
                label: '野比大雄',
            },
            {
                value: '源静香',
                label: '源静香',
            },
        ],
    },
    {
        value: '法寶',
        label: '法寶',
        children: [
            {
                value: '道具',
                label: '道具',
                children: [
                    {
                        value: '任意门',
                        label: '任意门',
                    },
                ],
            },
            {
                value: '时光机',
                label: '时光机',
                children: [
                    {
                        value: '冰雪时代',
                        label: '冰雪时代',
                    },
                    {
                        value: '工业时代',
                        label: '工业时代',
                    },
                ],
            },
        ],
    },
]);
</script>
`;

code.slots = `<template>
    <ivue-cascader v-model="value" :options="data">
        <span>select cascader</span>
    </ivue-cascader>
    <span>{{ value.length > 0 ? value : '未选择' }}</span>
</template>

<script setup>
import { ref } from 'vue';

const value = ref([]);
const data = ref([
    {
        value: '藤子·F·不二雄',
        label: '藤子·F·不二雄',
        children: [
            {
                value: '哆啦A梦',
                label: '哆啦A梦',
            },
            {
                value: '野比大雄',
                label: '野比大雄',
            },
            {
                value: '源静香',
                label: '源静香',
            },
        ],
    },
    {
        value: '法寶',
        label: '法寶',
        children: [
            {
                value: '道具',
                label: '道具',
                children: [
                    {
                        value: '任意门',
                        label: '任意门',
                    },
                ],
            },
            {
                value: '时光机',
                label: '时光机',
                children: [
                    {
                        value: '冰雪时代',
                        label: '冰雪时代',
                    },
                    {
                        value: '工业时代',
                        label: '工业时代',
                    },
                ],
            },
        ],
    },
]);
</script>
`;


code.disabled = `<template>
    <h4>禁用组件</h4>
    <ivue-cascader v-model="value" :options="data" disabled></ivue-cascader>
    <h4>禁用某一项</h4>
    <ivue-cascader v-model="value" :options="data"></ivue-cascader>
</template>

<script setup>
import { ref } from 'vue';

const value = ref([]);
const data = ref([
    {
        value: '藤子·F·不二雄',
        label: '藤子·F·不二雄',
        children: [
            {
                value: '哆啦A梦',
                label: '哆啦A梦',
            },
            {
                value: '野比大雄',
                label: '野比大雄',
            },
            {
                value: '源静香',
                label: '源静香',
            },
        ],
    },
    {
        value: '法寶',
        label: '法寶',
        children: [
            {
                value: '道具',
                label: '道具',
                disabled: true,
                children: [
                    {
                        value: '任意门',
                        label: '任意门',
                    },
                ],
            },
            {
                value: '时光机',
                label: '时光机',
                children: [
                    {
                        disabled: true,
                        value: '冰雪时代',
                        label: '冰雪时代',
                    },
                    {
                        value: '工业时代',
                        label: '工业时代',
                    },
                ],
            },
        ],
    },
]);
</script>
`;

code.changeOnSelect = `<template>
    <ivue-cascader v-model="value" :options="data" change-on-select></ivue-cascader>
</template>

<script setup>
import { ref } from 'vue';

const value = ref([]);
const data = ref([
    {
        value: '藤子·F·不二雄',
        label: '藤子·F·不二雄',
        children: [
            {
                value: '哆啦A梦',
                label: '哆啦A梦',
            },
            {
                value: '野比大雄',
                label: '野比大雄',
            },
            {
                value: '源静香',
                label: '源静香',
            },
        ],
    },
    {
        value: '法寶',
        label: '法寶',
        children: [
            {
                value: '道具',
                label: '道具',
                children: [
                    {
                        value: '任意门',
                        label: '任意门',
                    },
                ],
            },
            {
                value: '时光机',
                label: '时光机',
                children: [
                    {
                        value: '冰雪时代',
                        label: '冰雪时代',
                    },
                    {
                        value: '工业时代',
                        label: '工业时代',
                    },
                ],
            },
        ],
    },
]);
</script>
`;

code.renderFormat = `<template>
    <ivue-cascader v-model="value" :options="data" :render-format="renderFormat"></ivue-cascader>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(['藤子·F·不二雄', '哆啦A梦']);
const data = ref([
    {
        value: '藤子·F·不二雄',
        label: '藤子·F·不二雄',
        children: [
            {
                value: '哆啦A梦',
                label: '哆啦A梦',
            },
            {
                value: '野比大雄',
                label: '野比大雄',
            },
            {
                value: '源静香',
                label: '源静香',
            },
        ],
    },
    {
        value: '法寶',
        label: '法寶',
        children: [
            {
                value: '道具',
                label: '道具',
                children: [
                    {
                        value: '任意门',
                        label: '任意门',
                    },
                ],
            },
            {
                value: '时光机',
                label: '时光机',
                children: [
                    {
                        value: '冰雪时代',
                        label: '冰雪时代',
                    },
                    {
                        value: '工业时代',
                        label: '工业时代',
                    },
                ],
            },
        ],
    },
]);

const renderFormat = (labels, selectedData) => {
    const index = labels.length - 1;

    const data = selectedData[index] || false;

    if (data && data.label) {
        return labels[0] + ' - ' + data.label;
    }

    return labels[index];
};
</script>
`;


code.loadData = `<template>
    <ivue-cascader v-model="value" :options="data" :loadData="loadData"></ivue-cascader>
</template>

<script setup>
import { ref } from 'vue';

const value = ref([]);
const data = ref([
    {
        value: '藤子·F·不二雄',
        label: '藤子·F·不二雄',
        children: [],
        loading: false,
    },
    {
        value: '法寶',
        label: '法寶',
        children: [],
        loading: false,
    },
]);

const loadData = (item, callback) => {
    item.loading = true;

    setTimeout(() => {
        if (item.value === '藤子·F·不二雄') {
            item.children = [
                {
                    value: '哆啦A梦',
                    label: '哆啦A梦',
                },
                {
                    value: '野比大雄',
                    label: '野比大雄',
                },
                {
                    value: '源静香',
                    label: '源静香',
                },
            ];
        } else if (item.value === '法寶') {
            item.children = [
                {
                    value: '道具',
                    label: '道具',
                    children: [
                        {
                            value: '任意门',
                            label: '任意门',
                        },
                    ],
                },
                {
                    value: '时光机',
                    label: '时光机',
                    children: [
                        {
                            value: '冰雪时代',
                            label: '冰雪时代',
                        },
                        {
                            value: '工业时代',
                            label: '工业时代',
                        },
                    ],
                },
            ];
        }
        item.loading = false;

        callback();
    }, 1000);
};
</script>
`;


code.filterable = `<template>
    <ivue-cascader v-model="value" :options="data" filterable></ivue-cascader>
</template>

<script setup>
import { ref } from 'vue';

const value = ref([]);
const data = ref([
    {
        value: '藤子·F·不二雄',
        label: '藤子·F·不二雄',
        children: [
            {
                value: '哆啦A梦',
                label: '哆啦A梦',
            },
            {
                value: '野比大雄',
                label: '野比大雄',
            },
            {
                value: '源静香',
                label: '源静香',
            },
        ],
    },
    {
        value: '法寶',
        label: '法寶',
        children: [
            {
                value: '道具',
                label: '道具',
                children: [
                    {
                        value: '任意门',
                        label: '任意门',
                    },
                ],
            },
            {
                value: '时光机',
                label: '时光机',
                children: [
                    {
                        value: '冰雪时代',
                        label: '冰雪时代',
                    },
                    {
                        value: '工业时代',
                        label: '工业时代',
                    },
                ],
            },
        ],
    },
]);
</script>
`;

export default code;
