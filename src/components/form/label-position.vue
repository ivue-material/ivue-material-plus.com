<template>
  <h4>left 左对齐</h4>
  <ivue-form :model="formItem" :label-width="100" label-position="left">
    <ivue-form-item label="Input">
      <ivue-input v-model="formItem.input"></ivue-input>
    </ivue-form-item>

    <ivue-form-item label="Textarea">
      <ivue-input v-model="formItem.textarea" type="textarea"></ivue-input>
    </ivue-form-item>
  </ivue-form>
  <h4>right 右对齐</h4>
  <ivue-form :model="formItem" :label-width="100" label-position="right">
    <ivue-form-item label="Input">
      <ivue-input v-model="formItem.input"></ivue-input>
    </ivue-form-item>

    <ivue-form-item label="Textarea">
      <ivue-input v-model="formItem.textarea" type="textarea"></ivue-input>
    </ivue-form-item>
  </ivue-form>
  <h4>top 上对齐</h4>
  <ivue-form :model="formItem" :label-width="100" label-position="top">
    <ivue-form-item label="Input">
      <ivue-input v-model="formItem.input"></ivue-input>
    </ivue-form-item>

    <ivue-form-item label="Textarea">
      <ivue-input v-model="formItem.textarea" type="textarea"></ivue-input>
    </ivue-form-item>
  </ivue-form>
</template>

<script setup>
import { ref } from 'vue';

const formItem = ref({
  input: '',
  textarea: '',
});
</script>
