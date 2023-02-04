<template>
  <ivue-button class="modal-button" @click="modal1 = true"
    >禁用关闭按钮</ivue-button
  >
  <ivue-modal v-model="modal1" title="哆啦A梦" transfer :closable="false">
    <span
      >漫画叙述了一只来自22世纪的猫型机器人——哆啦A梦，受主人野比世修的托付，回到20世纪，借助从四维口袋里拿出来的各种未来道具，来帮助世修的高祖父——小学生野比大雄化解身边的种种困难问题，以及生活中和妈妈野比玉子、身边的小伙伴静香、胖虎、小夫发生的轻松幽默搞笑感人的故事</span
    >
  </ivue-modal>

  <ivue-button class="modal-button" @click="modal2 = true"
    >禁用点击遮罩层关闭</ivue-button
  >
  <ivue-modal v-model="modal2" title="哆啦A梦" transfer :mask-closable="false">
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

<style scoped>
.modal-button {
  margin-right: 20px;
}
</style>
