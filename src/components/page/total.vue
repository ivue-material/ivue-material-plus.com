<template>
    <h4>默认</h4>
    <ivue-page :total="100" show-total></ivue-page>
    <h4>自定义 total 内容</h4>
    <ivue-page :total="100" show-total>
        <template #total>一共有100条</template>
    </ivue-page>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>
