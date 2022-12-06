<template>
    <ivue-upload v-model="fileList" :after-read="handleAfterRead"></ivue-upload>
</template>

<script setup>
import { ref } from 'vue';

const fileList = ref([
    {
        url: 'https://pica.zhimg.com/80/v2-af54c81674d7580b47988bc6cfae896c_720w.webp',
        status: 'uploading',
        message: '上传中...',
    },
    {
        url: 'https://picx.zhimg.com/80/v2-9b27fcc905788bf1a86dc52cc6dc04df_720w.webp',
        status: 'failed',
        message: '上传失败',
    },
    {
        url: 'https://pic1.zhimg.com/80/v2-210691412707bfd60afd05c18aa99c12_720w.webp',
        status: 'done',
    },
]);

// 此时可以自行将文件上传至服务器
const handleAfterRead = (file) => {
    file.status = 'uploading';
    file.message = '上传中...';

    setTimeout(() => {
        file.status = 'failed';
        file.message = '上传失败';
    }, 1000);
};
</script>
