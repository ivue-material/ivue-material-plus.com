<template>
  <div class="animation-wrapper">
    <!-- 渐显/隐 -->
    <div class="animation">
      <div class="animation-content">
        <transition name="fade">
          <div v-show="anim1" class="transition-box">渐显/隐</div>
        </transition>
      </div>

      <ivue-button @click="anim1 = !anim1">显示动画</ivue-button>
    </div>
    <!-- 缩放 -->
    <div class="animation">
      <div class="animation-content">
        <transition name="zoom">
          <div v-show="anim2" class="transition-box">缩放</div>
        </transition>
      </div>

      <ivue-button @click="anim2 = !anim2">显示动画</ivue-button>
    </div>
    <!-- 向上 -->
    <div class="animation">
      <div class="animation-content">
        <transition name="move-up">
          <div v-show="anim3" class="transition-box">向上</div>
        </transition>
      </div>

      <ivue-button @click="anim3 = !anim3">显示动画</ivue-button>
    </div>
    <!-- 向下 -->
    <div class="animation">
      <div class="animation-content">
        <transition name="move-down">
          <div v-show="anim4" class="transition-box">向下</div>
        </transition>
      </div>

      <ivue-button @click="anim4 = !anim4">显示动画</ivue-button>
    </div>
    <!-- 向左 -->
    <div class="animation">
      <div class="animation-content">
        <transition name="move-left">
          <div v-show="anim5" class="transition-box">向左</div>
        </transition>
      </div>

      <ivue-button @click="anim5 = !anim5">显示动画</ivue-button>
    </div>
    <!-- 向右 -->
    <div class="animation">
      <div class="animation-content">
        <transition name="move-right">
          <div v-show="anim6" class="transition-box">向右</div>
        </transition>
      </div>

      <ivue-button @click="anim6 = !anim6">显示动画</ivue-button>
    </div>
    <!-- 居中折叠 -->
    <div class="animation">
      <div class="animation-content">
        <transition name="slide-middle">
          <div v-show="anim7" class="transition-box">居中折叠</div>
        </transition>
      </div>

      <ivue-button @click="anim7 = !anim7">显示动画</ivue-button>
    </div>
    <!-- 向上折叠 -->
    <div class="animation">
      <div class="animation-content">
        <transition name="slide-up">
          <div v-show="anim8" class="transition-box">向上折叠</div>
        </transition>
      </div>

      <ivue-button @click="anim8 = !anim8">显示动画</ivue-button>
    </div>
    <!-- 向下折叠 -->
    <div class="animation">
      <div class="animation-content">
        <transition name="slide-down">
          <div v-show="anim9" class="transition-box">向下折叠</div>
        </transition>
      </div>

      <ivue-button @click="anim9 = !anim9">显示动画</ivue-button>
    </div>
    <!-- 向左折叠 -->
    <div class="animation">
      <div class="animation-content">
        <transition name="slide-left">
          <div v-show="anim10" class="transition-box">向左折叠</div>
        </transition>
      </div>

      <ivue-button @click="anim10 = !anim10">显示动画</ivue-button>
    </div>
    <!-- 向右折叠 -->
    <div class="animation">
      <div class="animation-content">
        <transition name="slide-right">
          <div v-show="anim11" class="transition-box">向右折叠</div>
        </transition>
      </div>

      <ivue-button @click="anim11 = !anim11">显示动画</ivue-button>
    </div>
    <!-- 循环 -->
    <div class="animation">
      <div class="animation-content">
        <ivue-icon class="ivue-animation-loop">refresh</ivue-icon>
      </div>

      <ivue-button @click="anim11 = !anim11">显示动画</ivue-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const anim1 = ref(true);
const anim2 = ref(true);
const anim3 = ref(true);
const anim4 = ref(true);
const anim5 = ref(true);
const anim6 = ref(true);
const anim7 = ref(true);
const anim8 = ref(true);
const anim9 = ref(true);
const anim10 = ref(true);
const anim11 = ref(true);
</script>

<style scoped>
.animation-wrapper {
  display: flex;
  flex-wrap: wrap;
}

.animation-content {
  width: 200px;
  height: 200px;
}

.animation {
  margin: 5px;
  padding: 10px;
  border: 1px solid #e8eaec;
}

.transition-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  color: #fff;
  padding: 24px 0;
}
</style>
