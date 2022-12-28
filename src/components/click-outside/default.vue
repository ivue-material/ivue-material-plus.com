<template>
    <ivue-checkbox v-model="capture" @on-change="handleChange">设置为捕获事件，设置后请刷新页面重新点击查看</ivue-checkbox>
    <div class="click-outside-demo" v-click-outside:[capture]="handleClickOutside">点击元素外部触发</div>
    <ivue-button class="click-outside-button" @click="handleButton">点击按钮查看事件触发顺序</ivue-button>
</template>

<script setup>
import { getCurrentInstance, ref } from 'vue';

const { proxy } = getCurrentInstance();

if (!localStorage.getItem('capture')) {
    localStorage.setItem('capture', JSON.stringify(false));
}

const capture = ref(JSON.parse(localStorage.getItem('capture')));

const handleClickOutside = () => {
    proxy.$message.info('点击外部触发1');
};

const handleButton = () => {
    proxy.$message.info('点击按钮触发2');
};

const handleChange = (value) => {
    localStorage.setItem('capture', JSON.stringify(value));
};
</script>

<style scoped>
.click-outside-demo {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    background: var(--ivue-primary-color);
    color: var(--ivue-white-color);
}

.click-outside-button {
    margin-top: 20px;
}
</style>
