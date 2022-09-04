<template>
    <div class="app">
        <div class="app-header" :style="{'z-index': hideMenu ? '1' : '100'}">
            <!-- 头部 -->
            <div class="app-header-wrapper">
                <div class="app-header-menu">
                    <ivue-button flat icon @click="handleMenu()">
                        <ivue-icon>menu</ivue-icon>
                    </ivue-button>
                </div>
                <router-link to="/">
                    <div class="app-header-img">
                        <img src="./static/logo.png" />
                        <p class="text">IVue</p>
                    </div>
                </router-link>
                <!-- 生态系统 -->
                <div class="app-header-github">
                    <div class="app-header-ecology">
                        <p>生态系统</p>
                        <ivue-icon>arrow_drop_down</ivue-icon>
                        <!-- 选择 -->
                        <div class="app-header-ecology--select__wrapper">
                            <div class="app-header-ecology--select ivue-elevation-4">
                                <p>
                                    <a
                                        target="_blank"
                                        href="https://www.npmjs.com/package/ivue-material-cli"
                                    >IVue Material Cli</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <a target="_blank" href="https://github.com/qq282126990/ivue-ui">
                        <svg
                            height="32"
                            class="octicon octicon-mark-github"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="32"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <router-view v-slot="{ Component }">
            <transition name="transition-fade">
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: 'app',
    mounted() {
        // 初始化
        this.initial = true;
    },
    computed: {
        ...mapState({
            hideMenu: 'hideMenu',
        }),
    },
    methods: {
        // 显示菜单
        handleMenu() {
            this.setHideMenu(!this.hideMenu);
        },
        ...mapActions({
            setHideMenu: 'setHideMenu',
        }),
    },
    watch: {
        // 监听路由
        $route(route) {
            if (route.path === '/docs/') {
                this.$router.replace({
                    name: 'error',
                    params: '/',
                });
            }

            // 移动端
            if (this.isMobile && !this.initial) {
                this.setHideMenu(!this.hideMenu);
            }

            // 初始化
            this.initial = false;

            // 返回顶部
            window.scrollTo(0, 0);
        },
    },
};
</script>

<style lang="scss">
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;

    min-height: 100vh;
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    background-color: #f5f5f5;
    font-size: 14px;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        display: block;
        margin: 12px 0;
        color: #2c3e50;
    }

    pre {
        margin-top: 10px;
    }

    .hljs {
        display: block;
        padding: 15px;
        border-radius: 5px;
        background-color: #f3f5f6;
    }

    .hljs-variable,
    .hljs-template-variable,
    .hljs-tag,
    .hljs-name,
    .hljs-selector-id,
    .hljs-selector-class,
    .hljs-regexp,
    .hljs-deletion,
    .hljs-selector-tag {
        color: #5b8eff;
    }

    .hljs-string,
    .hljs-symbol,
    .hljs-bullet,
    .hljs-addition {
        color: #2aab51;
    }

    .hljs-comment,
    .hljs-quote {
        color: #abb8c6;
    }

    .hljs-attr,
    .hljs-keyword {
        color: #e77600;
    }

    .hljs-keyword + .hljs-comment,
    .hljs-template-variable {
        color: black;
    }

    code {
        background-color: #f3f5f6;
    }

    p code {
        padding: 2px 4px;
        font-size: 85%;
        background: hsla(0, 0%, 58.8%, 0.1);
        border-radius: 3px;
        margin: 0 2px;
        border: 1px solid hsla(0, 0%, 39.2%, 0.2);
    }

    .router-link-active {
        color: #5b8eff;
    }
}

.app {
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #f5f5f5;
    font-size: 14px;
    flex: 1;

    // 头部
    &-header {
        position: fixed;
        top: 0;
        width: 100%;
        height: 60px;
        background-color: #fff;
        box-shadow: 0 0 5px rgba(57, 70, 78, 0.2);
        opacity: 0.9;

        &-wrapper {
            display: flex;
            align-items: center;
            width: 95%;
            height: 100%;
            margin: 0 auto;
        }

        &-img {
            display: flex;

            img {
                height: 40px;
            }

            .text {
                margin-left: 20px;
                font-size: 26px;
                color: #000;
            }
        }

        &-github {
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: flex-end;
        }

        &-menu {
            display: none;
        }

        /* 生态 */
        &-ecology {
            position: relative;
            padding: 0 20px;
            font-size: 16px;
            font-weight: 500;
            text-align: left;
            color: #000;
            white-space: nowrap;
            cursor: pointer;
            display: flex;

            &:hover {
                .app-header-ecology--select__wrapper {
                    display: block;
                }
            }

            &--select {
                padding: 10px;
                border-radius: 5px;
                background: #fff;
                box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);

                &__wrapper {
                    position: absolute;
                    left: -10%;
                    top: 24px;
                    padding-top: 10px;
                    display: none;
                }

                p {
                    font-size: 14px;
                    line-height: 44px;
                    height: 44px;
                    border-bottom: 1px solid #999;
                    &:last-child {
                        border-bottom: none;
                    }
                }

                a {
                    color: #000;
                }
            }
        }

        @media screen and (max-width: 800px) {
            &-img {
                display: none;
            }

            &-menu {
                display: block;
                .ivue-icon {
                    font-size: 35px !important;
                }
            }
        }
    }

    // 底部
    &-footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        line-height: 30px;
        text-align: center;
        height: 30px;
        background: #000;

        a {
            color: #7d7d7d;
        }
    }
}

.transition-fade-enter-active,
.transition-fade-leave-active {
    transition: opacity 0.3s;
}
.transition-fade-enter-from,
.transition-fade-leave-to {
    opacity: 0;
}
</style>
