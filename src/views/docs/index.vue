<template>
    <div :class="['docs', !hideMenu && 'docs-navigations-hide']">
        <!-- 导航 -->
        <transition name="docs-transition">
            <div class="docs-navigations" @click="handleHideMenu" v-show="hideMenu">
                <!-- router -->
                <ul class="router-list" @click.stop>
                    <li class="router-list-li" v-for="item in routers" :key="item.name">
                        <!-- 父级导航 -->
                        <router-link
                            class="router-list-item"
                            :to="{
                            name: item.router
                        }"
                            v-if="item.router"
                        >{{ item.name }}</router-link>
                        <!-- 子导航 -->
                        <div v-else>
                            <!-- 子导航名称 -->
                            <p class="router-list--child-header">{{ item.name }}</p>
                            <!-- child -->
                            <template v-if="item.child.length > 0">
                                <!-- group -->
                                <div
                                    class="router-list--child-group"
                                    v-for="child in item.child"
                                    :key="child.name"
                                >
                                    <!-- child -->
                                    <p class="router-list--child">{{child.name}}</p>
                                    <!-- router-link -->
                                    <ul class="ul">
                                        <router-link
                                            class="router-list--child-item"
                                            v-for="menu in child.menu"
                                            :to="{
                                            name: menu.router
                                        }"
                                            :key="menu.name"
                                        >{{ menu.name }}</router-link>
                                    </ul>
                                </div>
                            </template>
                        </div>
                    </li>
                </ul>
            </div>
        </transition>
        <!-- 内容 -->
        <div class="docs-content">
            <router-view v-slot="{ Component }">
                <!-- <keep-alive> -->
                <component :is="Component" :key="$route.fullPath" />
                <!-- </keep-alive> -->
            </router-view>
        </div>
        <!-- footer -->
        <ivue-footer></ivue-footer>
    </div>
</template>

<script setup>
import { onBeforeMount, onMounted, ref, watch } from 'vue';
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
        router: 'install',
        child: [],
    },
    {
        name: '快速开始',
        router: 'start-use',
        child: [],
    },
    {
        name: '全局配置',
        router: 'global',
        child: [],
    },
    {
        name: '色彩',
        router: 'color',
        child: [],
    },
    {
        name: '基础动画',
        router: 'animation',
        child: [],
    },
    {
        name: '组件',
        child: [
            {
                name: '基础',
                menu: [
                    {
                        name: 'Icon 图标',
                        router: 'icon',
                    },
                    {
                        name: 'Button 按钮',
                        router: 'button',
                    },
                ],
            },
            {
                name: '布局',
                menu: [
                    {
                        name: 'Elevation 海拔',
                        router: 'elevation',
                    },
                    {
                        name: 'Layout 布局',
                        router: 'layout',
                    },
                    {
                        name: 'Card 卡片',
                        router: 'card',
                    },
                ],
            },
            {
                name: '导航',
                menu: [
                    {
                        name: 'Steps 步骤条',
                        router: 'steps',
                    },
                    {
                        name: 'Breadcrumb 面包屑',
                        router: 'breadcrumb',
                    },
                ],
            },
            {
                name: '视图',
                menu: [
                    {
                        name: 'Input 输入框',
                        router: 'input',
                    },
                    {
                        name: 'Carousel 走马灯',
                        router: 'carousel',
                    },
                    {
                        name: 'BottomNav 底部导航',
                        router: 'bottom-nav',
                    },
                    {
                        name: 'Avatar 头像',
                        router: 'avatar',
                    },
                    {
                        name: 'Notice 通知提醒',
                        router: 'notice',
                    },
                ],
            },
            {
                name: '表单',
                menu: [
                    {
                        name: 'Upload 上传',
                        router: 'upload',
                    },
                    {
                        name: 'AutoComplete 自动完成',
                        router: 'auto-complete',
                    },
                    {
                        name: 'Switch 开关',
                        router: 'switch',
                    },
                    {
                        name: 'Select 选择器',
                        router: 'select',
                    },
                ],
            },
            {
                name: '图表',
                menu: [
                    {
                        name: 'Circle 进度环',
                        router: 'circle',
                    },
                ],
            },
            {
                name: '其他',
                menu: [
                    {
                        name: 'Affix 图钉',
                        router: 'affix',
                    },
                    {
                        name: 'Loading 加载',
                        router: 'loading',
                    },
                ],
            },
        ],
    },
]);

// onBeforeMount
onBeforeMount(() => {
    if (window.innerWidth <= 800) {
        store.dispatch('setHideMenu', false);
    }
});

// onMounted
onMounted(() => {
    useEventListener(window, 'resize', () => {
        if (window.innerWidth <= 800) {
            store.dispatch('setHideMenu', false);
        }
    });
});

// methods

// 隐藏菜单
const handleHideMenu = () => {
    if (window.innerWidth <= 800) {
        store.dispatch('setHideMenu', false);
    }
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
        box-shadow: 0 0 0 rgba(0, 0, 0, 0.5);
        border-right: 1px solid #e4e7e9;
        overflow: scroll;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 14px;
        z-index: 100;
        background: #fff;

        &-hide {
            padding-left: 20px;
        }

        .router-list {
            display: flex;
            flex-direction: column;
            padding: 24px 26px;
            min-height: 100%;
            margin: 0;
            transition: transform 0.3s ease-in-out;

            &-li {
                display: block;
                margin-bottom: 8px;
                text-align: left;
                color: #7f8c8d;
                min-height: 40px;
            }

            &-item {
                display: block;
                flex: 1;
                text-align: left;
                font-weight: 500;
                color: #7f8c8d;
                line-height: 40px;
                cursor: pointer;
                transition: color 0.5s;

                &:hover {
                    color: #5b8eff;
                }
            }

            // 子导航名称
            &--child-header {
                font-size: 16px;
                line-height: 40px;
            }

            // 子导航
            &--child-group {
                line-height: normal;

                .ul {
                    margin-left: 15px;
                }
            }

            // child
            &--child {
                padding-left: 8px;
                font-weight: initial;
                font-size: 14px;
                line-height: 40px;

                &-item {
                    display: block;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    list-style: none;
                    font-size: 14px;
                    font-weight: normal;
                    color: inherit;
                    line-height: 40px;

                    &:hover {
                        color: #5b8eff;
                    }
                }
            }
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
            line-height: normal;
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
    }

    @media screen and (max-width: 800px) {
        &-navigations {
            position: fixed;
            top: 0;
            bottom: 0;
            width: 100%;
            overflow: hidden;
            z-index: 100;
            background: rgba(0, 0, 0, 0.8);

            .router-list {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                width: 60%;
                margin-right: 30%;
                overflow-y: scroll;
                background: #fff;
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
        padding: 0;
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

        .router-list {
            position: relative;
            transform: translate3d(-100%, 0, 0);
        }
    }
}
</style>
