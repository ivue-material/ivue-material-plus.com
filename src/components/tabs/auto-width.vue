<template>
    <ivue-tabs auto-width v-model="active">
        <template #header>
            <ivue-tab name="name1">tab1</ivue-tab>
            <ivue-tab name="name2">tab2</ivue-tab>
            <ivue-tab name="name3">tab3</ivue-tab>
        </template>
        <template #content>
            <ivue-tab-item>
                <div class="content">标签1的内容</div>
            </ivue-tab-item>
            <ivue-tab-item>
                <div class="content">标签2的内容</div>
            </ivue-tab-item>
            <ivue-tab-item>
                <div class="content">标签3的内容</div>
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
