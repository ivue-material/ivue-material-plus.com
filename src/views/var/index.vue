<template>
  <div>
    <h1>Ui库中的全局公共 Var</h1>
    <ivue-table :data="varData" border>
      <ivue-table-column prop="name" label="名称"></ivue-table-column>
      <ivue-table-column prop="value" label="值"></ivue-table-column>
    </ivue-table>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const varData = ref([
  {
    name: '--ivue-disabled-color',
    value: '#cccccc',
  },
  {
    name: '--ivue-white-color',
    value: '#ffffff',
  },
  {
    name: '--ivue-primary-color',
    value: '#5B8EFF',
  },
  {
    name: '--ivue-success-color',
    value: '#27E2B2',
  },
  {
    name: '--ivue-warning-color',
    value: '#FFBD3C',
  },
  {
    name: '--ivue-error-color',
    value: '#FF617F',
  },
  {
    name: '--ivue-black-color',
    value: '#000000',
  },
  {
    name: '--ivue-default-color',
    value: '#DEE2E7',
  },
  {
    name: '--ivue-title-color',
    value: '#383D47',
  },
  {
    name: '--ivue-text-color',
    value: '#4A505E',
  },
  {
    name: '--ivue-border-multiple-color',
    value: '#e8eaec',
  },
  {
    name: '--ivue-background-color-select-hover',
    value: '#f3f3f3',
  },
  {
    name: '--ivue-background-color-multiple',
    value: '#f7f7f7',
  },
  {
    name: '--ivue-input-disabled-color',
    value: '#c5c8ce',
  },
  {
    name: '--ivue-input-disabled-bg',
    value: '#ededed',
  },
  {
    name: '--ivue-input-placeholder-color',
    value: '#c5c8ce',
  },
  {
    name: '--ivue-border-color',
    value: '#dcdee2',
  },
  {
    name: '--ivue-legend-color',
    value: '#999999',
  },
  {
    name: '--ivue-arrow-color',
    value: '#808695',
  },
  {
    name: '--ivue-cursor-disabled',
    value: 'not-allowed',
  },
  {
    name: '--ivue-font-small-size',
    value: '12px',
  },
  {
    name: '--ivue-font-base-size',
    value: '14px',
  },
  {
    name: '--ivue-font-default-size',
    value: '16px',
  },
  {
    name: '--ivue-font-large-size',
    value: '18px',
  },
  {
    name: '--ivue-border-radius',
    value: '4px',
  },
  {
    name: '--ivue-all-transition',
    value: 'all 0.2s ease-in-out',
  },
  {
    name: '--ivue-default-transition-time',
    value: '0.2s',
  },
  {
    name: '--ivue-ease-in-out',
    value: 'ease-in-out',
  },
]);
</script>

<style lang="scss" scoped></style>
