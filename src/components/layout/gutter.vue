<template>
    <div class="ivue-layout ivue-gutter">
        <div class="ivue-layout-item gutter-item"></div>
        <div class="ivue-layout-item gutter-item"></div>
        <div class="ivue-layout-item gutter-item"></div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.gutter-item {
    height: 40px;

    &:after {
        width: 100%;
        height: 100%;
        display: block;
        background: rgba(255, 0, 0, 0.2);
        content: ' ';
    }
}
</style>
