const code = {};

code.default = `<template>
    <h4>向下滚动页面</h4>
    <div class="back-top"></div>
    <ivue-back-top @on-scroll-end="handleScrollEnd"></ivue-back-top>
</template>

<script setup>
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

const handleScrollEnd = () => {
    proxy.$message.info('到达顶部');
};
</script>

<style scoped>
.back-top{
  height: 200vh;
}
</style>
`;

code.styles = `<template>
    <h4>向下滚动页面，查看自定义效果</h4>
    <ivue-back-top :bottom="100" :visibility-height="100">
        <ivue-button status="primary">点击返回顶部</ivue-button>
    </ivue-back-top>
</template>

<style scoped>
.back-top{
  height: 200vh;
}
</style>
`;

code.icon = `<template>
    <h4>向下滚动页面，查看自定义效果</h4>
    <div class="back-top"></div>
    <ivue-back-top>
        <template #icon>
            <ivue-icon>catching_pokemon</ivue-icon>
        </template>
    </ivue-back-top>
</template>

<style scoped>
.back-top{
  height: 200vh;
}
</style>
`;

export default code;
