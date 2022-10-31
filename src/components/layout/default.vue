<template>
    <div class="ivue-layout">
        <div class="ivue-layout-item layout"></div>
        <div class="ivue-layout-item layout"></div>
        <div class="ivue-layout-item layout"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
.layout {
    height: 40px;

    &:nth-child(1) {
        background: rgba(128, 128, 128, 0.3);
    }

    &:nth-child(2) {
        background: rgba(128, 128, 128, 0.4);
    }

    &:nth-child(3) {
        background: rgba(128, 128, 128, 0.5);
    }
}
</style>
