<template>
    <div class="upload-wrapper">
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
        <p>通过默认插槽可以自定义上传区域的样式</p>
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
        <h2>上传前置处理</h2>
        <p>
            通过传入
            <code>beforeRead</code> 函数可以在上传前进行校验和处理，返回
            <code>true</code> 表示校验通过，返回
            <code>false</code> 表示校验失败。支持返回
            <code>Promise</code> 对
            <code>file</code> 对象进行自定义处理，例如压缩图片
        </p>
        <doc-markdown :code="code.beforeRead">
            <template #demo>
                <before-read></before-read>
            </template>
        </doc-markdown>
        <h2>禁用文件上传</h2>
        <p>
            通过
            <code>disabled</code> 属性禁用文件上传
        </p>
        <doc-markdown :code="code.disabled">
            <template #demo>
                <disabled></disabled>
            </template>
        </doc-markdown>
        <h2>自定义单个图片预览</h2>
        <p>
            在
            <code>v-model</code> 数组中设置单个预览图片属性，
            支持
            <code>imageFit</code>,
            <code>deletable</code>,
            <code>previewSize</code>,
            <code>beforeDelete</code>
        </p>
        <doc-markdown :code="code.customSingleImage">
            <template #demo>
                <custom-single-image></custom-single-image>
            </template>
        </doc-markdown>
        <h2>拖拽上传</h2>
        <p>
            设置属性
            <code>type</code> 为
            <code>drag</code>,可以拖拽上传,通过设置
            <code>drag-accept</code>属性,设置拖拽接受的上传类型后缀,如:
            <code>jpeg</code>,
            <code>png</code>,
            <code>jpg</code>
        </p>
        <doc-markdown :code="code.drag">
            <template #demo>
                <drag></drag>
            </template>
        </doc-markdown>
        <h2>API</h2>
        <h3>Props</h3>
        <ivue-table :data="propsData" border>
            <ivue-table-column prop="name" label="名称"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300">
                <template #default="props">
                    <p class="illustrate" v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="type" label="类型"></ivue-table-column>
            <ivue-table-column prop="value" label="可选值" width="200">
                <template #default="props">
                    <p v-html="props.row.value || '-'"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="default" label="默认" width="100"></ivue-table-column>
        </ivue-table>
        <ivue-card
            class="card"
        >注意：accept、capture 和 multiple 为浏览器 input 标签的原生属性，移动端各种机型对这些属性的支持程度有所差异，因此在不同机型和 WebView 下可能出现一些兼容性问题。</ivue-card>
        <h3>Image Preview Props</h3>
        <ivue-table :data="imagePreviewProps" border>
            <ivue-table-column prop="name" label="名称"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300">
                <template #default="props">
                    <p class="illustrate" v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="type" label="类型"></ivue-table-column>
            <ivue-table-column prop="value" label="可选值" width="100"></ivue-table-column>
            <ivue-table-column prop="default" label="默认" width="200"></ivue-table-column>
        </ivue-table>
        <h3>Events</h3>
        <ivue-table :data="eventsData" border>
            <ivue-table-column prop="name" label="名称" width="200"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300">
                <template #default="props">
                    <p class="illustrate" v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="value" label="返回值" width="150"></ivue-table-column>
        </ivue-table>
        <h3>Slots</h3>
        <ivue-table :data="slotsData" border>
            <ivue-table-column prop="name" label="名称" width="200"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300">
                <template #default="props">
                    <p class="illustrate" v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="value" label="参数" width="100"></ivue-table-column>
        </ivue-table>
        <h3>回调参数</h3>
        <h4>
            <p>
                <code>before-read</code>、
                <code>after-read</code>、
                <code>before-delete</code> 执行时会传递以下回调参数
            </p>
        </h4>
        <ivue-table :data="callbackData" border>
            <ivue-table-column prop="name" label="名称" width="100"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300">
                <template #default="props">
                    <p class="illustrate" v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="type" label="类型" width="100"></ivue-table-column>
        </ivue-table>
        <h3>ResultType 可选值</h3>
        <h4>
            <p>
                <code>result-type</code> 字段表示文件读取结果的类型，上传大文件时，建议使用 file 类型，避免卡顿
            </p>
        </h4>
        <ivue-table :data="resultTypeData" border>
            <ivue-table-column prop="name" label="名称" width="100"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300">
                <template #default="props">
                    <p class="illustrate" v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
        </ivue-table>
        <h3>方法</h3>
        <h4>
            <p>
                通过
                <code>ref</code> 可以获取到
                <code>Uploader</code> 实例并调用实例方法
            </p>
        </h4>
        <ivue-table :data="functionData" border>
            <ivue-table-column prop="name" label="名称" width="150"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300">
                <template #default="props">
                    <p class="illustrate" v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
        </ivue-table>
        <h3>常见问题</h3>
        <ivue-card title="Uploader 在部分安卓机型上无法上传图片？">
            <p>{{ `Uploader 采用了 HTML 原生的 <input type="file /> 标签进行上传，能否上传取决于当前系统和浏览器的兼容性。当遇到无法上传的问题时，一般有以下几种情况` }}</p>
            <ul class="ul">
                <li class="li">
                    遇到了安卓 App WebView 的兼容性问题，需要在安卓原生代码中进行兼容，可以参考此
                    <a
                        class="a"
                        href="https://blog.csdn.net/qq_32756581/article/details/112861088"
                        target="_blank"
                    >文章</a>
                </li>
                <li class="li">
                    图片格式不正确，在当前系统/浏览器中无法识别，比如
                    <code>webp</code> 或
                    <code>heic</code> 格式
                </li>
                <li class="li">其他浏览器兼容性问题</li>
            </ul>
        </ivue-card>
        <h3>拍照上传的图片被旋转 90 度？</h3>
        <ivue-card title="Uploader 在部分安卓机型上无法上传图片？">
            <p>
                部分手机在拍照上传时会出现图片被旋转 90 度的问题，这个问题可以通过
                <a
                    class="a"
                    href="https://github.com/fengyuanchen/compressorjs"
                    target="_blank"
                >compressorjs</a> 或其他开源库进行处理。
                compressorjs 是一个开源的图片处理库，提供了图片压缩、图片旋转等能力。
            </p>
            <h4>示例</h4>
            <p>使用 compressorjs 进行处理的示例代码如下</p>
            <pre-code>{{ code.compressor }}</pre-code>
            <pre-code>{{ code.compressorImport }}</pre-code>
        </ivue-card>
        <h3>上传 HEIC/HEIF 格式的图片后无法展示？</h3>
        <ivue-card>
            <p>目前 Chrome、Safari 等浏览器不支持展示 HEIC/HEIF 格式的图片，因此上传后无法在 Uploader 组件中进行预览</p>
            <p>
                [HEIF] 格式的兼容性请参考
                <a href="https://caniuse.com/?search=heic" target="_blank">caniuse</a>
            </p>
        </ivue-card>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import Code from '@/code/upload';

import Default from '@/components/upload/default.vue';
import Multiple from '@/components/upload/multiple.vue';
import Status from '@/components/upload/status.vue';
import MaxCount from '@/components/upload/max-count.vue';
import MaxSize from '@/components/upload/max-size.vue';
import MaxSizeType from '@/components/upload/max-size-type.vue';
import CustomUpload from '@/components/upload/custom-upload.vue';
import PreviewCover from '@/components/upload/preview-cover.vue';
import BeforeRead from '@/components/upload/before-read.vue';
import Disabled from '@/components/upload/disabled.vue';
import CustomSingleImage from '@/components/upload/custom-single-image.vue';
import Drag from '@/components/upload/drag.vue';

const code = ref(Code);

// propsData
const propsData = ref([
    {
        name: 'v-model (fileList)',
        illustrate: '已上传的文件列表',
        type: 'Array',
        default: '[]',
    },
    {
        name: 'accept',
        illustrate:
            '允许上传的文件类型，<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file#%E9%99%90%E5%88%B6%E5%85%81%E8%AE%B8%E7%9A%84%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B" target="_blank">详细说明</a>',
        type: 'String',
        default: 'image/*',
    },
    {
        name: 'name',
        illustrate: '标识符，可以在回调函数的第二项参数中获取',
        type: 'Number | String',
        default: '-',
    },
    {
        name: 'name',
        illustrate: '标识符，可以在回调函数的第二项参数中获取',
        type: 'Number | String',
        default: '-',
    },
    {
        name: 'preview-size',
        illustrate: '预览图和上传区域的尺寸，默认单位为 <code>px</code>',
        type: 'Number | String',
        default: '-',
    },
    {
        name: 'preview-image',
        illustrate: '是否在上传完成后展示预览图',
        type: 'Boolean',
        default: 'true',
    },
    {
        name: 'preview-full-image',
        illustrate: '是否在点击预览图后展示全屏图片预览',
        type: 'Boolean',
        default: 'true',
    },
    {
        name: 'preview-options',
        illustrate:
            '全屏图片预览的配置项，详情见下面的 <code>Image Preview Props</code>',
        type: '-',
        default: '-',
    },
    {
        name: 'multiple',
        illustrate: '是否开启图片多选，部分安卓机型不支持',
        type: 'Boolean',
        default: 'false',
    },
    {
        name: 'disabled',
        illustrate: '是否禁用文件上传',
        type: 'Boolean',
        default: 'false',
    },
    {
        name: 'readonly',
        illustrate: '是否将上传区域设置为只读状态',
        type: 'Boolean',
        default: 'false',
    },
    {
        name: 'deletable',
        illustrate: '是否展示删除按钮',
        type: 'Boolean',
        default: 'true',
    },
    {
        name: 'show-upload',
        illustrate: '是否展示上传区域',
        type: 'Boolean',
        default: 'true',
    },
    {
        name: 'capture',
        illustrate: '图片选取模式，可选值为 camera (直接调起摄像头)',
        type: 'String',
        default: '-',
    },
    {
        name: 'afterRead',
        illustrate: '文件读取完成后的回调函数',
        type: 'Function',
        default: '-',
    },
    {
        name: 'before-read',
        illustrate:
            '文件读取前的回调函数，返回 false 可终止文件读取，支持返回 Promise',
        type: 'Function',
        default: '-',
    },
    {
        name: 'before-delete',
        illustrate:
            '文件删除前的回调函数，返回 false 可终止文件读取，支持返回 Promise',
        type: 'Function',
        default: '-',
    },
    {
        name: 'max-size',
        illustrate: '文件大小限制，单位为 byte',
        type: 'Number | String | (file: File) => boolean',
        default: '-',
    },
    {
        name: 'max-count',
        illustrate: '文件上传数量限制',
        type: 'Number | String',
        default: '-',
    },
    {
        name: 'result-type',
        illustrate:
            '文件读取结果类型，可选值为 <code>file(文件类型)</code>, <code>text(文本类型)</code>,<code>dataUrl(base64)</code>, <code>url(链接)</code>',
        type: 'Number | String',
        default: '-',
    },
    {
        name: 'failed-icon',
        illustrate: '预览列表上传错误时的图标',
        type: 'String',
        default: '-',
    },
    {
        name: 'image-fit',
        illustrate: '预览图裁剪模式',
        type: 'String',
        value: '<code>contain</code> | <code>cover</code> | <code>fill</code> | <code>none</code> | <code>scale-down</code>',
        default: 'cover',
    },
    {
        name: 'upload-direction',
        illustrate: '显示上传按钮的方向,放置于预览列表之前或预览列表之后',
        type: 'String',
        value: '<code>left</code> | <code>right</code>',
        default: 'right',
    },
]);

// imagePreviewProps
const imagePreviewProps = ref([
    {
        name: 'body-overflow',
        illustrate:
            '当开启,<code>preview-full-image</code>时，设置弹窗防止body滚动',
        type: 'Boolean',
        value: '-',
        default: 'true',
    },
    {
        name: 'preview-image-initial-index',
        illustrate: '点击预览图后展示全屏图片预览，预览图片开始位置下标',
        type: 'Number',
        value: '-',
        default: '-',
    },
]);

// eventsData
const eventsData = ref([
    {
        name: 'on-oversize',
        illustrate: '文件大小超过限制时触发',
        value: '(file,{name, index})',
    },
    {
        name: 'on-delete',
        illustrate: '删除文件预览时触发',
        value: '(file,{name, index})',
    },
    {
        name: 'on-preview',
        illustrate: '点击预览图时触发',
        value: 'file',
    },
    {
        name: 'on-drag-upload-error',
        illustrate: '拖动文件上传错误时触发，返回上传错误的文件',
        value: 'file',
    },
    {
        name: 'on-close-preview',
        illustrate: '关闭全屏图片预览时触发',
        value: '-',
    },
]);

// slotsData
const slotsData = ref([
    {
        name: 'default',
        illustrate: '自定义上传区域',
        value: '-',
    },
    {
        name: 'preview-cover',
        illustrate: '自定义覆盖在预览区域上方的内容',
        value: 'file',
    },
    {
        name: 'preview-image',
        illustrate: '自定义预览图片区域内容',
        value: '-',
    },
]);

// callbackData
const callbackData = ref([
    {
        name: 'file',
        illustrate: 'file 对象',
        type: 'Object',
    },
    {
        name: 'detail',
        illustrate: '包含 <code>name</code> 和 <code>index</code> 字段',
        type: 'Object',
    },
]);

// resultTypeData
const resultTypeData = ref([
    {
        name: 'file',
        illustrate: '结果仅包含 File 对象',
    },
    {
        name: 'url',
        illustrate:
            '结果包含 File 对象、Blob 对象或者 MediaSource 对象(URL.createObjectURL)',
    },
    {
        name: 'text',
        illustrate: '结果包含 File 对象，以及文件的文本内容',
    },
    {
        name: 'dataUrl',
        illustrate: '结果包含 File 对象，以及文件对应的 base64 编码',
    },
]);

// functionData
const functionData = ref([
    {
        name: 'handleClickInput',
        illustrate: '主动调起文件选择',
    },
]);
</script>

<style lang="scss" scoped>
.upload-wrapper {
    .ul {
        padding-left: 25px;
    }

    .li {
        list-style: circle;
    }

    .a {
        margin: 0;
    }

    .card {
        margin-top: 20px;
    }
}
</style>
