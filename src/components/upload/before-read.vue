<template>
    <p>普通校验</p>
    <ivue-upload v-model="fileList1" :before-read="handleBeforeRead"></ivue-upload>
    <p>通过 Promise 校验</p>
    <ivue-upload v-model="fileList2" :before-read="asyncHandleBeforeRead"></ivue-upload>
</template>

<script setup>
import { ref } from 'vue';

const fileList1 = ref([]);
const fileList2 = ref([]);

// 文件读取前的回调函数
const handleBeforeRead = (file) => {
    if (file.type !== 'image/jpeg') {
        this.$message.warning('请上传 jpeg 格式图片');

        return false;
    }
    return true;
};

// 文件读取前的回调函数 返回 Promise
const asyncHandleBeforeRead = (file) => {
    return new Promise((resolve, reject) => {
        if (file.type !== 'image/jpeg') {
            this.$message.warning('请上传 jpeg 格式图片');

            reject();
        } else {
            resolve(file);
        }
    });
};
</script>
