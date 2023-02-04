<template>
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
