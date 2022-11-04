const code = {};

code.import = 'import \'ivue-material-plus/dist/styles/layout.css\';';

code.default = `<template>
    <link rel="stylesheet" href="//unpkg.com/ivue-material-plus/dist/styles/layout.css">
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

<style scoped>
.layout {
    height: 40px;
}

.layout:nth-child(1) {
    background: rgba(128, 128, 128, 0.3);
}

.layout:nth-child(2) {
    background: rgba(128, 128, 128, 0.4);
}

.layout:nth-child(3) {
    background: rgba(128, 128, 128, 0.5);
}
</style>`;

code.gutter = `<template>
    <link rel="stylesheet" href="//unpkg.com/ivue-material-plus/dist/styles/layout.css">
    <div class="ivue-layout ivue-gutter">
        <div class="ivue-layout-item gutter-item"></div>
        <div class="ivue-layout-item gutter-item"></div>
        <div class="ivue-layout-item gutter-item"></div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.gutter-item {
    height: 40px;
}

.gutter-item:after {
    width: 100%;
    height: 100%;
    display: block;
    background: rgba(255, 0, 0, 0.2);
    content: ' ';
}
</style>
`;

code.column = `<template>
    <link rel="stylesheet" href="//unpkg.com/ivue-material-plus/dist/styles/layout.css">
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
`;

code.alignment = `<template>
    <link rel="stylesheet" href="//unpkg.com/ivue-material-plus/dist/styles/layout.css">
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

<script>
export default {};
</script>

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
`;

code.size = `<template>
    <link rel="stylesheet" href="//unpkg.com/ivue-material-plus/dist/styles/layout.css">
    <div class="ivue-layout ivue-gutter">
        <div class="ivue-layout-item ivue-size-15 size"></div>
        <div class="ivue-layout-item size"></div>
        <div class="ivue-layout-item size"></div>
        <div class="ivue-layout-item ivue-size-15 size"></div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.size {
    height: 40px;
}

.size:after {
    width: 100%;
    height: 100%;
    display: block;
    background: rgb(0, 118, 0);
    opacity: 0.2;
    content: ' ';
}
</style>
`;

code.response = `<template>
    <link rel="stylesheet" href="//unpkg.com/ivue-material-plus/dist/styles/layout.css">
    <div class="ivue-layout ivue-gutter ivue-alignment-center response">
        <div class="ivue-layout-item ivue-medium-size-33 ivue-small-size-50 ivue-xsmall-size-100"></div>
        <div class="ivue-layout-item ivue-medium-size-33 ivue-small-size-50 ivue-xsmall-size-100"></div>
        <div class="ivue-layout-item ivue-medium-size-33 ivue-small-size-50 ivue-xsmall-size-100"></div>
        <div class="ivue-layout-item ivue-medium-size-33 ivue-small-size-50 ivue-xsmall-size-100"></div>
        <div class="ivue-layout-item ivue-medium-size-33 ivue-small-size-50 ivue-xsmall-size-100"></div>
        <div class="ivue-layout-item ivue-medium-size-33 ivue-small-size-50 ivue-xsmall-size-100"></div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.response .ivue-layout-item {
    height: 40px;
    margin-top: 8px;
    margin-bottom: 8px;
}

.response .ivue-layout-item:after {
    width: 100%;
    height: 100%;
    display: block;
    background-color: purple;
    content: ' ';
}
</style>
`;

code.hide = `<template>
    <link rel="stylesheet" href="//unpkg.com/ivue-material-plus/dist/styles/layout.css">
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

<script>
export default {};
</script>

<style scoped>
.hide .ivue-layout-item {
    height: 40px;
    margin-top: 8px;
    margin-bottom: 8px;
}

.hide .ivue-layout-item span{
    width: 100%;
    height: 100%;
    padding: 8px;
    display: block;
    background: rgba(0, 128, 128, 0.2);
}
</style>
`;
export default code;
