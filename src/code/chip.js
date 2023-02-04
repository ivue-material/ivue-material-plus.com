const code = {};

code.default = `<template>
    <ivue-chip>默认状态</ivue-chip>
    <ivue-chip disabled>禁用</ivue-chip>
    <ivue-chip :color="['#5B8EFF', '#27E2B2']">渐变色</ivue-chip>
    <ivue-chip color="orange" close>带关闭按钮</ivue-chip>
    <ivue-chip outline color="green">轮廓</ivue-chip>
    <ivue-chip square color="#B1C865" text-color="#F2EFD3">正方形</ivue-chip>
    <ivue-chip color="#C64957" text-color="#ffffff" depressed>没有框阴影</ivue-chip>
</template>
`;

code.outline = `<template>
    <ivue-chip color="#F41D74" outline>
        <ivue-icon>account_circle</ivue-icon>AccountCircle
    </ivue-chip>
    <ivue-chip color="orange" outline>
        <ivue-icon>star</ivue-icon>Star
    </ivue-chip>
    <ivue-chip color="#FFC009" outline>
        <ivue-icon>touch_app</ivue-icon>Touch
    </ivue-chip>
    <ivue-chip color="#6DBF07" outline>
        <ivue-icon>room</ivue-icon>Room
    </ivue-chip>
    <ivue-chip color="#009FC7" outline>
        <ivue-icon>face</ivue-icon>Race
    </ivue-chip>
</template>
`;

code.square = `<template>
    <ivue-chip color="#F41D74" text-color="#ffffff" square>
        <ivue-icon>account_circle</ivue-icon>AccountCircle
    </ivue-chip>
    <ivue-chip color="orange" text-color="#ffffff" square>
        <ivue-icon>star</ivue-icon>Star
    </ivue-chip>
    <ivue-chip color="#FFC009" text-color="#ffffff" square>
        <ivue-icon>touch_app</ivue-icon>Touch
    </ivue-chip>
    <ivue-chip color="#6DBF07" text-color="#ffffff" square>
        <ivue-icon>room</ivue-icon>Room
    </ivue-chip>
    <ivue-chip color="#009FC7" text-color="#ffffff" square>
        <ivue-icon>face</ivue-icon>Race
    </ivue-chip>
</template>
`;

code.close = `<template>
    <ivue-chip color="#F41D74" text-color="#ffffff" close v-model="chip1">
        <ivue-icon>account_circle</ivue-icon>AccountCircle
    </ivue-chip>
    <ivue-chip color="orange" text-color="#ffffff" close v-model="chip2">
        <ivue-icon>star</ivue-icon>Star
    </ivue-chip>
    <ivue-chip color="#FFC009" text-color="#ffffff" close v-model="chip3">
        <ivue-icon>touch_app</ivue-icon>Touch
    </ivue-chip>
    <ivue-chip color="#6DBF07" text-color="#ffffff" close v-model="chip4">
        <ivue-icon>room</ivue-icon>Room
    </ivue-chip>
    <ivue-chip
        color="#009FC7"
        text-color="#ffffff"
        close
        close-icon="delete_forever"
        v-model="chip5"
    >
        <ivue-icon>face</ivue-icon>Race
    </ivue-chip>
</template>

<script setup>
import { ref } from 'vue';

const chip1 = ref(true);
const chip2 = ref(true);
const chip3 = ref(true);
const chip4 = ref(true);
const chip5 = ref(true);
</script>
`;

export default code;
