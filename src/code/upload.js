const code = {};

code.default = `<template>
    <ivue-upload v-model="fileList" :after-read="handleAfterRead"></ivue-upload>
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
            console.log(file);
        },
    },
};
</script>
`;


code.multiple = `<template>
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
`;


code.status = `<template>
    <ivue-upload v-model="fileList" :after-read="handleAfterRead"></ivue-upload>
</template>

<script>
export default {
    data() {
        return {
            fileList: [
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
            ],
        };
    },
    methods: {
        // 此时可以自行将文件上传至服务器
        handleAfterRead(file) {
            file.status = 'uploading';
            file.message = '上传中...';

            setTimeout(() => {
                file.status = 'failed';
                file.message = '上传失败';
            }, 1000);
        },
    },
};
</script>
`;


code.maxCount = `<template>
    <ivue-upload v-model="fileList" multiple :max-count="2"></ivue-upload>
</template>

<script>
export default {
    data() {
        return {
            fileList: [],
        };
    },
};
</script>
`;


code.maxSize = `<template>
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
            console.log(file);

            this.$message.error('文件大小不能超过 500kb');
        },
    },
};
</script>
`;

code.maxSizeType = `<template>
    <ivue-upload v-model="fileList" :max-size="isOverSize"></ivue-upload>
</template>

<script>
export default {
    data() {
        return {
            fileList: [],
        };
    },
    methods: {
        isOverSize(file) {
            console.log(file);

            const maxSize =
                file.type === 'image/jpeg' ? 500 * 1024 : 1000 * 1024;

            if (file.size >= maxSize) {
                this.$message.error(\`文件大小不能超过 \${maxSize}\`);
            }

            return file.size >= maxSize;
        },
    },
};
</script>
`;

code.customUpload = `<template>
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
`;

code.previewCover = '';

export default code;
