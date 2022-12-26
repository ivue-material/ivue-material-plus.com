<template>
    <h4>默认监听 slot 变化</h4>
    <ivue-carousel-loop class="carousel-loop-watch">
        <ivue-image
            v-for="(image, index) in urls"
            style="width: 150px;height: 200px;"
            :src="image"
            fit="cover"
            :key="index"
        ></ivue-image>
    </ivue-carousel-loop>
    <ivue-button class="carousel-loop-watch-button" @click="handleAdd1">添加图片</ivue-button>
    <h4>监听 data-list 变化</h4>
    <ivue-carousel-loop class="carousel-loop-watch" :data-list="dataList">
        <ivue-image
            v-for="(image, index) in dataList[0]"
            style="width: 150px;height: 200px;"
            :src="image"
            fit="cover"
            :key="index"
        ></ivue-image>
        <ivue-image
            v-for="(image, index) in dataList[1]"
            style="width: 150px;height: 200px;"
            :src="image"
            fit="cover"
            :key="index"
        ></ivue-image>
    </ivue-carousel-loop>
    <ivue-button class="carousel-loop-watch-button" @click="handleAdd2">添加图片</ivue-button>
</template>

<script setup>
import { ref } from 'vue';

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

const urls = ref([
    'https://picx.zhimg.com/80/v2-0c6805cc7c9cad36267d364f1f9b898b_1440w.webp',
    'https://pic3.zhimg.com/80/v2-e3c0d52fa9fec813777aa75b223536f0_1440w.webp',
]);

const dataList = ref([
    [
        'https://picx.zhimg.com/80/v2-0c6805cc7c9cad36267d364f1f9b898b_1440w.webp',
        'https://pic3.zhimg.com/80/v2-e3c0d52fa9fec813777aa75b223536f0_1440w.webp',
    ],
    []
]);

const handleAdd1 = () => {
    urls.value.push(list[parseInt(Math.random() * 10)]);
};

const handleAdd2 = () => {
  dataList.value[1].push(list[parseInt(Math.random() * 10)]);
};
</script>

<style scoped>
.carousel-loop-watch {
    max-width: 800px;
    border: 1px solid var(--ivue-border-color);
}

.carousel-loop-watch-button {
    width: 100%;
    margin-top: 20px;
}
</style>
