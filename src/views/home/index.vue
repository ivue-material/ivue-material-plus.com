<template>
    <div class="home">
        <div class="home-wrapper">
            <div class="home-title--wrapper">
                <img class="home-image" src="@/static/logo.png" />
                <h1 class="home-title">IVue Material Plus</h1>
            </div>
            <h2 class="home-text">一套基于 Material Design 规范</h2>
            <h2 class="home-text">UI组件库</h2>
            <div class="button-wrapper">
                <!-- 开始使用 -->
                <ivue-button class="button" status="primary" depressed @click="handleStartUse">开始使用</ivue-button>
                <!-- GitHub -->
                <ivue-button class="button" outline @click="handleGitHub">GitHub</ivue-button>
            </div>
        </div>
        <!-- 底部 -->
        <ivue-footer></ivue-footer>
    </div>
</template>

<script setup>
import { onMounted, getCurrentInstance, h, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';

import IvueFooter from '@/components/footer';

const { proxy } = getCurrentInstance();

const router = useRouter();

// 跳转安装页面
const handleStartUse = () => {
    router.push('/docs/install');
};

// 跳转github
const handleGitHub = () => {
    window.open('https://github.com/ivue-material/ivue-material');
};

// 跳转2.0版本
const handleLinkUi = () => {
    window.open(`${location.origin}/ui/`);
};

// onMounted
onMounted(() => {
    proxy.$notice.info({
        title: 'IVue Material UI Plus 现已发布',
        render: () => {
            return h(
                'div',
                {
                    class: 'notice-wrapper',
                },
                [
                    h(
                        'span',
                        {
                            class: 'notice-text',
                            onClick: handleLinkUi,
                        },
                        '2.0版本请点击查看'
                    ),
                ]
            );
        },
        position: 'top-left',
        offset: 60,
        duration: 0,
    });
});

onBeforeUnmount(() => {
    proxy.$notice.closeAll();
});

</script>

<style lang="scss">
.home {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
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

        &--wrapper {
            display: flex;
            align-items: center;
        }
    }

    &-text {
        margin: 12px 10px !important;
        font-size: 24px;
    }

    &-image {
        height: 80px;
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

.notice {
    &-wrapper {
        display: flex;
        flex-direction: column;
    }

    &-text {
        font-weight: bold;
        cursor: pointer;
        color: var(--ivue-primary-color);
    }
}

.notice-button {
    width: 80px;
    height: 30px;
}
</style>
