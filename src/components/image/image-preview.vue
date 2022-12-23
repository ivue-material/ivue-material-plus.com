<template>
    <ivue-button @click="handleShowPreview">打开图片预览</ivue-button>
    <ivue-image-preview v-model="preview" :preview-list="list" />
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
    'https://pic1.zhimg.com/80/v2-386abc09b065cb2e69ff14fb1bba6a52_1440w.webp',
    'https://picx.zhimg.com/80/v2-23b82982ffff4f42032080e1978febfd_1440w.webp',
    'https://pica.zhimg.com/80/v2-51d3079f0cebdc639159f014d13ca042_1440w.webp',
    'https://pica.zhimg.com/80/v2-b55bc47d8fd52f03694e12a7e8b806e0_1440w.webp',
];

const preview = ref(false);

const handleShowPreview = () => {
    preview.value = true;
};
</script>

<style lang="scss" scoped>
</style>
