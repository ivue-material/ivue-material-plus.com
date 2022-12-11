const code = {};

code.default = `<template>
    <ivue-button class="button" status="primary">primary</ivue-button>
    <ivue-button class="button" status="light-primary">Light Primary</ivue-button>
    <ivue-button class="button" status="dark-primary">Dark Primary</ivue-button>
    <ivue-button class="button" status="success">Success</ivue-button>
    <ivue-button class="button" status="warning">Warning</ivue-button>
    <ivue-button class="button" status="error">Error</ivue-button>
    <ivue-button class="button" disabled>disabled</ivue-button>
</template>

<style scoped>
.button {
    margin: 10px;
}
</style>
`;

code.flat = `<template>
    <ivue-button class="button" status="primary" flat>primary</ivue-button>
    <ivue-button class="button" status="light-primary" flat>Light Primary</ivue-button>
    <ivue-button class="button" status="dark-primary" flat>Dark Primary</ivue-button>
    <ivue-button class="button" status="success" flat>Success</ivue-button>
    <ivue-button class="button" status="warning" flat>Warning</ivue-button>
    <ivue-button class="button" status="error" flat>Error</ivue-button>
</template>

<style scoped>
.button {
    margin: 10px;
}
</style>
`;

code.depressed = `<template>
    <ivue-button class="button" status="primary" depressed>primary</ivue-button>
    <ivue-button class="button" status="light-primary" depressed>Light Primary</ivue-button>
    <ivue-button class="button" status="dark-primary" depressed>Dark Primary</ivue-button>
    <ivue-button class="button" status="success" depressed>Success</ivue-button>
    <ivue-button class="button" status="warning" depressed>Warning</ivue-button>
    <ivue-button class="button" status="error" depressed>Error</ivue-button>
</template>

<style scoped>
.button {
    margin: 10px;
}
</style>
`;

code.outline = `<template>
    <ivue-button class="button" status="primary" outline>primary</ivue-button>
    <ivue-button class="button" status="light-primary" outline>Light Primary</ivue-button>
    <ivue-button class="button" status="dark-primary" outline>Dark Primary</ivue-button>
    <ivue-button class="button" status="success" outline>Success</ivue-button>
    <ivue-button class="button" status="warning" outline>Warning</ivue-button>
    <ivue-button class="button" status="error" outline>Error</ivue-button>
</template>

<style scoped>
.button {
    margin: 10px;
}
</style>
`;

code.href = `<template>
    <ivue-button
        class="button"
        status="primary"
        href="https://github.com/qq282126990/ivue-ui-plus"
    >Link Github</ivue-button>
</template>

<style scoped>
.button {
    margin: 10px;
}
</style>
`;

code.icon = `<template>
    <ivue-button class="button" status="primary" icon>
        <ivue-icon>face</ivue-icon>
    </ivue-button>
    <ivue-button class="button" status="light-primary" icon>
        <ivue-icon>face</ivue-icon>
    </ivue-button>
    <ivue-button class="button" status="dark-primary" icon>
        <ivue-icon>face</ivue-icon>
    </ivue-button>
    <ivue-button class="button" status="success" icon>
        <ivue-icon>face</ivue-icon>
    </ivue-button>
    <ivue-button class="button" status="warning" icon>
        <ivue-icon>face</ivue-icon>
    </ivue-button>
    <ivue-button class="button" status="error" icon>
        <ivue-icon>face</ivue-icon>
    </ivue-button>
</template>

<style scoped>
.button {
    margin: 10px;
}
</style>
`;

code.color = `<template>
    <ivue-button class="button" color="#5B8EFF">primary</ivue-button>
    <ivue-button class="button" :color="['#5AB2FF', '#5B8EFF']">渐变</ivue-button>
    <ivue-button class="button" :color="['#5AB2FF', '#5B8EFF']" radius>圆角按钮</ivue-button>
    <ivue-button class="button" color="#27E2B2" loading>加载中</ivue-button>
    <ivue-button class="button" disabled>禁用</ivue-button>
</template>

<style scoped>
.button {
    margin: 10px;
}
</style>
`;

export default code;
