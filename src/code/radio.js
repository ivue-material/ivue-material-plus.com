const code = {};

code.default = `<template>
    <h4>普通</h4>
    <ivue-radio v-model="value1">Radio</ivue-radio>
    <h4>设置true-value和false-value</h4>
    <ivue-radio v-model="value2" :true-value="1" :false-value="0" color="orange">Radio</ivue-radio>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(false);
const value2 = ref(0);
</script>

<style lang="scss" scoped>
</style>
`;


code.group = `<template>
    <h4>使用 label 的值</h4>
    <ivue-radio-group v-model="value1">
        <ivue-radio label="多啦a梦"></ivue-radio>
        <ivue-radio label="野比大雄"></ivue-radio>
        <ivue-radio label="静香"></ivue-radio>
    </ivue-radio-group>
    <h4>自定义内容</h4>
    <ivue-radio-group v-model="value2">
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
`;


code.disabled = `<template>
    <h4>禁用单个</h4>
    <ivue-radio v-model="value1" label="多啦a梦" disabled></ivue-radio>
    <h4>禁用组合单个</h4>
    <ivue-radio-group v-model="value2">
        <ivue-radio label="多啦a梦">多啦a梦的时光机</ivue-radio>
        <ivue-radio label="野比大雄" disabled>野比大雄的家</ivue-radio>
        <ivue-radio label="静香">静香的家</ivue-radio>
    </ivue-radio-group>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(true);
const value2 = ref('多啦a梦');
</script>
`;

code.vertical = `<template>
    <h4>普通</h4>
    <ivue-radio-group v-model="value" vertical>
        <ivue-radio label="多啦a梦">多啦a梦的时光机</ivue-radio>
        <ivue-radio label="野比大雄">野比大雄的家</ivue-radio>
        <ivue-radio label="静香">静香的家</ivue-radio>
    </ivue-radio-group>
    <h4>显示边框</h4>
    <ivue-radio-group v-model="value" vertical>
        <ivue-radio label="多啦a梦" border>多啦a梦的时光机</ivue-radio>
        <ivue-radio label="野比大雄" border>野比大雄的家</ivue-radio>
        <ivue-radio label="静香" border>静香的家</ivue-radio>
    </ivue-radio-group>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('多啦a梦');
</script>
`;

code.type = `<template>
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
`;

code.border = `<template>
    <ivue-radio-group v-model="value">
        <ivue-radio label="多啦a梦" border>多啦a梦的时光机</ivue-radio>
        <ivue-radio label="野比大雄" border>野比大雄的家</ivue-radio>
        <ivue-radio label="静香" border>静香的家</ivue-radio>
    </ivue-radio-group>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('多啦a梦');
</script>
`;

code.size = `<template>
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
`;

export default code;
