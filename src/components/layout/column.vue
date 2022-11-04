<template>
    <div class="ivue-layout ivue-gutter">
        <div class="ivue-layout-item ivue-layout ivue-gutter">
            <div class="ivue-layout-item"></div>
            <div class="ivue-layout-item"></div>
            <div class="ivue-layout-item"></div>
        </div>
        <div class="ivue-layout-item ivue-layout ivue-gutter">
            <div class="ivue-layout-item"></div>
            <div class="ivue-layout-item"></div>
            <div class="ivue-layout-item"></div>
        </div>
        <div class="ivue-layout-item ivue-layout ivue-gutter">
            <div class="ivue-layout-item"></div>
            <div class="ivue-layout-item"></div>
            <div class="ivue-layout-item"></div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.ivue-layout-item {
    height: 72px;
    box-sizing: border-box;
}

.ivue-layout-item.ivue-layout .ivue-layout-item:after {
    height: 40px;
    margin-top: 16px;
    position: relative;
    z-index: 1;
    background: rgb(255, 164, 255);
}

.ivue-layout-item.ivue-layout:after {
    transform: translateY(-100%);
    background: rgba(255, 255, 0, 0.2);
}

.ivue-layout-item:after {
    content: '';
    width: 100%;
    height: 100%;
    display: block;
}
</style>
