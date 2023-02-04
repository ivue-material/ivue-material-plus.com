const code = {};

code.default = `<template>
    <ivue-circular class="circular" :percent="80">
        <span class="circular-text">80%</span>
    </ivue-circular>
    <ivue-circular class="circular" :percent="100" :stroke-color="['#FCEAEA', '#EE8AB2']">
        <ivue-icon style="color:#EE8AB2">done</ivue-icon>
    </ivue-circular>
    <ivue-circular class="circular" :percent="50" stroke-color="#6DD8B0">
        <ivue-icon style="color:#6DD8B0">looks</ivue-icon>
    </ivue-circular>
</template>

<style scoped>
.circular {
    margin-right: 20px;
}

.circular-text {
    font-size: 24px;
}
</style>
`;

code.linkage = `<template>
    <div>
        <ivue-circular class="circular" :stroke-color="color" :percent="percent">
            <span class="circular-text">{{ \`\${percent}%\` }}</span>
        </ivue-circular>
        <div>
            <ivue-button class="button" @click="handleAdd">add</ivue-button>
            <ivue-button class="button" @click="handleMinus">remove</ivue-button>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const percent = ref(0);

const color = computed(() => {
    let color = '#D7FCF2';

    if (percent.value == 100) {
        color = '#5BC0BF';
    }

    return color;
});

const handleAdd = () => {
    if (percent.value >= 100) {
        return false;
    }

    percent.value += 10;
};

const handleMinus = () => {
    if (percent.value <= 0) {
        return false;
    }

    percent.value -= 10;
};
</script>

<style scoped>
.circular {
    margin-right: 20px;
}

.circular-text {
    font-size: 24px;
}

.button {
    margin-top: 10px;
    margin-right: 10px;
}
</style>
`;

code.slots = `<template>
    <ivue-circular
        :size="250"
        :trail-width="4"
        :stroke-width="5"
        :percent="75"
        stroke-linecap="square"
        stroke-color="#FB858C"
    >
        <div class="demo-circle-custom">
            <h1>10,000,000</h1>
        </div>
    </ivue-circular>
</template>
`;

code.dashboard = `<template>
  <ivue-circular
      :size="250"
      :trail-width="4"
      :stroke-width="5"
      :percent="75"
      dashboard
      stroke-color="#B6E471"
  >
      <div class="demo-circle-custom">
          <h1>75%</h1>
      </div>
  </ivue-circular>
</template>
`;

export default code;
