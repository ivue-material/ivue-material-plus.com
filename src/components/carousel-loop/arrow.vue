<template>
    <h4>默认 always</h4>
    <ivue-carousel-loop class="carousel-loop-demo">
        <ivue-image
            v-for="(image, index) in list"
            style="width: 150px;height: 200px;"
            :src="image"
            fit="cover"
            :key="index"
        ></ivue-image>
    </ivue-carousel-loop>
    <h4>hover</h4>
    <ivue-carousel-loop class="carousel-loop-demo" arrow="hover">
        <ivue-image
            v-for="(image, index) in list"
            style="width: 150px;height: 200px;"
            :src="image"
            fit="cover"
            :key="index"
        ></ivue-image>
    </ivue-carousel-loop>
    <h4>outside</h4>
    <div class="carousel-loop-outside">
        <ivue-carousel-loop class="carousel-loop-demo" arrow="outside">
            <ivue-image
                v-for="(image, index) in list"
                style="width: 150px;height: 200px;"
                :src="image"
                fit="cover"
                :key="index"
            ></ivue-image>
        </ivue-carousel-loop>
    </div>
    <h4>自定义图标</h4>
    <ivue-carousel-loop class="carousel-loop-demo" leftArrow="light_mode" rightArrow="dark_mode">
        <ivue-image
            v-for="(image, index) in list"
            style="width: 150px;height: 200px;"
            :src="image"
            fit="cover"
            :key="index"
        ></ivue-image>
    </ivue-carousel-loop>
    <h4>自定义图标 slots</h4>
    <ivue-carousel-loop class="carousel-loop-demo">
        <template #leftArrow>
            <ivue-button color="#5B8EFF">left</ivue-button>
        </template>
        <template #rightArrow>
            <ivue-button color="#5B8EFF">right</ivue-button>
        </template>
        <ivue-image
            v-for="(image, index) in list"
            style="width: 150px;height: 200px;"
            :src="image"
            fit="cover"
            :key="index"
        ></ivue-image>
    </ivue-carousel-loop>
</template>

<script setup>
const list = [
    'https://picx.zhimg.com/80/v2-0c6805cc7c9cad36267d364f1f9b898b_1440w.webp',
    'https://pic3.zhimg.com/80/v2-e3c0d52fa9fec813777aa75b223536f0_1440w.webp',
    'https://pic3.zhimg.com/80/v2-216aa03425eff32c00612762707cde4a_1440w.webp',
    'https://pic3.zhimg.com/80/v2-3d3db0ce8b608ec2bdfbcd4f7bf78cf8_1440w.webp',
    'https://pic1.zhimg.com/80/v2-8e16acd9525146f106dd30914c5ad754_1440w.webp',
    'https://picx.zhimg.com/80/v2-ad7d5e7bb38950b9523c5fed516e9d8f_1440w.webp',
    'https://pic4.zhimg.com/80/v2-c90bc7af8ba033de11b0641e4aebf721_1440w.webp',
    'https://picx.zhimg.com/80/v2-f5f1ad1dc5e79961886f131819d7807d_1440w.webp',
    'https://pic2.zhimg.com/80/v2-be6dad6a76907eee65dc26949e6b9659_1440w.webp',
    'https://pica.zhimg.com/80/v2-2460c464b078eda47afb9f64f1553dfa_1440w.webp',
];
</script>

<style scoped>
.carousel-loop-demo {
    max-width: 800px;
}

.carousel-loop-outside {
    padding: 0 60px;
}
</style>
