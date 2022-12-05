<template>
    <h4>Props</h4>
    <ivue-input
        class="input"
        v-model="value1"
        prefix="favorite"
        placeholder="Enter something..."
        style="width: 300px"
    ></ivue-input>
    <ivue-input
        class="input"
        v-model="value2"
        suffix="favorite"
        placeholder="Enter something..."
        style="width: 300px"
    ></ivue-input>
    <h4>Slots</h4>
    <ivue-input
        class="input"
        v-model="value1"
        placeholder="Enter something..."
        style="width: 300px"
    >
        <template #prefix>
            <ivue-icon>favorite</ivue-icon>
        </template>
    </ivue-input>
    <ivue-input
        class="input"
        v-model="value2"
        placeholder="Enter something..."
        style="width: 300px"
    >
        <template #suffix>
            <ivue-icon>favorite</ivue-icon>
        </template>
    </ivue-input>
</template>

<script>
export default {
    data() {
        return {
            value1: '',
            value2: '',
        };
    },
};
</script>

<style>
.input {
    margin-right: 20px;
}
</style>
