<template>
  <ivue-popover
    v-model="visible"
    title="哆啦A梦"
    content="漫画叙述了一只来自22世纪的猫型机器人——哆啦A梦，受主人野比世修的托付，回到20世纪，借助从四维口袋里拿出来的各种未来道具，来帮助世修的高祖父——小学生野比大雄化解身边的种种困难问题，以及生活中和妈妈野比玉子、身边的小伙伴静香、胖虎、小夫发生的轻松幽默搞笑感人的故事"
  >
    <template #title>
      <div>
        <i>Custom title</i>
      </div>
    </template>
    <template #content>
      <ivue-button @click="handleClose">close</ivue-button>
    </template>

    <ivue-button class="popover-button">visible控制显示</ivue-button>
  </ivue-popover>
</template>

<script setup>
import { ref } from 'vue';

const visible = ref(false);

const handleClose = () => {
  visible.value = false;
};
</script>

<style scoped>
.popover-button {
  margin-right: 20px;
}
</style>
