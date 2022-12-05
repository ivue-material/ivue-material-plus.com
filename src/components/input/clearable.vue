<template>
    <ivue-input v-model="value" placeholder="Enter something..." clearable style="width: 300px"></ivue-input>
</template>

<script>
export default {
    data() {
        return {
            value: 'Hello World',
        };
    },
};
</script>
