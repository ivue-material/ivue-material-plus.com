<template>
    <ivue-input
        v-model="value"
        type="password"
        password
        autocomplete="new-password"
        placeholder="Enter something..."
        style="width: 300px"
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
