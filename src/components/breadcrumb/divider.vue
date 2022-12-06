<template>
    <div>
        <h3>通过插槽修改</h3>
        <ivue-breadcrumb>
            <template #divider>
                <ivue-icon>forward</ivue-icon>
            </template>
            <ivue-breadcrumb-item>
                <span>Home</span>
            </ivue-breadcrumb-item>
            <ivue-breadcrumb-item to="/docs/install">
                <span>Install</span>
            </ivue-breadcrumb-item>
            <ivue-breadcrumb-item>
                <span>Breadcrumb</span>
            </ivue-breadcrumb-item>
        </ivue-breadcrumb>
        <h3>通过pops修改</h3>
        <ivue-breadcrumb divider=">">
            <ivue-breadcrumb-item>
                <span>Home</span>
            </ivue-breadcrumb-item>
            <ivue-breadcrumb-item to="/docs/install">
                <span>Install</span>
            </ivue-breadcrumb-item>
            <ivue-breadcrumb-item>
                <span>Breadcrumb</span>
            </ivue-breadcrumb-item>
        </ivue-breadcrumb>
    </div>
</template>
