<template>
    <ivue-form :model="formData" :label-width="120" ref="formRef">
        <template v-for="(item, index) in formData.items">
            <ivue-form-item
                :label="`Item ${item.index}`"
                :prop="`items.${index}.value`"
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
