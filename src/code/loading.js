const code = {};

code.default = `<template>
    <ivue-table v-loading="loading" :data="tableData">
        <ivue-table-column prop="date" label="Date" width="180" />
        <ivue-table-column prop="name" label="Name" width="180" />
        <ivue-table-column prop="address" label="Address" />
    </ivue-table>
</template>

<script setup>
import { ref } from 'vue';

const loading = ref(true);

const tableData = [
    {
        date: '2016-05-02',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District',
    },
    {
        date: '2016-05-04',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District',
    },
    {
        date: '2016-05-01',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District',
    },
];
</script>
`;

code.customize = `<template>
    <ivue-table
        v-loading="loading"
        :data="tableData"
        ivue-loading-text="Loading..."
        ivue-loading-background="rgba(0, 0, 0, 0.8)"
    >
        <ivue-table-column prop="date" label="Date" width="180" />
        <ivue-table-column prop="name" label="Name" width="180" />
        <ivue-table-column prop="address" label="Address" />
    </ivue-table>
    <ivue-table
        v-loading="loading"
        ivue-loading-icon-class="ivue-loop-icon ivue-icon ivue-animation-loop"
        ivue-loading-icon-text="loop"
        :data="tableData"
    >
        <ivue-table-column prop="date" label="Date" width="180" />
        <ivue-table-column prop="name" label="Name" width="180" />
        <ivue-table-column prop="address" label="Address" />
    </ivue-table>
</template>

<script setup>
import { ref } from 'vue';

const loading = ref(true);

const tableData = [
    {
        date: '2016-05-02',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District',
    },
    {
        date: '2016-05-04',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District',
    },
    {
        date: '2016-05-01',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District',
    },
];
</script>

<style>
.ivue-loop-icon {
    font-size: 40px !important;
}
</style>
`;

code.fullscreen = `<template>
    <ivue-button
        class="button"
        v-loading.fullscreen.lock="loading"
        type="primary"
        @click="handleOpen1"
    >锁定屏幕滚动</ivue-button>
    <ivue-button class="button" type="primary" @click="handleOpen2">不锁定屏幕滚动,使用命令调用</ivue-button>
    <ivue-button class="button" type="primary" @click="handleOpen3">使用命令调用,自定义旋转图标</ivue-button>
</template>

<script setup>
import { ref, getCurrentInstance, h } from 'vue';

const { proxy } = getCurrentInstance();

const loading = ref(false);

const handleOpen1 = () => {
    loading.value = true;

    setTimeout(() => {
        loading.value = false;
    }, 2000);
};

const handleOpen2 = () => {
    const loading = proxy.$loading({
        lock: false,
        text: 'Loading...',
        background: 'rgba(0, 0, 0, 0.7)',
    });

    setTimeout(() => {
        loading.close();
    }, 2000);
};

const handleOpen3 = () => {
    const loading = proxy.$loading({
        text: 'Loading...',
        background: 'rgba(0, 0, 0, 0.7)',
        loadingSpinner: () => h('i', {
          class: 'ivue-loop-icon ivue-icon ivue-animation-loop'
        }, ['loop']),
    });

    setTimeout(() => {
        loading.close();
    }, 2000);
};
</script>

<style>
.button {
    margin-right: 10px !important;
}
</style>
`;

code.setup = `const { proxy } = getCurrentInstance();

proxy.$loading(options)
`;

code.close = `const loadingInstance = IvueLoading.$loading(options)

loadingInstance.close()
`;

code.singleton = `const loadingInstance1 = IvueLoading.service({ fullscreen: true })
const loadingInstance2 = IvueLoading.service({ fullscreen: true })
// true
console.log(loadingInstance1 === loadingInstance2)
`;

export default code;
