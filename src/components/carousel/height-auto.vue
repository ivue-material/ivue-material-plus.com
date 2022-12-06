<template>
    <p>正常模式</p>
    <div style="height: 300px">
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
    </div>
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

<script>
export default {};
</script>

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
