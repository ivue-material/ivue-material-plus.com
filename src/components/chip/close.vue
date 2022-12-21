<template>
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
