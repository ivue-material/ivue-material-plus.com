<template>
    <ivue-button class="button" @click="handleShow1">整页显示，3秒后关闭</ivue-button>
    <ivue-button class="button" @click="handleShow2">通过render自定义显示内容</ivue-button>
</template>

<script setup>
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

const handleShow1 = () => {
    proxy.$IvueSpin.show();

    setTimeout(() => {
        proxy.$IvueSpin.hide();
    }, 3000);
};

const handleShow2 = () => {
    proxy.$IvueSpin.show({
        render: (h) => {
            return h('div', 'Loading...');
        },
    });

    setTimeout(() => {
        proxy.$IvueSpin.hide();
    }, 3000);
};
</script>

<style scoped>
.button {
    margin-right: 20px;
}
</style>
