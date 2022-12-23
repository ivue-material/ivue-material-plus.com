<template>
    <template v-for="(url, index) in list" :key="url">
        <ivue-image
            style="width: 200px;height: 200px;margin-right: 15px;margin-bottom: 15px;"
            preview
            :src="url"
            :preview-list="list"
            :initial-index="index"
            fit="cover"
        ></ivue-image>
    </template>
</template>

<script setup>
const list = [
    'https://picx.zhimg.com/80/v2-0c6805cc7c9cad36267d364f1f9b898b_1440w.webp',
    'https://pic3.zhimg.com/80/v2-e3c0d52fa9fec813777aa75b223536f0_1440w.webp',
    'https://pic3.zhimg.com/80/v2-216aa03425eff32c00612762707cde4a_1440w.webp',
    'https://pic3.zhimg.com/80/v2-3d3db0ce8b608ec2bdfbcd4f7bf78cf8_1440w.webp',
    'https://pic1.zhimg.com/80/v2-8e16acd9525146f106dd30914c5ad754_1440w.webp',
    'https://picx.zhimg.com/80/v2-ad7d5e7bb38950b9523c5fed516e9d8f_1440w.webp',
];
</script>
