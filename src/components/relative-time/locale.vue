<template>
    <div>
        <div>
            <ivue-relative-time :time="time" :locale="locale"></ivue-relative-time>
        </div>
        <div>
            <ivue-relative-time :time="new Date().getTime() + 10000" :locale="locale"></ivue-relative-time>
        </div>
        <div>
            <ivue-relative-time :time="time1" :locale="locale"></ivue-relative-time>
        </div>
        <div>
            <ivue-relative-time :time="new Date().getTime() + 10000000" :locale="locale"></ivue-relative-time>
        </div>
        <div>
            <ivue-relative-time :time="time2" :locale="locale"></ivue-relative-time>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const time = ref(new Date());
const time1 = ref(new Date().getTime() - 60 * 3 * 1000);

const locale = ref({
    just: 'just',
    before: 'before',
    after: 'after',
    seconds: 'seconds',
    minutes: 'minutes',
    days: 'days',
    hours: 'hours',
});

const time2 = ref(new Date().getTime() - 86400 * 3 * 1000);
</script>

<style lang="scss" scoped>
</style>
