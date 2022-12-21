<template>
    <ivue-chip>默认状态</ivue-chip>
    <ivue-chip disabled>禁用</ivue-chip>
    <ivue-chip :color="['#5B8EFF', '#27E2B2']">渐变色(color)</ivue-chip>
    <ivue-chip color="orange" close>带关闭按钮(close)</ivue-chip>
    <ivue-chip outline color="green">轮廓(outline)</ivue-chip>
    <ivue-chip square color="#B1C865" text-color="#F2EFD3">正方形(square)</ivue-chip>
    <ivue-chip color="#C64957" text-color="#ffffff" depressed>没有框阴影(depressed)</ivue-chip>
</template>
