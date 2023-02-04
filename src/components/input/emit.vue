<template>
  <div class="button-wrapper">
    <ivue-button class="button" @click="handleFocus('start')"
      >Focus at first</ivue-button
    >
    <ivue-button class="button" @click="handleFocus('end')"
      >Focus at last</ivue-button
    >
    <ivue-button class="button" @click="handleFocus('all')"
      >Focus to select all</ivue-button
    >
    <ivue-button class="button" @click="handleFocus('preventScroll')"
      >Focus prevent scroll</ivue-button
    >
  </div>
  <div>
    <ivue-input
      v-model="value"
      placeholder="Enter something..."
      style="width: 300px"
      ref="input"
    ></ivue-input>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('View UI’s birthday is July 28');
const input = ref();

const handleFocus = (type) => {
  if (type === 'preventScroll') {
    input.value.focus({
      preventScroll: true,
    });
  } else {
    input.value.focus({
      cursor: type,
    });
  }
};
</script>

<style>
.button-wrapper {
  margin-bottom: 10px;
}

.button {
  margin-right: 10px;
}
</style>
