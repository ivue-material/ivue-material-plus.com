<template>
    <div class="hide-wrapper">
        <ivue-button class="button" @click="showNav = !showNav">显示/隐藏</ivue-button>

        <ivue-bottom-nav v-model="value" :visible="showNav">
            <ivue-bottom-nav-item color="primary" name="home">
                <span>Home</span>
                <ivue-icon>home</ivue-icon>
            </ivue-bottom-nav-item>
            <ivue-bottom-nav-item color="primary" name="settings">
                <span>Settings</span>
                <ivue-icon>settings</ivue-icon>
            </ivue-bottom-nav-item>
        </ivue-bottom-nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 'home',
            showNav: true,
        };
    },
};
</script>

<style scoped>
.hide-wrapper {
    position: relative;
    overflow: hidden;
}

.button {
    margin-bottom: 50px;
}
</style>
