<template>
  <ivue-button class="modal-button" @click="modal1 = true"
    >重新渲染内容</ivue-button
  >
  <ivue-modal v-model="modal1" title="哆啦A梦" transfer reset-body>
    <template #default>
      <reset-body-content></reset-body-content>
    </template>
  </ivue-modal>

  <ivue-button class="modal-button" @click="modal2 = true"
    >不重新渲染内容</ivue-button
  >
  <ivue-modal v-model="modal2" title="哆啦A梦" transfer>
    <reset-body-content></reset-body-content>
  </ivue-modal>
</template>

<script setup>
import { ref } from 'vue';
import ResetBodyContent from './reset-body-content.vue';

const modal1 = ref(false);
const modal2 = ref(false);
</script>

<style scoped>
.modal-button {
  margin-right: 20px;
}
</style>
