<template>
    <ivue-form :model="formItem" :label-width="100">
        <ivue-form-item label="Input">
            <ivue-input v-model="formItem.input"></ivue-input>
        </ivue-form-item>

        <ivue-form-item label="Textarea">
            <ivue-input v-model="formItem.textarea" type="textarea"></ivue-input>
        </ivue-form-item>

        <ivue-form-item label="Input Number">
            <ivue-input-number v-model="formItem.inputNumber" :max="10" :min="1" :precision="2"></ivue-input-number>
        </ivue-form-item>

        <ivue-form-item label="Select">
            <ivue-select v-model="formItem.select">
                <ivue-option value="多啦a梦">多啦a梦</ivue-option>
                <ivue-option value="野比大雄">野比大雄</ivue-option>
                <ivue-option value="源静香">源静香</ivue-option>
            </ivue-select>
        </ivue-form-item>

        <ivue-form-item label="Checkbox">
            <ivue-checkbox-group v-model="formItem.checkbox">
                <ivue-checkbox label="多啦a梦"></ivue-checkbox>
                <ivue-checkbox label="野比大雄"></ivue-checkbox>
                <ivue-checkbox label="源静香"></ivue-checkbox>
            </ivue-checkbox-group>
        </ivue-form-item>

        <ivue-form-item label="radio">
            <ivue-radio-group v-model="formItem.radio">
                <ivue-radio label="多啦a梦"></ivue-radio>
                <ivue-radio label="野比大雄"></ivue-radio>
                <ivue-radio label="源静香"></ivue-radio>
            </ivue-radio-group>
        </ivue-form-item>

        <ivue-form-item label="Switch">
            <ivue-switch v-model="formItem.switch"></ivue-switch>
        </ivue-form-item>
    </ivue-form>
</template>

<script setup>
import { ref } from 'vue';

const formItem = ref({
    input: '',
    inputNumber: 0,
    textarea: '',
    select: '',
    checkbox: [],
    radio: '',
    switch: '',
});
</script>
