<template>
    <p>普通垂直布局</p>
    <ivue-carousel direction="vertical" vertical-dots-direction="right">
        <ivue-carousel-item name="1">
            <div class="demo-carousel">1</div>
        </ivue-carousel-item>
        <ivue-carousel-item name="2">
            <div class="demo-carousel">2</div>
        </ivue-carousel-item>
        <ivue-carousel-item name="3">
            <div class="demo-carousel">3</div>
        </ivue-carousel-item>
    </ivue-carousel>
    <p>卡片垂直布局</p>
    <ivue-carousel
        direction="vertical"
        type="card"
        height="auto"
        style="width:400px"
    >
        <ivue-carousel-item name="1">
            <div class="demo-carousel">1</div>
        </ivue-carousel-item>
        <ivue-carousel-item name="2">
            <div class="demo-carousel">2</div>
        </ivue-carousel-item>
        <ivue-carousel-item name="3">
            <div class="demo-carousel">3</div>
        </ivue-carousel-item>
    </ivue-carousel>
</template>

<style scoped>
.demo-carousel {
    height: 200px;
    text-align: center;
    color: #fff;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.ivue-carousel-item:nth-child(2n) {
    background-color: #99a9bf;
}

.ivue-carousel-item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>
