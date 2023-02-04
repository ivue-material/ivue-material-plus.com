<template>
  <ivue-input
    class="input"
    v-model="value"
    search
    placeholder="Enter something..."
  ></ivue-input>
  <ivue-input
    class="input"
    v-model="value"
    search
    enter-button
    placeholder="Enter something..."
  ></ivue-input>
  <ivue-input
    class="input"
    v-model="value"
    search
    enter-button="Search"
    placeholder="Enter something..."
  ></ivue-input>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
</script>

<style>
.input {
  margin-bottom: 10px;
}
</style>
