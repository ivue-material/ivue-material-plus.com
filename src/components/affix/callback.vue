<template>
  <div>
    <ivue-affix :offset-top="100" @on-change="handleChange">
      <div class="demo-affix">固定在距顶部 100px 的位置 触发回调</div>
    </ivue-affix>
  </div>
</template>

<script setup>
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

const handleChange = (status) => {
  proxy.$message.info({
    content: `status: ${status}`,
  });
};
</script>

<style scoped>
.demo-affix {
  width: 300px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  font-size: 12px;
  border-radius: 5px;
  background: #5b8eff;
  color: #fff;
}
</style>
