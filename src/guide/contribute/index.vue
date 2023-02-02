<template>
    <div class="contribute">
        <h1>开放问题</h1>
        <p>在打开问题之前，请搜索关键字查看您遇到的问题是否已报告🙏</p>
        <h2>预先请求环境:</h2>
        <ul class="ul">
            <li class="li">Node.js >= 16</li>
            <li class="li">Git > v2.20</li>
        </ul>
        <h2>克隆存储库</h2>
        <ul class="ul">
            <li class="li">单击此页面右上角的叉子按钮</li>
            <li class="li">将项目下载到您的机器上</li>
            <li class="li">运行下面的命令来引导这个项目</li>
        </ul>
        <pre-code>{{ code.default }}</pre-code>
        <h2>开始开发</h2>
        <pre-code>pnpm serve</pre-code>
        <h2>格式化代码以通过eslint</h2>
        <pre-code>pnpm format</pre-code>
        <h2>拉取请求</h2>
        <p>完成编码部分后，请注意</p>
        <ul class="ul">
            <li class="li">更新测试以涵盖所有情况</li>
            <li class="li">
                如果你对
                <code>API</code> 进行更改，请更新相应的文档
            </li>
            <li class="li">编写全面的提交消息</li>
            <li class="li">将本地更改推送到远程，然后将请求拉取到上游</li>
            <li class="li">在描述部分，您可以添加有关更改的更多信息，以帮助审阅者更好地理解此处的上下文</li>
        </ul>
        <h2>提交模板</h2>
        <p>
            我们准备了一个
            <code>commit message</code> 模板供参考，也可以按照
            <code>CLI</code> 工具的说明直观地生成
            <code>commit message</code>
        </p>
        <pre-code>pnpm cz</pre-code>
        <p>你也可以手动编写提交消息，但请确保您的提交消息遵循规则</p>
        <p>
            我们有一个提交模板
            <span class="link" @click="handleLink">提交模版</span>
        </p>
        <h2>提供问题代码链接</h2>
        <p>
            通过使用
            <a
                class="a"
                href="https://lovevuerk.com/playground/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IHJlZiwgdmVyc2lvbiBhcyB2dWVWZXJzaW9uIH0gZnJvbSAndnVlJztcbi8vIGltcG9ydCB7IHZlcnNpb24gYXMgRXBWZXJzaW9uIH0gZnJvbSAnZWxlbWVudC1wbHVzJztcbi8vIGltcG9ydCB7IEVsZW1lbnRQbHVzIH0gZnJvbSAnQGVsZW1lbnQtcGx1cy9pY29ucy12dWUnO1xuXG5jb25zdCBtc2cgPSByZWYoJ0hlbGxvIFdvcmxkIScpO1xuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgICA8aDE+e3sgbXNnIH19PC9oMT5cbiAgICA8aXZ1ZS1pbnB1dCB2LW1vZGVsPVwibXNnXCI+PC9pdnVlLWlucHV0PlxuICAgIDxwPlxuICAgICAgICA8IS0tIEVsZW1lbnQgUGx1cyB7eyBFcFZlcnNpb24gfX0gKyBWdWUge3sgdnVlVmVyc2lvbiB9fSAtLT5cbiAgICA8L3A+XG48L3RlbXBsYXRlPlxuIiwiaW1wb3J0X21hcC5qc29uIjoie1xuICBcImltcG9ydHNcIjoge31cbn0iLCJfbyI6e319"
                target="_blank"
            >Playground Preview</a>
            创建有问题的代码例子
        </p>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

import code from './code';

const router = useRouter();

const handleLink = () => {
    router.push({
        name: 'commit-message',
    });
};
</script>

<style lang="scss" scoped>
.contribute {
    .ul {
        padding-left: 25px;
    }

    .li {
        margin-bottom: 5px;
        line-height: 1.5;
        list-style: circle;
    }

    .link {
        cursor: pointer;
        color: var(--ivue-primary-color);
        text-decoration: underline;
    }

    .a {
        margin: 0;
        color: var(--ivue-primary-color);
    }
}
</style>
