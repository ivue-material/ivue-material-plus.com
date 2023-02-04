<template>
  <ivue-input v-model="filterText" placeholder="输入过滤关键字"></ivue-input>
  <ivue-tree
    :data="data"
    default-expand-all
    :filter-node-method="filterNodeMethod"
    ref="treeRef"
  ></ivue-tree>
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
