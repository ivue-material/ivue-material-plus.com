<template>
    <ivue-switch
        class="switch"
        v-model="value1"
        :color="['#5AB2FF', '#5B8EFF']"
        :false-color="['#FFA82D', '#FFBD3C']"
        @on-change="handleChange"
    />
    <ivue-switch class="switch" v-model="value2" :color="'#FFC009'" :false-color="'#F41D74'" />
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

const value1 = ref(false);
const value2 = ref(false);

const handleChange = (status) => {
    proxy.$message.info({
        content: `开关状态：${status}`,
    });
};
</script>

<style scoped>
.switch {
    margin-right: 20px;
}
</style>
