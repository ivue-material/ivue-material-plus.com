<template>
    <div :class="['docs', !hideMenu && 'docs-navigations-hide']" :style="docsStyles">
        <!-- 导航 -->
        <transition name="docs-transition">
            <div
                class="docs-navigations"
                @click="handleHideMenu"
                v-show="hideMenu"
                ref="navigations"
            >
                <!-- router -->
                <ivue-menu width="auto" :activeName="route.path" :open-names="openNames()">
                    <template v-for="(item, index) in routers" :key="index">
                        <!-- 父菜单 -->
                        <ivue-menu-item
                            :name="item.router"
                            :to="item.router"
                            v-if="!item.child && item.router"
                        >{{ item.name }}</ivue-menu-item>
                        <!-- 链接跳转 -->
                        <a
                            class="ivue-menu-item"
                            :href="item.link"
                            target="_black"
                            v-if="!item.child && item.link"
                        >{{ item.name }}</a>
                        <!-- 子菜单 -->
                        <ivue-submenu disabled :name="item.name" v-else-if="item.child">
                            <template #title>{{ item.name }}</template>
                            <ivue-menu-item
                                v-for="(child, childIndex) in item.child"
                                :name="child.router"
                                :to="child.router"
                                :key="childIndex"
                            >{{ child.name }}</ivue-menu-item>
                        </ivue-submenu>
                    </template>
                </ivue-menu>
            </div>
        </transition>
        <!-- 内容 -->
        <div class="docs-content">
            <router-view v-slot="{ Component }">
                <!-- <keep-alive> -->
                <transition name="fade" mode="out-in">
                    <component :is="Component" :key="$route.fullPath" />
                </transition>
                <!-- </keep-alive> -->
            </router-view>
        </div>
        <!-- footer -->
        <ivue-footer></ivue-footer>
    </div>
</template>

<script setup>
import { computed, onBeforeMount, onMounted, ref, watch } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { useEventListener } from '@vueuse/core';

import storeHook from '@/hook/store-hook';

import IvueFooter from '@/components/footer';

// vuex
const store = useStore();
const { hideMenu } = storeHook();

// route
const route = useRoute();
// 路由导航
const routers = ref([
    {
        name: '安装',
        router: '/docs/install',
    },
    {
        name: '快速开始',
        router: '/docs/start-use',
    },
    {
        name: '全局配置',
        router: '/docs/global',
    },
    {
        name: 'IVue Ui (Vue 2.0)',
        link: `${location.origin}/ui/`,
    },
    {
        name: '色彩',
        router: '/docs/color',
    },
    {
        name: '基础动画',
        router: '/docs/animation',
    },
    {
        name: 'CSS Var',
        router: '/docs/var',
    },
    {
        name: '基础',
        child: [
            {
                name: 'Icon 图标',
                router: '/components/icon',
            },
            {
                name: 'Button 按钮',
                router: '/components/button',
            },
            {
                name: 'Scrollbar 滚动条',
                router: '/components/scrollbar',
            },
        ],
    },
    {
        name: '布局',
        child: [
            {
                name: 'Elevation 海拔',
                router: '/components/elevation',
            },
            {
                name: 'Layout 布局',
                router: '/components/layout',
            },
            {
                name: 'Card 卡片',
                router: '/components/card',
            },
            {
                name: 'Collapse 折叠面板',
                router: '/components/collapse',
            },
            {
                name: 'Ellipsis 文本自动省略号',
                router: '/components/ellipsis',
            },
            {
                name: 'Skeleton 骨架屏',
                router: '/components/skeleton',
            },
        ],
    },
    {
        name: '导航',
        child: [
            {
                name: 'Steps 步骤条',
                router: '/components/steps',
            },
            {
                name: 'Breadcrumb 面包屑',
                router: '/components/breadcrumb',
            },
            {
                name: 'LoadingBar 加载进度条',
                router: '/components/loading-bar',
            },
            {
                name: 'Tabs 标签页',
                router: '/components/tabs',
            },
            {
                name: 'Badge 徽标数',
                router: '/components/badge',
            },
            {
                name: 'Page 分页',
                router: '/components/page',
            },
            {
                name: 'Menu 导航菜单',
                router: '/components/menu',
            },
        ],
    },
    {
        name: '视图',
        child: [
            {
                name: 'Input 输入框',
                router: '/components/input',
            },
            {
                name: 'InputNumber 数字输入框',
                router: '/components/input-number',
            },
            {
                name: 'Carousel 走马灯',
                router: '/components/carousel',
            },
            {
                name: 'CarouselLoop 走马灯循环',
                router: '/components/carousel-loop',
            },
            {
                name: 'BottomNav 底部导航',
                router: '/components/bottom-nav',
            },
            {
                name: 'Progress 进度条',
                router: '/components/progress',
            },
            {
                name: 'Avatar 头像',
                router: '/components/avatar',
            },
            {
                name: 'Notice 通知提醒',
                router: '/components/notice',
            },
            {
                name: 'Message 全局提示',
                router: '/components/message',
            },
            {
                name: 'Tooltip 文字提示',
                router: '/components/tooltip',
            },
            {
                name: 'Popover 气泡卡片',
                router: '/components/popover',
            },
            {
                name: 'Chip 芯片',
                router: '/components/chip',
            },
            {
                name: 'Image 图片',
                router: '/components/image',
            },
            {
                name: 'NoticeBar 通知栏',
                router: '/components/notice-bar',
            },
            {
                name: 'RelativeTime 相对时间',
                router: '/components/relative-time',
            },
            {
                name: 'Modal 对话框',
                router: '/components/modal',
            },
        ],
    },
    {
        name: '表单',
        child: [
            {
                name: 'Form 表单',
                router: '/components/form',
            },
            {
                name: 'Upload 上传',
                router: '/components/upload',
            },
            {
                name: 'AutoComplete 自动完成',
                router: '/components/auto-complete',
            },
            {
                name: 'Switch 开关',
                router: '/components/switch',
            },
            {
                name: 'Select 选择器',
                router: '/components/select',
            },
            {
                name: 'Cascader 级联选择',
                router: '/components/cascader',
            },
            {
                name: 'DatePicker 日期/月份选择器',
                router: '/components/date-picker',
            },
            {
                name: 'Radio 单选框',
                router: '/components/radio',
            },
            {
                name: 'Checkbox 多选框',
                router: '/components/checkbox',
            },
            {
                name: 'Table 表格',
                router: '/components/table',
            },
        ],
    },
    {
        name: '图表',
        child: [
            {
                name: 'Circle 进度环',
                router: '/components/circle',
            },
        ],
    },
    {
        name: '其他',
        child: [
            {
                name: 'Affix 图钉',
                router: '/components/affix',
            },
            {
                name: 'Loading 加载',
                router: '/components/loading',
            },
            {
                name: 'Spin 加载中',
                router: '/components/spin',
            },
            {
                name: 'CountDown 倒计时',
                router: '/components/count-down',
            },
            {
                name: 'CountUp 数字动画',
                router: '/components/count-up',
            },
            {
                name: 'BackTop 返回顶部',
                router: '/components/back-top',
            },
        ],
    },
    {
        name: '指令',
        child: [
            {
                name: 'Ripple 波纹',
                router: '/components/ripple',
            },
            {
                name: 'Touch 手势',
                router: '/components/touch',
            },
            {
                name: 'LineClamp 文本按行省略指令',
                router: '/components/line-clamp',
            },
            {
                name: 'ClickOutside 点击外部触发',
                router: '/components/click-outside',
            },
        ],
    },
]);

// dom
const navigations = ref();

// computed

// 导航栏宽度
const navigationsWidth = computed(() => {
    return (navigations.value && navigations.value.clientWidth) || 0;
});

// docsStyles
const docsStyles = computed(() => {
    return {
        'padding-left': navigationsWidth.value
            ? `${navigationsWidth.value + 20}px`
            : 'calc(17% + 20px)',
    };
});

// methods

// 隐藏菜单
const handleHideMenu = () => {
    if (window.innerWidth <= 800) {
        store.dispatch('setHideMenu', false);
    }
};

// 菜单打开列表
const openNames = () => {
    let arr = [];

    routers.value.forEach((item) => {
        if (item.child) {
            arr.push(item.name);
        }
    });

    return arr;
};

// 监听路由
watch(
    () => route.params,
    () => {
        window.scrollTo(0, 0);

        if (window.innerWidth <= 800) {
            store.dispatch('setHideMenu', false);
        }
    }
);

// onMounted
onMounted(() => {
    useEventListener(window, 'resize', () => {
        if (window.innerWidth <= 800) {
            store.dispatch('setHideMenu', false);
        }
    });
});

// onBeforeMount
onBeforeMount(() => {
    if (window.innerWidth <= 800) {
        store.dispatch('setHideMenu', false);
    }
});
</script>

<style lang="scss">
.docs {
    position: relative;
    flex: 1;
    height: auto;
    zoom: 1;
    display: flex;
    z-index: 50;
    overflow: hidden;
    background: #f5f5f5;
    padding-left: calc(17% + 20px);
    padding-right: 20px;
    transition: all 0.3s ease-in-out;

    // 导航
    &-navigations {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        margin-top: 60px;
        width: 17%;
        float: left;
        flex: 0 0 auto;
        overflow-y: auto;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 14px;
        z-index: 100;
        background: var(--ivue-white-color);

        &-hide {
            padding-left: 20px !important;
        }

        .ivue-menu {
            min-height: 100%;
            transition: transform 0.3s ease-in-out;
        }

        .ivue-menu-submenu {
            &--title {
                cursor: inherit !important;

                &:hover {
                    color: currentColor;
                }
            }

            &--opened__icon {
                display: none !important;
            }
        }

        .ivue-menu-item {
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }

    // 内容
    &-content {
        position: relative;
        display: block;
        border-radius: 10px;
        margin: 0 0 50px 0;
        text-align: left;
        padding: 20px 20px 100px 20px;
        flex: 1;
        width: 100%;
        background-color: #fff;
        font-size: 14px;

        a {
            margin: 0 10px;
        }

        p {
            margin: 5px;
            line-height: 2;
        }

        table p {
            line-height: 2;
        }

        .table {
            table {
                width: 100%;
                table-layout: auto;
                border-collapse: collapse;
                border-spacing: 0;
                font-size: 13px;
                line-height: 18px;
            }

            thead {
                background-color: #eee;
            }

            th,
            td {
                padding: 8px 16px;
                border: 1px solid #e0e0e0;
                text-align: left;
                vertical-align: middle;
            }
        }

        .demo-circle-custom {
            h1 {
                margin: auto !important;
            }
        }
    }

    @media screen and (max-width: 800px) {
        &-navigations {
            position: fixed;
            top: 0;
            bottom: 0;
            width: 100%;
            max-width: 100%;
            overflow: hidden;
            z-index: 100;
            background: rgba(0, 0, 0, 0.8);

            .ivue-menu-vertical {
                width: 60% !important;
                overflow-y: auto;
            }
        }

        &-content {
            overflow: hidden;
            width: 100%;
            border-radius: 0;
        }
    }
}

@media screen and (max-width: 800px) {
    .docs {
        padding: 0 !important;
    }

    .app-footer {
        margin-left: 0;
    }
}

.docs-transition-enter-active,
.docs-transition-leave-active {
    transition: all 0.3s ease-in-out;
}

.docs-transition-enter-from,
.docs-transition-leave-to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);

    @media screen and (max-width: 800px) {
        transform: none;

        .ivue-menu-vertical {
            transform: translate3d(-100%, 0, 0);
        }
    }
}
</style>
