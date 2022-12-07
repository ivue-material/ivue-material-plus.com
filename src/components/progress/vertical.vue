<template>
    <ivue-progress :percent="50" vertical></ivue-progress>
    <ivue-progress :percent="45" status="active" vertical></ivue-progress>
    <ivue-progress :percent="25" status="wrong" vertical></ivue-progress>
    <ivue-progress :percent="25" status="warning" vertical></ivue-progress>
    <ivue-progress :percent="100" vertical></ivue-progress>
    <ivue-progress :percent="25" hide-info vertical></ivue-progress>
</template>

<style>
</style>
