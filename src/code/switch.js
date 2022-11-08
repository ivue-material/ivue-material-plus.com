const code = {};

code.default = `<template>
    <ivue-switch
        class="switch"
        v-model="value1"
        :color="['#5AB2FF', '#5B8EFF']"
        :false-color="['#FFA82D', '#FFBD3C']"
        @on-change="handleChange"
    />
    <ivue-switch
        class="switch"
        v-model="value2"
        :color="'#FFC009'"
        :false-color="'#F41D74'"
    />
</template>
<script>
export default {
    data() {
        return {
            value1: false,
            value2: false,
        };
    },
    methods: {
        handleChange(status) {
            this.$message.info(\`开关状态：$\{status}\`);
        },
    },
};
</script>

<style scoped>
.switch {
    margin-right: 20px;
}
</style>
`;

code.size = `<template>
    <ivue-switch class="switch" size="large"></ivue-switch>
    <ivue-switch class="switch"></ivue-switch>
    <ivue-switch class="switch" size="small"></ivue-switch>
</template>
<script>
export default {};
</script>

<style scoped>
.switch {
    margin-right: 20px;
}
</style>
`;

code.icon = `<template>
    <div>
        <p>单个字符</p>
        <div>
            <ivue-switch class="switch">
                <template #open>
                    <span>开</span>
                </template>
                <template #close>
                    <span>关</span>
                </template>
            </ivue-switch>

            <ivue-switch class="switch">
                <template #open>
                    <ivue-icon class="icon">check</ivue-icon>
                </template>
                <template #close>
                    <ivue-icon class="icon">close</ivue-icon>
                </template>
            </ivue-switch>
        </div>

        <p>多个字符</p>
        <div>
            <ivue-switch size="large" class="switch">
                <template #open>
                    <span>开启</span>
                </template>
                <template #close>
                    <span>关闭</span>
                </template>
            </ivue-switch>

            <ivue-switch size="large" class="switch">
                <template #open>
                    <span>ON</span>
                </template>
                <template #close>
                    <span>OFF</span>
                </template>
            </ivue-switch>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.switch {
    margin-right: 20px;
}

.icon {
    min-width: auto;
    width: auto;
    font-size: 12px;
}
</style>
`;

code.disabled = `<template>
    <div>
        <ivue-switch :disabled="disabled" class="switch"></ivue-switch>

        <ivue-switch :disabled="disabled" emboss color="#5B8EFF"></ivue-switch>
    </div>
    <ivue-button type="primary" @click="disabled = !disabled">Toggle Disabled</ivue-button>
</template>

<script>
export default {
    data() {
        return {
            disabled: true,
        };
    },
};
</script>

<style scoped>
.switch {
    margin: 20px;
}
</style>
`;

code.loading = `<template>
    <div>
        <ivue-switch loading :model-value="true" class="switch" color="#5B8EFF"></ivue-switch>
        <ivue-switch
            loading
            :model-value="true"
            class="switch"
            emboss
            color="#5B8EFF"
            embossLoadingColor="#fff"
        ></ivue-switch>
    </div>
    <div>
        <ivue-switch loading class="switch" color="#5B8EFF"></ivue-switch>
        <ivue-switch loading class="switch" emboss color="#5B8EFF" embossLoadingColor="#000"></ivue-switch>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.switch {
    margin: 20px;
}
</style>
`;

code.color = `<template>
    <div>
        <h3>普通按钮</h3>
        <p>渐变</p>
        <ivue-switch
            class="switch"
            :color="['#5AB2FF', '#5B8EFF']"
            :false-color="['#FFA82D', '#FFBD3C']"
        />
        <p>单色</p>
        <ivue-switch class="switch" color="#9C27B0" false-color="#3F51B5" />
        <h3>浮雕按钮</h3>
        <p>渐变</p>
        <ivue-switch
            class="switch"
            :color="['#5AB2FF', '#5B8EFF']"
            :false-color="['#FFA82D', '#FFBD3C']"
            emboss
        />
        <p>单色</p>
        <ivue-switch class="switch" color="#9C27B0" false-color="#3F51B5" />
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.switch {
    margin-right: 20px;
}
</style>
`;

code.beforeChange = `<template>
    <ivue-switch :before-change="handleBeforeChange" />
</template>
<script>
export default {
    methods: {
        handleBeforeChange() {
            return new Promise((resolve) => {
                this.$IvueModal.confirm({
                    title: '切换确认',
                    content: '您确认要切换开关状态吗？',
                    onConfirm: () => {
                        resolve();
                    },
                });
            });
        },
    },
};
</script>
`;

export default code;
