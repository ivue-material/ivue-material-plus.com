<template>
    <div>
        <ivue-relative-time :time="time2"></ivue-relative-time>
    </div>
    <div>
        <ivue-relative-time :time="time2" type="date"></ivue-relative-time>
    </div>
    <div>
        <ivue-relative-time :time="time2" type="datetime"></ivue-relative-time>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const time2 = ref(new Date().getTime() - 86400 * 3 * 1000);
</script>

<style lang="scss" scoped>
</style>
