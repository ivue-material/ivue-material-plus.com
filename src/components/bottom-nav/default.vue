<template>
    <ivue-bottom-nav v-model="value" @on-change="handleChange">
        <ivue-bottom-nav-item color="primary" name="home">
            <span>Home</span>
            <ivue-icon>home</ivue-icon>
        </ivue-bottom-nav-item>
        <ivue-bottom-nav-item color="primary" name="settings">
            <span>Settings</span>
            <ivue-icon>settings</ivue-icon>
        </ivue-bottom-nav-item>
    </ivue-bottom-nav>
</template>

<script>
export default {
    data() {
        return {
            value: 'home',
        };
    },
    methods: {
        handleChange(value) {
            this.$message.info({
                content: `当前激活导航：${value}`,
            });
        },
    },
};
</script>
