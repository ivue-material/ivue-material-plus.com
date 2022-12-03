<template>
    <ivue-upload v-model="fileList" multiple></ivue-upload>
</template>

<script>
export default {
    data() {
        return {
            fileList: [
                {
                    url: 'https://pic2.zhimg.com/80/v2-0171f5d3faef3c06b8ec70a0327c3f43_720w.webp',
                },
                // Uploader 根据文件后缀来判断是否为图片文件
                // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
                {
                    url: 'https://pic2.zhimg.com/80/v2-0171f5d3faef3c06b8ec70a0327c3f43_720w',
                    isImage: true,
                },
            ],
        };
    },
    methods: {},
};
</script>
