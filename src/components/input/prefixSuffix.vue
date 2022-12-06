<template>
    <h4>Props</h4>
    <ivue-input
        class="input"
        v-model="value1"
        prefix="favorite"
        placeholder="Enter something..."
        style="width: 300px"
    ></ivue-input>
    <ivue-input
        class="input"
        v-model="value2"
        suffix="favorite"
        placeholder="Enter something..."
        style="width: 300px"
    ></ivue-input>
    <h4>Slots</h4>
    <ivue-input
        class="input"
        v-model="value1"
        placeholder="Enter something..."
        style="width: 300px"
    >
        <template #prefix>
            <ivue-icon>favorite</ivue-icon>
        </template>
    </ivue-input>
    <ivue-input
        class="input"
        v-model="value2"
        placeholder="Enter something..."
        style="width: 300px"
    >
        <template #suffix>
            <ivue-icon>favorite</ivue-icon>
        </template>
    </ivue-input>
</template>

<script setup>
import { ref } from 'vue';

const value1= ref('');
const value2 = ref('');
</script>

<style>
.input {
    margin-right: 20px;
}
</style>
