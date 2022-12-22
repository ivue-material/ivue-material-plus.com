<template>
    <div class="capture">
        <h1>全局配置</h1>
        <p>
            使用
            <code>ivue-material-plus</code> 时，可以进行全局配置组件的一些属性
        </p>
        <p>组件会优先使用 prop 设置的属性，如果未设置，再使用全局配置</p>
        <div>
            <ul>
                <li>
                    <strong>capture：</strong>
                    <span>
                        所有带下拉的组件或者
                        <code>ivue-tooltip</code>，是否开启
                    </span>
                    <code>capture</code> 模式，默认为
                    <code>true</code>。可选值为
                    <code>true</code> 或
                    <code>false</code>
                    <blockquote>
                        <p>capture 是浏览器的一种默认行为，如果开启，当可下拉的组件（例如 Select）处于展开状态时，点击外部操作不会立即响应，而是先收起下拉菜单，再次点击才会响应操作。</p>
                        <p>如果不需要该特性，可以通过全局配置，将 capture 设置为 false。</p>
                    </blockquote>
                    <a
                        target="_blank"
                        href="https://www.quirksmode.org/js/events_order.html#link4"
                    >更多可查看 JavaScript 事件顺序</a>
                </li>
                <li>
                    <strong>transfer：</strong>
                    <span>
                        所有带浮层的组件，是否将浮层放置在 body 内，默认为不设置，详见各组件默认的
                        <code>transfer</code>
                        值。可选值为
                    </span>
                    <code>true</code> 或
                    <code>false</code>
                </li>
                <li>
                    <strong>image.toolbar：</strong>
                    <span>
                        IvueImage 的
                        <code>toolbar</code> 属性, 图片预览操作栏选项，按数组顺序排序
                    </span>
                </li>
                <li>
                    <strong>modal.maskClosable：</strong>
                    <span>
                        IvueModal 的
                        <code>maskClosable</code> 属性, 是否允许点击遮罩层关闭
                    </span>
                </li>
                <li>
                    <strong>spin.fix</strong>
                    <span>
                        IvueSpin 的
                        <code>fix</code> 属性, 是否固定，需要父级有relative或absolute
                    </span>
                </li>
            </ul>
        </div>
        <p>用法如下</p>
        <pre-code>{{ code.default }}</pre-code>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import Code from '@/code/global';

const code = ref(Code);

</script>


<style lang="scss" scoped>
.capture {
    ul {
        list-style-type: circle;
    }

    li {
        list-style-type: circle;
        margin: 0 0 10px 20px;
        padding: 0 0 0 4px;

        p {
            margin: 0;
        }
    }
}
</style>
