<template>
    <h4>默认</h4>
    <ivue-progress :percent="45" indeterminate></ivue-progress>
    <h4>动画进度条速度 duration 5s</h4>
    <ivue-progress :percent="100" indeterminate :duration="5"></ivue-progress>
    <h4>动画进度条速度 duration 10s 进度条渐变</h4>
    <ivue-progress
        indeterminate
        :duration="10"
        :percent="25"
        :strokeColor="['#5AB2FF', '#5B8EFF']"
        boxShadowColor="#5B8EFF"
    ></ivue-progress>
</template>
