<template>
  <ivue-tree
    :data="data"
    show-checkbox
    :load="loadNode"
    :props="props"
    lazy
  ></ivue-tree>
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
