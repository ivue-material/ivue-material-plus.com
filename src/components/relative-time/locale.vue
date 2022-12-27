<template>
    <h4>刚刚</h4>
    <ivue-relative-time :time="time1" :locale="locale"></ivue-relative-time>
    <h4>几秒后</h4>
    <ivue-relative-time :time="new Date().getTime() + 10000" :locale="locale"></ivue-relative-time>
    <h4>几分钟前</h4>
    <ivue-relative-time :time="time2" :locale="locale"></ivue-relative-time>
    <h4>几小时</h4>
    <ivue-relative-time :time="new Date().getTime() + 10000000" :locale="locale"></ivue-relative-time>
    <h4>几天</h4>
    <ivue-relative-time :time="time3" :locale="locale"></ivue-relative-time>
</template>

<script setup>
import { ref } from 'vue';

const time1 = ref(new Date());
const time2 = ref(new Date().getTime() - 60 * 3 * 1000);
const time3 = ref(new Date().getTime() - 86400 * 3 * 1000);

const locale = ref({
    just: '刚刚文案',
    before: '之前',
    after: '之后',
    seconds: '秒钟',
    minutes: '分钟',
    hours: '时',
    days: '日',
});
</script>
