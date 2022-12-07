<template>
    <div>
        <ivue-affix :offset-bottom="20">
            <div class="demo-affix">固定在距底部 20px 的位置</div>
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
