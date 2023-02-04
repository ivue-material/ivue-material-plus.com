<template>
  <h4>通过 styles 设置外层 style 样式</h4>
  <ivue-button @click="modal1 = true">对话框距离顶部 20px</ivue-button>
  <ivue-modal
    v-model="modal1"
    title="哆啦A梦"
    transfer
    :styles="{ top: '20px' }"
  >
    <span
      >漫画叙述了一只来自22世纪的猫型机器人——哆啦A梦，受主人野比世修的托付，回到20世纪，借助从四维口袋里拿出来的各种未来道具，来帮助世修的高祖父——小学生野比大雄化解身边的种种困难问题，以及生活中和妈妈野比玉子、身边的小伙伴静香、胖虎、小夫发生的轻松幽默搞笑感人的故事</span
    >
  </ivue-modal>

  <h4>通过 modal-wrapper-classes 设置外层 class 样式</h4>
  <ivue-button @click="modal2 = true">居中对话框</ivue-button>
  <ivue-modal
    v-model="modal2"
    title="哆啦A梦"
    transfer
    modal-wrapper-classes="modal-vertical-center"
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
</script>

<style>
.modal-vertical-center:not(.ivue-modal-hidden) {
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-vertical-center .ivue-modal {
  top: 0 !important;
}
</style>
