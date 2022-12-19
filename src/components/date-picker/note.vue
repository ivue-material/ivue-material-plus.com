<template>
    <h4>未自定义note颜色</h4>
    <ivue-date-picker v-model="date" :note="note"></ivue-date-picker>
    <h4>自定义note颜色 Array</h4>
    <ivue-date-picker v-model="date" :note="note" :note-color="noteColor1"></ivue-date-picker>
    <h4>自定义note颜色 Object</h4>
    <ivue-date-picker v-model="date" :note="[date]" :note-color="noteColor2"></ivue-date-picker>
</template>

<script setup>
import { ref } from 'vue';

const date = ref(new Date().toISOString().substr(0, 10));

const note = ref(
    [...Array(6)].map(() => {
        const day = Math.floor(Math.random() * 30);
        const d = new Date();
        d.setDate(day);

        return d.toISOString().substr(0, 10);
    })
);

const noteColor2 = ref({
    [date.value]: '#27E2B2'
});

const noteColor1 = (date) => (date[9] % 2 ? '#27E2B2' : '#FF617F');
</script>
