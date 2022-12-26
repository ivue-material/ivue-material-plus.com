<template>
    <div>
        <ivue-progress :percent="percent"></ivue-progress>

        <button icon="ios-add" @click="add">1</button>
        <button icon="ios-remove" @click="minus">2</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            percent: 0,
        };
    },
    methods: {
        add() {
            if (this.percent >= 100) {
                return false;
            }
            this.percent += 10;
        },
        minus() {
            if (this.percent <= 0) {
                return false;
            }
            this.percent -= 10;
        },
    },
};
</script>

<style lang="scss" scoped>
</style>
