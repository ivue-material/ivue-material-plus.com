<template>
    <div class="ivue-layout ivue-gutter ivue-alignment-center hide">
        <div class="ivue-layout-item ivue-medium-size-33 ivue-small-size-50 ivue-xsmall-size-100">
            <span>Always Show</span>
        </div>

        <div class="ivue-layout-item ivue-medium-size-33 ivue-small-size-50 ivue-xsmall-size-100">
            <span>Always Show</span>
        </div>

        <div class="ivue-layout-item ivue-medium-size-33 ivue-small-size-50 ivue-xsmall-size-100">
            <span>Always Show</span>
        </div>

        <div class="ivue-layout-item ivue-medium-size-50 ivue-small-size-50 ivue-xsmall-hide">
            <span>Hide Xsmall</span>
        </div>

        <div class="ivue-layout-item ivue-medium-size-50 ivue-small-hide">
            <span>Hide Small</span>
        </div>
        <div class="ivue-layout-item ivue-medium-hide">
            <span>Hide Medium</span>
        </div>
    </div>
</template>

<style scoped>
.hide .ivue-layout-item {
    height: 40px;
    margin-top: 8px;
    margin-bottom: 8px;
}

.hide .ivue-layout-item span {
    width: 100%;
    height: 100%;
    padding: 8px;
    display: block;
    background: rgba(0, 128, 128, 0.2);
}
</style>
