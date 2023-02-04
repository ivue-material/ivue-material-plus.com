<template>
  <ivue-table v-loading="loading" :data="tableData">
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
