<template>
    <ivue-scrollbar>
        <div class="scrollbar-flex">
            <div class="scrollbar-item" v-for="item in 20" :key="item">{{ item }}</div>
        </div>
    </ivue-scrollbar>
</template>

<style scoped>
.scrollbar-flex {
    display: flex;
}

.scrollbar-item {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 50px;
    margin: 10px;
    text-align: center;
    border-radius: 5px;
    color: var(--ivue-success-color);
    background: var(--ivue-primary-color);
}
</style>
