<template>
  <h4>loading类型默认 spin</h4>
  <ivue-button @click="modal1 = true">异步关闭 spin</ivue-button>
  <ivue-modal
    v-model="modal1"
    title="哆啦A梦"
    transfer
    :loading="loading"
    @on-confirm="handleConfirm1"
  >
    <span
      >漫画叙述了一只来自22世纪的猫型机器人——哆啦A梦，受主人野比世修的托付，回到20世纪，借助从四维口袋里拿出来的各种未来道具，来帮助世修的高祖父——小学生野比大雄化解身边的种种困难问题，以及生活中和妈妈野比玉子、身边的小伙伴静香、胖虎、小夫发生的轻松幽默搞笑感人的故事</span
    >
  </ivue-modal>

  <h4>loading类型 button</h4>
  <ivue-button @click="modal2 = true">异步关闭 button</ivue-button>
  <ivue-modal
    v-model="modal2"
    title="哆啦A梦"
    loadingType="button"
    transfer
    :loading="loading"
    @on-confirm="handleConfirm2"
  >
    <span
      >漫画叙述了一只来自22世纪的猫型机器人——哆啦A梦，受主人野比世修的托付，回到20世纪，借助从四维口袋里拿出来的各种未来道具，来帮助世修的高祖父——小学生野比大雄化解身边的种种困难问题，以及生活中和妈妈野比玉子、身边的小伙伴静香、胖虎、小夫发生的轻松幽默搞笑感人的故事</span
    >
  </ivue-modal>
</template>

<script setup>
import { ref } from 'vue';

const modal1 = ref(false);
const modal2 = ref(false);

const loading = ref(true);

const handleConfirm1 = () => {
  setTimeout(() => {
    modal1.value = false;
  }, 2000);
};

const handleConfirm2 = () => {
  setTimeout(() => {
    modal2.value = false;
  }, 2000);
};
</script>
