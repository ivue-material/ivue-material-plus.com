const code = {};

code.default = `<template>
    <ivue-input v-model="value" placeholder="Enter something..." style="width: 300px"></ivue-input>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
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

<script setup>
import { ref } from 'vue';

const value = ref('');
</script>
`;

code.clearable = `<template>
    <ivue-input v-model="value" placeholder="Enter something..." clearable style="width: 300px"></ivue-input>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('Hello World');
</script>

`;

code.textarea = `<template>
    <h4>Rows 默认为 2</h4>
    <ivue-input v-model="value1" type="textarea" placeholder="Enter something..."></ivue-input>
    <h4>Rows 设置为 4</h4>
    <ivue-input v-model="value2" :rows="4" type="textarea" placeholder="Enter something..."></ivue-input>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref('');
const value2 = ref('');
</script>
`;

code.autosize = `<template>
    <h4>Autosize 为 true</h4>
    <ivue-input v-model="value" type="textarea" :autoHeight="true" placeholder="Enter something..."></ivue-input>
    <h4>Autosize 指定最小行数和最大行数</h4>
    <ivue-input
        v-model="value"
        type="textarea"
        :autoHeight="{minRows: 3,maxRows: 5}"
        placeholder="Enter something..."
    ></ivue-input>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
</script>
`;

code.showWordLimit = `<template>
    <h4>文本框</h4>
    <ivue-input v-model="value" placeholder="Enter something..." :maxlength="100" show-word-limit></ivue-input>
    <h4>文本域</h4>
    <ivue-input
        v-model="value"
        placeholder="Enter something..."
        type="textarea"
        :maxlength="100"
        show-word-limit
    ></ivue-input>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
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

<script setup>
import { ref } from 'vue';

const value = ref('');
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

<script setup>
import { ref } from 'vue';

const value1 = ref('');
const value2 = ref('');
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

<script setup>
import { ref } from 'vue';

const value = ref('');
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

<script setup>
import { ref } from 'vue';

const value = ref('');
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

<script setup>
import { ref } from 'vue';

const value = ref('');
</script>
`;

code.compound = `<template>
    <ivue-input class="input" v-model="value" placeholder="Enter something...">
        <template #prepend>
            <span>http://</span>
        </template>
        <template #append>
            <span>.com</span>
        </template>
    </ivue-input>
    <ivue-input class="input" v-model="value" placeholder="Enter something...">
        <template #prepend>
            <ivue-select v-model="select1" style="width: 80px">
                <ivue-option value="http">http://</ivue-option>
                <ivue-option value="https">https://</ivue-option>
            </ivue-select>
        </template>
        <template #append>
            <ivue-select v-model="select2" style="width: 70px">
                <ivue-option value="com">.com</ivue-option>
                <ivue-option value="org">.org</ivue-option>
                <ivue-option value="io">.io</ivue-option>
            </ivue-select>
        </template>
    </ivue-input>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
const select1 = ref('http');
const select2 = ref('com');
</script>

<style>
.input {
    margin-bottom: 10px;
}
</style>
`;

code.emit = `<template>
    <div class="button-wrapper">
        <ivue-button class="button" @click="handleFocus('start')">Focus at first</ivue-button>
        <ivue-button class="button" @click="handleFocus('end')">Focus at last</ivue-button>
        <ivue-button class="button" @click="handleFocus('all')">Focus to select all</ivue-button>
        <ivue-button class="button" @click="handleFocus('preventScroll')">Focus prevent scroll</ivue-button>
    </div>
    <div>
        <ivue-input v-model="value" placeholder="Enter something..." style="width: 300px" ref="input"></ivue-input>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('View UI’s birthday is July 28');
const input = ref();

const handleFocus = (type) => {
    if (type === 'preventScroll') {
        input.value.focus({
            preventScroll: true,
        });
    } else {
        input.value.focus({
            cursor: type,
        });
    }
};
</script>

<style>
.button-wrapper {
    margin-bottom: 10px;
}

.button {
    margin-right: 10px;
}
</style>
`;

export default code;
