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

code.function = `<template>
    <ivue-tree
        default-expand-all
        highlight-current
        show-checkbox
        node-key="label"
        :data="data"
        ref="treeRef"
    ></ivue-tree>
    <div style="margin-top: 10px">
        <ivue-button
            @click="updateKeyChildren"
            style="margin: 10px"
        >为节点设置新数据，只有当设置 node-key 属性的时候才可用</ivue-button>
        <ivue-button @click="getCheckedNodes" style="margin: 10px">返回当前选中节点的数组 node-key 属性的时候才可用</ivue-button>
        <ivue-button @click="setCheckedNodes" style="margin: 10px">设置目前勾选的节点，使用此方法必须提前设置 node-key 属性</ivue-button>
        <ivue-button @click="getCheckedKeys" style="margin: 10px">返回当前选中节点 key 的数组</ivue-button>
        <ivue-button @click="setCheckedKeys" style="margin: 10px">设置目前选中的节点，使用此方法必须设置 node-key 属性</ivue-button>
        <ivue-button @click="setChecked" style="margin: 10px">设置节点是否被选中, 使用此方法必须设置 node-key 属性</ivue-button>
        <ivue-button @click="getHalfCheckedNodes" style="margin: 10px">返回当前半选中的节点组成的数组</ivue-button>
        <ivue-button @click="getHalfCheckedKeys" style="margin: 10px">返回目前半选中的节点的 key 所组成的数组</ivue-button>
        <ivue-button @click="getCurrentKey" style="margin: 10px">返回当前被选中节点的数据 key (如果没有则返回 null)</ivue-button>
        <ivue-button @click="getCurrentNode" style="margin: 10px">返回当前被选中节点的数据 (如果没有则返回 null)</ivue-button>
        <ivue-button
            @click="setCurrentKey"
            style="margin: 10px"
        >通过 key 设置某个节点的当前选中状态，使用此方法必须设置 node-key 属性</ivue-button>
        <ivue-button @click="setCurrentNode" style="margin: 10px">设置节点为选中状态，使用此方法必须设置 node-key 属性</ivue-button>
        <ivue-button @click="getNode" style="margin: 10px">根据 data 或者 key 拿到 Tree 组件中的 node</ivue-button>
        <ivue-button @click="remove" style="margin: 10px">删除 Tree 中的一个节点，使用此方法必须设置 node-key 属性</ivue-button>
        <ivue-button @click="append" style="margin: 10px">为 Tree 中的一个节点追加一个子节点</ivue-button>
        <ivue-button @click="insertBefore" style="margin: 10px">在 Tree 中给定节点前插入一个节点</ivue-button>
        <ivue-button @click="insertAfter" style="margin: 10px">在 Tree 中给定节点后插入一个节点</ivue-button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const treeRef = ref();

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
];

const addArray = [
    {
        label: '四次元百宝袋',
    },
    {
        label: '任意门',
    },
    {
        label: '时光机',
    },
];

// 为节点设置新数据，只有当设置 node-key 属性的时候才可用
const updateKeyChildren = () => {
    treeRef.value.updateKeyChildren('哆啦A梦', addArray);
};

// 如果节点可以被选中，(show-checkbox 为 true), 本方法将返回当前选中节点的数组
const getCheckedNodes = () => {
    console.log(treeRef.value.getCheckedNodes());
};

// 设置目前勾选的节点，使用此方法必须提前设置 node-key 属性
const setCheckedNodes = () => {
    treeRef.value.setCheckedNodes(
        [
            {
                label: '哆啦A梦',
            },
            {
                label: '翻花绳',
            },
        ],
        false
    );
};

// 若节点可用被选中 (show-checkbox 为 true), 它将返回当前选中节点 key 的数组
const getCheckedKeys = () => {
    console.log(treeRef.value.getCheckedKeys());
};

// 设置目前选中的节点，使用此方法必须设置 node-key 属性
const setCheckedKeys = () => {
    treeRef.value.setCheckedKeys(['害怕老鼠']);
};

// 设置节点是否被选中, 使用此方法必须设置 node-key 属性
const setChecked = () => {
    treeRef.value.setChecked(
        '快速入睡',
        true,
        // 是否递归选中子节点
        true
    );
};

// 如果节点可用被选中 (show-checkbox 为 true), 它将返回当前半选中的节点组成的数组
const getHalfCheckedNodes = () => {
    console.log(treeRef.value.getHalfCheckedNodes());
};

// 若节点可被选中(show-checkbox 为 true)，则返回目前半选中的节点的 key 所组成的数组
const getHalfCheckedKeys = () => {
    console.log(treeRef.value.getHalfCheckedKeys());
};

// 返回当前被选中节点的数据 key (如果没有则返回 null)
const getCurrentKey = () => {
    console.log(treeRef.value.getCurrentKey());
};

// 返回当前被选中节点的数据 (如果没有则返回 null)
const getCurrentNode = () => {
    console.log(treeRef.value.getCurrentNode());
};

// 通过 key 设置某个节点的当前选中状态，使用此方法必须设置 node-key  属性
const setCurrentKey = () => {
    treeRef.value.setCurrentKey('哆啦A梦');
};

// 设置节点为选中状态，使用此方法必须设置 node-key 属性
const setCurrentNode = () => {
    treeRef.value.setCurrentNode({
        label: '害怕老鼠',
    });
};

// 根据 data 或者 key 拿到 Tree 组件中的 node
const getNode = () => {
    console.log(treeRef.value.getNode('铜锣烧饼'));
};

// 删除 Tree 中的一个节点，使用此方法必须设置 node-key 属性
const remove = () => {
    treeRef.value.remove({
        label: '最快0.93秒',
    });
};

// 为 Tree 中的一个节点追加一个子节点
const append = () => {
    treeRef.value.append(
        {
            label: '源静香',
        },
        '野比大雄'
    );
};

// 在 Tree 中给定节点前插入一个节点
const insertBefore = () => {
    treeRef.value.insertBefore(
        {
            label: '源静香',
        },
        '野比大雄'
    );
};

// 在 Tree 中给定节点后插入一个节点
const insertAfter = () => {
    treeRef.value.insertAfter(
        {
            label: '胖虎',
        },
        '野比大雄'
    );
};
</script>
`;

code.slots = `<template>
    <h4>使用 render-content 函数</h4>
    <ivue-tree
        :data="data"
        show-checkbox
        node-key="id"
        default-expand-all
        :expand-on-click-node="false"
        :render-content="renderContent"
        :props="{ class: customClass }"
        class="tree-demo"
    ></ivue-tree>
    <h4>使用 scoped slot 函数</h4>
    <ivue-tree
        :data="data"
        show-checkbox
        node-key="id"
        default-expand-all
        :expand-on-click-node="false"
        :props="{ class: customClass }"
        class="tree-demo"
    >
        <template #default="{ node, data }">
            <span class="tree-slots-demo">
                <span>{{ node.label }}</span>
                <span>
                    <ivue-button status="success" @click="append(data)">添加</ivue-button>
                    <ivue-button status="error" @click="remove(node,data)">删除</ivue-button>
                </span>
            </span>
        </template>
    </ivue-tree>
</template>

<script setup>
import { ref } from 'vue';
import { IvueButton } from 'ivue-material-plus';

const data = ref([
    {
        id: 1,
        label: '哆啦A梦',
        children: [
            {
                id: 2,
                label: '铜锣烧饼',
            },
            {
                id: 3,
                label: '害怕老鼠',
            },
        ],
    },
    {
        id: 4,
        label: '野比大雄',
    },
]);

const customClass = (data) => {
    if (data.label === '铜锣烧饼') {
        return 'primary';
    }
    return null;
};

const renderContent = (h, { node, data }) => {
    return h(
        'div',
        {
            class: 'tree-slots-demo',
        },
        h('span', null, node.label),
        h(
            'span',
            null,
            h(
                IvueButton,
                {
                    status: 'success',
                    onClick: () => append(data),
                },
                {
                    default: () => '添加',
                }
            ),
            h(
                IvueButton,
                {
                    status: 'error',
                    onClick: () => remove(node, data),
                },
                {
                    default: () => '删除',
                }
            )
        )
    );
};

let id = 1000;

const append = (value) => {
    const newChild = { id: id++, label: 'test', children: [] };

    if (!value.children) {
        value.children = [];
    }

    value.children.push(newChild);
    data.value = [...data.value];
};

const remove = (node, value) => {
    const parent = node.parent;
    const children = parent.data.children || parent.data;
    const index = children.findIndex((d) => d.id === value.id);

    children.splice(index, 1);
    data.value = [...data.value];
};
</script>

<style>
.tree-demo .ivue-tree-node {
    border-radius: 4px;
}

.tree-slots-demo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.tree-slots-demo button {
    height: 30px;
    margin: 2px 10px;
}

.tree-slots-demo span {
    margin-left: 10px;
}

.tree-demo .ivue-tree-node--content {
    height: auto;
}
</style>
`;

code.filters = `<template>
    <ivue-input v-model="filterText" placeholder="输入过滤关键字"></ivue-input>
    <ivue-tree :data="data" default-expand-all :filter-node-method="filterNodeMethod" ref="treeRef"></ivue-tree>
</template>

<script setup>
import { ref, watch } from 'vue';

const treeRef = ref();
const filterText = ref('');

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

const filterNodeMethod = (value, data) => {
    if (!value) {
        return true;
    }

    return data.label.includes(value);
};

watch(filterText, (val) => {
    treeRef.value.filter(val);
});
</script>
`;

code.accordion = `<template>
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
`;

code.draggable = `<template>
    <ivue-tree
        :data="data"
        :allow-drop="allowDrop"
        :allow-drag="allowDrag"
        default-expand-all
        draggable
        @on-node-drag-start="handleDragStart"
        @on-node-drag-enter="handleDragEnter"
        @on-node-drag-leave="handleDragLeave"
        @on-node-drag-over="handleDragOver"
        @on-node-drag-end="handleDragEnd"
        @on-node-drop="handleDrop"
    ></ivue-tree>
</template>

<script setup>
const data = [
    {
        label: '哆啦A梦',
        children: [
            {
                label: '铜锣烧饼(allow-drop 不能嵌套到改节点中)',
            },
            {
                label: '害怕老鼠(allow-drag 禁用拖动)',
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

// 节点开始拖拽时触发的事件
const handleDragStart = (node) => {
    console.log('节点开始拖拽时触发的事件', node);
};

// 拖拽进入其他节点时触发的事件
const handleDragEnter = (draggingNode, dropNode) => {
    console.log('拖拽进入其他节点时触发的事件:', draggingNode, dropNode.label);
};

// 拖拽离开某个节点时触发的事件
const handleDragLeave = (draggingNode, dropNode) => {
    console.log('拖拽离开某个节点时触发的事件:', draggingNode, dropNode.label);
};

// 在拖拽节点时触发的事件
const handleDragOver = (draggingNode, dropNode) => {
    console.log('在拖拽节点时触发的事件:', draggingNode, dropNode.label);
};

// 拖拽结束时触发的事件
const handleDragEnd = (draggingNode, dropNode, dropType) => {
    console.log(
        '拖拽结束时触发的事件:',
        draggingNode,
        dropNode && dropNode.label,
        dropType
    );
};

// 拖拽成功完成时触发的事件
const handleDrop = (draggingNode, dropNode, dropType) => {
    console.log(
        '拖拽成功完成时触发的事件:',
        draggingNode,
        dropNode.label,
        dropType
    );
};

// 拖拽时判定目标节点能否成为拖动目标位置
const allowDrop = (draggingNode, dropNode, type) => {
    if (dropNode.data.label === '铜锣烧饼') {
        return type !== 'inner';
    } else {
        return true;
    }
};

// 判断节点能否被拖拽
const allowDrag = (draggingNode) => {
    return !draggingNode.data.label.includes('害怕老鼠');
};
</script>
`;

export default code;
