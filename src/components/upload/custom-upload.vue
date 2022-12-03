<template>
    <ivue-upload v-model="fileList" :after-read="handleAfterRead">
        <ivue-button type="primary">上传文件</ivue-button>
    </ivue-upload>
</template>

<script>
export default {
    data() {
        return {
            fileList: [],
        };
    },
    methods: {
        // 此时可以自行将文件上传至服务器
        handleAfterRead(file) {
            // eslint-disable-next-line no-console
            console.log(file);
        },
    },
};
</script>
