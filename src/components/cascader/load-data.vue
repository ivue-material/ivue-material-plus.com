<template>
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
