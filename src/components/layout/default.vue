<template>
    <div class="ivue-layout">
        <div class="ivue-layout-item layout"></div>
        <div class="ivue-layout-item layout"></div>
        <div class="ivue-layout-item layout"></div>
    </div>
</template>

<style scoped>
.layout {
    height: 40px;
}

.layout:nth-child(1) {
    background: rgba(128, 128, 128, 0.3);
}

.layout:nth-child(2) {
    background: rgba(128, 128, 128, 0.4);
}

.layout:nth-child(3) {
    background: rgba(128, 128, 128, 0.5);
}
</style>
