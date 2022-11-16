const code = {};

code.default = `<template>
    <ivue-breadcrumbs>
      <ivue-breadcrumbs-item to="/">Home</ivue-breadcrumbs-item>
      <ivue-breadcrumbs-item to="/docs/install">Install</ivue-breadcrumbs-item>
      <ivue-breadcrumbs-item>Breadcrumb</ivue-breadcrumbs-item>
    </ivue-breadcrumbs>
</template>
`;

code.divider = `<template>
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
`;

code.direction = `<template>
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
`;

export default code;
