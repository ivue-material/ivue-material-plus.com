const code = {};

code.default = `<template>
    <ivue-skeleton></ivue-skeleton>
</template>
`;

code.paragraph = `<template>
  <h4>段落传入 object</h4>
  <ivue-skeleton
    :paragraph="{ rows: 5, width: [100, 200, '300px', '50%', '62%'] }"
  ></ivue-skeleton>
  <h4>段落传入 object 宽度固定</h4>
  <ivue-skeleton :paragraph="{ rows: 5, width: [100] }"></ivue-skeleton>
  <h4>段落传入 number</h4>
  <ivue-skeleton :paragraph="2"></ivue-skeleton>
</template>
`;

code.animated = `<template>
    <ivue-skeleton animated></ivue-skeleton>
</template>
`;

code.slots = `<template>
    <ivue-skeleton animated>
        <template #template>
            <h4>circle</h4>
            <ivue-skeleton-item type="circle" style="margin-bottom: 10px"></ivue-skeleton-item>
            <h4>square</h4>
            <ivue-skeleton-item type="square" style="margin-bottom: 10px"></ivue-skeleton-item>
            <h4>rect</h4>
            <ivue-skeleton-item type="rect" style="margin-bottom: 10px"></ivue-skeleton-item>
            <h4>image</h4>
            <ivue-skeleton-item type="image" style="margin-bottom: 10px"></ivue-skeleton-item>
            <h4>h1</h4>
            <ivue-skeleton-item type="h1" style="margin-bottom: 10px"></ivue-skeleton-item>
            <h4>h3</h4>
            <ivue-skeleton-item type="h3" style="margin-bottom: 10px"></ivue-skeleton-item>
            <h4>caption</h4>
            <ivue-skeleton-item type="caption" style="margin-bottom: 10px"></ivue-skeleton-item>
            <p>p</p>
            <ivue-skeleton-item type="p" style="margin-bottom: 10px"></ivue-skeleton-item>
            <p>button</p>
            <ivue-skeleton-item type="button" style="margin-bottom: 10px"></ivue-skeleton-item>
        </template>
    </ivue-skeleton>
</template>
`;

code.loading = `<template>
    <div style="margin-bottom: 10px">
        <span>Switch Loading</span>
        <ivue-switch v-model="loading"></ivue-switch>
    </div>
    <ivue-skeleton class="skeleton-demo" :loading="loading" animated>
        <template #template>
            <ivue-skeleton-item class="skeleton-item-demo" type="image"></ivue-skeleton-item>
            <div class="skeleton-content-demo">
                <ivue-skeleton-item variant="h3" style="width: 50%"></ivue-skeleton-item>
                <ivue-skeleton-item variant="text"></ivue-skeleton-item>
            </div>
        </template>
        <template #default>
            <div class="skeleton-demo">
                <img src="https://pic3.zhimg.com/v2-13744f101e60252ed8bd5dee09e7219a_b.jpg" />
                <div class="skeleton-content-demo">
                    <div>title</div>
                    <div>content</div>
                </div>
            </div>
        </template>
    </ivue-skeleton>
</template>

<script setup>
import { ref } from 'vue';

const loading = ref(true);
</script>

<style scoped>
.skeleton-demo {
    display: flex;
    flex-direction: column;
    width: 240px;
}

.skeleton-demo img {
    width: 240px;
    height: 240px;
}

.skeleton-item-demo {
    width: 240px;
    height: 240px;
    font-size: 50px;
}

.skeleton-content-demo {
    display: flex;
    flex-direction: column;
    padding: 14px 0;
    line-height: 16px;
}
</style>
`;

code.throttle = `<template>
    <div style="margin-bottom: 10px">
        <span>Switch Loading</span>
        <ivue-switch v-model="loading"></ivue-switch>
    </div>
    <ivue-skeleton class="skeleton-demo" :loading="loading" animated :throttle="500">
        <template #template>
            <ivue-skeleton-item class="skeleton-item-demo" type="image"></ivue-skeleton-item>
            <div class="skeleton-content-demo">
                <ivue-skeleton-item variant="h3" style="width: 50%"></ivue-skeleton-item>
                <ivue-skeleton-item variant="text"></ivue-skeleton-item>
            </div>
        </template>
        <template #default>
            <div class="skeleton-demo">
                <img src="https://pic3.zhimg.com/v2-13744f101e60252ed8bd5dee09e7219a_b.jpg" />
                <div class="skeleton-content-demo">
                    <div>title</div>
                    <div>content</div>
                </div>
            </div>
        </template>
    </ivue-skeleton>
</template>

<script setup>
import { ref } from 'vue';

const loading = ref(false);
</script>

<style scoped>
.skeleton-demo {
    display: flex;
    flex-direction: column;
    width: 240px;
}

.skeleton-demo img {
    width: 240px;
    height: 240px;
}

.skeleton-item-demo {
    width: 240px;
    height: 240px;
    font-size: 50px;
}

.skeleton-content-demo {
    display: flex;
    flex-direction: column;
    padding: 14px 0;
    line-height: 16px;
}
</style>
`;

export default code;
