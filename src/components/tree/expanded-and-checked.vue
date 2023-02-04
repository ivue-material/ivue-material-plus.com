<template>
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
