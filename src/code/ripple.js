const code = {};

code.default = `<template>
    <div class="ripple" v-ripple>点击查看效果</div>
</template>

<style scoped>
.ripple {
    text-align: center;
    padding: 48px 48px;
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: normal;
}
</style>
`;

code.center = `<template>
    <div class="ripple" v-ripple="{center : true}">波纹居中</div>
</template>

<style scoped>
.ripple {
    text-align: center;
    padding: 48px 48px;
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: normal;
}
</style>
`;

code.color = `<template>
    <h4>设置 class</h4>
    <div class="ripple" v-ripple="{class: 'primary--text'}">点击查看效果</div>
    <h4>继承颜色</h4>
    <div class="ripple primary--text" v-ripple>点击查看效果</div>
</template>

<style scoped>
.ripple {
    text-align: center;
    padding: 48px 48px;
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: normal;
}
</style>
`;

export default code;
