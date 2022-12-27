const code = {};

code.default = `
<template>
    <div>
        <div>
            <ivue-relative-time :time="time1"></ivue-relative-time>
        </div>
        <div>
            <ivue-relative-time :time="time2"></ivue-relative-time>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const time1 = ref(new Date().getTime() - 60 * 3 * 1000);
const time2 = ref(new Date().getTime() - 86400 * 3 * 1000);
</script>

<style lang="scss" scoped>
</style>

`;

code.autoUpdate = `<template>
  <div>
    <ivue-relative-time :time="time1"></ivue-relative-time>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const time1 = ref(new Date().getTime() - 60 * 3 * 1000);

</script>

<style lang="scss" scoped>

</style>
`;

code.different = `<template>
<div>
  <ivue-relative-time :time="time2"></ivue-relative-time>
</div>
</template>

<script setup>
import { ref } from 'vue';

const time2 = ref(new Date().getTime() - 86400 * 3 * 1000);

</script>
`;

code.locale = `<template>
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
`;

code.custom = `<template>
<div>
    <ivue-relative-time :time="time2" :dateFunction="dateFunction"></ivue-relative-time>
</div>
</template>

<script setup>
import { ref } from 'vue';

const time2 = ref(new Date().getTime() - 86400 * 3 * 1000);

// methods
const dateFunction = (timeStamp, diff, _isEarly) => {
console.log(timeStamp, diff, _isEarly);
return '自定义时间';
};
`;
export default code;
