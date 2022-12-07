<template>
    <h4>百分比内显</h4>
    <div>
        <ivue-progress :percent="25" :stroke-width="20" text-inside></ivue-progress>
        <ivue-progress :percent="45" :stroke-width="20" status="active" text-inside></ivue-progress>
        <ivue-progress :percent="65" :stroke-width="20" status="wrong" text-inside></ivue-progress>
        <ivue-progress :percent="25" :stroke-width="20" status="warning" text-inside></ivue-progress>
        <ivue-progress :percent="100" :stroke-width="20" text-inside></ivue-progress>
    </div>
</template>
