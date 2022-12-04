<template>
    <ivue-upload
        v-model="fileList"
        multiple
        :drag-accept="['jpeg']"
        type="drag"
        @on-drag-upload-error="handleUploadError"
    ></ivue-upload>
</template>

<script>
export default {
    data() {
        return {
            fileList: [],
        };
    },
    methods: {
        // 上传错误
        handleUploadError(file) {
            // eslint-disable-next-line no-console
            console.log('上传错误', file);
        },
    },
};
</script>
