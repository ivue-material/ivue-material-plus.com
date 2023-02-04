<template>
  <ivue-select v-model="model1" prefix="catching_pokemon" style="width: 200px">
    <ivue-option
      v-for="item in cityList"
      :value="item.value"
      :key="item.value"
      >{{ item.label }}</ivue-option
    >
  </ivue-select>

  <ivue-select class="select" v-model="model2" style="width: 200px">
    <template #prefix>前缀图标</template>
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
const model2 = ref('');
</script>

<style scoped>
.select {
  margin-left: 20px;
}
</style>
