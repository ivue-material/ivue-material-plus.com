<template>
    <h4>offset 每次偏移 500px</h4>
    <ivue-carousel-loop class="carousel-loop-demo" :offset="500">
        <ivue-image
            v-for="(image, index) in list"
            style="width: 150px;height: 200px;"
            :src="image"
            fit="cover"
            :key="index"
        ></ivue-image>
    </ivue-carousel-loop>
    <h4>sliding-speed 滑动速率（毫秒）offset 为 500px</h4>
    <ivue-carousel-loop
        class="carousel-loop-demo"
        :sliding-speed="2"
        :offset="500"
    >
        <ivue-image
            v-for="(image, index) in list"
            style="width: 150px;height: 200px;"
            :src="image"
            fit="cover"
            :key="index"
        ></ivue-image>
    </ivue-carousel-loop>
    <h4>sliding-end-next 为 false 点击不用等待动画完成后才可以执行偏移</h4>
    <ivue-carousel-loop
        class="carousel-loop-demo"
        :sliding-speed="2"
        :offset="500"
        :sliding-end-next="false"
    >
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
</style>
