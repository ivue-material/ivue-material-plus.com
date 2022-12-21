const code = {};

code.default = `<template>
    <h4>默认</h4>
    <ivue-checkbox v-model="value1">checkbox</ivue-checkbox>
    <h4>color</h4>
    <ivue-checkbox v-model="value2" color="#27E2B2">checkbox</ivue-checkbox>
    <h2>设置true-value和false-value</h2>
    <ivue-checkbox v-model="value3" :true-value="1" :false-value="0">Radio</ivue-checkbox>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(false);
const value2 = ref(false);
const value3 = ref(1);
</script>
`;

code.group = `<template>
  <h4>使用 label 的值</h4>
  <ivue-checkbox-group v-model="value1">
      <ivue-checkbox label="多啦a梦"></ivue-checkbox>
      <ivue-checkbox label="野比大雄"></ivue-checkbox>
      <ivue-checkbox label="静香"></ivue-checkbox>
  </ivue-checkbox-group>
  <h4>自定义内容</h4>
  <ivue-checkbox-group v-model="value2">
      <ivue-checkbox label="多啦a梦">多啦a梦的时光机</ivue-checkbox>
      <ivue-checkbox label="野比大雄">野比大雄的家</ivue-checkbox>
      <ivue-checkbox label="静香">静香的家</ivue-checkbox>
  </ivue-checkbox-group>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(['多啦a梦']);
const value2 = ref(['多啦a梦', '野比大雄']);
</script>
`;

code.disabled = `<template>
    <h4>禁用单个</h4>
    <ivue-checkbox v-model="value1" label="多啦a梦" disabled></ivue-checkbox>
    <h4>禁用组合单个</h4>
    <ivue-checkbox-group v-model="value2">
        <ivue-checkbox label="多啦a梦">多啦a梦的时光机</ivue-checkbox>
        <ivue-checkbox label="野比大雄" disabled>野比大雄的家</ivue-checkbox>
        <ivue-checkbox label="静香">静香的家</ivue-checkbox>
    </ivue-checkbox-group>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(true);
const value2 = ref(['多啦a梦']);
</script>
`;

code.border = `<template>
    <ivue-checkbox-group v-model="value">
        <ivue-checkbox label="多啦a梦" border>多啦a梦的时光机</ivue-checkbox>
        <ivue-checkbox label="野比大雄" border>野比大雄的家</ivue-checkbox>
        <ivue-checkbox label="静香" border>静香的家</ivue-checkbox>
    </ivue-checkbox-group>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(['多啦a梦']);
</script>
`;

code.indeterminate = `<template>
    <ivue-checkbox
        v-model="checkAll"
        :indeterminate="indeterminate"
        @click.prevent="handleCheckAll"
    >全选</ivue-checkbox>

    <ivue-checkbox-group v-model="checkAllGroup" @on-change="handleGroupChange">
        <ivue-checkbox label="多啦a梦"></ivue-checkbox>
        <ivue-checkbox label="野比大雄"></ivue-checkbox>
        <ivue-checkbox label="静香"></ivue-checkbox>
    </ivue-checkbox-group>
</template>

<script setup>
import { ref } from 'vue';

const indeterminate = ref(true);
const checkAll = ref(true);
const checkAllGroup = ref(['多啦a梦']);

const handleCheckAll = () => {
    if (indeterminate.value) {
        checkAll.value = false;
    } else {
        checkAll.value = !checkAll.value;
    }

    indeterminate.value = false;

    if (checkAll.value) {
        checkAllGroup.value = ['多啦a梦', '野比大雄', '静香'];
    } else {
        checkAllGroup.value = [];
    }
};

const handleGroupChange = (data) => {
    if (data.length === 3) {
        indeterminate.value = false;
        checkAll.value = true;
    } else if (data.length > 0) {
        indeterminate.value = true;
        checkAll.value = false;
    } else {
        indeterminate.value = false;
        checkAll.value = false;
    }
};
</script>

<style lang="scss" scoped>
</style>
`;

export default code;
