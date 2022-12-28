const code = {};

code.default  = `<template>
    <h4>手势移动</h4>
    <div
        class="touch-demo"
        v-touch="{
            left: (event) => touch('left',event),
            right: (event) => touch('right',event),
            up: (event) => touch('up',event),
            down: (event) => touch('down',event),
            start: (event) => touch('start',event),
            move: (event) => touch('move',event),
            end: (event) => touch('end',event)
        }"
    >
        <div class="touch-demo-item"></div>
        <div class="touch-demo-item"></div>
        <div class="touch-demo-item"></div>
        <div class="touch-demo-item"></div>
        <div class="touch-demo-text">{{ direction }}</div>
    </div>
    <h4>事件对象</h4>
    <div class="touch-demo-event" v-if="JSON.stringify(eventData) !== '{}'">
        <div v-for="(key,item) in eventData" :key="item">
            <h4 v-if="typeof key !=='function'">
                <strong>{{ \`\${item}: \` }}</strong>
                <span>{{ key }}</span>
            </h4>
        </div>
    </div>
    <div v-else>请在上方移动手势获取事件对象</div>
</template>

<script setup>
import { ref } from 'vue';

const direction = ref('请移动手势');
const eventData = ref({});

const touch = (action, event) => {
    direction.value = action;
    eventData.value = event;
};
</script>

<style scoped>
.touch-demo {
    position: relative;
    width: 100%;
    height: 200px;
    line-height: 200px;
    text-align: center;
    border: 1px solid #eee;
    box-sizing: border-box;
}

.touch-demo-item {
    float: left;
    width: 50%;
    height: 50%;
    border: 1px solid transparent;
}

.touch-demo-item:nth-child(1) {
    border-right: 1px dotted #ddd;
    border-bottom: 1px dotted #ddd;
}

.touch-demo-item:nth-child(3) {
    border-right: 1px dotted #ddd;
}

.touch-demo-item:nth-child(4) {
    border-top: 1px dotted #ddd;
}

.touch-demo-text {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    font-size: 20px;
}

.touch-demo-event {
    margin-top: 20px;
    border: 1px solid #ddd;
    padding: 20px;
}
</style>
`;

export default code;
