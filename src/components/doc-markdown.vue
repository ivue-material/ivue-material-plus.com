<template>
    <div class="doc-markdown ivue-elevation-2" ref="docMarkdown">
        <!-- 头部 -->
        <div class="doc-markdown-header">
            <div class="doc-markdown-header--content">
                <!-- codesandbox -->
                <ivue-button icon flat @click="clickJsfiddle" v-show="showPlayground">
                    <svg width="25px" height="25px" viewBox="0 0 46 33">
                        <g stroke-width="3" fill="none" fill-rule="evenodd" stroke="#000">
                            <path
                                d="M23.4888889,20.543316 C21.4404656,18.4187374 19.0750303,15.6666667 16.4832014,15.6666667 C13.8721947,15.6666667 11.7555556,17.6366138 11.7555556,20.0666667 C11.7555556,22.4967196 13.8721947,24.4666667 16.4832014,24.4666667 C18.8347252,24.4666667 19.9845474,23.0125628 20.6429148,22.312473"
                                id="Oval-1"
                                stroke-linecap="round"
                            />
                            <path
                                d="M22.5111111,19.5900174 C24.5595344,21.7145959 26.9249697,24.4666667 29.5167986,24.4666667 C32.1278053,24.4666667 34.2444444,22.4967196 34.2444444,20.0666667 C34.2444444,17.6366138 32.1278053,15.6666667 29.5167986,15.6666667 C27.1652748,15.6666667 26.0154526,17.1207706 25.3570852,17.8208603"
                                id="Oval-1-Copy"
                                stroke-linecap="round"
                            />
                            <path
                                d="M45,22.7331459 C45,19.1499462 42.7950446,16.079593 39.6628004,14.7835315 C39.6774469,14.5246474 39.7003932,14.2674038 39.7003932,14.0035978 C39.7003932,6.82243304 33.8412885,1 26.611593,1 C21.3985635,1 16.9102123,4.03409627 14.8051788,8.41527616 C13.7828502,7.62878013 12.503719,7.15547161 11.1134367,7.15547161 C7.77825654,7.15547161 5.07450503,9.84159999 5.07450503,13.1544315 C5.07450503,13.7760488 5.16938207,14.3779791 5.3477444,14.9418479 C2.74863428,16.4787471 1,19.2867709 1,22.5105187 C1,27.3287502 4.89630545,31.2367856 9.72803666,31.31094 L36.3341301,31.3109406 C41.1201312,31.3406346 45,27.4870665 45,22.7331459 L45,22.7331459 Z"
                                stroke-linejoin="round"
                            />
                        </g>
                    </svg>
                </ivue-button>
                <!-- github -->
                <ivue-button icon flat @click="clickGithub" v-show="github">
                    <svg
                        width="20px"
                        viewBox="0 0 16 16"
                        version="1.1"
                        aria-hidden="true"
                        class="octicon octicon-mark-github"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                        />
                    </svg>
                </ivue-button>
                <!-- 复制代码 -->
                <ivue-button
                    class="copy-code"
                    icon
                    flat
                    :data-clipboard-text="code"
                    @click="handleCopy"
                >
                    <ivue-icon class="icon">content_copy</ivue-icon>
                </ivue-button>
                <!-- 查看代码 -->
                <ivue-button icon flat @click="handleShowCode">
                    <ivue-icon class="icon">code</ivue-icon>
                </ivue-button>
            </div>
        </div>
        <!-- code -->
        <transition name="code">
            <div class="doc-markdown-code" v-show="showCode">
                <div class="doc-markdown-code--content">
                    <pre><code class="hljs xml" ref="code">{{ code }}</code></pre>
                </div>
            </div>
        </transition>
        <!-- 内容 -->
        <div class="doc-markdown-content">
            <slot name="demo"></slot>
        </div>
    </div>
</template>

<script>
import Clipboard from 'clipboard';
import Hljs from 'highlight.js';

import { utoa } from '@/utils/encode';

export default {
    name: 'doc-markdown',
    props: {
        /**
         * 显示游乐场
         *
         * @type {Boolean}
         */
        showPlayground: {
            type: Boolean,
            default: true,
        },
        /**
         * github地址
         *
         * @type {String}
         */
        github: {
            type: String,
        },
        /**
         * code
         *
         * @type {String}
         */
        code: {
            type: String,
        },
    },
    data() {
        return {
            /**
             * 查看代码
             *
             * @type {Boolean}
             */
            showCode: false,
            /**
             * 游乐场
             *
             * @type {Object}
             */
            playground: {},
        };
    },
    mounted() {
        Hljs.highlightBlock(this.$refs.code);

        if (this.code) {
            this.playground = {
                'App.vue': this.code,
            };

            this.playground = utoa(JSON.stringify(this.playground));
        }
    },
    methods: {
        // 显示代码
        handleShowCode() {
            this.showCode = !this.showCode;
        },
        // 跳转测试网站
        clickJsfiddle() {
            let url = `https://lovevuerk.com/playground/#${this.playground}`;

            window.open(url);
        },
        // 跳转github
        clickGithub() {
            window.open(this.github);
        },
        // 复制
        handleCopy() {
            const clipboard = new Clipboard('.copy-code');

            clipboard.on('success', (event) => {
                this.$message.success('copy success');

                event.clearSelection();

                clipboard.destroy();
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.doc-markdown {
    margin: 10px 0;
    width: 100%;
    height: 100%;

    &-header {
        border-bottom: 3px solid #eee;
        color: rgba(0, 0, 0, 0.87);

        &--content {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding: 0 16px;
            height: 45px;

            .icon {
                font-size: 24px;
            }
        }
    }

    &-code {
        height: 100%;
        max-height: calc(100vh - 275px);
        overflow-y: auto;
        border-bottom: 3px solid #eee;

        &--content {
            align-items: center;
            box-shadow: none;
            display: flex;
            border-radius: 2px;
            position: relative;
            overflow-x: auto;
            overflow-y: hidden;
            background-color: #f3f5f6;
            .hljs {
                padding: 0 15px 15px 15px;
            }
        }
    }

    &-content {
        padding: 16px;
        width: 100%;

        p {
            line-height: initial !important;
        }
    }

    .code-enter-active,
    .code-leave-active {
        transition: all 0.5s;
    }
    .code-enter-from,
    .code-leave-to {
        max-height: 0;
    }
}
</style>

<style lang="scss">
.doc-markdown-header {
    .ivue-button--icon {
        margin: 6px !important;
        width: 35px;
        min-width: 35px;
        height: 35px;
    }

    .ivue-button-content {
        display: flex;
        align-items: center;
    }
}
</style>
