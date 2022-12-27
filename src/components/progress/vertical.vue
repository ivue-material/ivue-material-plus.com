<template>
    <ivue-progress class="progress-dome" :percent="50" vertical></ivue-progress>
    <ivue-progress class="progress-dome" :percent="45" status="active" vertical></ivue-progress>
    <ivue-progress class="progress-dome" :percent="25" status="wrong" vertical></ivue-progress>
    <ivue-progress class="progress-dome" :percent="25" status="warning" vertical></ivue-progress>
    <ivue-progress class="progress-dome" :percent="100" vertical></ivue-progress>
    <ivue-progress class="progress-dome" :percent="25" hide-info vertical></ivue-progress>
</template>

<style scoped>
.progress-dome {
    margin-right: 20px;
}
</style>
