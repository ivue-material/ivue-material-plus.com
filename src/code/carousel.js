const code = {};

code.default = `<template>
    <p>指示器点击时切换</p>
    <ivue-carousel autoplay height="200px">
        <ivue-carousel-item name="1" label="1">
            <div class="demo-carousel">1</div>
        </ivue-carousel-item>
        <ivue-carousel-item name="2" label="2">
            <div class="demo-carousel">2</div>
        </ivue-carousel-item>
        <ivue-carousel-item name="3" label="3">
            <div class="demo-carousel">3</div>
        </ivue-carousel-item>
    </ivue-carousel>
    <p>指示器悬停时切换</p>
    <ivue-carousel autoplay height="200px" radius-dot trigger="hover">
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
    line-height: 100px;
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
`;

code.dots = `<template>
    <ivue-carousel autoplay height="200px" dots="outside">
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
    line-height: 100px;
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
`;

code.arrow = `<template>
    <ivue-carousel autoplay height="200px" arrow="hover">
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
    line-height: 100px;
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
`;

code.heightAuto = `<template>
    <p>正常模式</p>
    <ivue-carousel autoplay height="auto">
        <ivue-carousel-item name="1" style="height: 100px">
            <div class="demo-carousel">1</div>
        </ivue-carousel-item>
        <ivue-carousel-item name="2" style="height: 200px">
            <div class="demo-carousel">2</div>
        </ivue-carousel-item>
        <ivue-carousel-item name="3" style="height: 300px">
            <div class="demo-carousel">3</div>
        </ivue-carousel-item>
    </ivue-carousel>
    <p>卡片模式</p>
    <ivue-carousel autoplay height="auto" type="card">
        <ivue-carousel-item name="1" style="height: 300px">
            <div class="demo-carousel">1</div>
        </ivue-carousel-item>
        <ivue-carousel-item name="2" style="height: 300px">
            <div class="demo-carousel">2</div>
        </ivue-carousel-item>
        <ivue-carousel-item name="3" style="height: 300px">
            <div class="demo-carousel">3</div>
        </ivue-carousel-item>
    </ivue-carousel>
</template>

<style scoped>
.demo-carousel {
    height: 100%;
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
`;

code.card = `<template>
    <ivue-carousel autoplay height="200px" type="card">
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
    line-height: 100px;
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
</style>`;

code.vertical = `<template>
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
`;

export default code;
