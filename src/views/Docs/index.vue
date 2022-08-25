<template>
    <div class="docs">
        <!-- 导航 -->
        <transition name="docs-transition">
            <div class="docs-navigations" @click="handleHideMenu" v-show="!hideMenu">
                <!-- router -->
                <ul class="router-list" @click.stop>
                    <li class="router-list-li" v-for="item in routers" :key="item.name">
                        <!-- 父级导航 -->
                        <router-link
                            class="router-list-item"
                            :to="item.router"
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
                                            :to="menu.router"
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
                <keep-alive>
                    <component :is="Component" />
                </keep-alive>
            </router-view>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Footer from '@/components/Footer';

export default {
    name: 'docs',
    data() {
        return {
            /**
             * 路由导航
             *
             * @type {Array}
             */
            routers: [
                {
                    name: '安装',
                    router: '/docs/install',
                    child: [],
                },
                {
                    name: '开始使用',
                    router: '/docs/start-use',
                    child: [],
                },
                {
                    name: '色彩',
                    router: '/docs/color',
                    child: [],
                },
                {
                    name: '组件',
                    child: [
                        {
                            name: '基础',
                            menu: [
                                {
                                    name: 'content 内容',
                                    router: '/components/content',
                                },
                                {
                                    name: 'button 按钮',
                                    router: '/components/button',
                                },
                                {
                                    name: 'icon 图标',
                                    router: '/components/icon',
                                },
                            ],
                        },
                        {
                            name: '布局',
                            menu: [
                                {
                                    name: 'Elevation',
                                    router: '/components/elevation',
                                },
                                {
                                    name: 'Layout',
                                    router: '/components/layout',
                                },
                            ],
                        },
                        {
                            name: 'UI',
                            menu: [
                                {
                                    name: 'List 列表',
                                    router: '/components/list',
                                },
                                {
                                    name: 'Carousel 走马灯',
                                    router: '/components/carousel',
                                },
                                {
                                    name: 'Switch 开关',
                                    router: '/components/switch',
                                },
                                {
                                    name: 'BottomNav 底部导航',
                                    router: '/components/bottom-nav',
                                },
                                {
                                    name: 'Breadcrumbs 面包屑',
                                    router: '/components/breadcrumbs',
                                },
                                {
                                    name: 'Select 选择器',
                                    router: '/components/select',
                                },
                                {
                                    name: 'AutoComplete 输入框自动完成功能',
                                    router: '/components/auto-complete',
                                },
                                {
                                    name: 'Input 输入框',
                                    router: '/components/input',
                                },
                                {
                                    name: 'Stepper 步骤条',
                                    router: '/components/stepper',
                                },
                                {
                                    name: 'UpLoad 上传',
                                    router: '/components/upLoad',
                                },
                                {
                                    name: 'Progress 进度条',
                                    router: '/components/progress',
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
                                    name: 'LoadingBar 加载进度条',
                                    router: '/components/loading-bar',
                                },
                                {
                                    name: 'Tabs 标签页',
                                    router: '/components/tabs',
                                },
                                {
                                    name: 'Badge 图钉',
                                    router: '/components/badge',
                                },
                                {
                                    name: 'DatePicker 日期/月份选择器',
                                    router: '/components/date-picker',
                                },
                                {
                                    name: 'Collapse 折叠面板',
                                    router: '/components/collapse',
                                },
                                {
                                    name: 'Cascader 级联选择器',
                                    router: '/components/cascader',
                                },
                                {
                                    name: 'Tooltip 提示',
                                    router: '/components/tooltip',
                                },
                                {
                                    name: 'Chip 芯片',
                                    router: '/components/chip',
                                },
                                {
                                    name: 'Radio 单选框',
                                    router: '/components/radio',
                                },
                                {
                                    name: 'CheckBox 复选框',
                                    router: '/components/checkbox',
                                },
                                {
                                    name: 'Avatar 头像',
                                    router: '/components/avatar',
                                },
                                {
                                    name: 'Page 分页',
                                    router: '/components/page',
                                },
                                {
                                    name: 'Spin 加载中',
                                    router: '/components/spin',
                                },
                                {
                                    name: 'Table 表格',
                                    router: '/components/table',
                                },
                            ],
                        },
                        {
                            name: '其他',
                            menu: [
                                {
                                    name: 'Affix 图钉',
                                    router: '/components/affix',
                                },
                                {
                                    name: 'VirtualCollection 无限滚动(块渲染)',
                                    router: '/components/virtual-collection',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'Directives',
                    child: [
                        {
                            name: '指令',
                            menu: [
                                {
                                    name: 'Ripple 波纹指令',
                                    router: '/directives/ripple',
                                },
                                {
                                    name: 'Touch 手势指令',
                                    router: '/directives/touch',
                                },
                            ],
                        },
                    ],
                },
            ],
        };
    },
    created() {
        const route = this.$route;

        // 错误跳转到主页
        if (route.name === 'error') {
            this.$router.replace({
                name: 'error',
                params: '/home',
            });
        }
    },
    computed: {
        ...mapState({
            hideMenu: 'hideMenu',
        }),
    },
    methods: {
        // 隐藏菜单
        handleHideMenu() {
            this.setHideMenu(false);
        },
        ...mapActions({
            setHideMenu: 'setHideMenu',
        }),
    },
    watch: {
        // 监听路由
        $route() {
            window.scrollTo(0, 0);
        },
    },
    components: {
        Footer,
    },
};
</script>

<style lang="scss">
.docs {
    position: relative;
    flex: 1;
    height: auto;
    zoom: 1;
    display: flex;
    z-index: 50;
    background: #fff;

    // 导航
    &-navigations {
        position: relative;
        width: 16.66666667%;
        float: left;
        flex: 0 0 auto;
        box-shadow: 0 0 0 rgba(0, 0, 0, 0.5);
        border-right: 1px solid #e4e7e9;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 14px;
        background: #fff;

        .router-list {
            display: flex;
            flex-direction: column;
            padding: 24px 26px;
            margin: 0;
            transition: transform 0.4s;

            &-li {
                display: block;
                flex: 1;
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
        text-align: left;
        padding: 20px 20px 100px 20px;
        float: left;
        flex: 0 0 auto;
        display: block;
        width: 83.33333333%;
        background-color: #fff;

        p {
            margin: 5px;
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

    @media screen and (min-width: 800px) {
        &-navigations {
            display: block !important;
        }
    }

    @media screen and (max-width: 800px) {
        &-navigations {
            position: fixed;
            top: 0;
            width: 100%;
            height: 100vh;
            overflow-y: scroll;
            z-index: 100;
            background: rgba(0, 0, 0, 0.8);
            .router-lists {
                margin-right: 30%;
                background: #fff;
            }
        }

        &-content {
            overflow: hidden;
            width: 100%;
        }
    }
}

.docs-transition-enter-active,
.docs-transition-leave-active {
    transition: opacity 0.4s;
}

.docs-transition-enter-from,
.docs-transition-leave-to {
    opacity: 0;

    .router-lists {
        transform: translate3d(-100%, 0, 0);
    }
}
</style>
