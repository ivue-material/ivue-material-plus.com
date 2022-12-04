<template>
    <p>普通校验</p>
    <ivue-upload v-model="fileList1" :before-read="handleBeforeRead"></ivue-upload>
    <p>通过 Promise 校验</p>
    <ivue-upload v-model="fileList2" :before-read="asyncHandleBeforeRead"></ivue-upload>
</template>

<script>
export default {
    data() {
        return {
            fileList1: [],
            fileList2: [],
        };
    },
    methods: {
        handleBeforeRead(file) {
            if (file.type !== 'image/jpeg') {
                this.$message.warning('请上传 jpeg 格式图片');

                return false;
            }
            return true;
        },
        // 返回 Promise
        asyncHandleBeforeRead(file) {
            return new Promise((resolve, reject) => {
                if (file.type !== 'image/jpeg') {
                    this.$message.warning('请上传 jpeg 格式图片');

                    reject();
                } else {
                    resolve(file);
                }
            });
        },
    },
};
</script>
