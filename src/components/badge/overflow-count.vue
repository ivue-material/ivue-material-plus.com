<template>
    <ivue-badge class="badge-wrapper" :count="100" color="#0DDECE">
        <div class="badge"></div>
    </ivue-badge>
    <ivue-badge class="badge-wrapper" :count="1000" overflowCount="999">
        <div class="badge"></div>
    </ivue-badge>
</template>

<script setup>
</script>

<style>
.badge {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    background: #f3f3f3;
    border-radius: 6px;
}

.badge-icon {
    color: #ffbd3c;
    background: #fff;
    box-shadow: 0 0 3px #cccccc;
    border-radius: 100%;
    width: 25px;
    height: 25px;
}

.badge-wrapper {
    margin-right: 20px;
}
</style>
