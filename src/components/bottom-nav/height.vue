<template>
    <h3>height 设置为rem</h3>
    <ivue-bottom-nav v-model="value" height="5rem">
        <ivue-bottom-nav-item color="primary" name="home">
            <span>Home</span>
            <ivue-icon>home</ivue-icon>
        </ivue-bottom-nav-item>
        <ivue-bottom-nav-item color="primary" name="settings">
            <span>Settings</span>
            <ivue-icon>settings</ivue-icon>
        </ivue-bottom-nav-item>
    </ivue-bottom-nav>
    <h3>height 设置为number</h3>
    <ivue-bottom-nav v-model="value" height="100">
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
import { ref } from 'vue';

const value = ref('home');
</script>
