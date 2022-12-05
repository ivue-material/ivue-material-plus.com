const code = {};

code.default = `<template>
    <ivue-input v-model="value" placeholder="Enter something..." style="width: 300px"></ivue-input>
</template>
<script>
export default {
    data() {
        return {
            value: '',
        };
    },
};
</script>
`;

code.size = `<template>
    <h4>Small</h4>
    <ivue-input v-model="value" placeholder="Enter something..." size="small"></ivue-input>
    <h4>Default</h4>
    <ivue-input v-model="value" placeholder="Enter something..."></ivue-input>
    <h4>Large</h4>
    <ivue-input v-model="value" placeholder="Enter something..." size="large"></ivue-input>
</template>

<script>
export default {
    data() {
        return {
            value: '',
        };
    },
};
</script>
`;

code.clearable = `<template>
    <ivue-input v-model="value" placeholder="Enter something..." clearable style="width: 300px"></ivue-input>
</template>

<script>
export default {
    data() {
        return {
            value: 'Hello World',
        };
    },
};
</script>
`;

code.textarea = `<template>
    <h4>Rows 默认为 2</h4>
    <ivue-input v-model="value1" type="textarea" placeholder="Enter something..."></ivue-input>
    <h4>Rows 设置为 4</h4>
    <ivue-input v-model="value2" :rows="4" type="textarea" placeholder="Enter something..."></ivue-input>
</template>

<script>
export default {
    data() {
        return {
            value1: '',
            value2: '',
        };
    },
};
</script>
`;

code.showWordLimit = `<template>
    <h4>文本框</h4>
    <ivue-input v-model="value" placeholder="Enter something..." maxlength="100" show-word-limit></ivue-input>
    <h4>文本域</h4>
    <ivue-input
        v-model="value"
        placeholder="Enter something..."
        type="textarea"
        maxlength="100"
        show-word-limit
    ></ivue-input>
</template>

<script>
export default {
    data() {
        return {
            value: '',
        };
    },
};
</script>
`;

code.password = `
<template>
    <ivue-input
        v-model="value"
        type="password"
        password
        autocomplete="new-password"
        placeholder="Enter something..."
        style="width: 300px"
    ></ivue-input>
</template>

<script>
export default {
    data() {
        return {
            value: '',
        };
    },
};
</script>
`;

code.prefixSuffix = `<template>
    <h4>Props</h4>
    <ivue-input
        class="input"
        v-model="value1"
        prefix="favorite"
        placeholder="Enter something..."
        style="width: 300px"
    ></ivue-input>
    <ivue-input
        class="input"
        v-model="value2"
        suffix="favorite"
        placeholder="Enter something..."
        style="width: 300px"
    ></ivue-input>
    <h4>Slots</h4>
    <ivue-input
        class="input"
        v-model="value1"
        placeholder="Enter something..."
        style="width: 300px"
    >
        <template #prefix>
            <ivue-icon>favorite</ivue-icon>
        </template>
    </ivue-input>
    <ivue-input
        class="input"
        v-model="value2"
        placeholder="Enter something..."
        style="width: 300px"
    >
        <template #suffix>
            <ivue-icon>favorite</ivue-icon>
        </template>
    </ivue-input>
</template>

<script>
export default {
    data() {
        return {
            value1: '',
            value2: '',
        };
    },
};
</script>

<style>
.input {
    margin-right: 20px;
}
</style>
`;

code.search = `<template>
    <ivue-input class="input" v-model="value" search placeholder="Enter something..."></ivue-input>
    <ivue-input class="input" v-model="value" search enter-button placeholder="Enter something..."></ivue-input>
    <ivue-input
        class="input"
        v-model="value"
        search
        enter-button="Search"
        placeholder="Enter something..."
    ></ivue-input>
</template>

<script>
export default {
    data() {
        return {
            value: '',
        };
    },
};
</script>


<style>
.input {
    margin-bottom: 10px;
}
</style>
`;


code.disabled = `<template>
    <ivue-input class="input" v-model="value" disabled placeholder="Enter something..."></ivue-input>
    <ivue-input
        class="input"
        v-model="value"
        disabled
        type="textarea"
        placeholder="Enter something..."
    ></ivue-input>
</template>

<script>
export default {
    data() {
        return {
            value: '',
        };
    },
};
</script>

<style>
.input {
    display: flex;
    margin-bottom: 10px;
}
</style>
`;


code.noBorder = `<template>
    <ivue-input
        v-model="value"
        :border="false"
        placeholder="Enter something..."
    ></ivue-input>
</template>

<script>
export default {
    data() {
        return {
            value: '',
        };
    },
};
</script>
`;


code.compound = '';

export default code;
