<template>
    <ivue-upload
        v-model="fileList"
        multiple
        :drag-accept="['jpeg']"
        type="drag"
        @on-drag-upload-error="handleUploadError"
    ></ivue-upload>
</template>

<script setup>
import { ref } from 'vue';

const fileList = ref([]);

// 上传错误
const handleUploadError = (file) => {
    // eslint-disable-next-line no-console
    console.log('上传错误', file);
};
</script>
