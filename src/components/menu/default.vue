<template>
    <ivue-menu mode="horizontal" active-name="哆啦A梦" :theme="theme" @on-select="handleSelect">
        <ivue-menu-item name="哆啦A梦">哆啦A梦</ivue-menu-item>
        <ivue-menu-item name="野比大雄">野比大雄</ivue-menu-item>

        <ivue-submenu name="源静香">
            <template #title>源静香</template>
            <ivue-menu-group title="技能">
                <ivue-menu-item name="小提琴">小提琴</ivue-menu-item>
                <ivue-menu-item name="钢琴">钢琴</ivue-menu-item>
            </ivue-menu-group>
        </ivue-submenu>
    </ivue-menu>
    <h4>改变主题</h4>
    <ivue-radio-group v-model="theme">
        <ivue-radio label="light"></ivue-radio>
        <ivue-radio label="dark"></ivue-radio>
        <ivue-radio label="primary"></ivue-radio>
    </ivue-radio-group>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue';
const { proxy } = getCurrentInstance();

const theme = ref('light');

const handleSelect = (name) => {
    proxy.$message.info(`当前选择的name:${name}`);
};
</script>
