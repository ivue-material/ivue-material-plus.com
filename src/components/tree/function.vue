<template>
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
    // eslint-disable-next-line no-console
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
    // eslint-disable-next-line no-console
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
    // eslint-disable-next-line no-console
    console.log(treeRef.value.getHalfCheckedNodes());
};

// 若节点可被选中(show-checkbox 为 true)，则返回目前半选中的节点的 key 所组成的数组
const getHalfCheckedKeys = () => {
    // eslint-disable-next-line no-console
    console.log(treeRef.value.getHalfCheckedKeys());
};

// 返回当前被选中节点的数据 key (如果没有则返回 null)
const getCurrentKey = () => {
    // eslint-disable-next-line no-console
    console.log(treeRef.value.getCurrentKey());
};

// 返回当前被选中节点的数据 (如果没有则返回 null)
const getCurrentNode = () => {
    // eslint-disable-next-line no-console
    console.log(treeRef.value.getCurrentNode());
};

// 通过 key 设置某个节点的当前选中状态，使用此方法必须设置 node-key  属性
const setCurrentKey = () => {
    treeRef.value.setCurrentKey('哆啦A梦');
};

// 设置节点为选中状态，使用此方法必须设置 node-key 属性
const setCurrentNode = () => {
    treeRef.value.setCurrentNode({
      label: '害怕老鼠'
    });
};
</script>
