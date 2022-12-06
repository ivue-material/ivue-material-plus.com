<template>
    <ivue-upload v-model="fileList" :max-size="isOverSize"></ivue-upload>
</template>

<script setup>
import { ref } from 'vue';

const fileList = ref([]);

const isOverSize = (file) => {
    // eslint-disable-next-line no-console
    console.log(file);

    const maxSize = file.type === 'image/jpeg' ? 500 * 1024 : 1000 * 1024;

    if (file.size >= maxSize) {
        this.$message.error(`文件大小不能超过 ${maxSize}`);
    }

    return file.size >= maxSize;
};
</script>
