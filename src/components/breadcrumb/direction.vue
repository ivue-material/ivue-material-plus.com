<template>
    <div>
        <h3>中间对齐</h3>
        <ivue-breadcrumbs justifyCenter>
            <ivue-breadcrumbs-item to="/">Home</ivue-breadcrumbs-item>
            <ivue-breadcrumbs-item to="/docs/install">Install</ivue-breadcrumbs-item>
            <ivue-breadcrumbs-item>Breadcrumb</ivue-breadcrumbs-item>
        </ivue-breadcrumbs>

        <h3>尾部对齐</h3>
        <ivue-breadcrumbs justifyEnd>
            <ivue-breadcrumbs-item to="/">Home</ivue-breadcrumbs-item>
            <ivue-breadcrumbs-item to="/docs/install">Install</ivue-breadcrumbs-item>
            <ivue-breadcrumbs-item>Breadcrumb</ivue-breadcrumbs-item>
        </ivue-breadcrumbs>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>
