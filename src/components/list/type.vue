<template>
    <ivue-list>
        <ivue-list-item>Plain Text</ivue-list-item>
        <ivue-list-item ripple-disabled>Plain Text RippleDisabled</ivue-list-item>
        <ivue-list-item type="button">button</ivue-list-item>
        <ivue-list-item type="a" href="https://lovevuerk.com/">a link</ivue-list-item>
    </ivue-list>
</template>

<script>
export default {
    data() {
        return {
            expandNews: false,
            expandSingle: false,
        };
    },
};
</script>

<style>
.ivue-list .ivue-list-item-container {
    margin: 0;
}
</style>
