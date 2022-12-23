<template>
    <div class="image-demo">
        <div class="image-demo-content">
            <span class="image-demo-title">加载中</span>
            <ivue-image style="width: 100px; height: 100px" :src="url">
                <template #loading>
                    <div class="image-demo-error">loading...</div>
                </template>
            </ivue-image>
        </div>
        <div class="image-demo-content">
            <span class="image-demo-title">加载失败</span>
            <ivue-image style="width: 100px; height: 100px" :src="''">
                <template #error>
                    <div class="image-demo-error">error</div>
                </template>
            </ivue-image>
        </div>
    </div>
</template>

<script setup>
const url = 'https://pic3.zhimg.com/v2-13744f101e60252ed8bd5dee09e7219a_b.jpg';
</script>

<style scoped>
.image-demo {
    display: flex;
}

.image-demo-title {
    margin-bottom: 10px;
}

.image-demo-content {
    margin-right: 20px;
    padding-right: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.image-demo-error {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: #cccccc;
}
</style>
