<template>
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
