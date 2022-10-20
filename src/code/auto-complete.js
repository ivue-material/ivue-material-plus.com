const code = {};

code.default = `<template>
<div>
    <ivue-auto-complete
        v-model="value"
        :list="data"
        placeholder="请输入"
        @on-search="handleSearch"
    >
        <template #prefix>
            <ivue-icon>favorite_border</ivue-icon>
        </template>
        <template #suffix>
            <ivue-icon>cruelty_free</ivue-icon>
        </template>
    </ivue-auto-complete>
</div>
</template>

<script>
export default {
data() {
    return {
        value: '',
        data: [],
    };
},
methods: {
    handleSearch(value) {
        this.data = !value
            ? []
            : [value, value + value, value + value + value];
    },
},
};
</script>

<style lang="scss" scoped>
</style>
`;

code.custom = `<template>
    <div>
        <ivue-auto-complete v-model="value" placeholder="请输入" @on-search="handleSearch">
            <ivue-option v-for="item in data" :value="item" :key="item">{{ item }}</ivue-option>
        </ivue-auto-complete>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: '',
            data: [],
        };
    },
    methods: {
        handleSearch(value) {
            this.data = !value || value.indexOf('@') >= 0
                ? []
                : [
                    \`\${value}@qq.com\`,
                    \`\${value}@sina.com\`,
                    \`\${value}@163.com\`,
                ];
        },
    },
};
</script>

<style lang="scss" scoped>
</style>`;

code.notCaseSensitive = `<template>
    <div>
        <ivue-auto-complete
            v-model="value"
            :list="data"
            :filter-method="filterMethod"
            placeholder="请输入"
        ></ivue-auto-complete>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: '',
            data: ['Steve Jobs', 'Stephen Gary Wozniak', 'Jonathan Paul Ive'],
        };
    },
    methods: {
        filterMethod(value, option) {
            return option.toUpperCase().indexOf(value.toUpperCase()) !== -1;
        },
    },
};
</script>

<style lang="scss" scoped>
</style>`;

export default code;
