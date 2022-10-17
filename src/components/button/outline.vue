<template>
    <div class="button-wrapper">
        <ivue-button class="button" status="primary" outline>primary</ivue-button>
        <ivue-button class="button" status="light-primary" outline>Light Primary</ivue-button>
        <ivue-button class="button" status="dark-primary" outline>Dark Primary</ivue-button>
        <ivue-button class="button" status="success" outline>Success</ivue-button>
        <ivue-button class="button" status="warning" outline>Warning</ivue-button>
        <ivue-button class="button" status="error" outline>Error</ivue-button>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.button {
    margin: 10px;

    &-wrapper {
    }
}
</style>
