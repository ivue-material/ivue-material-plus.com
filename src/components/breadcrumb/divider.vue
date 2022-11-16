<template>
    <div>
        <h3>通过插槽修改</h3>
        <ivue-breadcrumbs>
            <template #divider>
                <ivue-icon>forward</ivue-icon>
            </template>
            <ivue-breadcrumbs-item>
                <span>Home</span>
            </ivue-breadcrumbs-item>
            <ivue-breadcrumbs-item to="/docs/install">
                <span>Install</span>
            </ivue-breadcrumbs-item>
            <ivue-breadcrumbs-item>
                <span>Breadcrumb</span>
            </ivue-breadcrumbs-item>
        </ivue-breadcrumbs>
        <h3>通过pops修改</h3>
        <ivue-breadcrumbs divider=">">
            <ivue-breadcrumbs-item>
                <span>Home</span>
            </ivue-breadcrumbs-item>
            <ivue-breadcrumbs-item to="/docs/install">
                <span>Install</span>
            </ivue-breadcrumbs-item>
            <ivue-breadcrumbs-item>
                <span>Breadcrumb</span>
            </ivue-breadcrumbs-item>
        </ivue-breadcrumbs>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>
