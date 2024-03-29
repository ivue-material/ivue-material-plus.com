const code = {};

code.default = `<template>
    <div class="content">
        <ivue-affix>
            <div class="demo-affix">固定在最顶部</div>
        </ivue-affix>
    </div>
</template>

<style scoped>
.content{
    height: 1000px;
}

.demo-affix {
    width: 100px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    font-size: 12px;
    border-radius: 5px;
    background: #5b8eff;
    color: #fff;
}
</style>`;

code.offsetTop = `<template>
    <div class="content">
        <ivue-affix :offsetTop="50">
            <div class="demo-affix">固定在距顶部 50px 的位置</div>
        </ivue-affix>
    </div>
</template>

<style scoped>
.content{
    height: 1000px;
}

.demo-affix {
    width: 200px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    font-size: 12px;
    border-radius: 5px;
    background: #5b8eff;
    color: #fff;
}
</style>
`;

code.offsetBottom = `<template>
    <div class="content">
        <ivue-affix :offsetBottom="20">
            <div class="demo-affix">固定在距底部 20px 的位置</div>
        </ivue-affix>
    </div>
</template>

<style scoped>
.content{
    height: 2000px;
}

.demo-affix {
    margin-top: 1000px;
    width: 200px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    font-size: 12px;
    border-radius: 5px;
    background: #5b8eff;
    color: #fff;
}
</style>`;

code.callback = `<template>
    <div class="content">
        <ivue-affix :offsetTop="100" @on-change="handleChange">
            <div class="demo-affix">固定在距顶部 100px 的位置 触发回调</div>
        </ivue-affix>
    </div>
</template>

<script setup>
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

const handleChange = (status) => {
    proxy.$message.info({
        content: \`status: \${status}\`,
    });
};
</script>

<style scoped>
.content{
    height: 2000px;
}

.demo-affix {
    width: 300px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    font-size: 12px;
    border-radius: 5px;
    background: #5b8eff;
    color: #fff;
}
</style>`;

export default code;
