<template>
    <div class="spin">
        <span>《哆啦A梦》（日语：ドラえもん；英语：Doraemon；旧译叮当 / 小叮当）是日本漫画家藤本弘（笔名藤子·F·不二雄）创作的漫画</span>
        <ivue-spin fix :show="show">loading...</ivue-spin>
    </div>
    <div class="spin-switch">
        <span>切换显示状态：</span>
        <ivue-switch color="#5B8EFF" false-color="#FF617F" v-model="show"></ivue-switch>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const show = ref(true);
</script>

<style scoped>
.spin {
    width: 200px;
    position: relative;
    border: 1px solid #000;
}

.spin-switch {
    margin-top: 10px;
}
</style>
