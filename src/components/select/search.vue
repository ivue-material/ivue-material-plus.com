<template>
  <h3>单选</h3>
  <ivue-select
    v-model="model1"
    filterable
    :search-method="searchMethod1"
    :loading="loading1"
    style="width: 400px"
    ref="select1"
  >
    <ivue-option
      v-for="(option, index) in options1"
      :value="option.value"
      :key="index"
      >{{ option.label }}</ivue-option
    >
  </ivue-select>

  <h3>多选</h3>
  <ivue-select
    v-model="model2"
    multiple
    filterable
    :search-method="searchMethod2"
    :loading="loading2"
    style="width: 400px"
  >
    <ivue-option
      v-for="(option, index) in options2"
      :value="option.value"
      :key="index"
      >{{ option.label }}</ivue-option
    >
  </ivue-select>
  <h3>开启多选过滤收起时清除输入</h3>
  <ivue-select
    v-model="model2"
    multiple
    filterable
    :search-method="searchMethod2"
    :loading="loading2"
    :multiple-filterable-clear="true"
    style="width: 400px"
  >
    <ivue-option
      v-for="(option, index) in options2"
      :value="option.value"
      :key="index"
      >{{ option.label }}</ivue-option
    >
  </ivue-select>
</template>

<script setup>
import { ref, watch } from 'vue';

const model1 = ref('');
const loading1 = ref(false);
const options1 = ref([]);

const model2 = ref('');
const loading2 = ref(false);
const options2 = ref([]);

const list = ref([
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New hampshire',
  'New jersey',
  'New mexico',
  'New york',
  'North carolina',
  'North dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode island',
  'South carolina',
  'South dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West virginia',
  'Wisconsin',
  'Wyoming',
]);

const searchEnd = ref(false);

const searchMethod1 = (query) => {
  if (query !== '') {
    if (!searchEnd.value) {
      loading1.value = true;
    }

    setTimeout(() => {
      loading1.value = false;

      const _list = list.value.map((item) => {
        return {
          value: item,
          label: item,
        };
      });

      options1.value = _list.filter(
        (item) => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1
      );
    }, 2000);
  } else {
    options1.value = [];
  }
};

const searchMethod2 = (query) => {
  const _list = list.value.map((item) => {
    return {
      value: item,
      label: item,
    };
  });

  if (query !== '') {
    loading2.value = true;

    setTimeout(() => {
      loading2.value = false;

      options2.value = _list.filter(
        (item) => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1
      );
    }, 200);
  } else {
    options2.value = _list;
  }
};

watch(
  () => model1.value,
  () => {
    searchEnd.value = true;

    setTimeout(() => {
      searchEnd.value = false;
    });
  }
);
</script>
