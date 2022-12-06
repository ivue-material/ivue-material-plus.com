<template>
    <ivue-switch :before-change="handleBeforeChange" />
</template>

<script setup>
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

const handleBeforeChange = () => {
    return new Promise((resolve) => {
        proxy.$IvueModal.confirm({
            title: '切换确认',
            content: '您确认要切换开关状态吗？',
            onConfirm: () => {
                resolve();
            },
        });
    });
};
</script>
