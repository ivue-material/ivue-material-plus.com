<template>
    <div>
        <ivue-affix :offset-top="50">
            <div class="demo-affix">固定在距顶部 50px 的位置</div>
        </ivue-affix>
    </div>
</template>

<style scoped>
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
