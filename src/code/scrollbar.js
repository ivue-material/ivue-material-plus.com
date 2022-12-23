const code = {};

code.default = `<template>
    <ivue-scrollbar height="400px">
        <div class="scrollbar-item" v-for="item in 20" :key="item">{{ item }}</div>
    </ivue-scrollbar>
</template>

<style scoped>
.scrollbar-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    margin: 10px;
    text-align: center;
    border-radius: 5px;
    background: var(--ivue-primary-color);
}
</style>
`;

code.horizontal = `<template>
    <ivue-scrollbar>
        <div class="scrollbar-flex">
            <div class="scrollbar-item" v-for="item in 20" :key="item">{{ item }}</div>
        </div>
    </ivue-scrollbar>
</template>

<style scoped>
.scrollbar-flex {
    display: flex;
}

.scrollbar-item {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 50px;
    margin: 10px;
    text-align: center;
    border-radius: 5px;
    color: var(--ivue-success-color);
    background: var(--ivue-primary-color);
}
</style>
`;

code.manual = `<template>
    <ivue-scrollbar height="400px" always @on-scroll="handleScroll" ref="scrollbarRef">
        <div ref="innerRef">
            <div class="scrollbar-item" v-for="item in 20" :key="item">{{ item }}</div>
        </div>
    </ivue-scrollbar>
    <div class="scrollbar-button-flex">
        <ivue-button class="scrollbar-button" :disabled="value >= max" @click="handleScrollAdd">滚动增加</ivue-button>
        <ivue-button
            class="scrollbar-button"
            :disabled="value <= 0"
            @click="handleScrollReduce"
        >滚动减少</ivue-button>
    </div>
</template>

<script  setup>
import { onMounted, ref } from 'vue';

const scrollbarRef = ref();

const value = ref(0);

const max = ref(0);
const innerRef = ref();

onMounted(() => {
    max.value = innerRef.value.clientHeight - 380;
});

const handleScrollAdd = () => {
    scrollbarRef.value.setScrollTop((value.value += 10));
};

const handleScrollReduce = () => {
    scrollbarRef.value.setScrollTop((value.value -= 10));
};

const handleScroll = ({ scrollTop }) => {
    value.value = scrollTop;
};
</script>


<style scoped>
.scrollbar-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    margin: 10px;
    text-align: center;
    border-radius: 5px;
    color: var(--ivue-success-color);
    background: var(--ivue-primary-color);
}

.scrollbar-button-flex {
    display: flex;
}

.scrollbar-button {
    width: 100%;
    margin: 20px 10px;
}
</style>
`;

export default code;
