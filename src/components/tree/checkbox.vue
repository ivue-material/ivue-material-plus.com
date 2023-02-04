<template>
  <ivue-tree
    :data="data"
    :props="props"
    show-checkbox
    @on-check-change="handleCheckChange"
  ></ivue-tree>
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
