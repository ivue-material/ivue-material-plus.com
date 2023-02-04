<template>
  <ivue-form ref="formRef" :model="formInline" :rules="ruleInline" inline>
    <ivue-form-item prop="user" label="user">
      <ivue-input v-model="formInline.user" />
    </ivue-form-item>

    <ivue-form-item prop="password" label="password">
      <ivue-input v-model="formInline.password" />
    </ivue-form-item>

    <ivue-form-item>
      <ivue-button status="primary" @click="handleSubmit('formInline')"
        >Signin</ivue-button
      >
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
