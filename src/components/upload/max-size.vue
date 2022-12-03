<template>
    <ivue-upload v-model="fileList" :max-size="500 * 1024" @on-oversize="handleOversize"></ivue-upload>
</template>

<script>
export default {
    data() {
        return {
            fileList: [],
        };
    },
    methods: {
        handleOversize(file) {
            // eslint-disable-next-line no-console
            console.log(file);

            this.$message.error('文件大小不能超过 500kb');
        },
    },
};
</script>
