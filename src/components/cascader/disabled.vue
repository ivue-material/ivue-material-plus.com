<template>
  <h4>禁用组件</h4>
  <ivue-cascader v-model="value" :options="data" disabled></ivue-cascader>
  <h4>禁用某一项</h4>
  <ivue-cascader v-model="value" :options="data"></ivue-cascader>
</template>

<script setup>
import { ref } from 'vue';

const value = ref([]);
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
        disabled: true,
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
            disabled: true,
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
</script>
