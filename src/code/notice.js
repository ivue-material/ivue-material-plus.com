const code = {};

code.default = `<template>
    <ivue-button class="button" type="primary" @click="handleOpen(false)">打开通知提醒</ivue-button>
    <ivue-button class="button" @click="handleOpen(true)">打开通知提醒(没有标题)</ivue-button>
</template>

<script setup>
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

// methods
const handleOpen = (nodesc) => {
    proxy.$notice.open({
        title: '标题',
        desc: nodesc
            ? ''
            : '这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述',
    });
};
</script>

<style>
.button {
    margin-right: 10px !important;
}
</style>
`;

code.status = `<template>
    <h4>有描述</h4>
    <ivue-button class="button" @click="handleInfo(false)">Info</ivue-button>
    <ivue-button class="button" @click="handleSuccess(false)">Success</ivue-button>
    <ivue-button class="button" @click="handleWarning(false)">Warning</ivue-button>
    <ivue-button class="button" @click="handleError(false)">Error</ivue-button>
    <h4>没有描述</h4>
    <ivue-button class="button" @click="handleInfo(true)">Info</ivue-button>
    <ivue-button class="button" @click="handleSuccess(true)">Success</ivue-button>
    <ivue-button class="button" @click="handleWarning(true)">Warning</ivue-button>
    <ivue-button class="button" @click="handleError(true)">Error</ivue-button>
</template>

<script setup>
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

// methods
const handleInfo = (nodesc) => {
    proxy.$notice.info({
        title: 'Notification title',
        desc: nodesc
            ? ''
            : '这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述',
    });
};

const handleSuccess = (nodesc) => {
    proxy.$notice.success({
        title: 'Notification title',
        desc: nodesc
            ? ''
            : '这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述',
    });
};

const handleWarning = (nodesc) => {
    proxy.$notice.warning({
        title: 'Notification title',
        desc: nodesc
            ? ''
            : '这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述',
    });
};

const handleError = (nodesc) => {
    proxy.$notice.error({
        title: 'Notification title',
        desc: nodesc
            ? ''
            : '这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述',
    });
};
</script>

<style>
.button {
    margin-right: 10px !important;
}
</style>
`;

code.customDuration = `<template>
    <ivue-button type="primary" @click="handleOpen">自定义时长</ivue-button>
</template>

<script setup>
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

// methods
const handleOpen = () => {
    proxy.$notice.open({
        title: '标题',
        desc: '这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述',
        duration: 0,
    });
};
</script>
`;

code.position = `<template>
    <ivue-button class="button" type="primary" @click="handleOpen1">右上角弹出</ivue-button>
    <ivue-button class="button" type="primary" @click="handleOpen2">右下角弹出</ivue-button>
    <ivue-button class="button" type="primary" @click="handleOpen3">左下角弹出</ivue-button>
    <ivue-button class="button" type="primary" @click="handleOpen4">左上角弹出</ivue-button>
</template>

<script setup>
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

// methods
const handleOpen1 = () => {
    proxy.$notice.open({
        title: '自定义位置',
        desc: '右上角弹出的消息',
    });
};

const handleOpen2 = () => {
    proxy.$notice.open({
        title: '自定义位置',
        desc: '右下角弹出的消息',
        position: 'bottom-right',
    });
};

const handleOpen3 = () => {
    proxy.$notice.open({
        title: '自定义位置',
        desc: '左下角弹出的消息',
        position: 'bottom-left',
    });
};

const handleOpen4 = () => {
    proxy.$notice.open({
        title: '自定义位置',
        desc: '左上角弹出的消息',
        position: 'top-left',
    });
};
</script>

<style>
.button {
    margin-right: 10px !important;
}
</style>
`;


code.custom = `<template>
    <h4>Render 函数</h4>
    <ivue-button class="button" type="primary" @click="handleRender">打开通知提醒</ivue-button>
    <h4>Offset 偏移位置</h4>
    <ivue-button class="button" @click="handleOpen1">右上角向上偏移</ivue-button>
    <ivue-button class="button" type="primary" @click="handleOpen2">右下角向下偏移</ivue-button>
    <ivue-button class="button" type="primary" @click="handleOpen3">左下角向下偏移</ivue-button>
    <ivue-button class="button" type="primary" @click="handleOpen4">左上角向下偏移</ivue-button>
</template>

<script setup>
import { getCurrentInstance, h } from 'vue';

const { proxy } = getCurrentInstance();

// methods

const handleRender = () => {
    proxy.$notice.open({
        title: '标题',
        render: () => {
            return h('span', ['这是描述', h('a', '这是a标签')]);
        },
    });
};

const handleOpen1 = () => {
    proxy.$notice.open({
        title: '右上角向上偏移',
        desc: '这是描述这是描述这是描述这是描述这是描述这是描述',
        offset: 100,
    });
};

const handleOpen2 = () => {
    proxy.$notice.open({
        title: '右下角向下偏移',
        desc: '这是描述这是描述这是描述这是描述这是描述这是描述',
        position: 'bottom-right',
        offset: 100,
    });
};

const handleOpen3 = () => {
    proxy.$notice.open({
        title: '左下角向下偏移',
        desc: '这是描述这是描述这是描述这是描述这是描述这是描述',
        position: 'bottom-left',
        offset: 100,
    });
};

const handleOpen4 = () => {
    proxy.$notice.open({
        title: '左上角向下偏移',
        desc: '这是描述这是描述这是描述这是描述这是描述这是描述',
        position: 'top-left',
        offset: 100,
    });
};
</script>

<style>
.button {
    margin-right: 10px !important;
}
</style>
`;


code.config = `this.$notice.config({
  offset: 50,
  duration: 3
});
`;

export default code;
