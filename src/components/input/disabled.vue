<template>
    <ivue-input class="input" v-model="value" disabled placeholder="Enter something..."></ivue-input>
    <ivue-input
        class="input"
        v-model="value"
        disabled
        type="textarea"
        placeholder="Enter something..."
    ></ivue-input>
</template>

<script>
export default {
    data() {
        return {
            value: '',
        };
    },
};
</script>

<style>
.input {
    display: flex;
    margin-bottom: 10px;
}
</style>
