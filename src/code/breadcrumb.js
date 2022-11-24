const code = {};

code.default = `<template>
    <ivue-breadcrumb>
      <ivue-breadcrumb-item to="/">Home</ivue-breadcrumb-item>
      <ivue-breadcrumb-item to="/docs/install">Install</ivue-breadcrumb-item>
      <ivue-breadcrumb-item>Breadcrumb</ivue-breadcrumb-item>
    </ivue-breadcrumb>
</template>
`;

code.divider = `<template>
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
`;

code.direction = `<template>
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
`;

export default code;
