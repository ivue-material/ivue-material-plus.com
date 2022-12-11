const code = {};


code.route = `import IvueMaterialPlus from 'ivue-material-plus';
app.use(IvueMaterialPlus);

const globalProperties = app.config.globalProperties

router.beforeEach((to, from, next) => {
  globalProperties.$LoadingBar.start();
  next();
});

router.afterEach(route => {
  globalProperties.$LoadingBar.finish();
});
`;

code.async = `import { getCurrentInstance } from 'vue';
const { proxy } = getCurrentInstance();

const getData = () => {
    proxy.$LoadingBar.start();

    $.ajax({
        url: '/api/someurl',
        type: 'get',
        success: () => {
            proxy.$LoadingBar.finish();
        },
        error: () => {
            proxy.$LoadingBar.error();
        },
    });
};`;


code.default = `<template>
    <ivue-button class="button" @click="handleStart">Start</ivue-button>
    <ivue-button class="button" @click="handleFinish">Finish</ivue-button>
    <ivue-button class="button" @click="handleError">Error</ivue-button>
    <ivue-button class="button" @click="handleUpdate">Update 50%</ivue-button>
</template>

<script setup>
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

const handleStart = () => {
    proxy.$LoadingBar.start();
};

const handleFinish = () => {
    proxy.$LoadingBar.finish();
};

const handleError = () => {
    proxy.$LoadingBar.error();
};

const handleUpdate = () => {
    proxy.$LoadingBar.update(50);
};
</script>

<style  scoped>
.button {
    margin-right: 10px !important;
}
</style>
`;


code.config = `
this.$LoadingBar.config({
  color: '#27E2B2',
  failedColor: '#FFBD3C',
  height: 5,
  duration: 1000
});
`;


export default code;
