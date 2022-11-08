<template>
    <div>
        <ivue-switch :disabled="disabled" class="switch"></ivue-switch>

        <ivue-switch :disabled="disabled" emboss color="#5B8EFF"></ivue-switch>
    </div>
    <ivue-button type="primary" @click="disabled = !disabled">Toggle Disabled</ivue-button>
</template>

<script>
export default {
    data() {
        return {
            disabled: true,
        };
    },
};
</script>

<style scoped>
.switch {
    margin: 20px;
}
</style>
