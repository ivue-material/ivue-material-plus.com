<template>
    <ivue-menu ref="menu">
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
    <h4>手动更新</h4>
    <ivue-button class="menu-button" @click="handleUpdateOpened">手动更新展开的子目录</ivue-button>
    <ivue-button class="menu-button" @click="handleUpdateActiveName">手动更新当前选择项</ivue-button>
</template>

<script setup>
import { ref } from 'vue';

const menu = ref();

const handleUpdateOpened = () => {
    menu.value.updateOpened(['源静香']);
};

const handleUpdateActiveName = () => {
    menu.value.updateActiveName('野比大雄');
};
</script>

<style scoped>
.menu-button {
    margin-right: 20px;
}
</style>
