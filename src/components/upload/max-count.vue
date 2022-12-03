<template>
    <ivue-upload v-model="fileList" multiple :max-count="2"></ivue-upload>
</template>

<script>
export default {
    data() {
        return {
            fileList: [],
        };
    },
};
</script>
