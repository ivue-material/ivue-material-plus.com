<template>
  <h3>单选</h3>
  <ivue-select v-model="model1" filterable style="width: 400px">
    <ivue-option
      v-for="item in cityList"
      :value="item.value"
      :key="item.value"
      >{{ item.label }}</ivue-option
    >
  </ivue-select>
  <h3>多选</h3>
  <ivue-select v-model="model2" filterable multiple style="width: 400px">
    <ivue-option
      v-for="item in cityList"
      :value="item.value"
      :key="item.value"
      >{{ item.label }}</ivue-option
    >
  </ivue-select>
</template>

<script setup>
import { ref } from 'vue';

const cityList = ref([
  {
    value: 'New York',
    label: 'New York',
  },
  {
    value: 'London',
    label: 'London',
  },
  {
    value: 'Sydney',
    label: 'Sydney',
  },
  {
    value: 'Ottawa',
    label: 'Ottawa',
  },
  {
    value: 'Paris',
    label: 'Paris',
  },
  {
    value: 'Canberra',
    label: 'Canberra',
  },
]);

const model1 = ref('');
const model2 = ref([]);
</script>
