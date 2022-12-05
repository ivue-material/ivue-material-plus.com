<template>
    <ivue-input class="input" v-model="value" search placeholder="Enter something..."></ivue-input>
    <ivue-input class="input" v-model="value" search enter-button placeholder="Enter something..."></ivue-input>
    <ivue-input
        class="input"
        v-model="value"
        search
        enter-button="Search"
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
    margin-bottom: 10px;
}
</style>
