<template>
    <ivue-upload v-model="fileList" :after-read="handleAfterRead">
        <template #preview-cover="{ file }">
            <div class="preview-cover">{{ file.name }}</div>
        </template>
    </ivue-upload>
</template>

<script setup>
import { ref } from 'vue';

const fileList = ref([
    {
        url: 'https://pica.zhimg.com/80/v2-af54c81674d7580b47988bc6cfae896c_720w.webp',
        status: 'done',
        name: '记忆面包',
    },
    {
        url: 'https://picx.zhimg.com/80/v2-9b27fcc905788bf1a86dc52cc6dc04df_720w.webp',
        status: 'done',
        name: '百宝袋',
    },
    {
        url: 'https://pic1.zhimg.com/80/v2-210691412707bfd60afd05c18aa99c12_720w.webp',
        status: 'done',
        name: '竹蜻蜓',
    },
]);

// 此时可以自行将文件上传至服务器
const handleAfterRead = (file) => {
    // eslint-disable-next-line no-console
    console.log(file);
};
</script>


<style scoped>
.preview-cover {
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
    width: 100%;
    padding: 4px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background: rgba(0, 0, 0, 0.3);
    font-weight: bold;
}
</style>
