<template>
    <ivue-circular class="circular" :percent="80">
        <span class="circular-text">80%</span>
    </ivue-circular>
    <ivue-circular class="circular" :percent="100" :stroke-color="['#FCEAEA', '#EE8AB2']">
        <ivue-icon style="color:#EE8AB2">done</ivue-icon>
    </ivue-circular>
    <ivue-circular class="circular" :percent="50" stroke-color="#6DD8B0">
        <ivue-icon style="color:#6DD8B0">looks</ivue-icon>
    </ivue-circular>
</template>

<style scoped>
.circular {
    margin-right: 20px;
}

.circular-text {
    font-size: 24px;
}
</style>
