<template>
    <div class="color">
        <h1>Color 色彩</h1>
        <p>
            <span>所有包含在</span>
            <a
                target="_blank"
                href="https://material.io/design/color/#tools-for-picking-colors"
            >Material Design</a>
            <span>规范中的所有色彩都可以通过</span>
            <code>stylus</code>
            <span>得到应用。 这些值可以在您的样式表、组建文件和实际组件中通过</span>
            <code>color</code>
            <span>类中使用</span>
        </p>
        <h2>Class</h2>
        <p>
            <span>规范中的每种色彩都会被转换为背景和文本颜色以便在应用程序中通过一个类进行样式化，比如：</span>
            <code>{{ code.class1 }}</code>
            <span>或者</span>
            <code>{{ code.class2 }}</code>
        </p>
        <p>
            <a
                class="a"
                target="_blank"
                href="https://github.com/qq282126990/ivue-ui/blob/master/src/styles/theme/color.scss"
            >点击这里查看的色彩定义</a>
        </p>
        <doc-markdown :code="code.base" jsfiddle="">
            <template #demo>
                <color></color>
            </template>
        </doc-markdown>
        <h2>引入颜色包</h2>
        <pre-code>{{ code.import }}</pre-code>
        <div class="ivue-layout ivue-gutter ivue-alignment-left list">
            <div
                class="ivue-layout-item ivue-medium-size-33 ivue-small-size-50 ivue-xsmall-size-100"
                v-for="(color,index) in colorMaterial"
                :key="index"
            >
                <div
                    :class="['ivue-layout-item-text',colorClass.name]"
                    v-for="colorClass in color"
                    :key="colorClass.name"
                >
                    <span>{{ colorClass.name }}</span>
                    <span>{{ colorClass.color }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Hljs from 'highlight.js';
import Code from '@/code/color';
import Color from '@/components/color/index.vue';

export default {
    data() {
        return {
            code: Code,
            /**
             * 颜色列表
             *
             * @type {Array}
             */
            colorMaterial: [
                [
                    {
                        name: 'red',
                        color: '#F44336',
                    },
                    {
                        name: 'red-lighten-1',
                        color: '#EF5350',
                    },
                    {
                        name: 'red-lighten-2',
                        color: '#E57373',
                    },
                    {
                        name: 'red-lighten-3',
                        color: '#EF9A9A',
                    },
                    {
                        name: 'red-lighten-4',
                        color: '#FFCDD2',
                    },
                    {
                        name: 'red-lighten-5',
                        color: '#FFEBEE',
                    },

                    {
                        name: 'red-darken-1',
                        color: '#E53935',
                    },
                    {
                        name: 'red-darken-2',
                        color: '#D32F2F',
                    },
                    {
                        name: 'red-darken-3',
                        color: '#C62828',
                    },
                    {
                        name: 'red-darken-4',
                        color: '#B71C1C',
                    },
                    {
                        name: 'red-accent-1',
                        color: '#FF8A80',
                    },
                    {
                        name: 'red-accent-2',
                        color: '#FF5252',
                    },
                    {
                        name: 'red-accent-3',
                        color: '#FF1744',
                    },
                    {
                        name: 'red-accent-4',
                        color: '#D50000',
                    },
                ],
                [
                    {
                        name: 'pink',
                        color: '#E91E63',
                    },
                    {
                        name: 'pink-lighten-1',
                        color: '#EC407A',
                    },
                    {
                        name: 'pink-lighten-2',
                        color: '#F06292',
                    },
                    {
                        name: 'pink-lighten-3',
                        color: '#F48FB1',
                    },
                    {
                        name: 'pink-lighten-4',
                        color: '#F8BBD0',
                    },
                    {
                        name: 'pink-lighten-5',
                        color: '#FCE4EC',
                    },
                    {
                        name: 'pink-darken-1',
                        color: '#D81B60',
                    },
                    {
                        name: 'pink-darken-2',
                        color: '#C2185B',
                    },
                    {
                        name: 'pink-darken-3',
                        color: '#AD1457',
                    },
                    {
                        name: 'pink-darken-4',
                        color: '#880E4F',
                    },
                    {
                        name: 'pink-accent-1',
                        color: '#FF80AB',
                    },
                    {
                        name: 'pink-accent-2',
                        color: '#FF4081',
                    },
                    {
                        name: 'pink-accent-3',
                        color: '#F50057',
                    },
                    {
                        name: 'pink-accent-4',
                        color: '#C51162',
                    },
                ],
                [
                    {
                        name: 'purple',
                        color: '#9C27B0',
                    },
                    {
                        name: 'purple-lighten-1',
                        color: '#AB47BC',
                    },
                    {
                        name: 'purple-lighten-2',
                        color: '#BA68C8',
                    },
                    {
                        name: 'purple-lighten-3',
                        color: '#CE93D8',
                    },
                    {
                        name: 'purple-lighten-4',
                        color: '#E1BEE7',
                    },
                    {
                        name: 'purple-lighten-5',
                        color: '#F3E5F5',
                    },
                    {
                        name: 'purple-darken-1',
                        color: '#8E24AA',
                    },
                    {
                        name: 'purple-darken-2',
                        color: '#7B1FA2',
                    },
                    {
                        name: 'purple-darken-3',
                        color: '#6A1B9A',
                    },
                    {
                        name: 'purple-darken-4',
                        color: '#4A148C',
                    },
                    {
                        name: 'purple-accent-1',
                        color: '#EA80FC',
                    },
                    {
                        name: 'purple-accent-2',
                        color: '#E040FB',
                    },
                    {
                        name: 'purple-accent-3',
                        color: '#D500F9',
                    },
                    {
                        name: 'purple-accent-4',
                        color: '#AA00FF',
                    },
                ],
                [
                    {
                        name: 'deep-purple',
                        color: '#673AB7',
                    },
                    {
                        name: 'deep-purple-lighten-1',
                        color: '#7E57C2',
                    },
                    {
                        name: 'deep-purple-lighten-2',
                        color: '#9575CD',
                    },
                    {
                        name: 'deep-purple-lighten-3',
                        color: '#B39DDB',
                    },
                    {
                        name: 'deep-purple-lighten-4',
                        color: '#D1C4E9',
                    },
                    {
                        name: 'deep-purple-lighten-5',
                        color: '#EDE7F6',
                    },
                    {
                        name: 'deep-purple-darken-1',
                        color: '#5E35B1',
                    },
                    {
                        name: 'deep-purple-darken-2',
                        color: '#512DA8',
                    },
                    {
                        name: 'deep-purple-darken-3',
                        color: '#4527A0',
                    },
                    {
                        name: 'deep-purple-darken-4',
                        color: '#311B92',
                    },
                    {
                        name: 'deep-purple-accent-1',
                        color: '#B388FF',
                    },
                    {
                        name: 'deep-purple-accent-2',
                        color: '#7C4DFF',
                    },
                    {
                        name: 'deep-purple-accent-3',
                        color: '#651FFF',
                    },
                    {
                        name: 'deep-purple-accent-4',
                        color: '#6200EA',
                    },
                ],
                [
                    {
                        name: 'indigo',
                        color: '#3F51B5',
                    },
                    {
                        name: 'indigo-lighten-1',
                        color: '#E8EAF6',
                    },
                    {
                        name: 'indigo-lighten-2',
                        color: '#7986CB',
                    },
                    {
                        name: 'indigo-lighten-3',
                        color: '#9FA8DA',
                    },
                    {
                        name: 'indigo-lighten-4',
                        color: '#C5CAE9',
                    },
                    {
                        name: 'indigo-lighten-5',
                        color: '#E8EAF6',
                    },
                    {
                        name: 'indigo-darken-1',
                        color: '#3949AB',
                    },
                    {
                        name: 'indigo-darken-2',
                        color: '#303F9F',
                    },
                    {
                        name: 'indigo-darken-3',
                        color: '#283593',
                    },
                    {
                        name: 'indigo-darken-4',
                        color: '#1A237E',
                    },
                    {
                        name: 'indigo-accent-1',
                        color: '#8C9EFF',
                    },
                    {
                        name: 'indigo-accent-2',
                        color: '#536DFE',
                    },
                    {
                        name: 'indigo-accent-3',
                        color: '#3D5AFE',
                    },
                    {
                        name: 'indigo-accent-4',
                        color: '#304FFE',
                    },
                ],
                [
                    {
                        name: 'blue',
                        color: '#2196F3',
                    },
                    {
                        name: 'blue-lighten-1',
                        color: '#42A5F5',
                    },
                    {
                        name: 'blue-lighten-2',
                        color: '#64B5F6',
                    },
                    {
                        name: 'blue-lighten-3',
                        color: '#90CAF9',
                    },
                    {
                        name: 'blue-lighten-4',
                        color: '#BBDEFB',
                    },
                    {
                        name: 'blue-lighten-5',
                        color: '#E3F2FD',
                    },
                    {
                        name: 'blue-darken-1',
                        color: '#1E88E5',
                    },
                    {
                        name: 'blue-darken-2',
                        color: '#1976D2',
                    },
                    {
                        name: 'blue-darken-3',
                        color: '#1565C0',
                    },
                    {
                        name: 'blue-darken-4',
                        color: '#0D47A1',
                    },
                    {
                        name: 'blue-accent-1',
                        color: '#82B1FF',
                    },
                    {
                        name: 'blue-accent-2',
                        color: '#448AFF',
                    },
                    {
                        name: 'blue-accent-3',
                        color: '#2979FF',
                    },
                    {
                        name: 'blue-accent-4',
                        color: '#2962FF',
                    },
                ],
                [
                    {
                        name: 'light-blue',
                        color: '#03A9F4',
                    },
                    {
                        name: 'light-blue-lighten-1',
                        color: '#29B6F6',
                    },
                    {
                        name: 'light-blue-lighten-2',
                        color: '#4FC3F7',
                    },
                    {
                        name: 'light-blue-lighten-3',
                        color: '#81D4FA',
                    },
                    {
                        name: 'light-blue-lighten-4',
                        color: '#B3E5FC',
                    },
                    {
                        name: 'light-blue-lighten-5',
                        color: '#E1F5FE',
                    },
                    {
                        name: 'light-blue-darken-1',
                        color: '#039BE5',
                    },
                    {
                        name: 'light-blue-darken-2',
                        color: '#0288D1',
                    },
                    {
                        name: 'light-blue-darken-3',
                        color: '#0277BD',
                    },
                    {
                        name: 'light-blue-darken-4',
                        color: '#01579B',
                    },
                    {
                        name: 'light-blue-accent-1',
                        color: '#80D8FF',
                    },
                    {
                        name: 'light-blue-accent-2',
                        color: '#40C4FF',
                    },
                    {
                        name: 'light-blue-accent-3',
                        color: '#00B0FF',
                    },
                    {
                        name: 'light-blue-accent-4',
                        color: '#0091EA',
                    },
                ],
                [
                    {
                        name: 'cyan',
                        color: '#00BCD4',
                    },
                    {
                        name: 'cyan-lighten-1',
                        color: '#26C6DA',
                    },
                    {
                        name: 'cyan-lighten-2',
                        color: '#4DD0E1',
                    },
                    {
                        name: 'cyan-lighten-3',
                        color: '#80DEEA',
                    },
                    {
                        name: 'cyan-lighten-4',
                        color: '#B2EBF2',
                    },
                    {
                        name: 'cyan-lighten-5',
                        color: '#E0F7FA',
                    },
                    {
                        name: 'cyan-darken-1',
                        color: '#00ACC1',
                    },
                    {
                        name: 'cyan-darken-2',
                        color: '#0097A7',
                    },
                    {
                        name: 'cyan-darken-3',
                        color: '#00838F',
                    },
                    {
                        name: 'cyan-darken-4',
                        color: '#006064',
                    },
                    {
                        name: 'cyan-accent-1',
                        color: '#84FFFF',
                    },
                    {
                        name: 'cyan-accent-2',
                        color: '#18FFFF',
                    },
                    {
                        name: 'cyan-accent-3',
                        color: '#00E5FF',
                    },
                    {
                        name: 'cyan-accent-4',
                        color: '#00B8D4',
                    },
                ],
                [
                    {
                        name: 'teal',
                        color: '#009688',
                    },
                    {
                        name: 'teal-lighten-1',
                        color: '#26A69A',
                    },
                    {
                        name: 'teal-lighten-2',
                        color: '#4DB6AC',
                    },
                    {
                        name: 'teal-lighten-3',
                        color: '#80CBC4',
                    },
                    {
                        name: 'teal-lighten-4',
                        color: '#B2DFDB',
                    },
                    {
                        name: 'teal-lighten-5',
                        color: '#E0F2F1',
                    },
                    {
                        name: 'teal-darken-1',
                        color: '#00897B',
                    },
                    {
                        name: 'teal-darken-2',
                        color: '#00796B',
                    },
                    {
                        name: 'teal-darken-3',
                        color: '#00695C',
                    },
                    {
                        name: 'teal-darken-4',
                        color: '#004D40',
                    },
                    {
                        name: 'teal-accent-1',
                        color: '#A7FFEB',
                    },
                    {
                        name: 'teal-accent-2',
                        color: '#64FFDA',
                    },
                    {
                        name: 'teal-accent-3',
                        color: '#1DE9B6',
                    },
                    {
                        name: 'teal-accent-4',
                        color: '#00BFA5',
                    },
                ],
                [
                    {
                        name: 'green',
                        color: '#4CAF50',
                    },
                    {
                        name: 'green-lighten-1',
                        color: '#E8F5E9',
                    },
                    {
                        name: 'green-lighten-2',
                        color: '#81C784',
                    },
                    {
                        name: 'green-lighten-3',
                        color: '#A5D6A7',
                    },
                    {
                        name: 'green-lighten-4',
                        color: '#C8E6C9',
                    },
                    {
                        name: 'green-lighten-5',
                        color: '#E8F5E9',
                    },
                    {
                        name: 'green-darken-1',
                        color: '#43A047',
                    },
                    {
                        name: 'green-darken-2',
                        color: '#388E3C',
                    },
                    {
                        name: 'green-darken-3',
                        color: '#2E7D32',
                    },
                    {
                        name: 'green-darken-4',
                        color: '#1B5E20',
                    },
                    {
                        name: 'green-accent-1',
                        color: '#B9F6CA',
                    },
                    {
                        name: 'green-accent-2',
                        color: '#69F0AE',
                    },
                    {
                        name: 'green-accent-3',
                        color: '#00E676',
                    },
                    {
                        name: 'green-accent-4',
                        color: '#00C853',
                    },
                ],
                [
                    {
                        name: 'light-green',
                        color: '#8BC34A',
                    },
                    {
                        name: 'light-green-lighten-1',
                        color: '#9CCC65',
                    },
                    {
                        name: 'light-green-lighten-2',
                        color: '#AED581',
                    },
                    {
                        name: 'light-green-lighten-3',
                        color: '#C5E1A5',
                    },
                    {
                        name: 'light-green-lighten-4',
                        color: '#DCEDC8',
                    },
                    {
                        name: 'light-green-lighten-5',
                        color: '#F1F8E9',
                    },
                    {
                        name: 'light-green-darken-1',
                        color: '#7CB342',
                    },
                    {
                        name: 'light-green-darken-2',
                        color: '#689F38',
                    },
                    {
                        name: 'light-green-darken-3',
                        color: '#558B2F',
                    },
                    {
                        name: 'light-green-darken-4',
                        color: '#33691E',
                    },
                    {
                        name: 'light-green-accent-1',
                        color: '#CCFF90',
                    },
                    {
                        name: 'light-green-accent-2',
                        color: '#B2FF59',
                    },
                    {
                        name: 'light-green-accent-3',
                        color: '#76FF03',
                    },
                    {
                        name: 'light-green-accent-4',
                        color: '#64DD17',
                    },
                ],
                [
                    {
                        name: 'lime',
                        color: '#CDDC39',
                    },
                    {
                        name: 'lime-lighten-1',
                        color: '#D4E157',
                    },
                    {
                        name: 'lime-lighten-2',
                        color: '#DCE775',
                    },
                    {
                        name: 'lime-lighten-3',
                        color: '#E6EE9C',
                    },
                    {
                        name: 'lime-lighten-4',
                        color: '#F0F4C3',
                    },
                    {
                        name: 'lime-lighten-5',
                        color: '#F9FBE7',
                    },
                    {
                        name: 'lime-darken-1',
                        color: '#C0CA33',
                    },
                    {
                        name: 'lime-darken-2',
                        color: '#AFB42B',
                    },
                    {
                        name: 'lime-darken-3',
                        color: '#9E9D24',
                    },
                    {
                        name: 'lime-darken-4',
                        color: '#827717',
                    },
                    {
                        name: 'lime-accent-1',
                        color: '#F4FF81',
                    },
                    {
                        name: 'lime-accent-2',
                        color: '#EEFF41',
                    },
                    {
                        name: 'lime-accent-3',
                        color: '#C6FF00',
                    },
                    {
                        name: 'lime-accent-4',
                        color: '#AEEA00',
                    },
                ],
                [
                    {
                        name: 'yellow',
                        color: '#FFEB3B',
                    },
                    {
                        name: 'yellow-lighten-1',
                        color: '#FFEE58',
                    },
                    {
                        name: 'yellow-lighten-2',
                        color: '#FFF176',
                    },
                    {
                        name: 'yellow-lighten-3',
                        color: '#FFF59D',
                    },
                    {
                        name: 'yellow-lighten-4',
                        color: '#FFF9C4',
                    },
                    {
                        name: 'yellow-lighten-5',
                        color: '#FFFDE7',
                    },
                    {
                        name: 'yellow-darken-1',
                        color: '#FDD835',
                    },
                    {
                        name: 'yellow-darken-2',
                        color: '#FBC02D',
                    },
                    {
                        name: 'yellow-darken-3',
                        color: '#F9A825',
                    },
                    {
                        name: 'yellow-darken-4',
                        color: '#F57F17',
                    },
                    {
                        name: 'yellow-accent-1',
                        color: '#FFFF8D',
                    },
                    {
                        name: 'yellow-accent-2',
                        color: '#FFFF00',
                    },
                    {
                        name: 'yellow-accent-3',
                        color: '#FFEA00',
                    },
                    {
                        name: 'yellow-accent-4',
                        color: '#FFD600',
                    },
                ],
                [
                    {
                        name: 'amber',
                        color: '#FFC107',
                    },
                    {
                        name: 'amber-lighten-1',
                        color: '#FFCA28',
                    },
                    {
                        name: 'amber-lighten-2',
                        color: '#FFD54F',
                    },
                    {
                        name: 'amber-lighten-3',
                        color: '#FFE082',
                    },
                    {
                        name: 'amber-lighten-4',
                        color: '#FFECB3',
                    },
                    {
                        name: 'amber-lighten-5',
                        color: '#FFF8E1',
                    },
                    {
                        name: 'amber-darken-1',
                        color: '#FFB300',
                    },
                    {
                        name: 'amber-darken-2',
                        color: '#FFA000',
                    },
                    {
                        name: 'amber-darken-3',
                        color: '#FF8F00',
                    },
                    {
                        name: 'amber-darken-4',
                        color: '#FF6F00',
                    },
                    {
                        name: 'amber-accent-1',
                        color: '#FFE57F',
                    },
                    {
                        name: 'amber-accent-2',
                        color: '#FFD740',
                    },
                    {
                        name: 'amber-accent-3',
                        color: '#FFC400',
                    },
                    {
                        name: 'amber-accent-4',
                        color: '#FFAB00',
                    },
                ],
                [
                    {
                        name: 'orange',
                        color: '#FF9800',
                    },
                    {
                        name: 'orange-lighten-1',
                        color: '#FFA726',
                    },
                    {
                        name: 'orange-lighten-2',
                        color: '#FFB74D',
                    },
                    {
                        name: 'orange-lighten-3',
                        color: '#FFCC80',
                    },
                    {
                        name: 'orange-lighten-4',
                        color: '#FFE0B2',
                    },
                    {
                        name: 'orange-lighten-5',
                        color: '#FFF3E0',
                    },
                    {
                        name: 'orange-darken-1',
                        color: '#FB8C00',
                    },
                    {
                        name: 'orange-darken-2',
                        color: '#F57C00',
                    },
                    {
                        name: 'orange-darken-3',
                        color: '#EF6C00',
                    },
                    {
                        name: 'orange-darken-4',
                        color: '#E65100',
                    },
                    {
                        name: 'orange-accent-1',
                        color: '#FFD180',
                    },
                    {
                        name: 'orange-accent-2',
                        color: '#FFAB40',
                    },
                    {
                        name: 'orange-accent-3',
                        color: '#FF9100',
                    },
                    {
                        name: 'orange-accent-4',
                        color: '#FF6D00',
                    },
                ],
                [
                    {
                        name: 'deep-orange',
                        color: '#FF5722',
                    },
                    {
                        name: 'deep-orange-lighten-1',
                        color: '#FF7043',
                    },
                    {
                        name: 'deep-orange-lighten-2',
                        color: '#FF8A65',
                    },
                    {
                        name: 'deep-orange-lighten-3',
                        color: '#FFAB91',
                    },
                    {
                        name: 'deep-orange-lighten-4',
                        color: '#FFCCBC',
                    },
                    {
                        name: 'deep-orange-lighten-5',
                        color: '#FBE9E7',
                    },
                    {
                        name: 'deep-orange-darken-1',
                        color: '#F4511E',
                    },
                    {
                        name: 'deep-orange-darken-2',
                        color: '#E64A19',
                    },
                    {
                        name: 'deep-orange-darken-3',
                        color: '#D84315',
                    },
                    {
                        name: 'deep-orange-darken-4',
                        color: '#BF360C',
                    },
                    {
                        name: 'deep-orange-accent-1',
                        color: '#FF9E80',
                    },
                    {
                        name: 'deep-orange-accent-2',
                        color: '#FF6E40',
                    },
                    {
                        name: 'deep-orange-accent-3',
                        color: '#FF3D00',
                    },
                    {
                        name: 'deep-orange-accent-4',
                        color: '#DD2C00',
                    },
                ],
                [
                    {
                        name: 'brown',
                        color: '#795548',
                    },
                    {
                        name: 'brown-lighten-1',
                        color: '#8D6E63',
                    },
                    {
                        name: 'brown-lighten-2',
                        color: '#A1887F',
                    },
                    {
                        name: 'brown-lighten-3',
                        color: '#BCAAA4',
                    },
                    {
                        name: 'brown-lighten-4',
                        color: '#D7CCC8',
                    },
                    {
                        name: 'brown-lighten-5',
                        color: '#EFEBE9',
                    },
                    {
                        name: 'brown-darken-1',
                        color: '#6D4C41',
                    },
                    {
                        name: 'brown-darken-2',
                        color: '#5D4037',
                    },
                    {
                        name: 'brown-darken-3',
                        color: '#4E342E',
                    },
                    {
                        name: 'brown-darken-4',
                        color: '#3E2723',
                    },
                ],
                [
                    {
                        name: 'blue-grey',
                        color: '#607D8B',
                    },
                    {
                        name: 'blue-grey-lighten-1',
                        color: '#78909C',
                    },
                    {
                        name: 'blue-grey-lighten-2',
                        color: '#90A4AE',
                    },
                    {
                        name: 'blue-grey-lighten-3',
                        color: '#B0BEC5',
                    },
                    {
                        name: 'blue-grey-lighten-4',
                        color: '#CFD8DC',
                    },
                    {
                        name: 'blue-grey-lighten-5',
                        color: '#ECEFF1',
                    },
                    {
                        name: 'blue-grey-darken-1',
                        color: '#546E7A',
                    },
                    {
                        name: 'blue-grey-darken-2',
                        color: '#455A64',
                    },
                    {
                        name: 'blue-grey-darken-3',
                        color: '#37474F',
                    },
                    {
                        name: 'blue-grey-darken-4',
                        color: '#263238',
                    },
                ],
                [
                    {
                        name: 'grey',
                        color: '#9E9E9E',
                    },
                    {
                        name: 'grey-lighten-1',
                        color: '#BDBDBD',
                    },
                    {
                        name: 'grey-lighten-2',
                        color: '#E0E0E0',
                    },
                    {
                        name: 'grey-lighten-3',
                        color: '#EEEEEE',
                    },
                    {
                        name: 'grey-lighten-4',
                        color: '#F5F5F5',
                    },
                    {
                        name: 'grey-lighten-5',
                        color: '#FAFAFA',
                    },
                    {
                        name: 'grey-darken-1',
                        color: '#757575',
                    },
                    {
                        name: 'grey-darken-2',
                        color: '#616161',
                    },
                    {
                        name: 'grey-darken-3',
                        color: '#424242',
                    },
                    {
                        name: 'grey-darken-4',
                        color: '#212121',
                    },
                ],
                [
                    {
                        name: 'shades-black',
                        color: '#000000',
                    },
                    {
                        name: 'shades-white',
                        color: '#FFFFFF',
                    },
                    {
                        name: 'shades-transparent',
                        color: 'transparent',
                    },
                    {
                        name: 'primary',
                        color: '#4177F6',
                    },
                    {
                        name: 'warning',
                        color: '#F90',
                    },
                ],
            ],
        };
    },
    mounted() {
        Hljs.highlightAll();
    },
    components: {
        Color,
    },
};
</script>

<style lang="scss" scoped>
.color {
    .a {
        margin: 0;
    }

    .ivue-layout-item {
        height: 100%;

        &-text {
            box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.08);
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            min-width: 240px;
            height: 50px;
            padding: 10px 15px;
            font-size: 14px;
            color: #000000;

            &:first-child {
                color: #fff;
            }

            &:last-child {
                color: #fff;
            }
        }
    }

    .list {
        margin-top: 20px;
    }
}
</style>
