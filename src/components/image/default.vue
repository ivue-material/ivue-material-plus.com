<template>
  <div class="image-demo">
    <div v-for="fit in fits" :key="fit" class="image-demo-content">
      <span class="image-demo-title">{{ fit }}</span>
      <ivue-image
        style="width: 100px; height: 100px"
        :src="url"
        :fit="fit"
        radius="10"
      ></ivue-image>
    </div>
  </div>
</template>

<script setup>
const fits = ['fill', 'contain', 'cover', 'none', 'scale-down'];
const url = 'https://pic3.zhimg.com/v2-13744f101e60252ed8bd5dee09e7219a_b.jpg';
</script>

<style scoped>
.image-demo {
  display: flex;
  flex-wrap: wrap;
}

.image-demo-title {
  margin-bottom: 10px;
}

.image-demo-content {
  margin-right: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
