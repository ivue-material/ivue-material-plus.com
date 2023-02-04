<template>
  <ivue-cascader
    v-model="value"
    :options="data"
    :render-format="renderFormat"
  ></ivue-cascader>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(['藤子·F·不二雄', '哆啦A梦']);
const data = ref([
  {
    value: '藤子·F·不二雄',
    label: '藤子·F·不二雄',
    children: [
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
    ],
  },
  {
    value: '法寶',
    label: '法寶',
    children: [
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
    ],
  },
]);

const renderFormat = (labels, selectedData) => {
  const index = labels.length - 1;

  const data = selectedData[index] || false;

  if (data && data.label) {
    return labels[0] + ' - ' + data.label;
  }

  return labels[index];
};
</script>
