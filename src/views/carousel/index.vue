<template>
    <div>
        <h1>Carousel 走马灯</h1>
        <p>常用于一组图片或卡片轮播，当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现</p>
        <h2>基础用法</h2>
        <p>最基本的用法。</p>
        <doc-markdown :code="code.default">
            <template #demo>
                <default></default>
            </template>
        </doc-markdown>
        <h2>指示器</h2>
        <p>可以将指示器的显示位置设置在容器外部</p>
        <p>
            <code>dots</code>指示器的位置,可选值为
            <code>inside</code>(内部),
            <code>outside</code>(外部),
            <code>none</code>(不显示）
        </p>
        <doc-markdown :code="code.dots">
            <template #demo>
                <dots></dots>
            </template>
        </doc-markdown>
        <h2>切换箭头</h2>
        <p>可以设置切换箭头的显示时机</p>
        <p>
            <code>arrow</code>属性定义了切换箭头的显示时机,可选值为
            <code>hover</code>(悬停),
            <code>always</code>(一直显示),
            <code>never</code>(不显示)
        </p>
        <doc-markdown :code="code.arrow">
            <template #demo>
                <arrow></arrow>
            </template>
        </doc-markdown>
        <h2>高度自适应</h2>
        <p>
            设置高度
            <code>height</code>为
            <code>auto</code>,
            <code>Carousel</code> 将自适应每一个
            <code>Carousel Item</code>的高度
        </p>
        <doc-markdown :code="code.heightAuto">
            <template #demo>
                <height-auto></height-auto>
            </template>
        </doc-markdown>
        <h2>卡片化</h2>
        <p>当页面宽度方向空间空余，但高度方向空间匮乏时，可使用卡片风格</p>
        <p>
            将
            <code>type</code> 属性设置为
            <code>card</code> 即可启用卡片模式
        </p>
        <doc-markdown :code="code.card">
            <template #demo>
                <card></card>
            </template>
        </doc-markdown>
        <h2>垂直布局</h2>
        <p>
            默认情况下，
            <code>direction</code> 为
            <code>horizontal</code>。 通过设置
            <code>direction</code> 为
            <code>vertical</code> 来让走马灯在垂直方向上显示。
        </p>
        <p>
            还可以通过
            <code>vertical-dots-direction</code>设置导航器竖向方向
        </p>
        <p>
            卡片垂直布局通过监听
            <code>Carousel</code>宽度设置
            <code>Carousel Item</code>的高度,
            中间激活的
            <code>Carousel Item</code>的高度等于
            <code>Carousel</code>宽度的一半
        </p>
        <doc-markdown :code="code.vertical">
            <template #demo>
                <vertical></vertical>
            </template>
        </doc-markdown>
        <h2>API</h2>
        <h3>Carousel Props</h3>
        <ivue-table :data="carouselPropsData" border>
            <ivue-table-column prop="name" label="名称"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明"></ivue-table-column>
            <ivue-table-column prop="type" label="类型"></ivue-table-column>
            <ivue-table-column prop="value" label="可选值">
                <template #default="props">
                    <p v-html="props.row.value"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="default" label="默认"></ivue-table-column>
        </ivue-table>
    </div>
</template>

<script>
import Code from '@/code/carousel';
import Default from '@/components/carousel/default.vue';
import Dots from '@/components/carousel/dots.vue';
import Arrow from '@/components/carousel/arrow.vue';
import Card from '@/components/carousel/card.vue';
import HeightAuto from '@/components/carousel/height-auto.vue';
import Vertical from '@/components/carousel/vertical.vue';

export default {
    data() {
        return {
            code: Code,
            carouselPropsData: [
                {
                    name: 'height',
                    illustrate: 'carousel 的高度,设置为 auto 将自适应高度',
                    type: 'String',
                    value: '-',
                    default: '-',
                },
                {
                    name: 'loop',
                    illustrate: '是否循环显示',
                    type: 'Boolean',
                    value: '-',
                    default: 'true',
                },
                {
                    name: 'autoplay',
                    illustrate: '是否自动切换',
                    type: 'Boolean',
                    value: '-',
                    default: 'false',
                },
                {
                    name: 'pause-on-hover',
                    illustrate: '鼠标悬浮时暂停自动切换',
                    type: 'Boolean',
                    value: '-',
                    default: 'false',
                },
                {
                    name: 'interval',
                    illustrate: '自动切换的时间间隔，单位为毫秒',
                    type: 'Number',
                    value: '-',
                    default: '3000',
                },
                {
                    name: 'arrow',
                    illustrate: '切换箭头显示时机',
                    type: 'String',
                    value: '<code>always</code> | <code>hover</code> | <code>never</code>',
                    default: 'always',
                },
                {
                    name: 'trigger',
                    illustrate: '指示器的触发方式',
                    type: 'String',
                    value: '<code>hover</code> | <code>click</code>',
                    default: 'click',
                },
                {
                    name: 'dots',
                    illustrate: '指示器的位置',
                    type: 'String',
                    value: '<code>inside</code> | <code>outside</code> | <code>none</code>',
                    default: 'inside',
                },
                {
                    name: 'radius-dot',
                    illustrate: '是否显示圆形指示器',
                    type: 'Boolean',
                    value: '-',
                    default: 'false',
                },
                {
                    name: 'initial-index',
                    illustrate: '初始状态激活的幻灯片的索引，从 0 开始',
                    type: 'Number',
                    value: '-',
                    default: '0',
                },
                {
                    name: 'direction',
                    illustrate: '展示的方向',
                    type: 'String',
                    value: '<code>horizontal</code> | <code>vertical</code>',
                    default: 'horizontal',
                },
                {
                    name: 'vertical-dots-direction',
                    illustrate: '导航器竖向方向',
                    type: 'String',
                    value: '<code>left</code> | <code>right</code>',
                    default: 'left',
                },
                {
                    name: 'type',
                    illustrate: 'carousel 的类型',
                    type: 'String',
                    value: '<code>card</code>',
                    default: '-',
                },
                {
                    name: 'card-scale',
                    illustrate: '卡片缩放大,当 type 为 card 时有效',
                    type: 'Number',
                    value: '-',
                    default: '0.83',
                },
                {
                    name: 'throttle-time',
                    illustrate:
                        '节流时间 (作用于 prev,next,handleArrowClick 方法 )',
                    type: 'Number',
                    value: '-',
                    default: '300',
                },
                {
                    name: 'leftArrow',
                    illustrate: '左箭头图标',
                    type: 'String',
                    value: '-',
                    default: 'keyboard_arrow_left',
                },
                {
                    name: 'rightArrow',
                    illustrate: '右箭头图标',
                    type: 'String',
                    value: '-',
                    default: 'keyboard_arrow_right',
                },
            ],
        };
    },
    components: {
        Default,
        Dots,
        Arrow,
        Card,
        HeightAuto,
        Vertical,
    },
};
</script>

<style lang="scss" scoped>
</style>
