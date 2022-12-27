<template>
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

</script>

<style lang="scss" scoped>
</style>
