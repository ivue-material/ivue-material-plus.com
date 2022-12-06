<template>
    <ivue-upload v-model="fileList" :after-read="handleAfterRead">
        <ivue-button type="primary">上传文件</ivue-button>
    </ivue-upload>
</template>

<script setup>
import { ref } from 'vue';

const fileList = ref([]);

// 此时可以自行将文件上传至服务器
const handleAfterRead = (file) => {
    // eslint-disable-next-line no-console
    console.log(file);
};
</script>
