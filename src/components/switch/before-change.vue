<template>
    <ivue-switch :before-change="handleBeforeChange" />
</template>
<script>
export default {
    methods: {
        handleBeforeChange() {
            return new Promise((resolve) => {
                this.$IvueModal.confirm({
                    title: '切换确认',
                    content: '您确认要切换开关状态吗？',
                    onConfirm: () => {
                        resolve();
                    },
                });
            });
        },
    },
};
</script>
