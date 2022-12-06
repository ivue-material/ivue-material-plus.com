const code = {};

code.default = `<template>
    <ivue-upload v-model="fileList" :after-read="handleAfterRead"></ivue-upload>
</template>

<script setup>
import { ref } from 'vue';

const fileList = ref([]);

// 此时可以自行将文件上传至服务器
const handleAfterRead = (file) => {
    // eslint-disable-next-line no-console
    console.log(file);
};
</script>
`;


code.multiple = `<template>
    <ivue-upload v-model="fileList" multiple></ivue-upload>
</template>

<script setup>
import { ref } from 'vue';

const fileList = ref([
    {
        url: 'https://pic2.zhimg.com/80/v2-0171f5d3faef3c06b8ec70a0327c3f43_720w.webp',
    },
    // Uploader 根据文件后缀来判断是否为图片文件
    // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
    {
        url: 'https://pic2.zhimg.com/80/v2-0171f5d3faef3c06b8ec70a0327c3f43_720w',
        isImage: true,
    },
]);
</script>
`;


code.status = `<template>
    <ivue-upload v-model="fileList" :after-read="handleAfterRead"></ivue-upload>
</template>

<script setup>
import { ref } from 'vue';

const fileList = ref([
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
]);

// 此时可以自行将文件上传至服务器
const handleAfterRead = (file) => {
    file.status = 'uploading';
    file.message = '上传中...';

    setTimeout(() => {
        file.status = 'failed';
        file.message = '上传失败';
    }, 1000);
};
</script>
`;


code.maxCount = `<template>
    <ivue-upload v-model="fileList" multiple :max-count="2"></ivue-upload>
</template>

import { ref } from 'vue';

const fileList = ref([]);
</script>
`;


code.maxSize = `<template>
    <ivue-upload v-model="fileList" :max-size="500 * 1024" @on-oversize="handleOversize"></ivue-upload>
</template>

<script setup>
import { ref } from 'vue';

const fileList = ref([]);

const handleOversize = (file) => {
    console.log(file);

    this.$message.error('文件大小不能超过 500kb');
};
</script>
`;

code.maxSizeType = `<template>
    <ivue-upload v-model="fileList" :max-size="isOverSize"></ivue-upload>
</template>

<script setup>
import { ref } from 'vue';

const fileList = ref([]);

const isOverSize = (file) => {
    console.log(file);

    const maxSize = file.type === 'image/jpeg' ? 500 * 1024 : 1000 * 1024;

    if (file.size >= maxSize) {
        this.$message.error(\`文件大小不能超过 \${maxSize}\`);
    }

    return file.size >= maxSize;
};
</script>
`;

code.customUpload = `<template>
    <ivue-upload v-model="fileList" :after-read="handleAfterRead">
        <ivue-button type="primary">上传文件</ivue-button>
    </ivue-upload>
</template>

<script setup>
import { ref } from 'vue';

const fileList = ref([]);

// 此时可以自行将文件上传至服务器
const handleAfterRead = (file) => {
    // eslint-disable-next-line no-console
    console.log(file);
};
</script>
`;

code.previewCover = `<template>
    <ivue-upload v-model="fileList" :after-read="handleAfterRead">
        <template #preview-cover="{ file }">
            <div class="preview-cover">{{ file.name }}</div>
        </template>
    </ivue-upload>
</template>

<script>
export default {
    data() {
        return {
            fileList: [
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
            ],
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
`;

code.beforeRead = `<template>
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
`;

code.disabled = `<template>
    <ivue-upload v-model="fileList" disabled></ivue-upload>
</template>

<script>
export default {
    data() {
        return {
            fileList: [
                {
                    url: 'https://pica.zhimg.com/80/v2-af54c81674d7580b47988bc6cfae896c_720w.webp',
                },
                {
                    url: 'https://picx.zhimg.com/80/v2-9b27fcc905788bf1a86dc52cc6dc04df_720w.webp',
                },
                {
                    url: 'https://pic1.zhimg.com/80/v2-210691412707bfd60afd05c18aa99c12_720w.webp',
                },
            ],
        };
    },
};
</script>
`;

code.customSingleImage = `<template>
    <ivue-upload v-model="fileList"></ivue-upload>
</template>

<script>
export default {
    data() {
        return {
            fileList: [
                {
                    url: 'https://pica.zhimg.com/80/v2-af54c81674d7580b47988bc6cfae896c_720w.webp',
                },
                {
                    url: 'https://picx.zhimg.com/80/v2-9b27fcc905788bf1a86dc52cc6dc04df_720w.webp',
                    deletable: true,
                    beforeDelete: () => {
                        this.$message.success('自定义单个预览图片删除事件');

                        return true;
                    },
                },
                {
                    url: 'https://pic1.zhimg.com/80/v2-210691412707bfd60afd05c18aa99c12_720w.webp',
                    deletable: true,
                    imageFit: 'none',
                    previewSize: 120,
                },
            ],
        };
    },
};
</script>
`;


code.drag = `<template>
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
`;


code.compressor = '<ivue-uploader :before-read="beforeRead" />';
code.compressorImport = `import Compressor from 'compressorjs';

export default {
  methods: {
    beforeRead(file) {
      return new Promise((resolve) => {
        // compressorjs 默认开启 checkOrientation 选项
        // 会将图片修正为正确方向
        new Compressor(file, {
          success: resolve,
          error(err) {
            console.log(err.message);
          },
        });
      });
    },
  },
};`;

export default code;
