<template>
    <ivue-scrollbar height="400px">
        <div class="scrollbar-item" v-for="item in 20" :key="item">{{ item }}</div>
    </ivue-scrollbar>
</template>

<style scoped>
.scrollbar-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    margin: 10px;
    text-align: center;
    border-radius: 5px;
    color: var(--ivue-success-color);
    background: var(--ivue-primary-color);
}
</style>
