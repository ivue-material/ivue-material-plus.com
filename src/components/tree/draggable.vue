<template>
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
/* eslint-disable */

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
