const code = {};

code.default = `<template>
    <ivue-page :total="100"></ivue-page>
</template>
`;

code.showSizer = `<template>
    <ivue-page :total="100" show-sizer></ivue-page>
</template>
`;

code.showElevator = `<template>
  <ivue-page :total="100" show-elevator></ivue-page>
</template>
`;

code.total = `<template>
    <h4>默认</h4>
    <ivue-page :total="100" show-total></ivue-page>
    <h4>自定义 total 内容</h4>
    <ivue-page :total="100" show-total>
        <template #total>一共有100条</template>
    </ivue-page>
</template>
`;

code.smalls = `<template>
    <ivue-page :total="100" small show-total show-sizer show-elevator></ivue-page>
</template>
`;

code.simple = `<template>
    <ivue-page :total="100" simple></ivue-page>
</template>
`;

code.slots = `<template>
    <ivue-page :total="1000">
        <template #prev>上一页</template>
        <template #prevArrow>上一页更多</template>
        <template #next>下一页</template>
        <template #nextArrow>下一页更多</template>
    </ivue-page>
</template>
`;

export default code;
