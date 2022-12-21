<template>
    <h4>small</h4>
    <ivue-radio-group v-model="value" type="button" size="small">
        <ivue-radio label="多啦a梦">多啦a梦的时光机</ivue-radio>
        <ivue-radio label="野比大雄">野比大雄的家</ivue-radio>
        <ivue-radio label="静香">静香的家</ivue-radio>
    </ivue-radio-group>
    <h4>default</h4>
    <ivue-radio-group v-model="value" type="button">
        <ivue-radio label="多啦a梦">多啦a梦的时光机</ivue-radio>
        <ivue-radio label="野比大雄">野比大雄的家</ivue-radio>
        <ivue-radio label="静香">静香的家</ivue-radio>
    </ivue-radio-group>
    <h4>large</h4>
    <ivue-radio-group v-model="value" type="button" size="large">
        <ivue-radio label="多啦a梦">多啦a梦的时光机</ivue-radio>
        <ivue-radio label="野比大雄">野比大雄的家</ivue-radio>
        <ivue-radio label="静香">静香的家</ivue-radio>
    </ivue-radio-group>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('多啦a梦');
</script>
