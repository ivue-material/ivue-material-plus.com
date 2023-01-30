const code = {};

code.default = `<template>
    <ivue-tree :data="data" default-expand-all></ivue-tree>
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
`;

code.checkbox = `<template>
    <ivue-tree :data="data" :props="props" show-checkbox @on-check-change="handleCheckChange"></ivue-tree>
</template>

<script setup>
const props = {
    children: 'children',
    label: 'label',
    disabled: 'disabled',
};

const data = [
    {
        label: '哆啦A梦',
        children: [
            {
                label: '铜锣烧饼',
                // 禁用勾选
                disabled: true,
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

const handleCheckChange = (data, checked, indeterminate) => {
    // eslint-disable-next-line no-console
    console.log(data, checked, indeterminate);
};
</script>
`;

code.lazy = `<template>
    <ivue-tree :data="data" show-checkbox :load="loadNode" :props="props" lazy></ivue-tree>
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
];

const props = {
    label: 'label',
    children: 'children',
    isLeaf: 'leaf',
};

const loadNode = (node, resolve) => {
    if (node.level === 0) {
        return resolve(data);
    }

    if (node.level > 1) {
        return resolve([]);
    }

    setTimeout(() => {
        const data = [
            {
                label: '铜锣烧饼',
                // 主动设置为叶子节点
                leaf: true,
            },
            {
                label: '害怕老鼠',
            },
        ];

        resolve(data);
    }, 500);
};
</script>
`;

code.expandedAndChecked = `<template>
    <ivue-tree
        show-checkbox
        node-key="id"
        :data="data"
        :default-expanded-keys="['野比大雄', '快速入睡']"
        :default-checked-keys="['哆啦A梦']"
    ></ivue-tree>
</template>

<script setup>
const data = [
    {
        id: '哆啦A梦',
        label: '哆啦A梦',
        children: [
            {
                id: '铜锣烧饼',
                label: '铜锣烧饼',
            },
            {
                id: '害怕老鼠',
                label: '害怕老鼠',
            },
        ],
    },
    {
        id: '野比大雄',
        label: '野比大雄',
        children: [
            {
                id: '翻花绳',
                label: '翻花绳',
            },
            {
                id: '快速入睡',
                label: '快速入睡',
                children: [
                    {
                        id: '最快0.93秒',
                        label: '最快0.93秒',
                    },
                ],
            },
        ],
    },
    {
        id: '源静香',
        label: '源静香',
        children: [
            {
                id: '拉小提琴',
                label: '拉小提琴',
                children: [
                    {
                        id: '读书用功',
                        label: '读书用功',
                    },
                ],
            },
            {
                id: '性格',
                label: '性格',
                children: [
                    {
                        id: '性情温和',
                        label: '性情温和',
                    },
                ],
            },
        ],
    },
];
</script>
`;


code.function = '';

export default code;
