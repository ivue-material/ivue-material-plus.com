const code = {};

code.default = `<template>
    <ivue-menu mode="horizontal" active-name="哆啦A梦" :theme="theme" @on-select="handleSelect">
        <ivue-menu-item name="哆啦A梦">哆啦A梦</ivue-menu-item>
        <ivue-menu-item name="野比大雄">野比大雄</ivue-menu-item>

        <ivue-submenu name="源静香">
            <template #title>源静香</template>
            <ivue-menu-group title="技能">
                <ivue-menu-item name="小提琴">小提琴</ivue-menu-item>
                <ivue-menu-item name="钢琴">钢琴</ivue-menu-item>
            </ivue-menu-group>
        </ivue-submenu>
    </ivue-menu>
    <h4>改变主题</h4>
    <ivue-radio-group v-model="theme">
        <ivue-radio label="light"></ivue-radio>
        <ivue-radio label="dark"></ivue-radio>
        <ivue-radio label="primary"></ivue-radio>
    </ivue-radio-group>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue';
const { proxy } = getCurrentInstance();

const theme = ref('light');

const handleSelect = (name) => {
    proxy.$message.info(\`当前选择的name:\${name}\`);
};
</script>
`;

code.vertical = `<template>
    <div class="menu-demo">
        <ivue-menu class="menu-item" :theme="theme">
            <ivue-menu-item name="1">哆啦A梦</ivue-menu-item>
            <ivue-menu-item name="2">野比大雄</ivue-menu-item>

            <ivue-submenu name="3">
                <template #title>源静香</template>
                <ivue-menu-group title="技能">
                    <ivue-menu-item name="3-1">小提琴</ivue-menu-item>
                    <ivue-menu-item name="3-2">钢琴</ivue-menu-item>
                </ivue-menu-group>
            </ivue-submenu>
        </ivue-menu>

        <ivue-menu class="menu-item" active-name="小提琴" :open-names="['源静香']" :theme="theme">
            <ivue-menu-item name="active-name">选中指定菜单,展开指定菜单</ivue-menu-item>
            <ivue-menu-item name="野比大雄">野比大雄</ivue-menu-item>

            <ivue-submenu name="源静香">
                <template #title>源静香</template>
                <ivue-menu-group title="技能">
                    <ivue-menu-item name="小提琴">小提琴</ivue-menu-item>
                    <ivue-menu-item name="钢琴">钢琴</ivue-menu-item>
                </ivue-menu-group>
            </ivue-submenu>

            <ivue-submenu name="刚田武">
                <template #title>刚田武</template>
                <ivue-menu-group title="技能">
                    <ivue-menu-item name="唱歌">唱歌</ivue-menu-item>
                    <ivue-menu-item name="烹饪">烹饪</ivue-menu-item>
                </ivue-menu-group>
            </ivue-submenu>
        </ivue-menu>

        <ivue-menu class="menu-item" accordion :theme="theme">
            <ivue-menu-item name="accordion">手风琴模式</ivue-menu-item>
            <ivue-menu-item name="野比大雄">野比大雄</ivue-menu-item>

            <ivue-submenu name="源静香">
                <template #title>源静香</template>
                <ivue-menu-group title="技能">
                    <ivue-menu-item name="小提琴">小提琴</ivue-menu-item>
                    <ivue-menu-item name="钢琴">钢琴</ivue-menu-item>
                </ivue-menu-group>
            </ivue-submenu>

            <ivue-submenu name="刚田武">
                <template #title>刚田武</template>
                <ivue-menu-group title="技能">
                    <ivue-menu-item name="唱歌">唱歌</ivue-menu-item>
                    <ivue-menu-item name="烹饪">烹饪</ivue-menu-item>
                </ivue-menu-group>
            </ivue-submenu>
        </ivue-menu>
    </div>
    <h4>改变主题</h4>
    <ivue-radio-group v-model="theme">
        <ivue-radio label="light"></ivue-radio>
        <ivue-radio label="dark"></ivue-radio>
    </ivue-radio-group>
</template>

<script setup>
import { ref } from 'vue';

const theme = ref('light');
</script>

<style scoped>
.menu-demo {
    display: flex;
}

.menu-item {
    margin-right: 20px;
}
</style>
`;

code.embedded = `<template>
    <ivue-menu :open-names="['源静香','野比大雄']">
        <ivue-menu-item name="哆啦A梦">哆啦A梦</ivue-menu-item>
        <ivue-submenu name="源静香">
            <template #title>源静香</template>
            <ivue-menu-group title="技能">
                <ivue-menu-item name="小提琴">小提琴</ivue-menu-item>
                <ivue-menu-item name="钢琴">钢琴</ivue-menu-item>

                <ivue-submenu name="野比大雄">
                    <template #title>野比大雄</template>
                    <ivue-menu-group title="技能">
                        <ivue-menu-item name="射击">射击</ivue-menu-item>
                        <ivue-menu-item name="翻花绳">翻花绳</ivue-menu-item>
                        <ivue-menu-item name="快速入睡">快速入睡</ivue-menu-item>
                    </ivue-menu-group>
                </ivue-submenu>
            </ivue-menu-group>
        </ivue-submenu>
    </ivue-menu>
</template>
`;

code.group = `<template>
    <ivue-menu>
        <ivue-menu-group title="野比大雄-技能">
            <ivue-menu-item name="射击">射击</ivue-menu-item>
            <ivue-menu-item name="翻花绳">翻花绳</ivue-menu-item>
            <ivue-menu-item name="快速入睡">快速入睡</ivue-menu-item>
        </ivue-menu-group>
        <ivue-menu-group title="源静香-技能">
            <ivue-menu-item name="小提琴">小提琴</ivue-menu-item>
            <ivue-menu-item name="钢琴">钢琴</ivue-menu-item>
        </ivue-menu-group>
    </ivue-menu>
</template>
`;

code.methods = `<template>
    <ivue-menu ref="menu">
        <ivue-menu-item name="哆啦A梦">哆啦A梦</ivue-menu-item>
        <ivue-menu-item name="野比大雄">野比大雄</ivue-menu-item>

        <ivue-submenu name="源静香">
            <template #title>源静香</template>
            <ivue-menu-group title="技能">
                <ivue-menu-item name="小提琴">小提琴</ivue-menu-item>
                <ivue-menu-item name="钢琴">钢琴</ivue-menu-item>
            </ivue-menu-group>
        </ivue-submenu>
    </ivue-menu>
    <h4>手动更新</h4>
    <ivue-button class="menu-button" @click="handleUpdateOpened">手动更新展开的子目录</ivue-button>
    <ivue-button class="menu-button" @click="handleUpdateActiveName">手动更新当前选择项</ivue-button>
</template>

<script setup>
import { ref } from 'vue';

const menu = ref();

const handleUpdateOpened = () => {
    menu.value.updateOpened(['源静香']);
};

const handleUpdateActiveName = () => {
    menu.value.updateActiveName('野比大雄');
};
</script>

<style scoped>
.menu-button {
    margin-right: 20px;
}
</style>
`;

export default code;
