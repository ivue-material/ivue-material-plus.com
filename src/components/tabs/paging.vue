<template>
    <ivue-tabs v-model="active">
        <template #header>
            <ivue-tab name="name1" v-for="(item,index) in 100" :key="index">{{ `tab${index + 1}` }}</ivue-tab>
            <ivue-tab name="name2">tab2</ivue-tab>
        </template>
        <template #content>
            <ivue-tab-item v-for="(item,index) in 100" :key="index">
                <div class="content">{{ `标签${index + 1}的内容` }}</div>
            </ivue-tab-item>
        </template>
    </ivue-tabs>
</template>

<script setup>
import { ref } from 'vue';

const active = ref('name1');
</script>

<style scoped>
.content {
    padding: 20px 0;
}
</style>
