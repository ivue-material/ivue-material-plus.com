<template>
    <ivue-tree :data="data" accordion></ivue-tree>
</template>

<script setup>
const data = [
    {
        label: '哆啦A梦',
        children: [
            {
                label: '铜锣烧饼',
            },
            {
                label: '害怕老鼠',
            },
        ],
    },
    {
        label: '野比大雄',
        children: [
            {
                label: '翻花绳',
            },
            {
                label: '快速入睡',
                children: [
                    {
                        label: '最快0.93秒',
                    },
                ],
            },
        ],
    },
    {
        label: '源静香',
        children: [
            {
                label: '拉小提琴',
                children: [
                    {
                        label: '读书用功',
                    },
                ],
            },
            {
                label: '性格',
                children: [
                    {
                        label: '性情温和',
                    },
                ],
            },
        ],
    },
];
</script>
