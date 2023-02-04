<template>
  <ivue-button class="modal-button" @click="handleConfirm"
    >普通对话框</ivue-button
  >
  <ivue-button class="modal-button" @click="handleText"
    >自定义按钮文案</ivue-button
  >
  <ivue-button class="modal-button" @click="handleAsync"
    >异步对话框</ivue-button
  >
</template>

<script setup>
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

const handleConfirm = () => {
  proxy.$IvueModal.confirm({
    title: '哆啦A梦',
    content:
      '漫画叙述了一只来自22世纪的猫型机器人——哆啦A梦，受主人野比世修的托付，回到20世纪，借助从四维口袋里拿出来的各种未来道具，来帮助世修的高祖父——小学生野比大雄化解身边的种种困难问题，以及生活中和妈妈野比玉子、身边的小伙伴静香、胖虎、小夫发生的轻松幽默搞笑感人的故事',
    onCancel: () => {
      proxy.$message.info('取消');
    },
    onConfirm: () => {
      proxy.$message.info('确认');
    },
  });
};

const handleText = () => {
  proxy.$IvueModal.confirm({
    title: '哆啦A梦',
    content:
      '漫画叙述了一只来自22世纪的猫型机器人——哆啦A梦，受主人野比世修的托付，回到20世纪，借助从四维口袋里拿出来的各种未来道具，来帮助世修的高祖父——小学生野比大雄化解身边的种种困难问题，以及生活中和妈妈野比玉子、身边的小伙伴静香、胖虎、小夫发生的轻松幽默搞笑感人的故事',
    cancelText: 'Cancel',
    confirmText: 'Confirm',
  });
};

const handleAsync = () => {
  proxy.$IvueModal.confirm({
    title: '哆啦A梦',
    content:
      '漫画叙述了一只来自22世纪的猫型机器人——哆啦A梦，受主人野比世修的托付，回到20世纪，借助从四维口袋里拿出来的各种未来道具，来帮助世修的高祖父——小学生野比大雄化解身边的种种困难问题，以及生活中和妈妈野比玉子、身边的小伙伴静香、胖虎、小夫发生的轻松幽默搞笑感人的故事',
    loading: true,
    onConfirm: () => {
      setTimeout(() => {
        proxy.$IvueModal.remove();
      }, 2000);
    },
  });
};
</script>

<style scoped>
.modal-button {
  margin-right: 20px;
}
</style>
