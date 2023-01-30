const code = {};

code.default = `<template>
    <ivue-button type="primary" @click="handleInfo">普通提示</ivue-button>
</template>

<script setup>
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

const handleInfo = () => {
    proxy.$message.info('普通提示');
};
</script>
`;

code.type = `<template>
    <ivue-button class="button" type="primary" @click="handleSuccess">成功提示</ivue-button>
    <ivue-button class="button" type="primary" @click="handleWarning">警告提示</ivue-button>
    <ivue-button class="button" type="primary" @click="handleError">失败提示</ivue-button>
</template>

<script setup>
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

const handleSuccess = () => {
    proxy.$message.success('成功提示');
};

const handleWarning = () => {
    proxy.$message.warning('警告提示');
};

const handleError = () => {
    proxy.$message.error('失败提示');
};
</script>

<style>
.button {
    margin-right: 10px !important;
}
</style>
`;

code.background = `<template>
    <ivue-button class="button" @click="handleBackground('info')">普通提示</ivue-button>
    <ivue-button class="button" @click="handleBackground('success')">成功提示</ivue-button>
    <ivue-button class="button" @click="handleBackground('warning')">警告提示</ivue-button>
    <ivue-button class="button" @click="handleBackground('error')">错误提示</ivue-button>
</template>

<script setup>
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

const handleBackground = (type) => {
    proxy.$message[type]({
        background: true,
        content: \`这是一条带背景色的 \${type} 通知\`,
    });
};
</script>

<style>
.button {
    margin-right: 10px !important;
}
</style>
`;

code.loading = `<template>
    <ivue-button @click="handleLoading">loading提示</ivue-button>
</template>

<script setup>
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

const handleLoading = () => {
    proxy.$message.loading({
        content: 'Loading...',
        duration: 3000,
    });
};
</script>
`;

code.duration = `<template>
    <ivue-button type="primary" @click="handleInfo">自定义时长3秒</ivue-button>
</template>

<script setup>
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

const handleInfo = () => {
    proxy.$message.info({
        content: '自定义时长3秒',
        duration: 3000,
    });
};
</script>
`;

code.closable = `<template>
    <ivue-button type="primary" @click="handleInfo">可关闭提示</ivue-button>
</template>

<script setup>
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

const handleInfo = () => {
    proxy.$message.info({
        content: '可关闭提示',
        duration: 0,
        closable: true,
    });
};
</script>
`;

code.custom = `<template>
    <h4>Render 函数</h4>
    <ivue-button class="button" type="primary" @click="handleRender">render提示</ivue-button>
    <h4>Top 偏移位置</h4>
    <ivue-button class="button" type="primary" @click="handleTop">距离顶部的位置</ivue-button>
    <h4>自定义id，使用 close 关闭自定义通知</h4>
    <ivue-button class="button" type="primary" @click="handleId">自定义提示id</ivue-button>
</template>

<script setup>
import { getCurrentInstance, h, ref } from 'vue';

const { proxy } = getCurrentInstance();

const timer = ref(null);

// render提示
const handleRender = () => {
    proxy.$message.info({
        render: () => {
            return h('span', ['这是通知', h('a', '这是a标签')]);
        },
    });
};

// 偏移位置
const handleTop = () => {
    proxy.$message.info({
        content: '距离顶部的位置',
        top: 100,
    });
};

// 自定义提示id
const handleId = () => {
    const info = proxy.$message.info({
        content: '自定义提示id',
        id: 'id',
        duration: 0,
    });

    if (timer.value) {
        return;
    }

    timer.value = setTimeout(() => {
        info.close('id');

        clearTimeout(timer.value);

        timer.value = null;
    }, 2000);
};
</script>

<style>
.button {
    margin-right: 10px !important;
}
</style>
`;

code.config = `this.$message.config({
    top: 50,
    duration: 3
});
`;

code.tips = `
import { IvueMessage } from 'ivue-material-plus';

app.config.globalProperties.IvueMessage = IvueMessage
`;

export default code;
