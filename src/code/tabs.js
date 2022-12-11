const code = {};

code.default = `<template>
    <ivue-tabs v-model="active">
        <template #header>
            <ivue-tab name="name1">tab1</ivue-tab>
            <ivue-tab name="name2">tab2</ivue-tab>
            <ivue-tab name="name3">tab3</ivue-tab>
        </template>
        <template #content>
            <ivue-tab-item>
                <div class="content">标签1的内容</div>
            </ivue-tab-item>
            <ivue-tab-item>
                <div class="content">标签2的内容</div>
            </ivue-tab-item>
            <ivue-tab-item>
                <div class="content">标签3的内容</div>
            </ivue-tab-item>
        </template>
    </ivue-tabs>
</template>

<script setup>
import { ref } from 'vue';

const active = ref('name1');
</script>

<style scoped>
.content {
    padding: 20px 0;
}
</style>
`;

code.disabled = `<template>
    <ivue-tabs v-model="active">
        <template #header>
            <ivue-tab name="name1">tab1</ivue-tab>
            <ivue-tab name="name2" disabled>tab2</ivue-tab>
            <ivue-tab name="name3">tab3</ivue-tab>
        </template>
        <template #content>
            <ivue-tab-item>
                <div class="content">标签1的内容</div>
            </ivue-tab-item>
            <ivue-tab-item>
                <div class="content">标签2的内容</div>
            </ivue-tab-item>
            <ivue-tab-item>
                <div class="content">标签3的内容</div>
            </ivue-tab-item>
        </template>
    </ivue-tabs>
</template>

<script setup>
import { ref } from 'vue';

const active = ref('name1');
</script>

<style scoped>
.content {
    padding: 20px 0;
}
</style>
`;

code.autoWidth = `<template>
    <ivue-tabs auto-width v-model="active">
        <template #header>
            <ivue-tab name="name1">tab1</ivue-tab>
            <ivue-tab name="name2">tab2</ivue-tab>
            <ivue-tab name="name3">tab3</ivue-tab>
        </template>
        <template #content>
            <ivue-tab-item>
                <div class="content">标签1的内容</div>
            </ivue-tab-item>
            <ivue-tab-item>
                <div class="content">标签2的内容</div>
            </ivue-tab-item>
            <ivue-tab-item>
                <div class="content">标签3的内容</div>
            </ivue-tab-item>
        </template>
    </ivue-tabs>
</template>

<script setup>
import { ref } from 'vue';

const active = ref('name1');
</script>

<style scoped>
.content {
    padding: 20px 0;
}
</style>
`;


code.paging = `<template>
    <ivue-tabs v-model="active">
        <template #header>
            <ivue-tab name="name1" v-for="(item,index) in 100" :key="index">{{ \`tab\${index + 1}\` }}</ivue-tab>
            <ivue-tab name="name2">tab2</ivue-tab>
        </template>
        <template #content>
            <ivue-tab-item v-for="(item,index) in 100" :key="index">
                <div class="content">{{ \`标签\${index + 1}的内容\` }}</div>
            </ivue-tab-item>
        </template>
    </ivue-tabs>
</template>

<script setup>
import { ref } from 'vue';

const active = ref('name1');
</script>

<style scoped>
.content {
    padding: 20px 0;
}
</style>
`;

code.direction = `<template>
    <h4>居中</h4>
    <ivue-tabs v-model="active1" centered>
        <template #header>
            <ivue-tab name="name1">tab1</ivue-tab>
            <ivue-tab name="name2">tab2</ivue-tab>
            <ivue-tab name="name3">tab3</ivue-tab>
        </template>
        <template #content>
            <ivue-tab-item>
                <div class="content">标签1的内容</div>
            </ivue-tab-item>
            <ivue-tab-item>
                <div class="content">标签2的内容</div>
            </ivue-tab-item>
            <ivue-tab-item>
                <div class="content">标签3的内容</div>
            </ivue-tab-item>
        </template>
    </ivue-tabs>
    <h4>向右对齐</h4>
    <ivue-tabs v-model="active2" right>
        <template #header>
            <ivue-tab name="name1">tab1</ivue-tab>
            <ivue-tab name="name2">tab2</ivue-tab>
            <ivue-tab name="name3">tab3</ivue-tab>
        </template>
        <template #content>
            <ivue-tab-item>
                <div class="content">标签1的内容</div>
            </ivue-tab-item>
            <ivue-tab-item>
                <div class="content">标签2的内容</div>
            </ivue-tab-item>
            <ivue-tab-item>
                <div class="content">标签3的内容</div>
            </ivue-tab-item>
        </template>
    </ivue-tabs>
</template>

<script setup>
import { ref } from 'vue';

const active1 = ref('name1');
const active2 = ref('name1');
</script>

<style scoped>
.content {
    padding: 20px 0;
}
</style>
`;

code.icon = `<template>
    <ivue-tabs v-model="active" prev-icon="arrow_back" next-icon="arrow_forward">
        <template #header>
            <ivue-tab name="name1" v-for="(item,index) in 100" :key="index">{{ \`tab\${index + 1}\` }}</ivue-tab>
            <ivue-tab name="name2">tab2</ivue-tab>
        </template>
        <template #content>
            <ivue-tab-item v-for="(item,index) in 100" :key="index">
                <div class="content">{{ \`标签\${index + 1}的内容\` }}</div>
            </ivue-tab-item>
        </template>
    </ivue-tabs>
</template>

<script setup>
import { ref } from 'vue';

const active = ref('name1');
</script>

<style scoped>
.content {
    padding: 20px 0;
}
</style>
`;

code.fixedWidth = `<template>
    <ivue-tabs v-model="active" fixed-width>
        <template #header>
            <ivue-tab name="name1">tab1</ivue-tab>
            <ivue-tab name="name2">tab2</ivue-tab>
            <ivue-tab name="name3">tab3</ivue-tab>
        </template>
        <template #content>
            <ivue-tab-item>
                <div class="content">标签1的内容</div>
            </ivue-tab-item>
            <ivue-tab-item>
                <div class="content">标签2的内容</div>
            </ivue-tab-item>
            <ivue-tab-item>
                <div class="content">标签3的内容</div>
            </ivue-tab-item>
        </template>
    </ivue-tabs>
</template>

<script setup>
import { ref } from 'vue';

const active = ref('name1');
</script>

<style scoped>
.content {
    padding: 20px 0;
}
</style>
`;

code.customize = `<template>
    <h4>滑动条颜色</h4>
    <ivue-tabs slider-color="#27E2B2" v-model="active1">
        <template #header>
            <ivue-tab name="name1">tab1</ivue-tab>
            <ivue-tab name="name2">tab2</ivue-tab>
            <ivue-tab name="name3">tab3</ivue-tab>
        </template>
        <template #content>
            <ivue-tab-item>
                <div class="content">标签1的内容</div>
            </ivue-tab-item>
            <ivue-tab-item>
                <div class="content">标签2的内容</div>
            </ivue-tab-item>
            <ivue-tab-item>
                <div class="content">标签3的内容</div>
            </ivue-tab-item>
        </template>
    </ivue-tabs>
    <h4>调整显示箭头时设置的前后滚动的间距</h4>
    <ivue-tabs v-model="active1" arrows-margin="100">
        <template #header>
            <ivue-tab name="name1" v-for="(item,index) in 100" :key="index">{{ \`tab\${index + 1}\` }}</ivue-tab>
            <ivue-tab name="name2">tab2</ivue-tab>
        </template>
        <template #content>
            <ivue-tab-item v-for="(item,index) in 100" :key="index">
                <div class="content">{{ \`标签\${index + 1}的内容\` }}</div>
            </ivue-tab-item>
        </template>
    </ivue-tabs>
    <h4>滑动条隐藏</h4>
    <ivue-tabs hideSlider v-model="active1">
        <template #header>
            <ivue-tab name="name1">tab1</ivue-tab>
            <ivue-tab name="name2">tab2</ivue-tab>
            <ivue-tab name="name3">tab3</ivue-tab>
        </template>
        <template #content>
            <ivue-tab-item>
                <div class="content">标签1的内容</div>
            </ivue-tab-item>
            <ivue-tab-item>
                <div class="content">标签2的内容</div>
            </ivue-tab-item>
            <ivue-tab-item>
                <div class="content">标签3的内容</div>
            </ivue-tab-item>
        </template>
    </ivue-tabs>
    <h4>导航高度</h4>
    <ivue-tabs v-model="active1" height="100">
        <template #header>
            <ivue-tab name="name1">tab1</ivue-tab>
            <ivue-tab name="name2">tab2</ivue-tab>
            <ivue-tab name="name3">tab3</ivue-tab>
        </template>
        <template #content>
            <ivue-tab-item>
                <div class="content">标签1的内容</div>
            </ivue-tab-item>
            <ivue-tab-item>
                <div class="content">标签2的内容</div>
            </ivue-tab-item>
            <ivue-tab-item>
                <div class="content">标签3的内容</div>
            </ivue-tab-item>
        </template>
    </ivue-tabs>
</template>

<script setup>
import { ref } from 'vue';

const active1 = ref('name1');
</script>

<style scoped>
.content {
    padding: 20px 0;
}
</style>
`;

export default code;
