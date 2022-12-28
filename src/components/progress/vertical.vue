<template>
    <ivue-progress class="progress-demo" :percent="50" vertical></ivue-progress>
    <ivue-progress class="progress-demo" :percent="45" status="active" vertical></ivue-progress>
    <ivue-progress class="progress-demo" :percent="25" status="wrong" vertical></ivue-progress>
    <ivue-progress class="progress-demo" :percent="25" status="warning" vertical></ivue-progress>
    <ivue-progress class="progress-demo" :percent="100" vertical></ivue-progress>
    <ivue-progress class="progress-demo" :percent="25" hide-info vertical></ivue-progress>
</template>

<style scoped>
.progress-demo {
    margin-right: 20px;
}
</style>
