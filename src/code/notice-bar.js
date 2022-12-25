const code = {};

code.default = `<template>
    <ivue-notice-bar
        class="notice-bar"
        left-icon="volume_up"
        text="哆啦A梦或多啦A梦，旧时多译为叮当、小叮当，是藤子·F·不二雄的漫画作品《哆啦A梦／多啦A梦》中的主角，黄色有双耳猫型机器人，后变成蓝色猫型机器人。名字的含义为野猫／铜锣+“卫门”"
    ></ivue-notice-bar>
    <ivue-notice-bar
        class="notice-bar"
        text="哆啦A梦或多啦A梦，旧时多译为叮当、小叮当，是藤子·F·不二雄的漫画作品《哆啦A梦／多啦A梦》中的主角，黄色有双耳猫型机器人，后变成蓝色猫型机器人。名字的含义为野猫／铜锣+“卫门”"
    >
        <template #leftIcon>
            <ivue-icon class="notice-bar-icon">favorite_border</ivue-icon>
        </template>
    </ivue-notice-bar>
</template>

<style scoped>
.notice-bar {
    margin: 10px 0;
}

.notice-bar-icon {
    margin: 0 5px;
}
</style>
`;

code.scrollable = `<template>
    <h4>默认</h4>
    <ivue-notice-bar
        class="notice-bar"
        text="哆啦A梦或多啦A梦，旧时多译为叮当、小叮当，是藤子·F·不二雄的漫画作品《哆啦A梦／多啦A梦》中的主角，黄色有双耳猫型机器人，后变成蓝色猫型机器人。名字的含义为野猫／铜锣+“卫门”"
        scrollable
    ></ivue-notice-bar>
    <h4>speed 为 100</h4>
    <ivue-notice-bar
        class="notice-bar"
        text="哆啦A梦或多啦A梦，旧时多译为叮当、小叮当，是藤子·F·不二雄的漫画作品《哆啦A梦／多啦A梦》中的主角，黄色有双耳猫型机器人，后变成蓝色猫型机器人。名字的含义为野猫／铜锣+“卫门”"
        scrollable
        :speed="100"
    >
    </ivue-notice-bar>
    <h4>delay 延迟2秒执行</h4>
    <ivue-notice-bar
        class="notice-bar"
        text="哆啦A梦或多啦A梦，旧时多译为叮当、小叮当，是藤子·F·不二雄的漫画作品《哆啦A梦／多啦A梦》中的主角，黄色有双耳猫型机器人，后变成蓝色猫型机器人。名字的含义为野猫／铜锣+“卫门”"
        scrollable
        :delay="2"
    >
    </ivue-notice-bar>
</template>

<style scoped>
.notice-bar {
    margin: 10px 0;
}

.notice-bar-icon {
    margin: 0 5px;
}
</style>
`;

code.wrapable = `<template>
    <ivue-notice-bar
        wrapable
        text="哆啦A梦或多啦A梦，旧时多译为叮当、小叮当，是藤子·F·不二雄的漫画作品《哆啦A梦／多啦A梦》中的主角，黄色有双耳猫型机器人，后变成蓝色猫型机器人。名字的含义为野猫／铜锣+“卫门”"
    ></ivue-notice-bar>
</template>
`;

code.mode = `<template>
    <h4>closeable</h4>
    <ivue-notice-bar
        class="notice-bar"
        mode="closeable"
        text="哆啦A梦或多啦A梦，旧时多译为叮当、小叮当，是藤子·F·不二雄的漫画作品《哆啦A梦／多啦A梦》中的主角，黄色有双耳猫型机器人，后变成蓝色猫型机器人。名字的含义为野猫／铜锣+“卫门”"
        @on-close="handleClose"
    ></ivue-notice-bar>

    <h4>link</h4>
    <ivue-notice-bar
        class="notice-bar"
        mode="link"
        text="哆啦A梦或多啦A梦，旧时多译为叮当、小叮当，是藤子·F·不二雄的漫画作品《哆啦A梦／多啦A梦》中的主角，黄色有双耳猫型机器人，后变成蓝色猫型机器人。名字的含义为野猫／铜锣+“卫门”"
        @on-link="handleLink"
    ></ivue-notice-bar>
</template>

<script setup>
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

const handleClose = () => {
  proxy.$message.info('点击关闭');
};

const handleLink = () => {
  proxy.$message.info('点击链接');
};

</script>


<style scoped>
.notice-bar {
    margin: 10px 0;
}

.notice-bar-icon {
    margin: 0 5px;
}
</style>
`;


code.styles = `<template>
    <ivue-notice-bar
        class="notice-bar"
        left-icon="volume_up"
        text="哆啦A梦或多啦A梦，旧时多译为叮当、小叮当，是藤子·F·不二雄的漫画作品《哆啦A梦／多啦A梦》中的主角，黄色有双耳猫型机器人，后变成蓝色猫型机器人。名字的含义为野猫／铜锣+“卫门”"
        :background="['#B6A6D4','#E1C2C4']"
        textColor="#22184C"
    ></ivue-notice-bar>

    <ivue-notice-bar
        class="notice-bar"
        mode="closeable"
        text="哆啦A梦或多啦A梦，旧时多译为叮当、小叮当，是藤子·F·不二雄的漫画作品《哆啦A梦／多啦A梦》中的主角，黄色有双耳猫型机器人，后变成蓝色猫型机器人。名字的含义为野猫／铜锣+“卫门”"
        background="#82B1FF"
        text-color="#ffffff"
    ></ivue-notice-bar>

    <ivue-notice-bar
        class="notice-bar"
        mode="link"
        text="哆啦A梦或多啦A梦，旧时多译为叮当、小叮当，是藤子·F·不二雄的漫画作品《哆啦A梦／多啦A梦》中的主角，黄色有双耳猫型机器人，后变成蓝色猫型机器人。名字的含义为野猫／铜锣+“卫门”"
        background="#82B1FF"
        text-color="#ffffff"
    ></ivue-notice-bar>
</template>

<style scoped>
.notice-bar {
    margin: 10px 0;
}

.notice-bar-icon {
    margin: 0 5px;
}
</style>
`;

export default code;
