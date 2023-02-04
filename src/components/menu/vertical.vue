<template>
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

    <ivue-menu
      class="menu-item"
      active-name="小提琴"
      :open-names="['源静香']"
      :theme="theme"
    >
      <ivue-menu-item name="active-name"
        >选中指定菜单,展开指定菜单</ivue-menu-item
      >
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
