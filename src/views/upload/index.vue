<template>
    <div>
        <h1>Upload 上传</h1>
        <p>用于将本地的图片或文件上传至服务器，并在上传过程中展示预览图和上传进度。目前 Uploader 组件不包含将文件上传至服务器的接口逻辑，该步骤需要自行实现</p>
        <h2>基本用法</h2>
        <p>
            最基本用法，点击上传，一次选择一个文件,文件上传完毕后会触发
            <code>after-read</code> 回调函数，获取到对应的
            <code>file</code> 对象
        </p>
        <doc-markdown :code="code.default">
            <template #demo>
                <default></default>
            </template>
        </doc-markdown>
        <h2>多选</h2>
        <p>
            设置属性
            <code>multiple</code>，可以选择多个文件
        </p>
        <doc-markdown :code="code.multiple">
            <template #demo>
                <multiple></multiple>
            </template>
        </doc-markdown>
        <h2>上传状态</h2>
        <p>
            通过
            <code>status</code> 属性可以标识上传状态，
            <code>uploading</code> 表示上传中，
            <code>failed</code> 表示上传失败，
            <code>done</code> 表示上传完成
        </p>
        <doc-markdown :code="code.status">
            <template #demo>
                <status></status>
            </template>
        </doc-markdown>
        <h2>限制上传数量</h2>
        <p>
            通过
            <code>max-count</code> 属性可以限制上传文件的数量，上传数量达到限制后，会自动隐藏上传区域
        </p>
        <doc-markdown :code="code.maxCount">
            <template #demo>
                <max-count></max-count>
            </template>
        </doc-markdown>
        <h2>限制上传大小</h2>
        <p>
            通过
            <code>max-size</code> 属性可以限制上传文件的大小，超过大小的文件会被自动过滤，这些文件信息可以通过
            <code>on-oversize</code> 事件获取
        </p>
        <doc-markdown :code="code.maxSize">
            <template #demo>
                <max-size></max-size>
            </template>
        </doc-markdown>
        <p>
            如果需要针对不同类型的文件来作出不同的大小限制，可以在
            <code>max-size</code> 属性中传入一个函数，在函数中通过
            <code>file.type</code> 区分文件类型，返回
            <code>true</code> 表示超出限制，
            <code>false</code> 表示未超出限制
        </p>
        <doc-markdown :code="code.maxSizeType">
            <template #demo>
                <max-size-type></max-size-type>
            </template>
        </doc-markdown>
        <h2>自定义上传样式</h2>
        <p>通过默认插槽可以自定义上传区域的样式。</p>
        <doc-markdown :code="code.customUpload">
            <template #demo>
                <custom-upload></custom-upload>
            </template>
        </doc-markdown>
        <h2>自定义预览样式</h2>
        <p>
            通过
            <code>preview-cover</code> 插槽可以自定义覆盖在预览区域上方的内容
        </p>
        <doc-markdown :code="code.previewCover">
            <template #demo>
                <preview-cover></preview-cover>
            </template>
        </doc-markdown>
    </div>
</template>

<script>
import Code from '@/code/upload';
import Default from '@/components/upload/default.vue';
import Multiple from '@/components/upload/multiple.vue';
import Status from '@/components/upload/status.vue';
import MaxCount from '@/components/upload/max-count.vue';
import MaxSize from '@/components/upload/max-size.vue';
import MaxSizeType from '@/components/upload/max-size-type.vue';
import CustomUpload from '@/components/upload/custom-upload.vue';
import PreviewCover from '@/components/upload/preview-cover.vue';

export default {
    data() {
        return {
            code: Code,
        };
    },
    components: {
        Default,
        Multiple,
        Status,
        MaxCount,
        MaxSize,
        MaxSizeType,
        CustomUpload,
        PreviewCover,
    },
};
</script>

<style lang="scss" scoped>
</style>
