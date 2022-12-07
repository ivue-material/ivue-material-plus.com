<template>
    <div>
        <ivue-switch loading :model-value="true" class="switch" color="#5B8EFF"></ivue-switch>
        <ivue-switch
            loading
            :model-value="true"
            class="switch"
            emboss
            color="#5B8EFF"
            embossLoadingColor="#fff"
        ></ivue-switch>
    </div>
    <div>
        <ivue-switch loading class="switch" color="#5B8EFF"></ivue-switch>
        <ivue-switch loading class="switch" emboss color="#5B8EFF" emboss-loading-color="#000"></ivue-switch>
    </div>
</template>

<style scoped>
.switch {
    margin: 20px;
}
</style>
