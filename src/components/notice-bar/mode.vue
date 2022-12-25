<template>
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
