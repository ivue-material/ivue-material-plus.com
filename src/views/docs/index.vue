<template>
    <div class="docs">
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

<script>
import { mapState, mapActions } from 'vuex';
import IvueFooter from '@/components/footer';

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
                            name: '视图',
                            menu: [
                                {
                                    name: 'Avatar 头像',
                                    router: 'avatar',
                                },
                            ],
                        },
                        {
                            name: '表单',
                            menu: [
                                {
                                    name: 'AutoComplete 自动完成',
                                    router: 'auto-complete',
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
                            ],
                        },
                    ],
                },
            ],
        };
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

            this.setHideMenu(false);
        },
    },
    components: {
        IvueFooter,
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
            height: 100%;
            margin: 0;
            transition: transform 0.4s;

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
        text-align: left;
        padding: 20px 20px 100px 20px;
        float: left;
        flex: 0 0 auto;
        display: block;
        width: 83.33333333%;
        background-color: #fff;
        font-size: 14px;

        a {
            margin: 0 10px;
        }

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

            .router-list {
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

    .router-list {
        position: relative;
        transform: translate3d(-100%, 0, 0);
    }
}
</style>
