<template>
    <div style="margin-bottom: 10px">
        <span>Switch Loading</span>
        <ivue-switch v-model="loading"></ivue-switch>
    </div>
    <ivue-skeleton class="skeleton-demo" :loading="loading" animated :throttle="500">
        <template #template>
            <ivue-skeleton-item class="skeleton-item-demo" type="image"></ivue-skeleton-item>
            <div class="skeleton-content-demo">
                <ivue-skeleton-item variant="h3" style="width: 50%"></ivue-skeleton-item>
                <ivue-skeleton-item variant="text"></ivue-skeleton-item>
            </div>
        </template>
        <template #default>
            <div class="skeleton-demo">
                <img src="https://pic3.zhimg.com/v2-13744f101e60252ed8bd5dee09e7219a_b.jpg" />
                <div class="skeleton-content-demo">
                    <div>title</div>
                    <div>content</div>
                </div>
            </div>
        </template>
    </ivue-skeleton>
</template>

<script setup>
import { ref } from 'vue';

const loading = ref(false);
</script>

<style scoped>
.skeleton-demo {
    display: flex;
    flex-direction: column;
    width: 240px;
}

.skeleton-demo img {
    width: 240px;
    height: 240px;
}

.skeleton-item-demo {
    width: 240px;
    height: 240px;
    font-size: 50px;
}

.skeleton-content-demo {
    display: flex;
    flex-direction: column;
    padding: 14px 0;
    line-height: 16px;
}
</style>
