<template>
    <div>
        <h1>Menu 导航菜单</h1>
        <p>为页面和功能提供导航的菜单列表</p>
        <h2>顶部导航</h2>
        <p>水平的顶部导航菜单</p>
        <p>
            通过设置属性
            <code>theme</code>
            为
            <code>light</code>、
            <code>dark</code>、
            <code>primary</code>
            可以选择主题
        </p>
        <p>
            通过
            <code>on-select</code>
            事件可以得到点击菜单的
            <code>name</code>
            ，从而控制页面路由或自定义操作
        </p>
        <doc-markdown :code="code.default">
            <template #demo>
                <default></default>
            </template>
        </doc-markdown>
        <h2>侧栏导航</h2>
        <p>垂直导航菜单，可以内嵌子菜单</p>
        <p>
            设置
            <code>active-name</code>
            可以选中指定的菜单，设置
            <code>open-names</code>
            可以展开指定的子菜单
        </p>
        <p>
            设置属性
            <code>accordion</code>
            可以开启手风琴模式，每次只能展开一个子菜单
        </p>
        <p>
            通过设置属性
            <code>theme</code>
            为
            <code>light</code>
            、
            <code>dark</code>
            可以选择主题，侧栏菜单不支持
            <code>primary</code>
            主题
        </p>
        <doc-markdown :code="code.vertical">
            <template #demo>
                <vertical></vertical>
            </template>
        </doc-markdown>
        <h2>内嵌菜单</h2>
        <p>垂直菜单，子菜单内嵌在菜单区域</p>
        <doc-markdown :code="code.embedded">
            <template #demo>
                <embedded></embedded>
            </template>
        </doc-markdown>
        <h2>分组</h2>
        <p>
            使用
            <code>ivue-menu-group</code>
            组件进行分组
        </p>
        <doc-markdown :code="code.group">
            <template #demo>
                <group></group>
            </template>
        </doc-markdown>
        <h2>方法调用</h2>
        <p>
            通过
            <code>updateOpened</code>
            方法更新展开的子目录
        </p>
        <p>
            通过
            <code>updateActiveName</code>
            手动更新当前选择项
        </p>
        <doc-markdown :code="code.methods">
            <template #demo>
                <methods></methods>
            </template>
        </doc-markdown>
        <h2>API</h2>
        <h3>Menu Props</h3>
        <ivue-table :data="propsMenuData" border>
            <ivue-table-column prop="name" label="名称" width="150"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300">
                <template #default="props">
                    <p v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="type" label="类型" width="150"></ivue-table-column>
            <ivue-table-column prop="value" label="可选值" width="250">
                <template #default="props">
                    <p v-html="props.row.value || '-'"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="default" label="默认" width="100"></ivue-table-column>
        </ivue-table>
        <h3>Menu Events</h3>
        <ivue-table :data="eventsMenuData" border>
            <ivue-table-column prop="name" label="事件名" width="150"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300"></ivue-table-column>
            <ivue-table-column prop="value" label="返回值" width="300">
                <template #default="props">
                    <p v-html="props.row.value"></p>
                </template>
            </ivue-table-column>
        </ivue-table>
        <h3>Menu Methods</h3>
        <ivue-table :data="methodsMenuData" border>
            <ivue-table-column prop="name" label="事件名" width="150"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300"></ivue-table-column>
            <ivue-table-column prop="value" label="参数" width="200">
                <template #default="props">
                    <p v-html="props.row.value"></p>
                </template>
            </ivue-table-column>
        </ivue-table>
        <h3>MenuItem Props</h3>
        <ivue-table :data="propsMenuItemData" border>
            <ivue-table-column prop="name" label="名称" width="150"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300">
                <template #default="props">
                    <p v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="type" label="类型" width="150"></ivue-table-column>
            <ivue-table-column prop="default" label="默认" width="100"></ivue-table-column>
        </ivue-table>
        <h3>Submenu Props</h3>
        <ivue-table :data="propsSubmenuData" border>
            <ivue-table-column prop="name" label="名称" width="150"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300"></ivue-table-column>
            <ivue-table-column prop="type" label="类型" width="150"></ivue-table-column>
            <ivue-table-column prop="default" label="默认" width="100"></ivue-table-column>
        </ivue-table>
        <h3>Submenu Slots</h3>
        <ivue-table :data="slotsSubmenuData" border>
            <ivue-table-column prop="name" label="名称" width="150"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300"></ivue-table-column>
        </ivue-table>
        <h3>MenuGroup Slots</h3>
        <ivue-table :data="slotsMenuGroupData" border>
            <ivue-table-column prop="name" label="名称" width="150"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300">
                <template #default="props">
                    <p v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="type" label="类型" width="150"></ivue-table-column>
            <ivue-table-column prop="default" label="默认" width="100"></ivue-table-column>
        </ivue-table>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import Code from '@/code/menu';

import Default from '@/components/menu/default.vue';
import Vertical from '@/components/menu/vertical.vue';
import Embedded from '@/components/menu/embedded.vue';
import Group from '@/components/menu/group.vue';
import Methods from '@/components/menu/methods.vue';

const code = ref(Code);

// propsMenuData
const propsMenuData = ref([
    {
        name: 'theme',
        illustrate:
            '主题，其中 <code>primary</code> 只适用于 <code>mode="horizontal"</code>',
        type: 'String',
        value: '<code>light</code> | <code>dark</code> | <code>primary</code>',
        default: 'light',
    },
    {
        name: 'mode',
        illustrate: '菜单类型',
        type: 'String',
        value: '<code>horizontal</code> | <code>vertical</code>',
        default: 'vertical',
    },
    {
        name: 'width',
        illustrate: '导航菜单的宽度，只在 <code>mode="vertical"</code> 时有效',
        type: 'String',
        default: '240px',
    },
    {
        name: 'open-names',
        illustrate:
            '展开的 <code>ivue-submenu</code> 的 <code>name</code> 集合',
        type: 'Array',
        default: '[]',
    },
    {
        name: 'active-name',
        illustrate: '激活菜单的 <code>name</code> 值',
        type: 'String | Number',
        default: '-',
    },
    {
        name: 'accordion',
        illustrate: '是否开启手风琴模式，开启后每次至多展开一个子菜单',
        type: 'Boolean',
        default: 'false',
    },
]);

// eventsMenuData
const eventsMenuData = ref([
    {
        name: 'on-select',
        illustrate: '选择菜单 <code>ivue-menu-item</code> 时触发',
        value: 'name',
    },
    {
        name: 'on-open-change',
        illustrate: '当展开/收起子菜单时触发',
        value: '当前展开的 <code>ivue-submenu</code> 的 <code>name</code> 值数组',
    },
]);

// methodsMenuData
const methodsMenuData = ref([
    {
        name: 'updateOpened',
        illustrate: '手动更新展开的子目录，需要激活的name数组',
        value: 'name[]',
    },
    {
        name: 'updateActiveName',
        illustrate: '手动更新当前选择项，需要激活的name',
        value: 'name',
    },
]);

// propsMenuItemData
const propsMenuItemData = ref([
    {
        name: 'name',
        illustrate: '菜单项的唯一标识，必填',
        type: 'String | Number',
        default: '-',
    },
    {
        name: 'disabled',
        illustrate: '禁用',
        type: 'Boolean',
        default: 'false',
    },
    {
        name: 'to',
        illustrate: '跳转的链接，支持 vue-router 对象',
        type: 'Object | String',
        default: '-',
    },
    {
        name: 'target',
        illustrate: '相当于 a 链接的 target 属性',
        type: 'String',
        default: '_self',
    },
    {
        name: 'replace',
        illustrate: '路由跳转时，开启 replace 将不会向 history 添加新记录',
        type: 'Boolean',
        default: 'false',
    },
]);

// propsSubmenuData
const propsSubmenuData = ref([
    {
        name: 'name',
        illustrate: '子菜单的唯一标识，必填',
        type: 'String | Number',
        default: '-',
    },
    {
        name: 'disabled',
        illustrate: '禁用',
        type: 'Boolean',
        default: 'false',
    },
]);

// slotsSubmenuData
const slotsSubmenuData = ref([
    {
        name: 'default',
        illustrate: '子菜单',
    },
    {
        name: 'title',
        illustrate: '子菜单标题',
    },
]);

// slotsMenuGroupData
const slotsMenuGroupData = ref([
    {
        name: 'title',
        illustrate: '分组标题',
        type: 'String',
        default: '-',
    },
]);
</script>

<style lang="scss" scoped>
</style>
