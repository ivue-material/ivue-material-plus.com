<template>
    <div class="ivue-layout ivue-gutter ivue-alignment-center response">
        <div class="ivue-layout-item ivue-medium-size-33 ivue-small-size-50 ivue-xsmall-size-100"></div>
        <div class="ivue-layout-item ivue-medium-size-33 ivue-small-size-50 ivue-xsmall-size-100"></div>
        <div class="ivue-layout-item ivue-medium-size-33 ivue-small-size-50 ivue-xsmall-size-100"></div>
        <div class="ivue-layout-item ivue-medium-size-33 ivue-small-size-50 ivue-xsmall-size-100"></div>
        <div class="ivue-layout-item ivue-medium-size-33 ivue-small-size-50 ivue-xsmall-size-100"></div>
        <div class="ivue-layout-item ivue-medium-size-33 ivue-small-size-50 ivue-xsmall-size-100"></div>
    </div>
</template>

<style lang="scss" scoped>
.response .ivue-layout-item {
    height: 40px;
    margin-top: 8px;
    margin-bottom: 8px;

    &:after {
        width: 100%;
        height: 100%;
        display: block;
        background-color: purple;
        content: ' ';
    }
}
</style>
