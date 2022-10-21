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

code.queryMod = `<template>
    <div>
        <ivue-auto-complete
            v-model="value"
            icon="ios-search"
            placeholder="input here"
            style="width:300px"
        >
            <div class="demo-auto-complete-item" v-for="item in data" :key="item.title">
                <div class="demo-auto-complete-group">
                    <span>{{ item.title }}</span>
                    <a href="https://www.google.com/search?q=iView" target="_blank">更多</a>
                </div>
                <ivue-option
                    v-for="option in item.children"
                    :value="option.title"
                    :key="option.title"
                >
                    <span class="demo-auto-complete-title">{{ option.title }}</span>
                    <span class="demo-auto-complete-count">{{ option.count }} 人关注</span>
                </ivue-option>
            </div>
            <a
                href="https://www.google.com/search?q=iView"
                target="_blank"
                class="demo-auto-complete-more"
            >查看所有结果</a>
        </ivue-auto-complete>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: '',
            data: [
                {
                    title: '话题',
                    children: [
                        {
                            title: 'View UI',
                            count: 10000,
                        },
                        {
                            title: 'View UI Plus',
                            count: 10600,
                        },
                    ],
                },
                {
                    title: '问题',
                    children: [
                        {
                            title: 'View UI Plus 有多好',
                            count: 60100,
                        },
                        {
                            title: 'View UI Plus 是啥',
                            count: 30010,
                        },
                    ],
                },
                {
                    title: '文章',
                    children: [
                        {
                            title: 'View UI Plus 是一个设计语言',
                            count: 100000,
                        },
                    ],
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.demo-auto-complete-item {
    padding: 4px 0;
    border-bottom: 1px solid #f6f6f6;
}

.demo-auto-complete-group {
    font-size: 12px;
    padding: 4px 6px;
}

.demo-auto-complete-group span {
    color: #666;
    font-weight: bold;
}

.demo-auto-complete-group a {
    float: right;
}

.demo-auto-complete-count {
    float: right;
    color: #999;
}

.demo-auto-complete-more {
    display: block;
    margin: 0 auto;
    padding: 4px;
    text-align: center;
    font-size: 12px;
}
</style>`;

code.remoteSearch = `<template>
    <div>
        <ivue-auto-complete
            v-model="value"
            filterable
            :remoteMethod="remoteMethod1"
            :loading="loading"
            placeholder="请输入"
            @on-select="handleSelect"
        >
            <ivue-option v-for="item in data" :value="item.value" :key="item.value">{{ item.value }}</ivue-option>
        </ivue-auto-complete>
    </div>
</template>

<script>
const loadAll = [
    { value: 'vue', link: 'https://github.com/vuejs/vue' },
    { value: 'element', link: 'https://github.com/ElemeFE/element' },
    { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
    { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
    { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
    { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
    { value: 'babel', link: 'https://github.com/babel/babel' },
];

export default {
    data() {
        return {
            value: '',
            data: loadAll,
            loading: false,
            select: '',
        };
    },
    methods: {
        remoteMethod1(queryString) {
            if (this.select === queryString) {
                return;
            }

            const results = queryString
                ? loadAll.filter((item) => (
                    item.value
                        .toLowerCase()
                        .indexOf(queryString.toLowerCase()) === 0
                ))
                : loadAll;

            this.loading = true;

            setTimeout(() => {
                this.loading = false;
                this.data = results;
            }, 3000);
        },
        handleSelect(value) {
            this.select = value;
        },
    },
};
</script>

<style lang="scss" scoped>
</style>`;

export default code;
