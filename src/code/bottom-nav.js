const code = {};

code.default = `<template>
    <ivue-bottom-nav v-model="value" @on-change="handleChange">
        <ivue-bottom-nav-item color="primary" name="home">
            <span>Home</span>
            <ivue-icon>home</ivue-icon>
        </ivue-bottom-nav-item>
        <ivue-bottom-nav-item color="primary" name="settings">
            <span>Settings</span>
            <ivue-icon>settings</ivue-icon>
        </ivue-bottom-nav-item>
    </ivue-bottom-nav>
</template>

<script setup>
import { getCurrentInstance, ref } from 'vue';

const { proxy } = getCurrentInstance();

const value = ref('home');

const handleChange = (value) => {
    proxy.$message.info({
        content: \`当前激活导航：\${value}\`,
    });
};
</script>
`;

code.shift = `<template>
    <ivue-bottom-nav v-model="value" shift>
        <ivue-bottom-nav-item color="primary" name="home">
            <span>Home</span>
            <ivue-icon>home</ivue-icon>
        </ivue-bottom-nav-item>
        <ivue-bottom-nav-item color="primary" name="settings">
            <span>Settings</span>
            <ivue-icon>settings</ivue-icon>
        </ivue-bottom-nav-item>
    </ivue-bottom-nav>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('home');
</script>
`;

code.scale = `<template>
    <ivue-bottom-nav v-model="value" scale>
        <ivue-bottom-nav-item color="primary" name="home">
            <span>Home</span>
            <ivue-icon>home</ivue-icon>
        </ivue-bottom-nav-item>
        <ivue-bottom-nav-item color="primary" name="settings">
            <span>Settings</span>
            <ivue-icon>settings</ivue-icon>
        </ivue-bottom-nav-item>
    </ivue-bottom-nav>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('home');
</script>
`;

code.visible = `<template>
    <div class="hide-wrapper">
        <ivue-button class="button" @click="showNav = !showNav">显示/隐藏</ivue-button>

        <ivue-bottom-nav v-model="value" :visible="showNav">
            <ivue-bottom-nav-item color="primary" name="home">
                <span>Home</span>
                <ivue-icon>home</ivue-icon>
            </ivue-bottom-nav-item>
            <ivue-bottom-nav-item color="primary" name="settings">
                <span>Settings</span>
                <ivue-icon>settings</ivue-icon>
            </ivue-bottom-nav-item>
        </ivue-bottom-nav>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('home');
const showNav = ref(true);
</script>

<style scoped>
.hide-wrapper {
    position: relative;
    overflow: hidden;
}

.button {
    margin-bottom: 50px;
}
</style>
`;

code.height = `<template>
    <h3>height 设置为rem</h3>
    <ivue-bottom-nav v-model="value" height="5rem">
        <ivue-bottom-nav-item color="primary" name="home">
            <span>Home</span>
            <ivue-icon>home</ivue-icon>
        </ivue-bottom-nav-item>
        <ivue-bottom-nav-item color="primary" name="settings">
            <span>Settings</span>
            <ivue-icon>settings</ivue-icon>
        </ivue-bottom-nav-item>
    </ivue-bottom-nav>
    <h3>height 设置为number</h3>
    <ivue-bottom-nav v-model="value" height="100">
        <ivue-bottom-nav-item color="primary" name="home">
            <span>Home</span>
            <ivue-icon>home</ivue-icon>
        </ivue-bottom-nav-item>
        <ivue-bottom-nav-item color="primary" name="settings">
            <span>Settings</span>
            <ivue-icon>settings</ivue-icon>
        </ivue-bottom-nav-item>
    </ivue-bottom-nav>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('home');
</script>
`;

export default code;
