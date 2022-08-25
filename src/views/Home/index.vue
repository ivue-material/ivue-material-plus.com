<template>
    <div class="home">
        <div class="home-wrapper">
            <h1 class="home-title">IVue</h1>
            <h2 class="home-text">一套基于 Material Design 规范</h2>
            <h2 class="home-text">UI组件库</h2>
            <div class="button-wrapper">
                <ivue-button class="button" status="primary" depressed @click="handleStartUse">开始使用</ivue-button>
                <ivue-button class="button" outline @click="handleGitHub">GitHub</ivue-button>
            </div>
        </div>
        <!-- 底部 -->
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from '@/components/Footer';

export default {
    name: 'Home',
    methods: {
        // 跳转安装页面
        handleStartUse() {
            this.$router.push('/docs/install');
        },
        // 跳转github
        handleGitHub() {
            window.open('https://github.com/qq282126990/ivue-ui-vue3');
        },
    },
    components: {
        Footer,
    },
};
</script>

<style lang="scss" scoped>
.home {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url('../../assets/home-bg.jpg') no-repeat;
    background-position: center;
    background-size: cover;
    &-wrapper {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        padding: 60px 0 0 200px;
        height: 100%;
        text-align: left;
    }
    &-title {
        margin: 0;
        display: block;
        font-size: 60px;
    }
    &-text {
        margin: 12px 10px !important;
        font-size: 24px;
    }
}

.button-wrapper {
    margin-top: 50px;
    .button {
        margin: 0 20px 0 0;
        width: 100px;
        border-radius: 50px;
    }
}
</style>
