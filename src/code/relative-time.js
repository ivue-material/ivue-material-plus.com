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

code.autoUpdate = `
<template>
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
export default code;
