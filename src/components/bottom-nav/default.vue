<template>
    <ivue-bottom-nav v-model="value" @on-change="handleChange">
        <ivue-bottom-nav-item color="primary" name="home">
            <span>Home</span>
            <ivue-icon>home</ivue-icon>
        </ivue-bottom-nav-item>
        <ivue-bottom-nav-item color="primary" name="settings">
            <span>Settings</span>
            <ivue-icon>settings</ivue-icon>
        </ivue-bottom-nav-item>
    </ivue-bottom-nav>
</template>

<script setup>
import { getCurrentInstance, ref } from 'vue';

const { proxy } = getCurrentInstance();

const value = ref('home');

const handleChange = (value) => {
    proxy.$message.info({
        content: `当前激活导航：${value}`,
    });
};
</script>
