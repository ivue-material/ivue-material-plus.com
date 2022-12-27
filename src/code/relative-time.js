const code = {};

code.default = `<template>
    <h4>分钟</h4>
    <ivue-relative-time :time="time1"></ivue-relative-time>
    <h4>天</h4>
    <ivue-relative-time :time="time2"></ivue-relative-time>
</template>

<script setup>
import { ref } from 'vue';

const time1 = ref(new Date().getTime() - 60 * 3 * 1000);
const time2 = ref(new Date().getTime() - 86400 * 3 * 1000);
</script>
`;

code.autoUpdate = `<template>
    <ivue-relative-time :time="time" :interval="1"></ivue-relative-time>
</template>

<script setup>
import { ref } from 'vue';

const time = ref(new Date());
</script>
`;

code.different = `<template>
    <h4>默认</h4>
    <ivue-relative-time :time="time"></ivue-relative-time>
    <h4>date</h4>
    <ivue-relative-time :time="time" type="date"></ivue-relative-time>
    <h4>datetime</h4>
    <ivue-relative-time :time="time" type="datetime"></ivue-relative-time>
</template>

<script setup>
import { ref } from 'vue';

const time = ref(new Date().getTime() - 86400 * 3 * 1000);
</script>
`;

code.locale = `<template>
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
`;

code.custom = `<template>
    <ivue-relative-time :time="time" :date-function="dateFunction"></ivue-relative-time>
</template>

<script setup>
import { ref } from 'vue';

const time = ref(new Date().getTime() - 86400 * 3 * 1000);

const dateFunction = (timeStamp, diff, isEarly) => {
    return \`当前时间:\${timeStamp},两个时间搓差值:\${diff},是否早于当前时间\${isEarly}\`;
};
</script>
`;

export default code;
