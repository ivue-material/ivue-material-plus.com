<template>
    <div>
        <h1>走马灯循环</h1>
        <p>显示一个无限循环的轮播</p>
        <h2>基本用法</h2>
        <p>
            组件将自动监听
            <code>slot</code>
            的内容是否超出
            <code>carousel-loop</code>
            的宽度，自动执行滚动，
            <code>autoplay</code>
            默认开启，设置为
            <code>false</code>
            将不自动执行滚动
        </p>
        <doc-markdown :code="code.default">
            <template #demo>
                <default></default>
            </template>
        </doc-markdown>
        <h2>数据变化自动监听滚动</h2>
        <p>
            如果设置了
            <code>data-list</code>
            将通过监听
            <code>data-list</code>
            属性设置是否可以自动滚动，如果没有设置
            <code>data-list</code>
            将默认监听
            <code>slot</code>
            插槽的变化设置是否可以自动滚动，
            而且每次数据变化将重新开始滚动
        </p>
        <doc-markdown :code="code.watch">
            <template #demo>
                <watch></watch>
            </template>
        </doc-markdown>
        <h2>箭头</h2>
        <p>
            通过设置
            <code>arrow</code>
            属性显示切换箭头显示时机，
            <code>hover(鼠标悬停)</code> 、
            <code>always(一直显示)</code> 、
            <code>outside(外部显示)</code>，
            设置
            <code>left-arrow</code> 或
            <code>slot = leftArrow</code>
            可自定义左按钮图标，设置
            <code>right-arrow</code> 或
            <code>slot = rightArrow</code>
            可自定义右按钮图标
        </p>
        <doc-markdown :code="code.arrow">
            <template #demo>
                <arrow></arrow>
            </template>
        </doc-markdown>
        <h2>鼠标进入取消暂停自动切换</h2>
        <p>
            通过设置
            <code>pause-on-hover</code>
            属性为
            <code>false</code>
            鼠标进入组件或者切换按钮时取消暂停自动切换
        </p>
        <doc-markdown :code="code.pauseOnHover">
            <template #demo>
                <pause-on-hover></pause-on-hover>
            </template>
        </doc-markdown>
        <h2>方向</h2>
        <p>
            设置
            <code>direction</code>
            属性可设置滚动的方向
        </p>
        <doc-markdown :code="code.direction">
            <template #demo>
                <direction></direction>
            </template>
        </doc-markdown>
        <h2>箭头点击切换</h2>
        <p>
            设置
            <code>sliding-speed</code>
            可定义点击时滑动速率（毫秒），设置
            <code>offset</code>
            可设置每一次点击滚动偏移的距离，偏移中会停止自动滚动动画，滚动完成后重新执行
        </p>
        <p>
            点击后偏移滚动停止时间为(滑动速率 * 每一次滚动偏移距离)
            <code>(sliding-speed * offset)</code>
        </p>
        <doc-markdown :code="code.click">
            <template #demo>
                <click></click>
            </template>
        </doc-markdown>
        <h2>滚动次数</h2>
        <p>
            设置
            <code>scroll-quantity</code>
            属性可设置自动滚动次数，达到次数后自动停止
        </p>
        <doc-markdown :code="code.scrollQuantity">
            <template #demo>
                <scroll-quantity></scroll-quantity>
            </template>
        </doc-markdown>
        <h2>滚动次数</h2>
        <p>
            设置
            <code>scroll-quantity</code>
            属性可设置自动滚动次数，达到次数后自动停止
        </p>
        <doc-markdown :code="code.scrollQuantity">
            <template #demo>
                <scroll-quantity></scroll-quantity>
            </template>
        </doc-markdown>
        <h2>自动切换的时间间隔</h2>
        <p>
            设置
            <code>interval</code>
            属性可自定义自动切换的时间间隔，单位为毫秒
        </p>
        <doc-markdown :code="code.interval">
            <template #demo>
                <interval></interval>
            </template>
        </doc-markdown>
        <h2>API</h2>
        <h3>Props</h3>
        <ivue-table :data="propsData" border>
            <ivue-table-column prop="name" label="名称" width="160"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300">
                <template #default="props">
                    <p v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="type" label="类型" width="100"></ivue-table-column>
            <ivue-table-column prop="value" label="可选值" width="200">
                <template #default="props">
                    <p v-html="props.row.value || '-'"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="default" label="默认" width="160"></ivue-table-column>
        </ivue-table>
        <h3>Events</h3>
        <ivue-table :data="eventsData" border>
            <ivue-table-column prop="name" label="事件名"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300">
                <template #default="props">
                    <p v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="default" label="返回值" width="100"></ivue-table-column>
        </ivue-table>
        <h3>Slots</h3>
        <ivue-table :data="slotsData" border>
            <ivue-table-column prop="name" label="事件名" width="100"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300">
                <template #default="props">
                    <p v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
        </ivue-table>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import Code from '@/code/carousel-loop';

import Default from '@/components/carousel-loop/default.vue';
import Watch from '@/components/carousel-loop/watch.vue';
import Arrow from '@/components/carousel-loop/arrow.vue';
import PauseOnHover from '@/components/carousel-loop/pause-on-hover.vue';
import Direction from '@/components/carousel-loop/direction.vue';
import Click from '@/components/carousel-loop/click.vue';
import ScrollQuantity from '@/components/carousel-loop/scroll-quantity.vue';
import Interval from '@/components/carousel-loop/interval.vue';

const code = ref(Code);

// propsData
const propsData = ref([
    {
        name: 'left-arrow',
        illustrate: '左箭头图标',
        type: 'String',
        default: 'keyboard_arrow_left',
    },
    {
        name: 'right-arrow',
        illustrate: '左箭头图标',
        type: 'String',
        default: 'keyboard_arrow_left',
    },
    {
        name: 'autoplay',
        illustrate: '是否自动滚动',
        type: 'Boolean',
        default: 'true',
    },
    {
        name: 'interval',
        illustrate: '自动滚动的时间间隔，单位为毫秒',
        type: 'Number',
        default: '16.7',
    },
    {
        name: 'direction',
        illustrate: '滚动的方向',
        type: 'String',
        value: '<code>left</code> | <code>right</code>',
        default: 'right',
    },
    {
        name: 'pause-on-hover',
        illustrate: '鼠标悬浮时暂停自动滚动',
        type: 'Boolean',
        default: 'true',
    },
    {
        name: 'offset',
        illustrate: '点击箭头按钮每一次滚动偏移距，单位px',
        type: 'Number',
        default: '200',
    },
    {
        name: 'sliding-speed',
        illustrate: '点击箭头按钮触发滚动时滑动速率（毫秒）',
        type: 'Number',
        default: '5',
    },
    {
        name: 'sliding-end-next',
        illustrate: '点击箭头按钮是否等待上一个动画完成后才可以执行下一个动画',
        type: 'Boolean',
        default: 'true',
    },
    {
        name: 'scroll-quantity',
        illustrate: '可以滚动的次数',
        type: 'Number',
        default: '-',
    },
    {
        name: 'arrow',
        illustrate: '箭头显示时机',
        type: 'String',
        value: '<code>hover</code> | <code>always</code> | <code>never</code> | <code>outside</code>',
        default: 'always',
    },
    {
        name: 'data-list',
        illustrate:
            '外部数据传入用于监听数据变化更新滚动动画，不设置将监听 <code>slot</code> 的变化进行更新',
        type: 'Array',
        default: '-',
    },
]);

// eventsData
const eventsData = ref([
    {
        name: 'on-scroll-end',
        illustrate: '滚动结束时触发，需设置 <code>scroll-quantity</code>',
        default: '-',
    },
]);

// slotsData
const slotsData = ref([
    {
        name: 'default',
        illustrate: '自定义内容',
    },
    {
        name: 'leftArrow',
        illustrate: '自定义左箭头内容',
    },
    {
        name: 'rightArrow',
        illustrate: '自定义右箭头内容',
    },
]);
</script>

<style lang="scss" scoped>
</style>
