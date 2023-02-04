<template>
  <ivue-bottom-nav v-model="value" shift>
    <ivue-bottom-nav-item color="primary" name="home">
      <span>Home</span>
      <ivue-icon>home</ivue-icon>
    </ivue-bottom-nav-item>
    <ivue-bottom-nav-item color="primary" name="settings">
      <span>Settings</span>
      <ivue-icon>settings</ivue-icon>
    </ivue-bottom-nav-item>
  </ivue-bottom-nav>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('home');
</script>
