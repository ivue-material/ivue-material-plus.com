<template>
    <ivue-input
        v-model="value"
        :border="false"
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
