<template>
    <div>
        <div class="example">
            <div class="ivue-layout ivue-gutter ivue-alignment-top-center">
                <div class="ivue-layout-item ivue-size-25">
                    <span>Lorem ipsum dolor sit amet.</span>
                </div>
                <div class="ivue-layout-item ivue-size-25">
                    <span>Lorem ipsum dolor sit amet.</span>
                </div>
                <div class="ivue-layout-item ivue-size-25">
                    <span>Lorem ipsum dolor sit amet.</span>
                </div>
            </div>
        </div>

        <div class="example">
            <div class="ivue-layout ivue-gutter ivue-alignment-bottom-center">
                <div class="ivue-layout-item ivue-size-30">
                    <span>ivue-alignment-bottom-center</span>
                </div>
                <div class="ivue-layout-item ivue-size-30">
                    <span>ivue-alignment-bottom-center</span>
                </div>
                <div class="ivue-layout-item ivue-size-30">
                    <span>ivue-alignment-bottom-center</span>
                </div>
            </div>
        </div>

        <div class="example">
            <div class="ivue-layout ivue-gutter ivue-alignment-center-center">
                <div class="ivue-layout-item ivue-size-25">
                    <span>ivue-alignment-center-center</span>
                </div>
                <div class="ivue-layout-item ivue-size-25">
                    <span>ivue-alignment-center-center</span>
                </div>
                <div class="ivue-layout-item ivue-size-25">
                    <span>ivue-alignment-center-center</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.example {
    margin: 20px;
    height: 100px;
    background: #e0e0e0;
}

.ivue-gutter {
    height: 100%;
}

.ivue-layout-item {
    height: 40px;
    font-size: 12px;
}

.ivue-layout-item span {
    width: 100%;
    height: 100%;
    padding: 8px;
    display: block;
    background: rgba(0, 0, 255, 0.2);
}
</style>
