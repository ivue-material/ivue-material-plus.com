<template>
    <h4>动画进度条</h4>
    <div>
        <ivue-progress :percent="45" indeterminate></ivue-progress>
        <ivue-progress :percent="100" indeterminate :duration="5"></ivue-progress>

        <ivue-progress
            indeterminate
            :duration="10"
            :percent="25"
            :strokeColor="['#5AB2FF', '#5B8EFF']"
            boxShadowColor="#5B8EFF"
        ></ivue-progress>
    </div>
</template>
