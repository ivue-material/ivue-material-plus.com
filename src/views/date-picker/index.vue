<template>
    <div>
        <h1>DatePicker 日期/月份选择器</h1>
        <p>选择日期，支持年、月、日期类型，直观的显示</p>
        <h2>基本用法</h2>
        <p>显示当前日期、月份</p>
        <doc-markdown :code="code.default">
            <template #demo>
                <default></default>
            </template>
        </doc-markdown>
        <h2>显示为月份</h2>
        <p>
            通过设置
            <code>type</code> 为
            <code>month</code> ，让选择器初始显示为月份
        </p>
        <doc-markdown :code="code.month">
            <template #demo>
                <month></month>
            </template>
        </doc-markdown>
        <h2>日期方向</h2>
        <p>
            日期选择器有两种方向变化，纵向（默认）和横向，可通过设置
            <code>landscape</code>，使日期选择器横向
        </p>
        <doc-markdown :code="code.landscape">
            <template #demo>
                <landscape></landscape>
            </template>
        </doc-markdown>
        <h2>颜色</h2>
        <p>
            可以使用
            <code>color</code> 和
            <code>header-color</code> 设置其他区域(日期，月份，年份)选择颜色和设置头部标签颜色，如果未提供
            <code>header-color</code> ，则
            <code>header</code> 将使用
            <code>color</code> 值
        </p>
        <doc-markdown :code="code.color">
            <template #demo>
                <color></color>
            </template>
        </doc-markdown>
        <h2>允许选择的日期</h2>
        <p>
            通过设置
            <code>allowed-dates</code> 属性，您可以使用函数指定允许选择的日期
        </p>
        <doc-markdown :code="code.allowedDates">
            <template #demo>
                <allowed-dates></allowed-dates>
            </template>
        </doc-markdown>
        <h2>多选</h2>
        <p>
            日期选择器现在可以通过设置
            <code>multiple</code> 属性选择多个日期。 如果使用多个日期选择器，则期望其
            <code>v-model</code> 为
            <code>Array</code>
        </p>
        <doc-markdown :code="code.multiple">
            <template #demo>
                <multiple></multiple>
            </template>
        </doc-markdown>
        <h2>设置选择器宽度</h2>
        <p>
            通过设置
            <code>full-width</code> 可以使选择器宽度设置为
            <code>100%</code>
        </p>
        <doc-markdown :code="code.fullWidth">
            <template #demo>
                <full-width></full-width>
            </template>
        </doc-markdown>
        <h2>便签</h2>
        <p>
            通过设置
            <code>note</code> 标记需要注意的日期，其期望是
            <code>Array</code> 或
            <code>Function</code> ，设置
            <code>note-color</code> 改变标记需要注意的日期的颜色
        </p>
        <doc-markdown :code="code.note">
            <template #demo>
                <note></note>
            </template>
        </doc-markdown>
        <h2>语言</h2>
        <p>
            日期选择器通过 JavaScript Date 对象支持国际化。 使用
            <code>locale</code> 指定 BCP 47 语言标记
        </p>
        <doc-markdown :code="code.locale">
            <template #demo>
                <locale></locale>
            </template>
        </doc-markdown>
        <h2>图标</h2>
        <p>
            通过使用
            <code>prev-icon</code>、
            <code>next-icon</code>、
            <code>year-icon</code>，你可以覆盖选择器中的默认图标
        </p>
        <doc-markdown :code="code.icon">
            <template #demo>
                <icon></icon>
            </template>
        </doc-markdown>
        <h2>只读</h2>
        <p>
            通过设置属性
            <code>readonly</code>禁用选择新日期
        </p>
        <doc-markdown :code="code.readonly">
            <template #demo>
                <readonly></readonly>
            </template>
        </doc-markdown>
        <h2>日期跟随改变</h2>
        <p>
            通过设置
            <code>reactive</code> 为
            <code>true</code>，点击月份或年份让选择器日期跟随改变
        </p>
        <doc-markdown :code="code.reactive">
            <template #demo>
                <reactive></reactive>
            </template>
        </doc-markdown>
        <h2>可选择最大/最小日期</h2>
        <p>
            通过设置
            <code>max</code> 或
            <code>min</code>，设置最大/最小可选择日期
        </p>
        <doc-markdown :code="code.maxAndMin">
            <template #demo>
                <max-and-min></max-and-min>
            </template>
        </doc-markdown>
        <h2>自定义标题日期格式</h2>
        <p>
            通过设置
            <code>title-date-format</code>，自定义标题的日期显示，其期望是一个函数
        </p>
        <doc-markdown :code="code.titleDateFormat">
            <template #demo>
                <title-date-format></title-date-format>
            </template>
        </doc-markdown>
        <h2>自定义标题年份格式</h2>
        <p>
            通过设置
            <code>title-year-format</code>，自定义标题年份格式显示，其期望是一个函数
        </p>
        <doc-markdown :code="code.titleYearFormat">
            <template #demo>
                <title-year-format></title-year-format>
            </template>
        </doc-markdown>
        <h2>自定义日期格式</h2>
        <p>
            通过设置
            <code>day-format</code> ，自定义日期格式显示，其期望是一个函数
        </p>
        <doc-markdown :code="code.dayFormat">
            <template #demo>
                <day-format></day-format>
            </template>
        </doc-markdown>
        <h2>自定义月格式</h2>
        <p>
            通过设置
            <code>month-format</code> ，自定义日期格式显示，其期望是一个函数
        </p>
        <doc-markdown :code="code.monthFormat">
            <template #demo>
                <month-format></month-format>
            </template>
        </doc-markdown>
        <h2>自定义标头部日/月格式</h2>
        <p>
            通过设置
            <code>header-date-format</code> ，自定义标头部日/月格式显示，其期望是一个函数
        </p>
        <doc-markdown :code="code.headerDateFormat">
            <template #demo>
                <header-date-format></header-date-format>
            </template>
        </doc-markdown>
        <h2>设置日历一周的第一天</h2>
        <p>
            通过设置
            <code>first-day-of-week</code> ，自定义日历一周的第一天
        </p>
        <doc-markdown :code="code.firstDayOfWeek">
            <template #demo>
                <first-day-of-week></first-day-of-week>
            </template>
        </doc-markdown>
        <h2>picker-date</h2>
        <p>
            通过设置
            <code>picker-date</code>，监听选择月/年的变化
        </p>
        <doc-markdown :code="code.pickerDate">
            <template #demo>
                <picker-date></picker-date>
            </template>
        </doc-markdown>

        <h2>API</h2>
        <h3>Props</h3>
        <ivue-table :data="propsData" border>
            <ivue-table-column prop="name" label="名称" width="200"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300">
                <template #default="props">
                    <p v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="type" label="类型" width="200"></ivue-table-column>
            <ivue-table-column prop="default" label="默认" width="100"></ivue-table-column>
        </ivue-table>
        <h3>Events</h3>
        <ivue-table :data="eventsData" border>
            <ivue-table-column prop="name" label="事件名"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300"></ivue-table-column>
            <ivue-table-column prop="default" label="返回值" width="150"></ivue-table-column>
        </ivue-table>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import Code from '@/code/date-picker';
import Default from '@/components/date-picker/default.vue';
import Month from '@/components/date-picker/month.vue';
import Landscape from '@/components/date-picker/landscape.vue';
import Color from '@/components/date-picker/color.vue';
import AllowedDates from '@/components/date-picker/allowed-dates.vue';
import Multiple from '@/components/date-picker/multiple.vue';
import FullWidth from '@/components/date-picker/full-width.vue';
import Note from '@/components/date-picker/note.vue';
import Locale from '@/components/date-picker/locale.vue';
import Icon from '@/components/date-picker/icon.vue';
import Readonly from '@/components/date-picker/readonly.vue';
import Reactive from '@/components/date-picker/reactive.vue';
import MaxAndMin from '@/components/date-picker/max-and-min.vue';
import TitleDateFormat from '@/components/date-picker/title-date-format.vue';
import TitleYearFormat from '@/components/date-picker/title-year-format.vue';
import DayFormat from '@/components/date-picker/day-format.vue';
import HeaderDateFormat from '@/components/date-picker/header-date-format.vue';
import MonthFormat from '@/components/date-picker/month-format.vue';
import FirstDayOfWeek from '@/components/date-picker/first-day-of-week.vue';
import PickerDate from '@/components/date-picker/picker-date.vue';

const code = ref(Code);

// propsData
const propsData = ref([
    {
        name: 'model-value',
        illustrate: '设置需要显示的日期或者月',
        type: 'Array | String',
        default: '-',
    },
    {
        name: 'landscape',
        illustrate: '日历方向，纵向（默认）和 横向',
        type: 'Boolean',
        default: 'false',
    },
    {
        name: 'full-width',
        illustrate: '宽度是否为 100%',
        type: 'Boolean',
        default: 'false',
    },
    {
        name: 'width',
        illustrate: '指定<code>ivue-date-picker</code>的宽度',
        type: 'Number | String',
        default: '290',
    },
    {
        name: 'multiple',
        illustrate:
            '可以选择多个月或者多个日,使用<code>multiple</code>时<code>v-model</code> 或者 <code>value</code> 必须为数组',
        type: 'Boolean',
        default: 'false',
    },
    {
        name: 'type',
        illustrate: '日历显示的类型，<code>date</code> 或 <code>month</code>',
        type: 'String',
        default: 'date',
    },
    {
        name: 'locale',
        illustrate: '指定BCP 47语言标记',
        type: 'String',
        default: 'en-us',
    },
    {
        name: 'min',
        illustrate: '设置最小可选择日期',
        type: 'String',
        default: '-',
    },
    {
        name: 'max',
        illustrate: '设置最大可选择日期',
        type: 'String',
        default: '-',
    },
    {
        name: 'show-current',
        illustrate: '是否显示当前时间日期',
        type: 'Boolean',
        default: 'false',
    },
    {
        name: 'note',
        illustrate: '用于标记需要注意的日期',
        type: 'Array | Function',
        default: '-',
    },
    {
        name: 'note-color',
        illustrate: '改变标记需要注意的日期的颜色',
        type: 'String | Function | Object',
        default: 'warning',
    },
    {
        name: 'first-day-of-week',
        illustrate: '设置日历一周的第一天',
        type: 'String | Number',
        default: '0',
    },
    {
        name: 'year-icon',
        illustrate: '为年份标题添加图标',
        type: 'String',
        default: '-',
    },
    {
        name: 'prev-icon',
        illustrate: '为月份选择按钮(左侧按钮)设置图标',
        type: 'String',
        default: '-',
    },
    {
        name: 'next-icon',
        illustrate: '为月份选择按钮(右侧按钮)设置图标',
        type: 'String',
        default: '-',
    },
    {
        name: 'readonly',
        illustrate: '设置日历是否只读，设置后所有操作将禁用',
        type: 'Boolean',
        default: '-',
    },
    {
        name: 'reactive',
        illustrate: '点击月份或者年份时月份或年份是否跟随改变',
        type: 'Boolean',
        default: '-',
    },
    {
        name: 'picker-date',
        illustrate:
            '监听<code>pickerDate</code>变化以便在更改时执行某些操作，当选择月/年时触发',
        type: 'String',
        default: '-',
    },
    {
        name: 'header-color',
        illustrate: '设置头部标签颜色',
        type: 'String',
        default: '-',
    },
    {
        name: 'color',
        illustrate: '设置(日期，月份，年份)选择颜色',
        type: 'String',
        default: '-',
    },
    {
        name: 'no-title',
        illustrate: '设置是否隐藏日历头部',
        type: 'Boolean',
        default: '-',
    },
    {
        name: 'title-date-format',
        illustrate: '自定义标题日期格式',
        type: 'Function',
        default: '-',
    },
    {
        name: 'title-year-format',
        illustrate: '自定义标题年份格式',
        type: 'Function',
        default: '-',
    },
    {
        name: 'header-date-format',
        illustrate: '自定义标头部日/月格式',
        type: 'Function',
        default: '-',
    },
    {
        name: 'day-format',
        illustrate: '自定义日期格式',
        type: 'Function',
        default: '-',
    },
    {
        name: 'month-format',
        illustrate: '自定义月格式',
        type: 'Function',
        default: '-',
    },
    {
        name: 'allowed-dates',
        illustrate: '指定允许选择的日期',
        type: 'Function',
        default: '-',
    },
]);

// eventsData
const eventsData = ref([
    {
        name: 'on-change',
        illustrate: '日历日期改变时触发',
        default: 'model-value',
    },
]);
</script>

<style lang="scss" scoped>
</style>
