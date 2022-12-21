<template>
    <h4>默认</h4>
    <ivue-radio-group class="radio-group" v-model="value1" type="button">
        <ivue-radio label="多啦a梦">多啦a梦的时光机</ivue-radio>
        <ivue-radio label="野比大雄">野比大雄的家</ivue-radio>
        <ivue-radio label="静香">静香的家</ivue-radio>
    </ivue-radio-group>
    <ivue-radio-group class="radio-group" v-model="value2" type="button">
        <ivue-radio label="多啦a梦" disabled>多啦a梦的时光机</ivue-radio>
        <ivue-radio label="野比大雄">野比大雄的家</ivue-radio>
        <ivue-radio label="静香">静香的家</ivue-radio>
    </ivue-radio-group>
    <h4>带底色</h4>
    <ivue-radio-group class="radio-group" v-model="value2" type="button" button-style="solid">
        <ivue-radio label="多啦a梦">多啦a梦的时光机</ivue-radio>
        <ivue-radio label="野比大雄">野比大雄的家</ivue-radio>
        <ivue-radio label="静香">静香的家</ivue-radio>
    </ivue-radio-group>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref('多啦a梦');
const value2 = ref('多啦a梦');
</script>

<style scoped>
.radio-group {
    margin-bottom: 10px;
    display: block;
}
</style>
