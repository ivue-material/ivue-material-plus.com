<template>
    <div class="button-wrapper">
        <ivue-button class="button" status="primary">primary</ivue-button>
        <ivue-button class="button" status="light-primary">Light Primary</ivue-button>
        <ivue-button class="button" status="dark-primary">Dark Primary</ivue-button>
        <ivue-button class="button" status="success">Success</ivue-button>
        <ivue-button class="button" status="warning">Warning</ivue-button>
        <ivue-button class="button" status="error">Error</ivue-button>
        <ivue-button class="button" disabled>disabled</ivue-button>
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
