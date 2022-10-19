const code = {};

code.default = `<template>
    <div>
        <ivue-affix>
            <div class="demo-affix">固定在最顶部</div>
        </ivue-affix>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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
    <div>
        <ivue-affix :offsetTop="50">
            <div class="demo-affix">固定在距顶部 50px 的位置</div>
        </ivue-affix>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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
    <div>
        <ivue-affix :offsetBottom="20">
            <div class="demo-affix">固定在距底部 20px 的位置</div>
        </ivue-affix>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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
</style>`;

code.callback = `<template>
    <div>
        <ivue-affix :offsetTop="100" @on-change="handleChange">
            <div class="demo-affix">固定在距顶部 100px 的位置 触发回调</div>
        </ivue-affix>
    </div>
</template>

<script>
export default {
    methods: {
        handleChange(status) {
            this.$message.info({
                content: status: \${status},
            });
        },
    },
};
</script>

<style lang="scss" scoped>
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
