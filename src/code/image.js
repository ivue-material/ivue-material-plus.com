const code = {};

code.default = `<template>
    <div class="image-demo">
        <div v-for="fit in fits" :key="fit" class="image-demo-content">
            <span class="image-demo-title">{{ fit }}</span>
            <ivue-image style="width: 100px; height: 100px" :src="url" :fit="fit" radius="10"></ivue-image>
        </div>
    </div>
</template>

<script setup>
const fits = ['fill', 'contain', 'cover', 'none', 'scale-down'];
const url = 'https://pic3.zhimg.com/v2-13744f101e60252ed8bd5dee09e7219a_b.jpg';
</script>

<style scoped>
.image-demo {
    display: flex;
    flex-wrap: wrap;
}

.image-demo-title {
    margin-bottom: 10px;
}

.image-demo-content {
    margin-right: 20px;
    padding-right: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>
`;

code.slots = `<template>
    <div class="image-demo">
        <div class="image-demo-content">
            <span class="image-demo-title">加载中</span>
            <ivue-image style="width: 100px; height: 100px" :src="url">
                <template #loading>
                    <div class="image-demo-error">loading...</div>
                </template>
            </ivue-image>
        </div>
        <div class="image-demo-content">
            <span class="image-demo-title">加载失败</span>
            <ivue-image style="width: 100px; height: 100px" :src="''">
                <template #error>
                    <div class="image-demo-error">error</div>
                </template>
            </ivue-image>
        </div>
    </div>
</template>

<script setup>
const url = 'https://pic3.zhimg.com/v2-13744f101e60252ed8bd5dee09e7219a_b.jpg';
</script>

<style scoped>
.image-demo {
    display: flex;
}

.image-demo-title {
    margin-bottom: 10px;
}

.image-demo-content {
    margin-right: 20px;
    padding-right: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.image-demo-error {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: #cccccc;
}
</style>
`;

code.lazy = `<template>
    <h4>纵向</h4>
    <div class="image-demo-vertical">
        <template v-for="url in list" :key="url">
            <ivue-image class="image-demo-image" :src="url" fit="cover" lazy></ivue-image>
        </template>
    </div>
    <h4>横向</h4>
    <div class="image-demo-horizontal">
        <div class="image-demo-horizontal-content">
            <template v-for="url in list" :key="url">
                <ivue-image class="image-demo-image" :src="url" fit="cover" lazy></ivue-image>
            </template>
        </div>
    </div>
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
    'https://pic1.zhimg.com/80/v2-386abc09b065cb2e69ff14fb1bba6a52_1440w.webp',
    'https://picx.zhimg.com/80/v2-23b82982ffff4f42032080e1978febfd_1440w.webp',
    'https://pica.zhimg.com/80/v2-51d3079f0cebdc639159f014d13ca042_1440w.webp',
    'https://pica.zhimg.com/80/v2-b55bc47d8fd52f03694e12a7e8b806e0_1440w.webp',
];
</script>

<style scoped>
.image-demo-vertical {
    width: 500px;
    height: 200px;
    overflow-y: auto;
}

.image-demo-horizontal {
    width: 500px;
    height: 200px;
    display: flex;
    overflow: hidden;
    overflow-x: scroll;
}

.image-demo-horizontal-content {
    display: flex;
}

.image-demo-horizontal .image-demo-image {
    display: inline-flex;
    flex: 1;
    width: 200px;
}

.image-demo-image {
    width: 100%;
    height: 200px;
}
</style>
`;

code.preview = `<template>
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
`;

code.imagePreview = `<template>
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
`;

code.instantiateImagePreview = `<template>
    <ivue-button @click="handleShowPreview">打开图片预览</ivue-button>
</template>

<script setup>
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

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

const handleShowPreview = () => {
    proxy.$IvueImagePreview.show({
        previewList: list,
        maskClosable: false,
    });
};
</script>

<style lang="scss" scoped>
</style>
`;

export default code;
