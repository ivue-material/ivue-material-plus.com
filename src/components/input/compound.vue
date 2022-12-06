<template>
    <ivue-input class="input" v-model="value" placeholder="Enter something...">
        <template #prepend>
            <span>http://</span>
        </template>
        <template #append>
            <span>.com</span>
        </template>
    </ivue-input>
    <ivue-input class="input" v-model="value" placeholder="Enter something...">
        <template #prepend>
            <ivue-select v-model="select1" style="width: 80px">
                <ivue-option value="http">http://</ivue-option>
                <ivue-option value="https">https://</ivue-option>
            </ivue-select>
        </template>
        <template #append>
            <ivue-select v-model="select2" style="width: 70px">
                <ivue-option value="com">.com</ivue-option>
                <ivue-option value="org">.org</ivue-option>
                <ivue-option value="io">.io</ivue-option>
            </ivue-select>
        </template>
    </ivue-input>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
const select1 = ref('http');
const select2 = ref('com');
</script>

<style>
.input {
    margin-bottom: 10px;
}
</style>
