<template>
    <div class="ivue-layout ivue-gutter">
        <div class="ivue-layout-item ivue-size-15 size"></div>
        <div class="ivue-layout-item size"></div>
        <div class="ivue-layout-item size"></div>
        <div class="ivue-layout-item ivue-size-15 size"></div>
    </div>
</template>

<style lang="scss" scoped>
.size {
    height: 40px;

    &:after {
        width: 100%;
        height: 100%;
        display: block;
        background: rgb(0, 118, 0);
        opacity: 0.2;
        content: ' ';
    }
}
</style>
