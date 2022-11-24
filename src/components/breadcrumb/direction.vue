<template>
    <div>
        <h3>中间对齐</h3>
        <ivue-breadcrumb justifyCenter>
            <ivue-breadcrumb-item to="/">Home</ivue-breadcrumb-item>
            <ivue-breadcrumb-item to="/docs/install">Install</ivue-breadcrumb-item>
            <ivue-breadcrumb-item>Breadcrumb</ivue-breadcrumb-item>
        </ivue-breadcrumb>

        <h3>尾部对齐</h3>
        <ivue-breadcrumb justifyEnd>
            <ivue-breadcrumb-item to="/">Home</ivue-breadcrumb-item>
            <ivue-breadcrumb-item to="/docs/install">Install</ivue-breadcrumb-item>
            <ivue-breadcrumb-item>Breadcrumb</ivue-breadcrumb-item>
        </ivue-breadcrumb>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>
