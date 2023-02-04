const code = {};

code.default = `<template>
    <ivue-form ref="formRef" :model="formInline" :rules="ruleInline" inline>
        <ivue-form-item prop="user" label="user">
            <ivue-input v-model="formInline.user" />
        </ivue-form-item>

        <ivue-form-item prop="password" label="password">
            <ivue-input v-model="formInline.password" />
        </ivue-form-item>

        <ivue-form-item>
            <ivue-button status="primary" @click="handleSubmit('formInline')">Signin</ivue-button>
        </ivue-form-item>
    </ivue-form>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

const formRef = ref();

const formInline = ref({
    user: '',
    password: '',
});

const ruleInline = {
    user: [
        {
            required: true,
            message: 'Please fill in the user name',
            trigger: 'blur',
        },
    ],
    password: [
        {
            required: true,
            message: 'Please fill in the password.',
            trigger: 'blur',
        },
        {
            type: 'string',
            min: 6,
            message: 'The password length cannot be less than 6 bits',
            trigger: 'blur',
        },
    ],
};

const handleSubmit = () => {
    formRef.value.validate((valid) => {
        if (valid) {
            proxy.$message.success('Success!');
        } else {
            proxy.$message.error('Fail!');
        }
    });
};
</script>
`;

code.formItem = `<template>
    <ivue-form :model="formItem" :label-width="100">
        <ivue-form-item label="Input">
            <ivue-input v-model="formItem.input"></ivue-input>
        </ivue-form-item>

        <ivue-form-item label="Textarea">
            <ivue-input v-model="formItem.textarea" type="textarea"></ivue-input>
        </ivue-form-item>

        <ivue-form-item label="Input Number">
            <ivue-input-number v-model="formItem.inputNumber" :max="10" :min="1" :precision="2"></ivue-input-number>
        </ivue-form-item>

        <ivue-form-item label="Select">
            <ivue-select v-model="formItem.select">
                <ivue-option value="多啦a梦">多啦a梦</ivue-option>
                <ivue-option value="野比大雄">野比大雄</ivue-option>
                <ivue-option value="源静香">源静香</ivue-option>
            </ivue-select>
        </ivue-form-item>

        <ivue-form-item label="Checkbox">
            <ivue-checkbox-group v-model="formItem.checkbox">
                <ivue-checkbox label="多啦a梦"></ivue-checkbox>
                <ivue-checkbox label="野比大雄"></ivue-checkbox>
                <ivue-checkbox label="源静香"></ivue-checkbox>
            </ivue-checkbox-group>
        </ivue-form-item>

        <ivue-form-item label="radio">
            <ivue-radio-group v-model="formItem.radio">
                <ivue-radio label="多啦a梦"></ivue-radio>
                <ivue-radio label="野比大雄"></ivue-radio>
                <ivue-radio label="源静香"></ivue-radio>
            </ivue-radio-group>
        </ivue-form-item>

        <ivue-form-item label="Switch">
            <ivue-switch v-model="formItem.switch"></ivue-switch>
        </ivue-form-item>
    </ivue-form>
</template>

<script setup>
import { ref } from 'vue';

const formItem = ref({
    input: '',
    inputNumber: 0,
    textarea: '',
    select: '',
    checkbox: [],
    radio: '',
    switch: '',
});
</script>
`;

code.labelPosition = `<template>
    <h4>left 左对齐</h4>
    <ivue-form :model="formItem" :label-width="100" label-position="left">
        <ivue-form-item label="Input">
            <ivue-input v-model="formItem.input"></ivue-input>
        </ivue-form-item>

        <ivue-form-item label="Textarea">
            <ivue-input v-model="formItem.textarea" type="textarea"></ivue-input>
        </ivue-form-item>
    </ivue-form>
    <h4>right 右对齐</h4>
    <ivue-form :model="formItem" :label-width="100" label-position="right">
        <ivue-form-item label="Input">
            <ivue-input v-model="formItem.input"></ivue-input>
        </ivue-form-item>

        <ivue-form-item label="Textarea">
            <ivue-input v-model="formItem.textarea" type="textarea"></ivue-input>
        </ivue-form-item>
    </ivue-form>
    <h4>top 上对齐</h4>
    <ivue-form :model="formItem" :label-width="100" label-position="top">
        <ivue-form-item label="Input">
            <ivue-input v-model="formItem.input"></ivue-input>
        </ivue-form-item>

        <ivue-form-item label="Textarea">
            <ivue-input v-model="formItem.textarea" type="textarea"></ivue-input>
        </ivue-form-item>
    </ivue-form>
</template>

<script setup>
import { ref } from 'vue';

const formItem = ref({
    input: '',
    textarea: '',
});
</script>
`;

code.rules = `<template>
    <ivue-form :model="formItem" :rules="rulesList" :label-width="120" ref="formRef">
        <ivue-form-item label="Input" prop="input">
            <ivue-input v-model="formItem.input"></ivue-input>
        </ivue-form-item>

        <ivue-form-item label="Textarea" prop="textarea">
            <ivue-input v-model="formItem.textarea" type="textarea"></ivue-input>
        </ivue-form-item>

        <ivue-form-item label="Auto Complete" prop="autoComplete">
            <ivue-auto-complete
                v-model="formItem.autoComplete"
                :list="autoCompleteList"
                @on-search="handleSearch"
            ></ivue-auto-complete>
        </ivue-form-item>

        <ivue-form-item label="Select" prop="select">
            <ivue-select v-model="formItem.select">
                <ivue-option value="多啦a梦">多啦a梦</ivue-option>
                <ivue-option value="野比大雄">野比大雄</ivue-option>
                <ivue-option value="源静香">源静香</ivue-option>
            </ivue-select>
        </ivue-form-item>

        <ivue-form-item label="Checkbox" prop="checkbox">
            <ivue-checkbox-group v-model="formItem.checkbox">
                <ivue-checkbox label="多啦a梦"></ivue-checkbox>
                <ivue-checkbox label="野比大雄"></ivue-checkbox>
                <ivue-checkbox label="源静香"></ivue-checkbox>
            </ivue-checkbox-group>
        </ivue-form-item>

        <ivue-form-item label="radio" prop="radio">
            <ivue-radio-group v-model="formItem.radio">
                <ivue-radio label="多啦a梦"></ivue-radio>
                <ivue-radio label="野比大雄"></ivue-radio>
                <ivue-radio label="源静香"></ivue-radio>
            </ivue-radio-group>
        </ivue-form-item>

        <ivue-form-item>
            <ivue-button class="form-demo-button" status="primary" @click="handleSubmit">Submit</ivue-button>
            <ivue-button class="form-demo-button" @click="handleReset">Reset</ivue-button>
        </ivue-form-item>
    </ivue-form>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

const formRef = ref();

const autoCompleteList = ref();

const formItem = ref({
    input: '',
    textarea: '',
    select: '',
    checkbox: [],
    radio: '',
    autoComplete: '',
});

const rulesList = {
    input: [
        {
            required: true,
            message: '请输入input内容',
            trigger: 'change',
        },
        {
            min: 3,
            max: 5,
            message: '输入范围 3 到 5',
            trigger: 'change',
        },
    ],
    textarea: [
        {
            required: true,
            message: '请输入textarea内容',
            trigger: 'blur',
        },
    ],
    select: [
        {
            required: true,
            message: '请选择下拉框',
            trigger: 'change',
        },
    ],
    checkbox: [
        {
            type: 'array',
            required: true,
            message: '请选择多选',
            trigger: 'change',
        },
    ],
    radio: [
        {
            required: true,
            message: '请选择单选',
            trigger: 'change',
        },
    ],
    autoComplete: [
        {
            required: true,
            message: '请选择单选',
            trigger: 'change',
        },
    ],
};

const handleSubmit = () => {
    formRef.value.validate((valid) => {
        if (valid) {
            proxy.$message.success('Success!');
        } else {
            proxy.$message.error('Fail!');
        }
    });
};

const handleReset = () => {
    formRef.value.resetFields();
};

const handleSearch = (value) => {
    autoCompleteList.value = !value
        ? []
        : [value, value + value, value + value + value];
};
</script>

<style scoped>
.form-demo-button {
    margin-right: 20px;
}
</style>
`;

code.showSuccessStatus = `<template>
    <ivue-form
        ref="formRef"
        :model="formData"
        :rules="rulesList"
        label-width="120px"
        show-success-status
    >
        <ivue-form-item prop="name" label="name">
            <ivue-input v-model="formData.name" />
        </ivue-form-item>

        <ivue-form-item prop="password" label="password">
            <ivue-input v-model="formData.password" />
        </ivue-form-item>

        <ivue-form-item prop="againPassword" label="again password">
            <ivue-input v-model="formData.againPassword" />
        </ivue-form-item>

        <ivue-form-item prop="code" label="code">
            <ivue-input v-model="formData.code" />
        </ivue-form-item>

        <ivue-form-item>
            <ivue-button status="primary" @click="handleSubmit">Submit</ivue-button>
            <ivue-button @click="handleReset">Reset</ivue-button>
        </ivue-form-item>
    </ivue-form>
</template>

<script setup>
import { reactive, ref, getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

const formRef = ref();

const validateName = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请输入用户名'));
    } else {
        callback();
    }
};

const validatePassword = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请输入密码'));
    } else {
        if (formData.password !== '') {
            // formRef.value.validateField('againPassword', () => null);
        }

        callback();
    }
};

const validateAgainPassword = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请再次输入密码'));
    } else if (value !== formData.password) {
        callback(new Error('再次输入密码错误'));
    } else {
        callback();
    }
};

const checkCode = (rule, value, callback) => {
    if (!value) {
        return callback(new Error('请输入验证码'));
    }

    if (value.length < 6) {
        callback(new Error('请输入6位验证码'));
    } else {
        callback();
    }
};

const formData = reactive({
    name: '',
    password: '',
    code: '',
    againPassword: '',
});

const rulesList = reactive({
    name: [{ validator: validateName, trigger: 'blur' }],
    password: [{ validator: validatePassword, trigger: 'blur' }],
    againPassword: [{ validator: validateAgainPassword, trigger: 'blur' }],
    code: [{ validator: checkCode, trigger: 'blur' }],
});

const handleSubmit = () => {
    formRef.value.validate((valid) => {
        if (valid) {
            proxy.$message.success('Success!');
        } else {
            proxy.$message.error('Fail!');
        }
    });
};

const handleReset = () => {
    formRef.value.resetFields();
};
</script>

<style scoped>
.form-demo-button {
    margin-right: 20px;
}
</style>
`;

code.dynamic = `<template>
    <ivue-form :model="formData" :label-width="120" ref="formRef">
        <template v-for="(item, index) in formData.items">
            <ivue-form-item
                :label="\`Item \${item.index}\`"
                :prop="\`items.\${index}.value\`"
                :rules="{
                  required: true,
                  message: 'Item ' + item.index +' can not be empty', trigger: 'blur'
                }"
                :key="index"
                v-if="item.status"
            >
                <div class="form-demo-item">
                    <ivue-input v-model="item.value"></ivue-input>

                    <ivue-button class="form-demo-item-button" @click="handleRemove(index)">Delete</ivue-button>
                </div>
            </ivue-form-item>
        </template>

        <ivue-form-item>
            <ivue-button class="form-demo-button" outline @click="handleAdd">+ Add Item</ivue-button>
        </ivue-form-item>

        <ivue-form-item>
            <ivue-button class="form-demo-button" status="primary" @click="handleSubmit">Submit</ivue-button>
            <ivue-button class="form-demo-button" @click="handleReset">Reset</ivue-button>
        </ivue-form-item>
    </ivue-form>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

const formRef = ref();

const index = ref(1);

const formData = ref({
    items: [
        {
            value: '',
            index: 1,
            status: 1,
        },
    ],
});

const handleRemove = (index) => {
    formData.value.items[index].status = 0;
};

const handleAdd = () => {
    index.value = index.value++;

    formData.value.items.push({
        value: '',
        index: index.value,
        status: 1,
    });
};

const handleSubmit = () => {
    formRef.value.validate((valid) => {
        if (valid) {
            proxy.$message.success('Success!');
        } else {
            proxy.$message.error('Fail!');
        }
    });
};

const handleReset = () => {
    formRef.value.resetFields();
};
</script>

<style scoped>
.form-demo-item {
    display: flex;
    align-items: center;
}

.form-demo-item-button {
    margin-left: 20px;
}

.form-demo-button {
    margin-right: 20px;
}
</style>
`;

export default code;
