<template>
    <div class="icon">
        <h1>Icon 图标</h1>
        <p>图标可以使用图标字体或外部SVG。此外，可以接受一些大小尺寸，如 2x, 3x, 4x and 5x</p>
        <p>
            <span>默认情况下, ivue-icon 使用的是</span>
            <a
                target="_black"
                href="https://fonts.google.com/icons?icon.set=Material+Icons&icon.style=Rounded"
            >material icon (Rounded 类型)</a>
            <span>图标</span>
        </p>
        <p>
            <span>使用</span>
            <code>{{ component }}</code>
            <span>组件，指定图标的</span>
            <code>slot</code>
            <span>插槽，示例代码</span>
        </p>
        <pre-code>{{ code.example }}</pre-code>
        <p>渲染后为</p>
        <pre-code>{{ code.render }}</pre-code>
        <h2>例子</h2>
        <doc-markdown :code="code.default">
            <template #demo>
                <default></default>
            </template>
        </doc-markdown>
        <h2>API</h2>
        <h3>Props</h3>
        <ivue-table :data="propsData" border>
            <ivue-table-column prop="name" label="名称"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300"></ivue-table-column>
            <ivue-table-column prop="type" label="类型"></ivue-table-column>
            <ivue-table-column prop="default" label="默认"></ivue-table-column>
        </ivue-table>
        <h3>Class</h3>
        <ivue-table :data="classData" border>
            <ivue-table-column prop="name" label="名称"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300"></ivue-table-column>
            <ivue-table-column prop="default" label="例子"></ivue-table-column>
        </ivue-table>
        <h3>Event</h3>
        <ivue-table :data="eventData" border>
            <ivue-table-column prop="name" label="事件名"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300"></ivue-table-column>
            <ivue-table-column prop="default" label="返回值"></ivue-table-column>
        </ivue-table>
        <h2>所有图标</h2>
        <h3>Action</h3>
        <ul class="icon-ul">
            <li
                :class="['icon-li', `icon-${item}`]"
                v-for="(item, index) in font.action"
                :key="index"
                :data-clipboard-text="item"
                @click="handleCopy(item)"
            >
                <ivue-icon class="icon">{{ item }}</ivue-icon>
                <span class="text">{{ item }}</span>
            </li>
        </ul>
        <h3>Alert</h3>
        <ul class="icon-ul">
            <li
                :class="['icon-li', `icon-${item}`]"
                v-for="(item, index) in font.alert"
                :data-clipboard-text="item"
                @click="handleCopy(item)"
                :key="index"
            >
                <ivue-icon class="icon">{{ item }}</ivue-icon>
                <span class="text">{{ item }}</span>
            </li>
        </ul>
        <h3>Audio & Video</h3>
        <ul class="icon-ul">
            <li
                :class="['icon-li', `icon-${item}`]"
                v-for="(item, index) in font.av"
                :data-clipboard-text="item"
                @click="handleCopy(item)"
                :key="index"
            >
                <ivue-icon class="icon">{{ item }}</ivue-icon>
                <span class="text">{{ item }}</span>
            </li>
        </ul>
        <h3>Communication</h3>
        <ul class="icon-ul">
            <li
                :class="['icon-li', `icon-${item}`]"
                v-for="(item, index) in font.communication"
                :data-clipboard-text="item"
                @click="handleCopy(item)"
                :key="index"
            >
                <ivue-icon class="icon">{{ item }}</ivue-icon>
                <span class="text">{{ item }}</span>
            </li>
        </ul>
        <h3>Content</h3>
        <ul class="icon-ul">
            <li
                :class="['icon-li', `icon-${item}`]"
                v-for="(item, index) in font.content"
                :data-clipboard-text="item"
                @click="handleCopy(item)"
                :key="index"
            >
                <ivue-icon class="icon">{{ item }}</ivue-icon>
                <span class="text">{{ item }}</span>
            </li>
        </ul>
        <h3>Device</h3>
        <ul class="icon-ul">
            <li
                :class="['icon-li', `icon-${item}`]"
                v-for="(item, index) in font.device"
                :data-clipboard-text="item"
                @click="handleCopy(item)"
                :key="index"
            >
                <ivue-icon class="icon">{{ item }}</ivue-icon>
                <span class="text">{{ item }}</span>
            </li>
        </ul>
        <h3>Editor</h3>
        <ul class="icon-ul">
            <li
                :class="['icon-li', `icon-${item}`]"
                v-for="(item, index) in font.editor"
                :data-clipboard-text="item"
                @click="handleCopy(item)"
                :key="index"
            >
                <ivue-icon class="icon">{{ item }}</ivue-icon>
                <span class="text">{{ item }}</span>
            </li>
        </ul>
        <h3>File</h3>
        <ul class="icon-ul">
            <li
                :class="['icon-li', `icon-${item}`]"
                v-for="(item, index) in font.file"
                :data-clipboard-text="item"
                @click="handleCopy(item)"
                :key="index"
            >
                <ivue-icon class="icon">{{ item }}</ivue-icon>
                <span class="text">{{ item }}</span>
            </li>
        </ul>
        <h3>Hardware</h3>
        <ul class="icon-ul">
            <li
                :class="['icon-li', `icon-${item}`]"
                v-for="(item, index) in font.hardware"
                :data-clipboard-text="item"
                @click="handleCopy(item)"
                :key="index"
            >
                <ivue-icon class="icon">{{ item }}</ivue-icon>
                <span class="text">{{ item }}</span>
            </li>
        </ul>
        <h3>Home</h3>
        <ul class="icon-ul">
            <li
                :class="['icon-li', `icon-${item}`]"
                v-for="(item, index) in font.home"
                :data-clipboard-text="item"
                @click="handleCopy(item)"
                :key="index"
            >
                <ivue-icon class="icon">{{ item }}</ivue-icon>
                <span class="text">{{ item }}</span>
            </li>
        </ul>
        <h3>Image</h3>
        <ul class="icon-ul">
            <li
                :class="['icon-li', `icon-${item}`]"
                v-for="(item, index) in font.image"
                :data-clipboard-text="item"
                @click="handleCopy(item)"
                :key="index"
            >
                <ivue-icon class="icon">{{ item }}</ivue-icon>
                <span class="text">{{ item }}</span>
            </li>
        </ul>
        <h3>Maps</h3>
        <ul class="icon-ul">
            <li
                :class="['icon-li', `icon-${item}`]"
                v-for="(item, index) in font.maps"
                :data-clipboard-text="item"
                @click="handleCopy(item)"
                :key="index"
            >
                <ivue-icon class="icon">{{ item }}</ivue-icon>
                <span class="text">{{ item }}</span>
            </li>
        </ul>
        <h3>Navigation</h3>
        <ul class="icon-ul">
            <li class="icon-li" v-for="(item, index) in font.navigation" :key="index">
                <ivue-icon class="icon">{{ item }}</ivue-icon>
                <span class="text">{{ item }}</span>
            </li>
        </ul>
        <h3>Notification</h3>
        <ul class="icon-ul">
            <li
                :class="['icon-li', `icon-${item}`]"
                v-for="(item, index) in font.notification"
                :data-clipboard-text="item"
                @click="handleCopy(item)"
                :key="index"
            >
                <ivue-icon class="icon">{{ item }}</ivue-icon>
                <span class="text">{{ item }}</span>
            </li>
        </ul>
        <h3>Places</h3>
        <ul class="icon-ul">
            <li
                :class="['icon-li', `icon-${item}`]"
                v-for="(item, index) in font.places"
                :data-clipboard-text="item"
                @click="handleCopy(item)"
                :key="index"
            >
                <ivue-icon class="icon">{{ item }}</ivue-icon>
                <span class="text">{{ item }}</span>
            </li>
        </ul>
        <h3>Search</h3>
        <ul class="icon-ul">
            <li
                :class="['icon-li', `icon-${item}`]"
                v-for="(item, index) in font.search"
                :data-clipboard-text="item"
                @click="handleCopy(item)"
                :key="index"
            >
                <ivue-icon class="icon">{{ item }}</ivue-icon>
                <span class="text">{{ item }}</span>
            </li>
        </ul>
        <h3>Social</h3>
        <ul class="icon-ul">
            <li
                :class="['icon-li', `icon-${item}`]"
                v-for="(item, index) in font.social"
                :data-clipboard-text="item"
                @click="handleCopy(item)"
                :key="index"
            >
                <ivue-icon class="icon">{{ item }}</ivue-icon>
                <span class="text">{{ item }}</span>
            </li>
        </ul>
        <h3>Toggle</h3>
        <ul class="icon-ul">
            <li
                :class="['icon-li', `icon-${item}`]"
                v-for="(item, index) in font.toggle"
                :data-clipboard-text="item"
                @click="handleCopy(item)"
                :key="index"
            >
                <ivue-icon class="icon">{{ item }}</ivue-icon>
                <span class="text">{{ item }}</span>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { getCurrentInstance, ref } from 'vue';

import Clipboard from 'clipboard';

import Code from '@/code/icon';
import Default from '@/components/icon/default.vue';
import Font from './font';

// vm
const { proxy } = getCurrentInstance();

const code = ref(Code);

// component
const component = ref('<ivue-icon></ivue-icon>');

// propsData
const propsData = ref([
    {
        name: 'svg-src',
        illustrate:
            'svg图标的来源。请注意，对于外部domais上的图标，cors可能会影响其功能。',
        type: 'string',
        default: '-',
    },
]);

// classData
const classData = ref([
    {
        name: 'ivue-size-[dimension]',
        illustrate: '增加图标的大小。它接受 2x，3x，4x 或 5x',
        default: 'ivue-size-2x',
    },
]);

// eventData
const eventData = ref([
    {
        name: 'on-svg-loaded',
        illustrate: '在获取SVG图标后立即触发',
        default: '-',
    },
]);

// 字体
const font = ref(Font);

// methods

// 复制
const handleCopy = (item) => {
    const clipboard = new Clipboard(`.icon-${item}`);

    clipboard.on('success', (event) => {
        proxy.$message.success(`copy success ${item}`);

        event.clearSelection();
    });
};
</script>

<style lang="scss" scoped>
.icon {
    &-ul {
        display: flex;
        flex-wrap: wrap;
    }

    &-li {
        padding: 0 10px;
        width: 130px;
        min-height: 130px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: 8px;
        transition: all 0.2s;

        .icon {
            width: 100px;
            font-size: 30px;
        }

        .text {
            margin-bottom: 5px;
            font-size: 14px;
            word-break: break-all;
            text-align: center;
            height: 30px;
            line-height: 1;
            color: #4a505e;
        }

        &:hover {
            background: rgba(60, 64, 67, 0.04);
        }
    }
}
</style>
