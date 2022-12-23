const code = {};

code.default = `<template>
    <ivue-spin></ivue-spin>
</template>
`;

code.size = `<template>
    <h4>100px</h4>
    <ivue-spin size="100"></ivue-spin>
    <h4>2rem</h4>
    <ivue-spin size="2rem"></ivue-spin>
</template>
`;


code.center = `<template>
    <div class="spin">
        <ivue-spin fix></ivue-spin>
    </div>
</template>

<style scoped>
.spin {
    position: relative;
    width: 200px;
    height: 100px;
    border: 1px solid #000;
}
</style>
`;

code.slots = `<template>
    <div class="spin">
        <ivue-spin fix>loading...</ivue-spin>
    </div>
    <div class="spin">
        <ivue-spin fix>
            <ivue-icon class="ivue-animation-loop">refresh</ivue-icon>
            <div>Loading</div>
        </ivue-spin>
    </div>
</template>

<style scoped>
.spin {
    display: inline-block;
    position: relative;
    width: 200px;
    height: 100px;
    border: 1px solid #000;
}
</style>
`;

code.show = `<template>
    <div class="spin">
        <span>《哆啦A梦》（日语：ドラえもん；英语：Doraemon；旧译叮当 / 小叮当）是日本漫画家藤本弘（笔名藤子·F·不二雄）创作的漫画</span>
        <ivue-spin fix :show="show">loading...</ivue-spin>
    </div>
    <div class="spin-switch">
        <span>切换显示状态：</span>
        <ivue-switch color="#5B8EFF" false-color="#FF617F" v-model="show"></ivue-switch>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const show = ref(true);
</script>

<style scoped>
.spin {
    width: 200px;
    position: relative;
    border: 1px solid #000;
}

.spin-switch {
    margin-top: 10px;
}
</style>
`;

code.render = `<template>
    <ivue-button class="button" @click="handleShow1">整页显示，3秒后关闭</ivue-button>
    <ivue-button class="button" @click="handleShow2">通过render自定义显示内容</ivue-button>
</template>

<script setup>
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

const handleShow1 = () => {
    proxy.$IvueSpin.show();

    setTimeout(() => {
        proxy.$IvueSpin.hide();
    }, 3000);
};

const handleShow2 = () => {
    proxy.$IvueSpin.show({
        render: (h) => {
            return h('div', 'Loading...');
        },
    });

    setTimeout(() => {
        proxy.$IvueSpin.hide();
    }, 3000);
};
</script>

<style scoped>
.button {
    margin-right: 20px;
}
</style>
`;

export default code;
