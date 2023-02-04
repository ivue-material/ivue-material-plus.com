<template>
  <ivue-table
    v-loading="loading"
    :data="tableData"
    ivue-loading-text="Loading..."
    ivue-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <ivue-table-column prop="date" label="Date" width="180" />
    <ivue-table-column prop="name" label="Name" width="180" />
    <ivue-table-column prop="address" label="Address" />
  </ivue-table>
  <ivue-table
    v-loading="loading"
    ivue-loading-icon-class="ivue-loop-icon ivue-icon ivue-animation-loop"
    ivue-loading-icon-text="loop"
    :data="tableData"
  >
    <ivue-table-column prop="date" label="Date" width="180" />
    <ivue-table-column prop="name" label="Name" width="180" />
    <ivue-table-column prop="address" label="Address" />
  </ivue-table>
</template>

<script setup>
import { ref } from 'vue';

const loading = ref(true);

const tableData = [
  {
    date: '2016-05-02',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-04',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-01',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
];
</script>

<style>
.ivue-loop-icon {
  font-size: 40px !important;
}
</style>
